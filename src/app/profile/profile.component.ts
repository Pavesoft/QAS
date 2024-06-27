import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from "@angular/forms";
import * as intlTelInput from "intl-tel-input";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const baseURl = "http://10.0.51.3:8091";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  content: string = "My Profile";
  profileDetailsForm: FormGroup;
  isEditing = false;
  showPassword = false;
  showConfirmPassword = false;
  newShowPassword = false;
  user: any = {};
  isLoading = false;
  subscriptions: any[] = [];
  @ViewChild("phoneInput") phoneInput!: ElementRef;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.profileDetailsForm = this.fb.group({
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]],
      currentpassword: ["", [Validators.required]],
      email: [
        this.user.workEmail,
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ],
      ],
    });

    this.fetchUserDetails(); // Call fetchUserDetails to get user data
  }

  fetchUserDetails() {
    this.isLoading = true;
    const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http.get<any>(`${baseURl}/users/userdetails`, { headers }).subscribe(
      (data: any) => {
        this.user = data;
        this.isLoading = false;
        console.log("data for user details", this.user);

        // Call initPhoneNumberInput here, after this.user.phoneCountryCode is set
        this.initPhoneNumberInput();
      },
      (error: any) => {
        console.error("Error fetching user details", error);
        this.isLoading = false;
      }
    );
  }

  initPhoneNumberInput() {
    const inputElement = this.phoneInput.nativeElement;
    if (inputElement && this.user && this.user.phoneCountryCode) {
      const phoneInput = intlTelInput(inputElement, {
        initialCountry: "in", // Remove the '+' sign
        separateDialCode: true,
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.1.8/js/utils.min.js",
      });

      // Set the default number if provided
      const defaultNumber = `${this.user.mobileNumber}`;
      phoneInput.setNumber(defaultNumber);
    }
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  displayContent(content: string) {
    this.content = content;
    if (content === "Subscription") {
      this.fetchSubscriptions();
    }
  }

  fetchSubscriptions() {
    this.isLoading = true;
    const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http
      .get<any[]>(`${baseURl}/research-masters/research-list-subscribed`, {
        headers,
      })
      .subscribe(
        (data: any) => {
          this.subscriptions = data.researchMasterList;

          this.isLoading = false;
        },
        (error: any) => {
          console.error("Error fetching subscriptions", error);
          this.isLoading = false;
        }
      );
  }

  onSubmit() {
    if (this.profileDetailsForm.valid) {
      // Perform the password reset logic
      // console.log("Form Submitted", this.profileDetailsForm.value);
    } else {
      // console.log("Form is invalid");
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  toggleNewPassword() {
    this.newShowPassword = !this.newShowPassword;
  }
}
