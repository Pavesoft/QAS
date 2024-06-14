import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
  showDropProfiledownMenu: boolean = false;
  showAdditionalInputs: boolean = false;
  isLoggedIn = false;
  totalCartItems = 0;
  errorMessage = "";
  firstName: string = "";
  showpassword = false;
  showconfirmpassword = false;
  showAdditionalInfo: boolean = false;

  notificationData = [
    {
      src: "../../../assets/list_notification.svg",
      name: "SPARK Matrix : Governance Risk & Compliance (GRC), 2024",
      status: "Available Now",
      time: "2 Hrs",
    },
    {
      src: "../../../assets/list_notification.svg",
      name: "Security Compliance Report 2024",
      status: "Available Now",
      time: "1 Hr",
    },
    {
      src: "../../../assets/list_notification.svg",
      name: "Annual Risk Assessment 2024",
      status: "Available Now",
      time: "3 Hrs",
    },
    {
      src: "../../../assets/list_notification.svg",
      name: "SPARK Matrix : Governance Risk & Compliance (GRC), 2024",
      status: "Available Now",
      time: "2 Hrs",
    },
    {
      src: "../../../assets/list_notification.svg",
      name: "Security Compliance Report 2024",
      status: "Available Now",
      time: "1 Hr",
    },
    {
      src: "../../../assets/list_notification.svg",
      name: "Security Compliance Report 2024",
      status: "Available Now",
      time: "1 Hr",
    },
    {
      src: "../../../assets/list_notification.svg",
      name: "Security Compliance Report 2024",
      status: "Available Now",
      time: "1 Hr",
    },
    {
      src: "../../../assets/list_notification.svg",
      name: "Security Compliance Report 2024",
      status: "Available Now",
      time: "1 Hr",
    },
    {
      src: "../../../assets/list_notification.svg",
      name: "Security Compliance Report 2024",
      status: "Available Now",
      time: "1 Hr",
    },
    {
      src: "../../../assets/list_notification.svg",
      name: "Security Compliance Report 2024",
      status: "Available Now",
      time: "1 Hr",
    },
    {
      src: "../../../assets/list_notification.svg",
      name: "Security Compliance Report 2024",
      status: "Available Now",
      time: "1 Hr",
    },
    {
      src: "../../../assets/list_notification.svg",
      name: "Security Compliance Report 2024",
      status: "Available Now",
      time: "1 Hr",
    },
    {
      src: "../../../assets/list_notification.svg",
      name: "Security Compliance Report 2024",
      status: "Available Now",
      time: "1 Hr",
    },
    {
      src: "../../../assets/list_notification.svg",
      name: "Security Compliance Report 2024",
      status: "Available Now",
      time: "1 Hr",
    },
    {
      src: "../../../assets/list_notification.svg",
      name: "Security Compliance Report 2024",
      status: "Available Now",
      time: "1 Hr",
    },
    {
      src: "../../../assets/list_notification.svg",
      name: "Security Compliance Report 2024",
      status: "Available Now",
      time: "1 Hr",
    },
  ]; // For showing error messages

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
        name: ["", Validators.required],
        companyname: ["", Validators.required],

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
    const inputElement = document.querySelector("#businessPhone");

    if (inputElement) {
      intlTelInput(inputElement, {
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
    console.log(password, confirmPassword);

    return password === confirmPassword ? null : { notSame: true };
  }

  toggleDropdownNotificationMenu() {
    this.showDropdownNotificationMenu = !this.showDropdownNotificationMenu;

    if (this.showDropProfiledownMenu === true) {
      this.showDropProfiledownMenu = false;
    }
  }

  toggleDropdownProfileMenu() {
    this.showDropProfiledownMenu = !this.showDropProfiledownMenu;

    if (this.showDropdownNotificationMenu === true) {
      this.showDropdownNotificationMenu = false;
    }
  }

  onSubmitEnquiryForm() {
    console.log("Form Values:", this.enquiryForm.value);
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.errorMessage =
        "Invalid input. Please correct the errors and try again.";
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
    localStorage.removeItem("refreshToken"); // Remove the JWT token
    this.isLoggedIn = false; // Update the login status
    localStorage.setItem("isLogin", this.isLoggedIn.toString());
    window.location.reload();
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

    const signupData = {
      firstName: this.signupForm.get("name")?.value,
      workEmail: this.signupForm.get("email")?.value,
      mobileNumber: this.signupForm.get("phone")?.value,
      password: this.signupForm.get("password")?.value,
    };

    this.http
      .post(`${baseURl}/users/new`, signupData)
      .pipe(
        catchError((error) => {
          console.error("Signup failed:", error);
          this.errorMessage =
            "Signup failed. Please check your details and try again.";
          return of(null);
        })
      )
      .subscribe((response: any) => {
        if (response) {
          this.errorMessage = "Signup successful! You can now log in.";
          this.isSignup = false;
          this.signupForm.reset();
        } else {
          this.errorMessage = "Signup failed. Please try again.";
        }
      });
  }

  togglePassword() {
    this.showpassword = !this.showpassword;
  }
  toggleConfirmPassword() {
    this.showconfirmpassword = !this.showconfirmpassword;
  }
}
