import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as intlTelInput from "intl-tel-input";
import { EcommBackendService } from "../Services/ecomm-backend-service.service";
import { ApiResponse } from "../Interfaces/api-response";

import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { formatDate } from "@angular/common";
import { Title } from "@angular/platform-browser";
import emailjs from "@emailjs/browser";

//import intlTelInput from 'intl-tel-input';

import {
  Talktoanalyst,
  downloadform,
  downloadformreports,
  environment,
} from "environment.prod";

@Component({
  selector: "app-download-form",
  templateUrl: "./download-form.component.html",
  styleUrls: ["./download-form.component.scss"],
})
export class DownloadFormComponent implements OnInit {
  title: string = "intlInputNew";

  form!: FormGroup;
  emailJsKey: string = "";
  loading: boolean = false;

  formName: string = "";
  formSubmitted: boolean = false;
  buttonDisabled: boolean = false; // Track button's disabled state

  result: any;
  reportDesc: any;
  reportName: any;
  blogName: any;
  reportId: any;
  isReportState: boolean = false;
  isBlogState: boolean = false;
  isPressState: boolean = false;

  blogUrl: any;
  elementRef: any;
  dynamicURL: any;
  businessPhone: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private ecommService: EcommBackendService,
    private titleService: Title,
    private router: Router
  ) {}
  ngOnInit(): void {
    // const researchId = params['id'];
    setTimeout(() => {
      const inputElement = document.querySelector("#businessPhone");
      if (inputElement) {
        intlTelInput(inputElement, {
          initialCountry: "us",
          separateDialCode: true,
          utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.1.8/js/utils.min.js",
        });
      }
    }, 100);
    this.form = this.fb.group({
      fName: [""],
      lName: [""],
      officeEmail: [""],
      businessPhone: ["", Validators.required],
      jobTitle: [""],
      categoryId: [""],
      countryId: [""],
      companyName: [""],
      cityName: [""],
      zipCode: [""],
      description: [""],
    });

    if (
      !history.state.researchData ||
      !history.state.blogData ||
      !history.state.pressReleseData
    ) {
      // console.log(window.location.href);

      let id = window.location.href;

      const matches = id.match(/-(\d+)$/);
      // console.log(matches);
      if (matches && matches.length > 1) {
        const reportId = matches[1];
        // console.log(reportId);
        if (id.includes("market-research")) {
          this.getResearchById(parseInt(reportId));
        }

        if (id.includes("press-release")) {
          this.getBlogPressById(parseInt(reportId));
        }

        if (id.includes("blogs")) {
          this.getBlogPressById(parseInt(reportId));
        }
      } else {
        console.error("Invalid reportId");
      }
    }

    if (history.state.researchData) {
      // alert("came from research")
      this.isReportState = true;
      this.isBlogState = false;
      this.isPressState = false;
      this.result = history.state.researchData;

      //console.log(this.result);

      this.reportName = this.result.report;
      this.reportDesc = this.result.description;
      this.reportId = this.result.id;
    }

    if (history.state.blogData) {
      // alert("came from blog")
      this.isReportState = false;
      this.isBlogState = true;
      this.isPressState = false;
      this.result = history.state.blogData;
      this.blogName = this.result.blogTitle;
      this.reportName = this.result.blogTitle;
      this.reportDesc = this.result.postContent;
      this.reportId = this.result.id;
    }

    if (history.state.pressReleseData) {
      // alert("came from press relese")
      this.isReportState = false;
      this.isBlogState = false;
      this.isPressState = true;
      this.result = history.state.pressReleseData;
      //console.log(this.result);
      this.blogName = this.result.blogTitle;
      this.reportName = this.result.blogTitle;
      this.reportDesc = this.result.postContent;
      this.reportId = this.result.id;
      this.result.report = this.result.blogTitle;
    }
  }

  async onSubmit1() {
    // this.loading=true;

    // emailjs.init(downloadform.emailJsPublicKey)
    emailjs.init(downloadformreports.emailJsPublicKey);

    //let response = await emailjs.send(downloadform.serviceId, downloadform.emailTemplateId,
    let response = await emailjs.send(
      downloadformreports.serviceId,
      downloadformreports.emailTemplateId,
      {
        fName: this.form.controls["fName"].value,
        officeEmail: this.form.controls["officeEmail"].value,
        businessPhone: this.form.controls["businessPhone"].value,
        companyName: this.form.controls["companyName"].value,
        jobTitle: this.form.controls["jobTitle"].value,
        description: this.form.controls["description"].value,
        url: window.location.href,
      }
    );

    // console.log("EmailJS response:", response);

    //alert("Thank you! We have received your request. !")
    //window.location.reload();
    // this.onSubmit();
  }

  getUrlFriendlyString(input: string): string {
    // Replace special characters with dashes and convert to lowercase
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-");
  }

  getFormattedDescription(description: any): string {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = description;
    return tempElement.innerText.trim();
  }

  onSubmit() {
    // console.log(this.form);
    if (this.form.valid) {
      this.dynamicURL = this.result.report;
      if (this.dynamicURL == undefined) {
        this.dynamicURL = this.result.blogTitle;
      }
      const urlFriendlyName = this.getUrlFriendlyString(this.dynamicURL);
      const url = `${urlFriendlyName}-${this.result.id}`;
      // console.log(url);

      // console.log('URL to be sent:', url);

      // const formData: FormDto = this.form.value; // Extract form data from the FormGroup

      const id = this.form.value["id"];
      const fName = this.form.value["fName"];
      const lName = this.form.value["lName"];
      const officeEmail = this.form.value["officeEmail"];
      const businessPhone = this.form.value["businessPhone"];
      const jobTitle = this.form.value["jobTitle"];
      const formCategory = url;
      // console.log(url);
      const countryId = this.form.value["countryId"];
      const companyName = this.form.value["companyName"];
      const cityName = this.form.value["cityName"];
      const zipCode = this.form.value["zipCode"];
      const description = this.form.value["description"];
      url: window.location.href;
      // const formCategory = "download-form" ;

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
        .subscribe(
          (response: ApiResponse) => {
            // Handle the response from the backend here

            if (response.success) {
              // console.log('Form data saved successfully:', response);
              // Reset the form after successful submission
              this.onSubmit1();
              this.form.reset();
              this.formSubmitted = true;
              this.buttonDisabled = false; // Re-enable the button
              // alert(response.message)

              let reportType1: string = "";

              if (this.isReportState) {
                reportType1 = "market-research";
              } else if (this.isBlogState) {
                reportType1 = "blog";
              } else if (this.isPressState) {
                reportType1 = "press-release";
              }

              //const reportType: string = this.getReportType();

              // Construct the URL for navigation
              const urlFriendlyName = this.getUrlFriendlyString(
                this.dynamicURL || this.result.blogTitle
              );
              const encodedUrlFriendlyName =
                encodeURIComponent(urlFriendlyName); // Ensure URL is properly encoded

              //const url = `${reportType1}/${urlFriendlyName}-${this.result.id}`;
              const url = `${reportType1}/${encodedUrlFriendlyName}-${this.result.id}`;

              // Navigate to the 'thank you' route with report type included in the URL
              const navigationExtras: NavigationExtras = {
                queryParams: { type: reportType1 },
              };

              //this.router.navigate(['/thankyou', url], navigationExtras);
              //this.router.navigate(['/thankyou'], { queryParams: { url } });
              this.router.navigate([`/thankyou/${url}`]);
              window.scrollTo(0, window.innerHeight / 2);

              /* working logic code */
              // const urlFriendlyName = this.getUrlFriendlyString(this.dynamicURL);
              // const url = `${urlFriendlyName}-${this.result.id}`;
              // console.log(url);

              //      this.router.navigate(['/thankyou',url]);
              //      console.log(this.router.navigate);
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
  getReportType(): string {
    throw new Error("Method not implemented.");
  }

  getResearchById(id: number) {
    //console.log(id)
    this.ecommService.getResearchMasterDtoById(id).subscribe(
      (response: any) => {
        // Success: handle the response
        // console.log(response);
        this.result = response;
        // console.log(this.result);
        this.reportName = this.result.report;
        this.reportDesc = this.result.description;
        this.titleService.setTitle(this.result.report);
        this.reportId = this.result.id;

        this.isReportState = true;
        this.isBlogState = false;
        this.isPressState = false;
      },
      (error: any) => {
        // Error: handle the error
        console.error("Error fetching research:", error);
        // this.router.navigate(['not-found']);
      }
    );
  }

  getBlogPressById(id: number): void {
    this.ecommService.getPressReleaseById(id).subscribe(
      (response: ApiResponse) => {
        // console.log(response);
        if (response.success) {
          this.result = response.singlePressRelease;
          // console.log(response.message);
          let msg: string = response.message;
          if (msg.includes("Press")) {
            this.isReportState = false;
            this.isBlogState = false;
            this.isPressState = true;

            this.reportName = this.result.blogTitle;
            this.reportDesc = this.result.postContent;
            this.reportId = this.result.id;
          } else {
            this.isReportState = false;
            this.isBlogState = true;
            this.isPressState = false;

            this.reportName = this.result.blogTitle;
            this.reportDesc = this.result.postContent;
            this.reportId = this.result.id;
          }

          this.titleService.setTitle(response.singlePressRelease.blogTitle);
        } else {
          //   this.router.navigate(['not-found'])
        }
      },
      (error) => {
        // console.log(error);
        // Handle any HTTP errors here
        //   this.router.navigate(['not-found'])
      }
    );
  }
}
