import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-subscription",
  templateUrl: "./subscription.component.html",
  styleUrls: ["./subscription.component.scss"],
})
export class SubscriptionComponent implements OnInit {
  [x: string]: any;

  options: string[] = [
    "All Reports",
    "Knowledge Brief",
    "Market Insights",
    "Market Outlook",
    "SPARK Matrix",
  ]; // Add your options here
  selectedOptions = new FormControl([]) as any;

  onCheckboxChange(checked: boolean, option: string) {
    if (checked) {
      this.selectedOptions.push(option);
    } else {
      const index = this.selectedOptions.indexOf(option);
      if (index !== -1) {
        this.selectedOptions.splice(index, 1);
      }
    }
  }

  apply() {
    console.log("Selected options:", this.selectedOptions);
  }

  constructor(private httpClient: HttpClient, private router: Router) {}
  navigate(path: string): void {
    this.router.navigate([path]);
  }

  Reports: any[] = [];

  ngOnInit(): void {
    this.getReports();
  }
  getReports() {
    this.httpClient
      .get<any[]>("assets/fonts/data/data.json")
      .subscribe((data: any) => {
        this.Reports = data.reports;
      });
  }
}
