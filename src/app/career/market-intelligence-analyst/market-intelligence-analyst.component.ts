import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as intlTelInput from "intl-tel-input";
import { ApiResponse } from "src/app/Interfaces/api-response";
import { EcommBackendService } from "src/app/Services/ecomm-backend-service.service";

@Component({
  selector: "app-market-intelligence-analyst",
  templateUrl: "./market-intelligence-analyst.component.html",
  styleUrls: ["./market-intelligence-analyst.component.scss"],
})
export class MarketIntelligenceAnalystComponent implements OnInit {
  form!: FormGroup;
  formName: string = "";
  formSubmitted: boolean = false;
  buttonDisabled: boolean = false; // Track button's disabled state
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadResume() {
    if (this.selectedFile) {
      // You can now send this.selectedFile to your server or perform any desired action
      // console.log('Uploading resume:', this.selectedFile);
    } else {
      console.log("No file selected");
    }
  }

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
      resume: [""],
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
      this.buttonDisabled = true;

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
      const resume = this.form.value["resume"];
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
              this.formSubmitted = true;
              this.buttonDisabled = false; // Re-enable the button
              //   alert(response.message)
            } else {
              console.error("Failed to save form data:", response);
              this.buttonDisabled = false; // Re-enable the button in case of failure
            }
          },
          (error: any) => {
            console.error("Error occurred while saving form data:", error);
            this.buttonDisabled = false; // Re-enable the button in case of failure
          }
        );
    } else {
      alert("Please fill in all required fields before submitting the form.");
    }
  }
}
