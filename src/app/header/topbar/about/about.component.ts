import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EnquiryformComponent } from 'src/app/enquiryform/enquiryform.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  dialog: any;

  
  openPopUp1(){
    const dialogRef: MatDialogRef<EnquiryformComponent> = this.dialog.open(EnquiryformComponent, {
      width: '400px',
      data: {}, // Pass any data you want to pre-fill in the form
      disableClose:true
  });


}
}

