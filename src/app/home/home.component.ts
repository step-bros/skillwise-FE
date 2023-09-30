import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { CourseService } from '../course.service';

type Course = {
  name: string;
  description: string;
  logoUrl: string;
  thumbnailUrl: string;
  progress: number;
  reward: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private profileService: ProfileService, private courseService: CourseService) { }

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

  courses: Course[] = [];

  ngOnInit(): void {
    this.courseService.getCourses$().subscribe((courses : any) => {
      this.courses = courses;
    });

    this.profileService.getCourses$().subscribe((courses : any) => {
      this.enrolledCourses = courses;

      for (let course of this.enrolledCourses) {
        this.profileService.getProgress$(course.name).subscribe((progress : any) => {
          console.log(progress);
          course.progress = progress;
        });
      }
    });
  }

}
