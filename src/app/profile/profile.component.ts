import { Component } from "@angular/core";
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
export class ProfileComponent {
  content: string = "My Profile";
  passwordForm: FormGroup;
  isEditing = false;

  constructor(private fb: FormBuilder) {
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
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
}
