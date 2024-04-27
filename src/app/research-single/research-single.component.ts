import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../Services/research-services";

@Component({
  selector: "app-research-single",
  templateUrl: "./research-single.component.html",
  styleUrls: ["./research-single.component.scss"],
})
export class ResearchSingleComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {}

  research: any;
  reportTypeData: string[] = [];
  categoryData: string[] = [];
  Reports: any;
  mappedReports: any[] = [];
  authorsArray: any[] = [];
  authorsSet = new Set();
  isSubscribed: boolean = false;

  ngOnInit(): void {
    this.apiService.getReseachList().subscribe((data: any) => {
      this.Reports = data.researchMasterList[0];
      this.mappedReports = data.researchMasterList;
      console.table("mapped report", this.Reports);
      // this.mappedReports = this.Reports.filter(
      //   (report: any) => !report.isSubscribed
      // );
      // data.researchMasterList.forEach((item: any) => {
      //   if (!this.authorsSet.has(item.author)) {
      //     this.authorsSet.add(item.author);
      //   }
      //   if (!this.authorsSet.has(item.mauthor)) {
      //     this.authorsSet.add(item.mauthor);
      //   }
      // });
      // this.authorsArray = Array.from(this.authorsSet);
      // console.log("author array", this.authorsArray);
      // this.mappedReports = this.mappedReports.map((report: any) => {
      //   return {
      //     ...report,
      //     publishDate: this.formatDate(report.publishDate),
      //   };
      // });
    });

    this.apiService.getReportType().subscribe((data: any) => {
      this.reportTypeData = data.map((item: any) => item.reportType);
      // console.table("Report Typ", this.reportTypeData);
    });

    this.apiService.getCategories().subscribe((data: any) => {
      this.categoryData = data.map((item: any) => item.categoryName);
      // console.table("Report Typ", this.categoryData);
    });
  }
  getFirstParagraph(htmlContent: string): string {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(htmlContent, "text/html");
    const firstParagraph = parsedHtml.querySelector("p");
    return firstParagraph ? firstParagraph.outerHTML : "";
  }
  formatDate(epochDate: number): string {
    const date = new Date(epochDate * 1000); // Convert epoch to milliseconds
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of year
    return `${day}-${month < 10 ? "0" + month : month}-${year}`;
  }
}
