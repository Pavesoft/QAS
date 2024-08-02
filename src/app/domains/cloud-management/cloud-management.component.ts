import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { EcommBackendService } from "src/app/Services/ecomm-backend-service.service";
import { Meta } from "@angular/platform-browser";

@Component({
  selector: "app-cloud-management",
  templateUrl: "./cloud-management.component.html",
  styleUrls: ["./cloud-management.component.scss"],
})
export class CloudManagementComponent {
  latestCloudData: any;

  constructor(
    private ecomService: EcommBackendService,
    private title: Title,
    private readonly meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle("Cloud Management | Quadrant Knowledge Solutions");
    this.meta.updateTag({
      name: "keywords",
      content: "Cloud Management, Cloud Services, Cloud Infrastructure",
    });

    this.meta.updateTag({
      name: "description",
      content:
        "Cloud Management and Operations optimize expenses, minimize waste, and ensure security. QKS offers cloud management research services to help organizations find the right partners and technologies for their business goals.",
    });

    this.ecomService
      .getLatestCLoudManagementDomainData()
      .subscribe((response: any) => {
        // console.log(response)
        if (response.status === "OK") {
          this.latestCloudData = response.domainResponse;

          // console.log(this.latestCloudData)
        }
      });
  }

  getFormattedDescription(description: any): string {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = description;
    return tempElement.innerText.trim();
  }

  private getUrlFriendlyString(input: string): string {
    // Replace special characters with dashes and convert to lowercase
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-");
  }
}
