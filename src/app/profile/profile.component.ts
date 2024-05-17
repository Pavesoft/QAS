import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  content: string = "My Profile";
  passwordForm: any = FormGroup;
  isEditing = false;
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.passwordForm = this.fb.group(
      {
        password: ["", [Validators.required]],
        confirmPassword: ["", [Validators.required]],
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
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      // Perform the password reset logic
      console.log("Form Submitted", this.passwordForm.value);
    } else {
      console.log("Form is invalid");
    }
  }
}
