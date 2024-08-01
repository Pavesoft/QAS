import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as intlTelInput from "intl-tel-input";
import { ApiResponse } from "src/app/Interfaces/api-response";
import { EcommBackendService } from "src/app/Services/ecomm-backend-service.service";

@Component({
  selector: "app-client-partner",
  templateUrl: "./client-partner.component.html",
  styleUrls: ["./client-partner.component.scss"],
})
export class ClientPartnerComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ecommService: EcommBackendService
  ) {}

  ngOnInit(): void {
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
  }
  title = "intlInputNew";

  onSubmit() {
    //console.log(this.form);
    if (this.form.valid) {
      // const formData: FormDto = this.form.value; // Extract form data from the FormGroup

      const id = this.form.value["id"];
      const fName = this.form.value["fName"];
      const lName = this.form.value["lName"];
      const officeEmail = this.form.value["officeEmail"];
      const businessPhone = this.form.value["businessPhone"];
      const jobTitle = this.form.value["jobTitle"];
      const formCategory = "career-form";
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
              this.form.reset();
              alert(response.message);
            } else {
              console.error("Failed to save form data:", response);
            }
          },
          (error: any) => {
            console.error("Error occurred while saving form data:", error);
          }
        );
    }
  }
}
