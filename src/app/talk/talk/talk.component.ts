import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as intlTelInput from "intl-tel-input";
import { ApiResponse } from "src/app/Interfaces/api-response";
import { EcommBackendService } from "src/app/Services/ecomm-backend-service.service";
import emailjs from "@emailjs/browser";
import { Talktoanalyst, Talktoanalyst1, environment } from "environment.prod";
import { Router } from "@angular/router";

@Component({
  selector: "app-talk",
  templateUrl: "./talk.component.html",
  styleUrls: ["./talk.component.scss"],
})
export class TalkComponent implements OnInit {
  form!: FormGroup;
  emailJsKey: string = "";
  loading: boolean = false;

  formName: string = "";
  formSubmitted: boolean = false;
  buttonDisabled: boolean = false; // Track button's disabled state

  constructor(
    private fb: FormBuilder,
    private ecommService: EcommBackendService,
    private router: Router
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

  async onSubmit1() {
    // this.loading=true;

    //emailjs.init(Talktoanalyst.emailJsPublicKey)
    emailjs.init(Talktoanalyst1.emailJsPublicKey);

    //let response = await emailjs.send(Talktoanalyst.serviceId, Talktoanalyst.emailTemplateId,
    let response = await emailjs.send(
      Talktoanalyst1.serviceId,
      Talktoanalyst1.emailTemplateId,
      {
        fName: this.form.controls["fName"].value,
        officeEmail: this.form.controls["officeEmail"].value,
        businessPhone: this.form.controls["businessPhone"].value,
        companyName: this.form.controls["companyName"].value,
        jobTitle: this.form.controls["jobTitle"].value,
        description: this.form.controls["description"].value,
      }
    );

    //alert(" Thank you! We have received your request. !")
    //window.location.reload();

    // this.onSubmit();
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
      const formCategory = "talk-to-analyst";
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
              this.onSubmit1();
              // Reset the form after successful submission
              this.form.reset();
              this.formSubmitted = true;
              this.buttonDisabled = false; // Re-enable the button
              //alert(response.message)
              //this.router.navigate(['/thankyou/talk-to-analyst']);
              this.router.navigate(["/thankyou/talk-to-analyst"]).then(() => {
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 0);
              });
            } else {
              console.error("Failed to save form data:", response);
              this.buttonDisabled = false; // Re-enable the button in case of failure
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
