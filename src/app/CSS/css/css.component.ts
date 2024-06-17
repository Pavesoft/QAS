import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CSSComponent {

  constructor(private router: Router,private renderer: Renderer2){}

  private getUrlFriendlyString(input: string): string {
    // Replace special characters with dashes and convert to lowercase
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-');
  }

  downloadForm(formName:string){
    // console.log(formName)
    //console.log(research)

    const urlFriendlyName = this.getUrlFriendlyString(formName);
    const url = `/contact-us/${urlFriendlyName}`;

    if (formName) {
      //console.log(research.report)
      this.router.navigate([url], {
        state: {
          contactUsFormName: formName,
        },
      });
    } else {
      console.error("Selected research not found in the filtered data.");
    }
  }

  ngOnInit(): void {
  this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
  this.renderer.setProperty(document.body, 'scrollTop', 0);
  }

}



