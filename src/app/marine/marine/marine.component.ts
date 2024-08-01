import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { UserDetailsFormComponent } from "src/app/CommonComponents/user-details-form/user-details-form.component";
import { MarineformComponent } from "src/app/form/marineform/marineform.component";

@Component({
  selector: "app-marine",
  templateUrl: "./marine.component.html",
  styleUrls: ["./marine.component.scss"],
})
export class MarineComponent {
  constructor(private router: Router, private dialog: MatDialog) {}

  private getUrlFriendlyString(input: string): string {
    // Replace special characters with dashes and convert to lowercase
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-");
  }

  openPopUp() {
    const dialogRef: MatDialogRef<MarineformComponent> = this.dialog.open(
      MarineformComponent,
      {
        width: "400px",
        data: {}, // Pass any data you want to pre-fill in the form
        disableClose: true,
      }
    );

    dialogRef.afterClosed().subscribe((res: any) => {
      // console.log(res)
    });
  }

  downloadForm(formName: string) {
    // console.log(formName)
    //console.log(research)

    const urlFriendlyName = this.getUrlFriendlyString(formName);
    const url = `/contact-us/${urlFriendlyName}`;

    if (formName) {
      //console.log(research.report)
      this.router.navigate([url], {
        state: {
          contactUsFormName: formName,
        },
      });
    } else {
      console.error("Selected research not found in the filtered data.");
    }
  }
}
