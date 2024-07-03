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
      password: ["", [Validators.required, Validators.minLength(10)]],
    });

    this.signupForm = this.fb.group(
      {
        firstName: ["", Validators.required],
        company: ["", Validators.required],
        lastName: ["", Validators.required],
        mobileNumber: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
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

  onSubmitEnquiryForm() {
    const selectedCountryCode = this.getSelectedCountryCode();
    // Implement form submission logic as needed
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.errorMessage = "Invalid input.Please enter all details";
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
        }
      });
  }

  onLogout() {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("isSubscribed");
    this.isLoggedIn = false;
    localStorage.setItem("isLogin", this.isLoggedIn.toString());
    window.location.href = "/";
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
    if (this.signupForm.invalid) {
      this.errorMessage = "Invalid input.Please enter all details";
      return;
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

    this.http
      .post(`${baseURl}/users/new`, signupData)
      .subscribe((response: any) => {
        this.signupForm.reset();
      });
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
        console.log("Notification marked as read:", response);
        // Handle success here
      },
      (error) => {
        this.fetchNotifications();
        console.error("Error marking notification as read:", error);
        // Handle error here
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
