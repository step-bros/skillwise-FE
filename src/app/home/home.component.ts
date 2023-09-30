import { Component } from '@angular/core';

type Course = {
  name: string;
  description: string;
  logoUrl: string;
  thumbnailUrl: string;
  progress: number;
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
      progress: 20
    },
    {
      name: 'The Complete 2023 Web Development...',
      description: 'Become a Full-Stack Web Developer with just ONE course. HTML,...',
      logoUrl: 'assets/logos/udemy.svg',
      thumbnailUrl: 'assets/thumbnails/web-dev.png',
      progress: 40
    },
    {
      name: 'The Complete 2023 Web Development...',
      description: 'Become a Full-Stack Web Developer with just ONE course. HTML,...',
      logoUrl: 'assets/logos/udemy.svg',
      thumbnailUrl: 'assets/thumbnails/web-dev.png',
      progress: 60
    },
    {
      name: 'The Complete 2023 Web Development...',
      description: 'Become a Full-Stack Web Developer with just ONE course. HTML,...',
      logoUrl: 'assets/logos/udemy.svg',
      thumbnailUrl: 'assets/thumbnails/web-dev.png',
      progress: 80
    }
  ];

}
