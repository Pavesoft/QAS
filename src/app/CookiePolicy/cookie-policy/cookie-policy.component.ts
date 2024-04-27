import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.scss']
})
export class CookiePolicyComponent {

  @ViewChild('topElement', { static: true })
  topElement!: ElementRef;
  ElementRef:any;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Scroll to the top of the page when the component initializes
    this.scrollToTop();
  }

  scrollToTop() {
    // Use Renderer2 to set the scrollTop property of the top element to 0
    this.renderer.setProperty(this.topElement.nativeElement, 'scrollTop', 0);
  }

}
