import { formatDate } from "@angular/common";
import { Component, OnInit, Renderer2 } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import emailjs from "@emailjs/browser";
import { advisoryform } from "environment.prod";

import * as intlTelInput from "intl-tel-input";
import { ApiResponse } from "src/app/Interfaces/api-response";
import { EcommBackendService } from "src/app/Services/ecomm-backend-service.service";

@Component({
  selector: "app-advisoryservices",
  templateUrl: "./advisoryservices.component.html",
  styleUrls: ["./advisoryservices.component.scss"],
})
export class AdvisoryservicesComponent implements OnInit {
  form!: FormGroup;

  formName: string = "";
  formSubmitted: boolean = false;
  buttonDisabled: boolean = false; // Track button's disabled state

  constructor(
    private fb: FormBuilder,
    private ecommService: EcommBackendService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    window.onbeforeunload = function () {};
    window.onbeforeunload = null;
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
      reportId: [""],
      downloadSampleReport: [""],
    });

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
  }
  title = "intlInputNew";

  async onSubmit1() {
    // emailjs.init(Contactus.emailJsPublicKey);
    emailjs.init(advisoryform.emailJsPublicKey);

    //let response = await emailjs.send(Contactus.serviceId, Contactus.emailTemplateId,
    let response = await emailjs.send(
      advisoryform.serviceId,
      advisoryform.emailTemplateId,
      {
        fName: this.form.controls["fName"].value,
        officeEmail: this.form.controls["officeEmail"].value,
        businessPhone: this.form.controls["businessPhone"].value,
        companyName: this.form.controls["companyName"].value,
        description: this.form.controls["description"].value,
        url: window.location.href,
      }
    );

    // alert(" Thank you! We have received your request. !");

    //window.location.reload();
  }

  onSubmit() {
    //console.log(this.form);
    if (this.form.valid) {
      this.buttonDisabled = true;

      // const formData: FormDto = this.form.value; // Extract form data from the FormGroup

      const id = this.form.value["id"];
      const fName = this.form.value["fName"];
      const lName = this.form.value["lName"];
      const officeEmail = this.form.value["officeEmail"];
      const businessPhone = this.form.value["businessPhone"];
      const jobTitle = this.form.value["jobTitle"];
      const formCategory = "advisory-form";
      const countryId = this.form.value["countryId"];
      const companyName = this.form.value["companyName"];
      const cityName = this.form.value["cityName"];
      const zipCode = this.form.value["zipCode"];
      const description = this.form.value["description"];
      const reportId = "";
      const downloadSampleReport = false;

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
          description,
          reportId,
          downloadSampleReport
        )
        .subscribe(
          (response: ApiResponse) => {
            // Handle the response from the backend here
            if (response.success) {
              //console.log('Form data saved successfully:', response);
              // Reset the form after successful submission
              this.onSubmit1();

              this.form.reset();
              this.formSubmitted = true;
              this.buttonDisabled = false; // Re-enable the button
              this.router.navigate(["/thankyou/advisoryservices"]);

              // alert(response.message)
            } else {
              console.error("Failed to save form data:", response);
              this.buttonDisabled = false; // Re-enable the button in case of error
            }
          },
          (error: any) => {
            console.error("Error occurred while saving form data:", error);
            this.buttonDisabled = false; // Re-enable the button in case of error
          }
        );
    } else {
      alert("Please fill in all required fields before submitting the form.");
    }
  }
}
