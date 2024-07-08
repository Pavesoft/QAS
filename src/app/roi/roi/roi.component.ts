import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-roi",
  templateUrl: "./roi.component.html",
  styleUrls: ["./roi.component.scss"],
})
export class RoiComponent {
  constructor(private router: Router) {}

  private getUrlFriendlyString(input: string): string {
    // Replace special characters with dashes and convert to lowercase
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-");
  }

  downloadForm(formName: string) {
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

//   router: any;
//   researchMaster:any={}
//   downloadForm(research:any){

//     const urlFriendlyName = this.getUrlFriendlyString(research.report);
//     const url = `/download-form/${urlFriendlyName}-${research.id}`;

//     if (research && research.id && research.report) {

//       this.router.navigate([url], {
//         state: {
//           researchData: research
//         }
//       });
//     } else {
//       console.error('Selected research not found in the filtered data.');
//     }

//   }
//   getUrlFriendlyString(report: any) {
//     throw new Error('Method not implemented.');
//   }

// }
