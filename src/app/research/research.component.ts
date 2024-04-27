import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "../Services/research-services";
@Component({
  selector: "app-research",
  templateUrl: "./research.component.html",
  styleUrls: ["./research.component.scss"],
})
export class ResearchComponent implements OnInit {
  // redirectToGoogle(): void {
  //   window.location.href = 'http://localhost:4200/research';
  // }
  [x: string]: any;

  options: string[] = [
    "All Reports",
    "Knowledge Brief",
    "Market Insights",
    "Market Outlook",
    "SPARK Matrix",
  ];

  selectedOptions: String[] = [];
  reportTypeData: string[] = [];
  categoryData: string[] = [];
  authorData: string[] = [];
  reportOptions: string[] = [];
  categoryOptions: string[] = [];
  regionOptions: string[] = [];
  authorOptions: string[] = [];
  searchValue: string = "";
  filteredReports: any[] = [];
  mappedReports: any[] = [];
  datechanges: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  startIndex: number = 0; // Initial value for starting index
  endIndex: number = 5;
  showDateRangePicker: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {
    // this.applyPagination();
  }

  calculateButtonHeight(): number {
    const contentHeight = 24; // Assuming 24px as the default content height
    const paddingVertical = 12; // Assuming 12px vertical padding
    const totalOptionsHeight = this.reportOptions.length * contentHeight; // Total height of options content

    // Calculate total height including padding
    const totalHeight = totalOptionsHeight + paddingVertical;
    console.log(totalHeight);
    return totalHeight;
  }

  applyPagination() {
    this.startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.endIndex = this.startIndex + this.itemsPerPage;
    // console.log(this.Reports);
    // this.filteredReports = this.Reports.slice(startIndex, endIndex);
    // console.log(this.filteredReports);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.applyPagination();
  }

