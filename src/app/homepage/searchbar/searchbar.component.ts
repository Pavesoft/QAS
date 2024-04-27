import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { footersearchbar, ftrsearch } from 'environment.prod';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { ApiResponse } from 'src/app/Interfaces/api-response';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  email: string | undefined;

  form!: FormGroup;
  emailJsKey: string = '';
  loading: boolean = false;
  officeEmail: string = '';

  constructor(private fb: FormBuilder, private ecommService: EcommBackendService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
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
    });
  }

  async onSubmit1() {
    if (this.form.controls['officeEmail'].valid) {
      //emailjs.init(footersearchbar.emailJsPublicKey);
      emailjs.init(ftrsearch.emailJsPublicKey);

      //let response = await emailjs.send(footersearchbar.serviceId, footersearchbar.emailTemplateId, 
        let response = await emailjs.send(ftrsearch.serviceId, ftrsearch.emailTemplateId, {

        
        fName: this.form.controls['fName'].value,
        officeEmail: this.form.controls['officeEmail'].value,
        businessPhone: this.form.controls['businessPhone'].value,
        companyName: this.form.controls['companyName'].value,
        jobTitle: this.form.controls['jobTitle'].value,
        description: this.form.controls['description'].value,
      });
      alert('Thank you for subscription !');
      console.log('officeEmail: ' + this.form.controls['officeEmail'].value);
      this.form.reset()
    } else {
      alert('Please enter a valid email address.');
    }
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.form.controls['officeEmail'].valid) { // Check if the email field is valid
        // Extract form data from the FormGroup
        const id = this.form.value['id'];
        const fName = this.form.value['fName'];
        const lName = this.form.value['lName'];
        const officeEmail = this.form.value['officeEmail'];
        const businessPhone = this.form.value['businessPhone'];
        const jobTitle = this.form.value['jobTitle'];
        const formCategory = 'footer-searchbar';
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
              this.onSubmit1();
            //  this.form.reset(); // Reset the form after successful submission
              this.form.get('officeEmail')?.setValue('');

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
  }
}
