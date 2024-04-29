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
    private route: ActivatedRoute,
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
    const researchId: any = this.route.snapshot.paramMap.get("id");
    this.apiService.getReseachList().subscribe((data: any) => {
      console.log(data.researchMasterList);

      const filterData = data.researchMasterList.filter(
        (item: any) => item.id === parseInt(researchId)
      );

      this.Reports = filterData[0];
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