  getPages(): number[] {
    const totalPages = Math.ceil(this.mappedReports.length / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  getLastPage(): number {
    return Math.ceil(this.mappedReports.length / this.itemsPerPage);
  }

  onReportCheck(event: any, option: string) {
    if (event.target && event.target.checked) {
      this.reportOptions.push(option);
    } else {
      const index = this.reportOptions.indexOf(option);
      if (index !== -1) {
        this.reportOptions.splice(index, 1);
      }
    }
    this.selectedOptions = [
      ...this.reportOptions,
      ...this.categoryOptions,
      ...this.regionOptions,
      ...this.authorOptions,
    ];
    this.updateMappedReports("report");
  }

  onDomainCheck(event: any, option: string) {
    if (event.target && event.target.checked) {
      this.categoryOptions.push(option);
    } else {
      const index = this.categoryOptions.indexOf(option);
      if (index !== -1) {
        this.categoryOptions.splice(index, 1);
      }
    }
    this.selectedOptions = [
      ...this.reportOptions,
      ...this.categoryOptions,
      ...this.regionOptions,
      ...this.authorOptions,
    ];
    this.updateMappedReports("category");
  }

  onRegionCheck(event: any, option: string) {
    if (event.target && event.target.checked) {
      this.regionOptions.push(option);
    } else {
      const index = this.regionOptions.indexOf(option);
      if (index !== -1) {
        this.regionOptions.splice(index, 1);
      }
    }
    this.selectedOptions = [
      ...this.reportOptions,
      ...this.categoryOptions,
      ...this.regionOptions,
      ...this.authorOptions,
    ];
  }

  onAnalystCheck(event: any, option: string) {
    if (event.target && event.target.checked) {
      this.authorOptions.push(option);
    } else {
      const index = this.authorOptions.indexOf(option);
      if (index !== -1) {
        this.authorOptions.splice(index, 1);
      }
    }
    this.selectedOptions = [
      ...this.reportOptions,
      ...this.categoryOptions,
      ...this.regionOptions,
      ...this.authorOptions,
    ];
    this.updateMappedReports("analyst");
  }

  updateMappedReports(type: any) {
    if (type == "category") {
      const filteredReports = this.mappedReports.filter((report) =>
        this.categoryOptions.includes(report.categoryName)
      );
      this.mappedReports =
        filteredReports.length > 0 ? filteredReports : this.mappedReports;
    } else if (type == "report") {
      const filteredReports = this.mappedReports.filter((report) =>
        this.reportOptions.includes(report.report)
      );
      this.mappedReports =
        filteredReports.length > 0 ? filteredReports : this.mappedReports;
    } else if (type == "analyst") {
      const filteredReports = this.mappedReports.filter((report) =>
        this.authorOptions.includes(report.author)
      );
      this.mappedReports =
        filteredReports.length > 0 ? filteredReports : this.mappedReports;
    }
  }

  getFirstParagraph(htmlContent: string): string {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(htmlContent, "text/html");
    const firstParagraph = parsedHtml.querySelector("p");
    return firstParagraph ? firstParagraph.outerHTML : "";
  }

  removeOption(index: number) {
    const removedOption: any = this.selectedOptions[index];
    this.selectedOptions.splice(index, 1);

    // Remove the option from specific arrays if it exists
    if (this.reportOptions.includes(removedOption)) {
      const reportIndex = this.reportOptions.indexOf(removedOption);
      this.reportOptions.splice(reportIndex, 1);
    }
    if (this.categoryOptions.includes(removedOption)) {
      const domainIndex = this.categoryOptions.indexOf(removedOption);
      this.categoryOptions.splice(domainIndex, 1);
    }
    if (this.regionOptions.includes(removedOption)) {
      const regionIndex = this.regionOptions.indexOf(removedOption);
      this.regionOptions.splice(regionIndex, 1);
    }
    if (this.authorOptions.includes(removedOption)) {
      const analystIndex = this.authorOptions.indexOf(removedOption);
      this.authorOptions.splice(analystIndex, 1);
    }
  }

  apply() {
    console.log("Selected options:", this.selectedOptions);
  }

  Reports: any[] = [];
  authorsArray: any[] = [];
  authorsSet = new Set();
  isSubscribed: boolean = false;

  ngOnInit(): void {
    this.loadResearchData();

    this.apiService.getReportType().subscribe((data: any) => {
      this.reportTypeData = data.map((item: any) => item.reportType);
      // console.table("Report Typ", this.reportTypeData);
    });

    this.apiService.getCategories().subscribe((data: any) => {
      this.categoryData = data.map((item: any) => item.categoryName);
      // console.table("Report Typ", this.categoryData);
    });
  }

  loadResearchData(): void {
    const apiCall = this.isSubscribed
      ? this.apiService.getReseachListSubscribed()
      : this.apiService.getReseachList();

    apiCall.subscribe((data: any) => {
      this.Reports = data.researchMasterList;
      // !this.isSubscribed
      //   ? (this.mappedReports = this.Reports.filter(
      //       (report: any) => !report.isSubscribed
      //     ))
      //   : (this.mappedReports = this.Reports);
      this.mappedReports = this.Reports;
      data.researchMasterList.forEach((item: any) => {
        if (!this.authorsSet.has(item.author)) {
          this.authorsSet.add(item.author);
        }
        if (!this.authorsSet.has(item.mauthor)) {
          this.authorsSet.add(item.mauthor);
        }
      });
      this.authorsArray = Array.from(this.authorsSet);
      // console.log("author array", this.authorsArray);
      this.mappedReports = this.mappedReports.map((report: any) => {
        return {
          ...report,
          publishDate: this.formatDate(report.publishDate),
        };
      });
      console.table("mapped report", this.mappedReports);
    });
  }

  toggleResearchType(isSubscribed: boolean): void {
    this.isSubscribed = isSubscribed;
    this.loadResearchData(); // Reload data based on selected type
  }

  navigateToResearchSingle(research: any) {
    // Define the navigation extras including the research object as state
    const navigationExtras: NavigationExtras = {
      state: {
        research: research,
      },
    };

    // Navigate to research-single page with the defined navigation extras
    this.router.navigate(["/research-single"], navigationExtras);
  }

  formatDate(epochDate: number): string {
    const date = new Date(epochDate * 1000); // Convert epoch to milliseconds
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of year
    return `${day}-${month < 10 ? "0" + month : month}-${year}`;
  }
  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
