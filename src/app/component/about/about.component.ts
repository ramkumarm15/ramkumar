import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  currentWorkingCompany: string = 'Cognizant Technology Solutions Pvt. Ltd';

  about: string = `Currently working in <strong>${this.currentWorkingCompany}</strong> as a <strong>Jr.Software Engineer</strong>. 
  I possess impressive skills in ASP.NET and Angular. 
  I specialized in building applications from scratch to production.`;
}
