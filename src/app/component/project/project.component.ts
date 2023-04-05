import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  projects: Project[] = [
    {
      name: 'Weather Forecast',
      description: `Weather Forecast is an angular application where user can see
    current weather and weather forecast for next 5 days`,
      demoLink: 'https://weather-aqi.vercel.app',
      githubLink: 'https://github.com/ramkumarm15/Weather-angular',
      imgLink: 'weather_forecast.jpeg',
      techStacks: ['Angular', 'Bootstrap'],
      otherLink: '',
    },
    {
      name: 'Online Shopping',
      description: `Online shopping is an angular application which gets data from asp.net web api.
       In the application user can view products and add products to cart`,
      demoLink: '',
      githubLink: 'https://github.com/ramkumarm15/OnlineShoppingAngular',
      otherLink: 'https://github.com/ramkumarm15/OnlineShopping',
      techStacks: ['Angular', 'ASP,NET', 'Bootstrap', 'SQLServer'],
      imgLink: '',
    },
  ];

  imgTranslateY_UP(e: Event) {
    let target = e.target as HTMLImageElement;

    console.log(e);
    console.log(target);
    target.style.transform = 'translateY(-20%)';
    target.style.transition = '3s ease-in-out';
  }
  imgTranslateY_Down(e: Event) {
    let target = e.target as HTMLImageElement;

    console.log(e);
    console.log(target);
    target.style.transform = 'translateY(0%)';
    target.style.transition = '3s ease-in-out';
  }
}

interface Project {
  name: string;
  description: string;
  demoLink: string;
  githubLink: string;
  imgLink: string;
  techStacks: string[];
  otherLink: string;
}
