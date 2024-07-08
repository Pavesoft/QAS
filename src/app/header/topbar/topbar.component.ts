import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { CartService } from "src/app/Services/cart.service";
import { MatDialog } from "@angular/material/dialog";

import * as intlTelInput from "intl-tel-input";
import { of } from "rxjs";

import * as _ from "lodash";
import { TopbarService } from "src/app/Services/topbar.service";

import { baseURl } from "const";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent implements OnInit {
  loginForm: FormGroup;
  enquiryForm: FormGroup;
  signupForm: FormGroup;
  isSignup = false;
  isLogin = false;
  showDropdownNotificationMenu: boolean = false;
  showDropProfileDownMenu: boolean = false;
  showAdditionalInputs: boolean = false;
  isLoggedIn = false;
  totalCartItems = 0;
  errorMessage = "";
  errorMessageSignup = "";
  successMessageSignup = "";
  successMessageEnquiry = "";
  firstName: string = "";
  showPassword = false;
  showConfirmPassword = false;
  showAdditionalInfo: boolean = false;
  normalImage: string = "../../../assets/list_notification.svg";
  hoverImage: string = "../../../assets/list_notification.svg";
  normalCross: string = "../../../assets/cross_button.svg";
  hoverCross: string = "../../../assets/cross_button.svg";
  currentImage: string = this.normalImage;
  currentCrossImage: string = this.normalCross;
  iti: any;
  itiSignup: any;
  notificationData: any[] = [];
  oldUrlData: any;
  minDateTime: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private cartService: CartService,
    public dialog: MatDialog,
    private topbarService: TopbarService // Service for managing notifications // Service for general API calls
  ) {
    this.enquiryForm = this.fb.group({
      name: ["", Validators.required],
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ],
      ],
      contact: ["", Validators.required],
      companyname: ["", Validators.required],
      message: ["", Validators.required],
      queries: ["Queries...", Validators.required],
      provideAdditionalInfo: [false],
      date: [""],
    });

    this.loginForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ],
      ],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });

    this.signupForm = this.fb.group(
      {
        firstName: ["", Validators.required],
        company: ["", Validators.required],
        lastName: ["", Validators.required],
        mobileNumber: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", Validators.required, Validators.minLength(8)],
        confirmPassword: ["", Validators.required, Validators.minLength(8)],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  ngOnInit() {
    const enquiryFormPhoneNumber = document.querySelector("#businessPhone");
    const signupPhoneNumber = document.querySelector("#businessPhone1");
    if (enquiryFormPhoneNumber) {
      this.iti = intlTelInput(enquiryFormPhoneNumber, {
        initialCountry: "us",
        separateDialCode: true,
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.1.8/js/utils.min.js",
      });
    }
    if (signupPhoneNumber) {
      this.itiSignup = intlTelInput(signupPhoneNumber, {
        initialCountry: "us",
        separateDialCode: true,
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.1.8/js/utils.min.js",
      });
    }

    this.checkLoginStatus();
    this.updateCartItems();
    this.firstName = localStorage.getItem("fname") || "";
    this.setMinDateTime();
  }

  checkLoginStatus() {
    const token = localStorage.getItem("jwtToken");
    this.isLoggedIn = !!token;
    localStorage.setItem("isLogin", this.isLoggedIn.toString());
  }

  onAdditionalInfoChange(event: any) {
    this.showAdditionalInfo = event.target.checked;
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get("password")?.value === form.get("confirmPassword")?.value
      ? null
      : { passwordMismatch: true };
  }

  toggleDropdownNotificationMenu() {
    this.showDropdownNotificationMenu = !this.showDropdownNotificationMenu;

    if (this.showDropProfileDownMenu === true) {
      this.showDropProfileDownMenu = false;
    }
  }

  toggleDropdownProfileMenu() {
    this.showDropProfileDownMenu = !this.showDropProfileDownMenu;

    if (this.showDropdownNotificationMenu === true) {
      this.showDropdownNotificationMenu = false;
    }
  }

  getSelectedCountryCode() {
    if (this.iti) {
      const countryData = this.iti.getSelectedCountryData();
      return countryData.dialCode;
    }
    return "";
  }

  getSelectedSingUpCountryCode() {
    if (this.itiSignup) {
      const countryData = this.itiSignup.getSelectedCountryData();
      return countryData.iso2;
    }
    return "";
  }

  onSubmitEnquiryForm(): void {
    const selectedCountryCode = this.getSelectedCountryCode();
    const enquiryData = {
      name: this.enquiryForm.get("name")?.value,
      workEmail: this.enquiryForm.get("email")?.value,
      mobileNumber: this.enquiryForm.get("contact")?.value,
      company: this.enquiryForm.get("companyname")?.value,
      phoneCountryCode: selectedCountryCode,
      queries: this.enquiryForm.get("queries")?.value,
      message: this.enquiryForm.get("message")?.value,
      meetDateTime: this.enquiryForm.get("date")?.value,
    };

    // Additional handling if needed before sending to API
    this.topbarService.submitEnquiry(enquiryData).subscribe(
      (response) => {
        this.successMessageEnquiry =
          "Your Form has been submitted successfully.";
        setTimeout(() => {
          this.successMessageEnquiry = "";
        }, 3000);
        // Reset form or show success message
        this.enquiryForm.reset();
      },
      (error) => {
        console.error("Error submitting enquiry:", error);
        // Handle error, show error message, etc.
      }
    );
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.errorMessage = "Invalid input.Please enter all details";
      setTimeout(() => {
        this.errorMessage = "";
      }, 3000);
      return;
    }

    const loginData = {
      username: this.loginForm.get("email")?.value,
      password: this.loginForm.get("password")?.value,
    };

    this.http
      .post(`${baseURl}/users/login`, loginData)
      .pipe(
        catchError((error) => {
          console.error("Login failed:", error);
          this.errorMessage =
            "Login failed. Please check your credentials and try again.";
          this.loginForm.reset();
          setTimeout(() => {
            this.errorMessage = "";
          }, 3000);
          return of(null);
        })
      )
      .subscribe((response: any) => {
        if (response && response.jwtToken) {
          localStorage.setItem("jwtToken", response.jwtToken);
          localStorage.setItem("refreshToken", response.refreshToken);
          localStorage.setItem("fname", response.fname);

          this.isLoggedIn = true;
          this.firstName = response.fname; // Store the first name
          localStorage.setItem("isLogin", this.isLoggedIn.toString());
          window.location.reload();
          this.closeModal("exampleModal1");
          this.errorMessage = "";
        } else {
          this.errorMessage = "Incorrect email or password. Please try again.";
          setTimeout(() => {
            this.errorMessage = "";
          }, 3000);
        }
      });
  }

  onLogout() {
    const bearerToken: any = localStorage.getItem("jwtToken"); // Assuming you store your JWT token here

    this.topbarService.logout(bearerToken).subscribe(
      (response) => {
        // Handle successful logout response

        localStorage.clear(); // Clear all local storage on successful logout
        window.location.href = "/"; // Redirect to home or login page
      },
      (error) => {
        // Handle error if logout fails
        console.error("Logout failed", error);
        // Optionally handle error response here
      }
    );
  }

  getCartItems(): number {
    this.updateCartItems();
    return this.totalCartItems;
  }

  updateCartItems() {
    this.totalCartItems = this.cartService.getTotalCartItems();
  }

  closeModal(modalId: string) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("show");
      document.body.classList.remove("modal-open");
      const backdrop = document.querySelector(".modal-backdrop");
      if (backdrop) {
        backdrop.remove();
      }
    }
  }

  toggleSignup() {
    this.isLogin = false;
    this.isSignup = !this.isSignup;
  }

  toggleLogin() {
    this.isSignup = false;
    this.isLogin = !this.isLogin;
  }

  onSignup() {
    this.errorMessageSignup = "";

    // Check if any form control is empty or null
    for (const controlName in this.signupForm.controls) {
      if (this.signupForm.controls.hasOwnProperty(controlName)) {
        const control = this.signupForm.get(controlName);
        if (!control?.value) {
          this.errorMessageSignup = "Invalid input. Please enter all details";
          return;
        }
      }
    }
    const selectedCountryCode = this.getSelectedSingUpCountryCode();
    const signupData = {
      firstName: this.signupForm.get("firstName")?.value,
      lastName: this.signupForm.get("lastName")?.value,
      company: this.signupForm.get("company")?.value,
      workEmail: this.signupForm.get("email")?.value,
      mobileNumber: this.signupForm.get("mobileNumber")?.value,
      phoneCountryCode: selectedCountryCode,
      password: this.signupForm.get("password")?.value,
      confirmPassword: this.signupForm.get("confirmPassword")?.value,
    };

    this.http.post(`${baseURl}/users/new`, signupData).subscribe(
      (response: any) => {
        this.signupForm.reset();
        this.successMessageSignup = "Your account was created successfully.";
        setTimeout(() => {
          this.successMessageSignup = "";
        }, 3000); // Clear success message after 3 seconds
      },
      (error: any) => {
        this.errorMessageSignup = "A user with this email already exists.";
        this.signupForm.reset();
        setTimeout(() => {
          this.errorMessageSignup = "";
        }, 3000); // Clear error message after 3 seconds
      }
    );
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  navigateTo(link: string): void {
    window.location.href = link;
  }

  onMouseEnter() {
    this.currentImage = this.hoverImage;
    this.currentCrossImage = this.hoverCross;
  }

  onMouseLeave() {
    this.currentImage = this.normalImage;
    this.currentCrossImage = this.normalCross;
  }

  fetchNotifications() {
    this.topbarService.fetchNotifications().subscribe((response: any) => {
      this.notificationData = response;
    });
  }

  // markNotificationAsRead(notificationId: number) {
  //   this.topbarService.markNotificationAsRead(notificationId).subscribe(() => {
  //     this.fetchNotifications();
  //   });
  // }
  markNotificationAsRead(notificationId: number): void {
    this.topbarService.markNotificationAsRead(notificationId).subscribe(
      (response: any) => {
        this.fetchNotifications();
      },
      (error) => {
        console.error("Error marking notification as read:", error);
      }
    );
  }

  markAllNotificationsAsRead() {
    this.topbarService.markAllNotificationsAsRead().subscribe(() => {
      this.fetchNotifications();
    });
  }

  canMarkAllAsRead(): boolean {
    return this.topbarService.canMarkAllAsRead(this.notificationData);
  }

  replaceSpaces(value: string): string {
    const regexPattern = /[^a-zA-Z0-9\s]/g;

    if (value && typeof value === "string") {
      return value
        .replace(regexPattern, " ")
        .replace(/\s+/g, "-")
        .toLowerCase();
    } else {
      return "";
    }
  }

  researchHref(name: string, id: any) {
    let nameChange = this.replaceSpaces(name);
    let href = "/market-research/" + nameChange + "-" + id;
    const objIndex = _.findIndex(
      this.oldUrlData,
      (item: any) => item.URL_ID == id
    );
    if (objIndex !== -1) {
      href = this.oldUrlData[objIndex].To_URL;
    }

    return href;
  }
  getTimeDifference(createdOn: number): string {
    const currentTime = Date.now();
    const timeDifference = currentTime - createdOn;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    }
  }

  setMinDateTime(): void {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    this.minDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
  }
}
