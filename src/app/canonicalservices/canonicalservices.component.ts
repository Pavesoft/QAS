import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canonicalservices',
  templateUrl: './canonicalservices.component.html',
  styleUrls: ['./canonicalservices.component.scss']
})


export class CanonicalservicesComponent {

  constructor(private router: Router) {}

  getCanonicalUrl(): string {
    const currentUrl = this.router.url; // Get the current route URL
    const canonicalUrl = `https://quadrant-solutions.com/${currentUrl}`; // Modify as needed
    return canonicalUrl;
  }

 

}
