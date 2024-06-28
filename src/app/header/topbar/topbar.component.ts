import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CartService } from "src/app/Services/cart.service"; // Cart service import
import { MatDialog } from "@angular/material/dialog";
import * as intlTelInput from "intl-tel-input";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";
import { baseURl } from "const";
import * as _ from "lodash";

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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private cartService: CartService,
    public dialog: MatDialog
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

    // Initialize the form with validations
    this.loginForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ],
      ],
      password: [
        "",
        [Validators.required, Validators.minLength(10)], // At least 10 characters and required
      ],
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

  passwordMatchValidator(form: FormGroup) {
    return form.get("password")?.value === form.get("confirmPassword")?.value
      ? null
      : { passwordMismatch: true };
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
  }

  checkLoginStatus() {
    const token = localStorage.getItem("jwtToken"); // Check for JWT token in local storage
    this.isLoggedIn = !!token; // If the token exists, set `isLoggedIn` to true
    localStorage.setItem("isLogin", this.isLoggedIn.toString());
  }

  onAdditionalInfoChange(event: any) {
    this.showAdditionalInfo = event.target.checked;
  }

  checkPasswords(group: FormGroup) {
    const password = group.get("password")?.value;
    const confirmPassword = group.get("confirmPassword")?.value;

    return password === confirmPassword ? null : { notSame: true };
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
  }

  onLogin() {
    const loginData = {
      username: this.loginForm.get("email")?.value,
      password: this.loginForm.get("password")?.value,
    };

    this.http
      .post(`${baseURl}/users/login`, loginData)
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
    this.isLoggedIn = false; // Update the login status
    localStorage.setItem("isLogin", this.isLoggedIn.toString());
    window.location.href = "/"; // Navigate to the home page
  }

  getCartItems(): number {
    this.updateCartItems();
    return this.totalCartItems;
  }

  updateCartItems() {
    this.totalCartItems = this.cartService.getTotalCartItems(); // Update the cart items
  }

  closeModal(modalId: string) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("show"); // Hide the modal
      document.body.classList.remove("modal-open"); // Remove 'modal-open' class from body
      const backdrop = document.querySelector(".modal-backdrop");
      if (backdrop) {
        backdrop.remove(); // Remove the backdrop
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
      this.errorMessage =
        "Invalid input. Please correct the errors and try again.";
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
    const token = localStorage.getItem("jwtToken");

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });

      this.http
        .get(`${baseURl}/notification/get-user-notification`, { headers })

        .subscribe((response: any) => {
          this.notificationData = response;
          // console.log(this.notificationData);
        });
    }
  }

  markNotificationAsRead(notificationId: number) {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });

      this.http
        .post(
          `${baseURl}/notification/mark-read/${notificationId}`,
          {},
          { headers }
        )
        .subscribe(
          (response) => {
            console.log(response);
            this.fetchNotifications();
          },
          (error) => {
            this.fetchNotifications();
          }
        );
    }
  }

  markAllNotificationsAsRead() {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });

      this.http
        .post(`${baseURl}/notification/mark-all-read`, {}, { headers })
        .subscribe(
          (response) => {
            console.log(response);
            // Optionally, you can refresh notifications after marking all as read
            this.fetchNotifications();
          },
          (error) => {
            this.fetchNotifications();
          }
        );
    }
  }

  canMarkAllAsRead(): boolean {
    // Check if there are any unread notifications
    return this.notificationData.some((notification) => !notification.isRead);
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
}
