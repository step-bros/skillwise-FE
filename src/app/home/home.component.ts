import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { CourseService } from '../course.service';
import { RewardService } from '../reward.service';

type Course = {
  name: string;
  description: string;
  logoUrl: string;
  thumbnailUrl: string;
  progress: number;
  reward: number;
}

type Reward = {
  name: string;
  description: string;
  thumbNailUrl: string;
  cost: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private profileService: ProfileService, 
    private courseService: CourseService, 
    private rewardService: RewardService) { }

  enrolledCourses: Course[] = [
    {
      name: 'The Complete 2023 Web Development...',
      description: 'Become a Full-Stack Web Developer with just ONE course. HTML,...',
      logoUrl: 'assets/logos/udemy.svg',
      thumbnailUrl: 'assets/thumbnails/web-dev.png',
      progress: 0,
      reward: 15
    },
  ];

  rewards : Reward[] = [];

  courses: Course[] = [];

  ngOnInit(): void {
    this.profileService.getCourses$().subscribe((courses : any) => {
      this.enrolledCourses = courses;

      for (let course of this.enrolledCourses) {
        this.profileService.getProgress$(course.name).subscribe((progress : any) => {
          course.progress = progress;
        });
      }

      this.courseService.getCourses$().subscribe((courses : any) => {
        this.courses = courses.filter((course : any) => {
          return !this.enrolledCourses.some((enrolledCourse : any) => {
            return enrolledCourse.name === course.name;
          }
        )});
      });
    });

    this.rewardService.getRewards$().subscribe((rewards : any) => {
      this.rewards = rewards;
    });
  }

  onEnroll(course: Course){
    this.profileService.enroll$(course.name).subscribe((enrolled : any) => {
      course.progress = 0;
      this.enrolledCourses.push(course);
      this.courses = this.courses.filter((c : any) => c.name !== course.name);
    });
  }

  onClaim(reward: Reward){
    this.profileService.claimReward$(reward.name).subscribe((claimed : any) => {
      this.profileService.getProfile$().subscribe((profile : any) => {
        this.rewards = this.rewards.filter((r : any) => r.name !== reward.name);
      });
    });
  }
}
