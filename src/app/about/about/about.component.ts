import { Component, ElementRef, Renderer2, ViewChild,AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EnquiryformComponent } from 'src/app/enquiryform/enquiryform.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  
 
 

  activeCarouselId: number = 1; // Assuming the default active carousel is 1

  toggleActiveCarousel(id: number) {
    this.activeCarouselId = id;
  }



  @ViewChild('topElement', { static: true })
  topElement!: ElementRef;
  ElementRef:any;
  constructor(private renderer: Renderer2,private dialog: MatDialog) {}

  ngOnInit() {
    // Scroll to the top of the page when the component initializes
    this.scrollToTop();
  }

  ngAfterViewInit(): void {
    // Scroll to the top of the page for mobile devices with a width of 480px or less
    if (window.innerWidth <= 480) {
      this.renderer.setProperty(document.body, 'scrollTop', 0);
    }
  }

  scrollToTop() {
    // Use Renderer2 to set the scrollTop property of the top element to 0
    this.renderer.setProperty(this.topElement.nativeElement, 'scrollTop', 0);
  }

  

  
openPopUp(): void {
  const dialogRef = this.dialog.open(EnquiryformComponent, {
    width: '400px', // Adjust as per your requirement
    // Any other configuration options for your popup
  });

  // If you want to do something after the popup is closed
  dialogRef.afterClosed().subscribe(() => {
    // Do something if needed
  });
 

}
}