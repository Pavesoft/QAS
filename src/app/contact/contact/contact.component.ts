
import { formatDate } from '@angular/common';
import { Component, OnInit,Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as intlTelInput from 'intl-tel-input';
import { ApiResponse } from 'src/app/Interfaces/api-response';
import { FormDto } from 'src/app/Interfaces/research-master-dto';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import emailjs from '@emailjs/browser';
import { Contactus, Talktoanalyst, contactallforms } from 'environment.prod';

import { Title,Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form!: FormGroup;
  emailJsKey: string = '';
  loading: boolean = false;
  imagePath: string = '';
  pageTitle: string = '';

  formName: string = '';
  formSubmitted: boolean = false;
  
  buttonDisabled: boolean = false; // Track button's disabled state
  //meta: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private ecommService: EcommBackendService, private meta:Meta,private router: Router,private renderer: Renderer2) {}

  ngOnInit(): void {
    const inputElement = document.querySelector("#businessPhone");
    if (inputElement) {
      intlTelInput(inputElement, {
        initialCountry: "us",
        separateDialCode: true,
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.1.8/js/utils.min.js",
      });
    }

    this.renderer.setProperty(document.documentElement, "scrollTop", 0);
    this.renderer.setProperty(document.body, "scrollTop", 0);

    this.route.queryParams.subscribe((params) => {
      this.formName = history.state.contactUsFormName;
    });
    // console.log("form" + this.formName);

    this.form = this.fb.group({
      fName: ["", Validators.required],
      lName: [""],
      officeEmail: ["", [Validators.required, Validators.email]],
      businessPhone: ["", Validators.required],
      jobTitle: [""],
      categoryId: [""],
      countryId: [""],
      companyName: [""],
      cityName: [""],
      zipCode: [""],
      description: [""],
    });
  }

  async onSubmit1() {
   // emailjs.init(Contactus.emailJsPublicKey);
    emailjs.init(contactallforms.emailJsPublicKey);

    //let response = await emailjs.send(Contactus.serviceId, Contactus.emailTemplateId, 
    let response = await emailjs.send(contactallforms.serviceId, contactallforms.emailTemplateId,{
      fName: this.form.controls['fName'].value,
      officeEmail: this.form.controls['officeEmail'].value,
      businessPhone: this.form.controls['businessPhone'].value,
      companyName: this.form.controls['companyName'].value,
      description: this.form.controls['description'].value,
      url: window.location.href
    });

   // alert(" Thank you! We have received your request. !");
    
    //window.location.reload();
  }

  private getUrlFriendlyString(input: string): string {
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-');
  }

  onSubmit() {
    if (this.form.valid) {
      // Disable the button
      this.buttonDisabled = true;

      const id = this.form.value['id'];
      const fName = this.form.value['fName'];
      const lName = this.form.value['lName'];
      const officeEmail = this.form.value['officeEmail'];
      const businessPhone = this.form.value['businessPhone'];
      const jobTitle = this.form.value['jobTitle'];
      const countryId = this.form.value['countryId'];
      const companyName = this.form.value['companyName'];
      const cityName = this.form.value['cityName'];
      const zipCode = this.form.value['zipCode'];
      const description = this.form.value['description'];
      const formCategory = "contact-us";

      this.ecommService.saveFormData(id, fName, lName, officeEmail, businessPhone, jobTitle, formCategory, countryId, companyName, cityName, zipCode, description).subscribe((response: ApiResponse) => {
        if (response.success) {
          this.onSubmit1();
          this.form.reset();
          this.formSubmitted = true;
          this.buttonDisabled = false; // Re-enable the button
          //alert(response.message);
          
          this.router.navigate(['/thankyou/contact-us']);

        } else {
          console.error('Failed to save form data:', response);
          this.buttonDisabled = false; // Re-enable the button in case of failure
        }
      }, (error: any) => {
        console.error('Error occurred while saving form data:', error);
        this.buttonDisabled = false; // Re-enable the button in case of error
      });
    } else {
      alert('Please fill in all required fields before submitting the form.');
    }
  }

}
