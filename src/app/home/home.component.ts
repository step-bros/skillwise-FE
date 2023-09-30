import { Component } from '@angular/core';

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
  courses: Course[] = [
    {
      name: 'The Complete 2023 Web Development...',
      description: 'Become a Full-Stack Web Developer with just ONE course. HTML,...',
      logoUrl: 'assets/logos/udemy.svg',
      thumbnailUrl: 'assets/thumbnails/web-dev.png',
      progress: 20,
      reward: 15
    },
    {
      name: 'The Complete 2023 Web Development...',
      description: 'Become a Full-Stack Web Developer with just ONE course. HTML,...',
      logoUrl: 'assets/logos/udemy.svg',
      thumbnailUrl: 'assets/thumbnails/web-dev.png',
      progress: 40,
      reward: 100
    },
    {
      name: 'The Complete 2023 Web Development...',
      description: 'Become a Full-Stack Web Developer with just ONE course. HTML,...',
      logoUrl: 'assets/logos/udemy.svg',
      thumbnailUrl: 'assets/thumbnails/web-dev.png',
      progress: 60,
      reward: 100
    },
    {
      name: 'The Complete 2023 Web Development...',
      description: 'Become a Full-Stack Web Developer with just ONE course. HTML,...',
      logoUrl: 'assets/logos/udemy.svg',
      thumbnailUrl: 'assets/thumbnails/web-dev.png',
      progress: 80,
      reward: 100
    }
  ];

}
