import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.scss']
})
export class UserDetailsFormComponent {
  fullName: string = '';
  workEmail: string = '';
  mobileNumber: string = '';

  constructor(
    public dialogRef: MatDialogRef<UserDetailsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  submitForm(): void {
    if (this.isFormValid()) {
      // Close the dialog and pass the form data to the parent component
      this.dialogRef.close({
        fullName: this.fullName,
        workEmail: this.workEmail,
        mobileNumber: this.mobileNumber
      });
    }
  }

  isFormValid(): boolean {
    // Perform form validation here
    // You can add your own validation logic based on your requirements
    return this.fullName.trim() !== '' && this.workEmail.trim() !== '' && this.mobileNumber.trim() !== '';
  }

  cancel(): void {
    this.dialogRef.close();
  }
}

