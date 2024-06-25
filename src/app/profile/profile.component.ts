import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from "@angular/forms";
import * as intlTelInput from "intl-tel-input";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const baseURl = "https://backend.quadrant-solutions.com";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit, AfterViewInit {
  content: string = "My Profile";
  passwordForm: FormGroup;
  isEditing = false;
  showPassword = false;
  showConfirmPassword = false;
  newShowPassword = false;
  user = {
    firstName: "Kate",
    lastName: "Pelikh",
    address: "",
    city: "",
    state: "",
    country: null,
    postalCode: null,
    mobileNumber: "9999999999", // Assuming this is a string as per typical phone number input handling
    workEmail: "pelikh1@bpcbt.com",
    company: "QAS",
    phoneCountryCode: "+91",
  };
  isLoading = false;
  subscriptions: any[] = [];
  @ViewChild("phoneInput") phoneInput!: ElementRef;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.initPhoneNumberInput();
  }

  initPhoneNumberInput() {
    const inputElement = this.phoneInput.nativeElement;
    if (inputElement) {
      const phoneInput = intlTelInput(inputElement, {
        initialCountry: this.user.phoneCountryCode.slice(1), // Remove the '+' sign
        separateDialCode: true,
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.1.8/js/utils.min.js",
      });

      // Set the default number if provided
      const defaultNumber = `${this.user.phoneCountryCode}${this.user.mobileNumber}`;
      phoneInput.setNumber(defaultNumber);
    }
  }

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
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
          console.log(this.subscriptions);
          this.isLoading = false;
        },
        (error: any) => {
          console.error("Error fetching subscriptions", error);
          this.isLoading = false;
        }
      );
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      // Perform the password reset logic
      console.log("Form Submitted", this.passwordForm.value);
    } else {
      console.log("Form is invalid");
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
