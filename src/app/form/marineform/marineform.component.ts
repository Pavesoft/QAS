import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import emailjs from '@emailjs/browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as intlTelInput from 'intl-tel-input';
import { ApiResponse } from 'src/app/Interfaces/api-response';
import {FormDto} from 'src/app/Interfaces/research-master-dto';

import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { UserDetailsFormComponent } from 'src/app/CommonComponents/user-details-form/user-details-form.component';
import { environment, environmentmarine, environmentmarine1 } from 'environment.prod';

@Component({
  selector: 'app-marineform',
  templateUrl: './marineform.component.html',
  styleUrls: ['./marineform.component.scss']
})


export class MarineformComponent  implements OnInit{

  // workEmail: string = '';
  emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //  fullName: string = '';
    workEmail: string = '';
    //  mobileNumber: string = '';
     emailJsKey : string = '';
  form: any;
  
    constructor(
      public dialogRef: MatDialogRef<MarineformComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    ngOnInit(){
      this.emailJsKey = environment.emailJsPublicKey;
      
    }

    downloadPdf() {
      const pdfUrl = 'assets/Marine.pdf'; // Update the path to your PDF file
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Marine.pdf'; // Set the desired file name for download
      link.target = '_blank'; // Open the PDF in a new tab
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    // async Submitform() {
    //   this.dialogRef.afterClosed().subscribe(async (result:any)=>{
    //     // this.submitForm();
    //     alert("window closed")
    //     console.log(result)
        
    //     emailjs.init(environmentmarine.emailJsPublicKey)

    //     await emailjs.send(environmentmarine.serviceId, environmentmarine.emailTemplateId, {
    //       date: new Date(),
    //         from_name: this.form.value['workEmail'],
    //         to_name: "Chhagan Y",
    //         email: this.form.value['workEmail'],
    //         phone: 'N/A',
    //         companyName: 'N/A',
    //         designation: 'N/A',
    //         message: 'N/A',
    //         formCategory : "marine download",
    //         reply_to: "chhagany@quadrant-solutions.com"
    //     });

    //   alert("mail sent !")
    //   });
    // }

    // submitForm(): void {
    //   if (this.isFormValid()) {
    //     // Close the dialog and pass the form data to the parent component
    //     this.dialogRef.close({
    //     //   fullName: this.fullName,
    //       workEmail: this.workEmail,
    //     //    mobileNumber: this.mobileNumber
    //     });
    //   }
    // }
  
    // isFormValid(): boolean {
    //   // Perform form validation here
    //   // You can add your own validation logic based on your requirements
    // //   this.fullName.trim() !== '' && 
    // //  && this.mobileNumber.trim() !== '';
    //   return this.workEmail.trim() !== '';
      
    // }
  
    // cancel(): void {
    //   this.dialogRef.close();
    // }

    async Submitform() {
      console.log(this.workEmail)
      try {
        const result = await this.dialogRef.afterClosed().toPromise(); // Wait for the dialog to close
    
        if (result) {
          ; // Log the email field value

          if (!this.workEmail || this.workEmail.trim() === '') {
            // If email field is empty, show validation message
            alert('Email is required.');
            return;
          }

          emailjs.init(environmentmarine1.emailJsPublicKey);
    
          const emailParams = {
            date: new Date(),
            from_name: this.workEmail,
            workEmail: this.workEmail,
            reply_to: "chhagany@quadrant-solutions.com"
          };

          //console.log('Email Params:', emailParams); // Debugging statement

    
          //const emailResponse = await emailjs.send(environmentmarine.serviceId, environmentmarine.emailTemplateId, emailParams);
          const emailResponse = await emailjs.send(environmentmarine1.serviceId, environmentmarine1.emailTemplateId, emailParams);

          if (emailResponse.status === 200) {
            
            alert(" Mail Sent!");
            this.downloadPdf() 
            
          } else {
            alert("Failed to send the mail. Please try again.");
          }
        } else {
          alert("Window closed without submitting the form.");
        }
      } catch (error) {
        console.error("An error occurred while sending the mail:", error);
        alert("An error occurred while sending the mail. Please try again.");
      }
    }
  }
  
  