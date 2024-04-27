import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiResponse } from 'src/app/Interfaces/api-response';
import emailjs from '@emailjs/browser';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Router, NavigationEnd } from '@angular/router';




@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {

   @ViewChild('topElement', { static: true })
   topElement!: ElementRef;
   ElementRef:any;
  //renderer: any;

  constructor(private renderer: Renderer2) {}

  // ngOnInit() {
  //   // Scroll to the top of the page when the component initializes
  //   this.scrollToTop();
  // }

 
  form!: FormGroup;
  emailJsKey: string = '';
  loading: boolean = false;
  officeEmail: string = '';

 // constructor(private fb: FormBuilder, private ecommService: EcommBackendService) {  }


  ngOnInit(): void {

    this.scrollToTop();

    
    /*this.form = this.fb.group({
      fName: ['', Validators.required],
      lName: [''],
      officeEmail: [
        '',
        [Validators.required, Validators.email] // Ensure it's required and must be a valid email format
      ],
      businessPhone: ['', Validators.required],
      jobTitle: [''],
      categoryId: [''],
      countryId: [''],
      companyName: [''],
      cityName: [''],
      zipCode: [''],
      description: [''],
    });*/
    
  }

  scrollToTop() {
    // Use Renderer2 to set the scrollTop property of the top element to 0
    this.renderer.setProperty(this.topElement.nativeElement, 'scrollTop', 0);
  }

  /*onSubmit() {
    if (this.form.valid) {
      if (this.form.controls['officeEmail'].valid) { // Check if the email field is valid
        // Extract form data from the FormGroup
        const id = this.form.value['id'];
        const fName = this.form.value['fName'];
        const lName = this.form.value['lName'];
        const officeEmail = this.form.value['officeEmail'];
        const businessPhone = this.form.value['businessPhone'];
        const jobTitle = this.form.value['jobTitle'];
        const formCategory = 'career-form';
        const countryId = this.form.value['countryId'];
        const companyName = this.form.value['companyName'];
        const cityName = this.form.value['cityName'];
        const zipCode = this.form.value['zipCode'];
        const description = this.form.value['description'];

        this.ecommService
          .saveFormData(
            id,
            fName,
            lName,
            officeEmail,
            businessPhone,
            jobTitle,
            formCategory,
            countryId,
            companyName,
            cityName,
            zipCode,
            description
          )
          .subscribe((response: ApiResponse) => {
            if (response.success) {
              // this.onSubmit2();
              this.form.reset(); // Reset the form after successful submission
              alert(response.message);
            } else {
              console.error('Failed to save form data:', response);
            }
          },
          (error: any) => {
            console.error('Error occurred while saving form data:', error);
          });
      } else {
        alert('Please enter a valid email address.');
      }
    }
  }*/
}
