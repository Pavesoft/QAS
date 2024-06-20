import { Component, OnInit, AfterViewInit } from "@angular/core";
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
  isLoading = false; // Add a loading state variable
  subscriptions: any[] = [];
  showAllReportsForCategory: { [key: string]: boolean } = {}; // Track show more/less for each category

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngAfterViewInit(): void {
    const inputElement = document.querySelector("#businessPhone1");
    if (inputElement) {
      intlTelInput(inputElement, {
        initialCountry: "us",
        separateDialCode: true,
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.1.8/js/utils.min.js",
      });
    }
  }

  invoices = [
    {
      title: "Download Invoice",
      imgSrc: "../../assets//file-up.svg",
      downloadImgSrc: "../../assets//invoice-download.svg",
    },
    {
      title: "Download Invoice",
      imgSrc: "../../assets//file-up.svg",
      downloadImgSrc: "../../assets//invoice-download.svg",
    },
    {
      title: "Download Invoice",
      imgSrc: "../../assets//file-up.svg",
      downloadImgSrc: "../../assets//invoice-download.svg",
    },
  ];

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  ngOnInit(): void {
    this.passwordForm = this.fb.group(
      {
        password: ["", [Validators.required]],
        confirmPassword: ["", [Validators.required]],
        email: [
          "",
          [
            Validators.required,
            Validators.email,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
          ],
        ],
      },
      { validator: this.passwordsMatch }
    );
  }

  passwordsMatch(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get("password");
    const confirmPassword = control.get("confirmPassword");
    if (password?.value !== confirmPassword?.value) {
      return { mismatch: true };
    }
    return null;
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

  getUniqueCategories(): string[] {
    const uniqueCategories = [
      ...new Set(this.subscriptions.map((sub) => sub.categoryList).flat()),
    ];
    console.log(uniqueCategories);
    return uniqueCategories;
  }

  // Method to filter subscriptions by category
  filteredSubscriptions(category: string): any[] {
    return this.subscriptions.filter((sub) =>
      sub.categoryList.includes(category)
    );
  }

  toggleShowAllReports(category: string) {
    this.showAllReportsForCategory[category] =
      !this.showAllReportsForCategory[category];
  }
}
