import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "../Services/research-services";
import { AuthService } from "../auth.service";
import { ResearchMasterDto } from "../Interfaces/research-master-dto";
import { CartService } from "../Services/cart.service";
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
  regionData: string[] = [];
  reportOptions: string[] = [];
  categoryOptions: string[] = [];
  regionOptions: string[] = [];
  authorOptions: string[] = [];
  searchValue: string = "";
  filteredReports: any[] = [];
  mappedReports: any[] = [];
  datechanges: any[] = [];
  searchObject: any = {};
  searchCriteriaList: any[] = [];
  currentPage = 1;
  totalPages: any; // Set the total number of pages here
  visiblePages = 5;
  itemsPerPage: number = 5;
  startIndex: number = 0; // Initial value for starting index
  endIndex = this.itemsPerPage;
  showDateRangePicker: boolean = false;
  isLogin: any;
  Reports: any[] = [];
  authorsArray: any[] = [];
  authorsSet = new Set();
  showOverlay: boolean = false;
  isSubscribed: boolean = false;
  alertType = "";
  message = "";
  cart: {
    research: ResearchMasterDto;
    quantity: number;
    totalPrice: number;
  }[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private apiService: ApiService,
    public authService: AuthService,
    private cartService: CartService
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

  applyPagination(): void {
    this.startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.endIndex = this.startIndex + this.itemsPerPage;
    // Update filteredReports based on the startIndex and endIndex
    this.filteredReports = this.Reports.slice(this.startIndex, this.endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.applyPagination();
  }

  onItemsPerPageChange(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1; // Reset to the first page when items per page changes
    this.applyPagination();
  }

  getPages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
  getPageStyle(page: number): any {
    if (page === this.currentPage) {
      return {
        color: "#00327a !important",
        background:
          "linear-gradient(176deg, rgba(76, 214, 176, 0.25) 39.72%, rgba(9, 114, 234, 0.19) 96.84%) !important",
      };
    } else {
      return {}; // Return an empty object for other pages
    }
  }
  getVisiblePages(): number[] {
    const start = Math.max(
      1,
      this.currentPage - Math.floor(this.visiblePages / 2)
    );
    const end = Math.min(this.totalPages, start + this.visiblePages - 1);
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }

  getLastPage(): number {
    return this.totalPages;
  }

  addToCart(research: ResearchMasterDto): void {
    console.log(research);
    const cart = this.cartService.getCart();
    const existingCartItem = cart.find(
      (item) => item.research.id === research.id
    );
    if (existingCartItem) {
      this.alertType = "Failed";
      this.message = "This item is already in the cart.";
      this.showCustomAlert();
    } else {
      this.alertType = "Success";
      this.message = "This item was added to cart.";
      this.cartService.addToCart(research);
      this.showCustomAlert();
    }
  }

  buyNow(research: ResearchMasterDto) {
    const cart = this.cartService.getCart();
    const existingCartItem = cart.find(
      (item) => item.research.id === research.id
    );
    if (existingCartItem) {
      this.alertType = "Failed";
      this.message = "This item is already in the cart.";
      this.showCustomAlert();
    } else {
      this.router.navigate(["/cart"], {
        queryParams: {
          productId: research.id,
          productName: research.report,
          price: research.price,
          quantity: 1,
        },
      });
    }
  }

  downloadForm(research: any) {
    //console.log(research)

    const urlFriendlyName = this.getUrlFriendlyString(research.report);
    const url = `/download-form/market-research/${urlFriendlyName}-${research.id}`;

    if (research && research.id && research.report) {
      //console.log(research.report)
      this.router.navigate([url], {
        state: {
          researchData: research,
        },
      });
    } else {
      console.error("Selected research not found in the filtered data.");
    }
  }

  onCategoryClick(option: string) {
    if (option) {
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

  onAuthorClick(option: string) {
    if (option) {
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
    this.updateMappedReports("author");
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
    this.updateMappedReports("reportType");
  }

  onCategoryCheck(event: any, option: string) {
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
    this.updateMappedReports("region");
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
    this.updateMappedReports("author");
  }

  updateMappedReports(type: string) {
    // const searchCriteriaList: any = [];
    let criteriaIndex = this.searchCriteriaList.findIndex(
      (criteria: any) => criteria.filterKey === type
    );

    if (type === "category") {
      const filteredReports = this.mappedReports.filter((report) =>
        this.categoryOptions.includes(report.categoryName)
      );
      this.mappedReports =
        filteredReports.length > 0 ? filteredReports : this.mappedReports;
    } else if (type === "reportType") {
      const filteredReports = this.mappedReports.filter((report) =>
        this.reportOptions.includes(report.report)
      );
      this.mappedReports =
        filteredReports.length > 0 ? filteredReports : this.mappedReports;
    } else if (type === "author") {
      const filteredReports = this.mappedReports.filter((report) =>
        this.authorOptions.includes(report.author)
      );
      this.mappedReports =
        filteredReports.length > 0 ? filteredReports : this.mappedReports;
    } else if (type === "region") {
      const filteredReports = this.mappedReports.filter((report) =>
        this.regionOptions.includes(report.region)
      );
      this.mappedReports =
        filteredReports.length > 0 ? filteredReports : this.mappedReports;
    }

    if (criteriaIndex !== -1) {
      // Update existing criteria
      this.searchCriteriaList[criteriaIndex].value =
        this[type + "Options"].join(", ");
    } else {
      // Create new criteria
      console.log(this[type + "Options"]);
      this.searchCriteriaList.push({
        filterKey: type,
        value: this[type + "Options"].join(", "),
        operation: "in",
      });
    }
    this.searchObject = {
      searchCriteriaList: this.searchCriteriaList.filter(
        (criteria) => criteria.value.trim() !== ""
      ),
      dataOption: "all",
    };

    console.log("-----", this.searchObject);

    if (this.selectedOptions.length > 0) {
      this.apiService.serachFilters(this.searchObject).subscribe(
        (data) => {
          // Handle the API response here
          this.mappedReports = data.researchMasterList;
          this.mappedReports = this.mappedReports.map((report: any) => {
            return {
              ...report,
              publishDate: this.epochToDate(report.publishDate),
            };
          });
          console.log("API response:", this.mappedReports);
          this.totalPages = data.researchMasterList.length / 5;
        },
        (error) => {
          // Handle any API errors here
          console.error("API error:", error);
        }
      );
    } else {
      this.loadResearchData();
    }
  }

  getFirstParagraph(htmlContent: string): string {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(htmlContent, "text/html");
    const firstParagraph: any = parsedHtml.querySelector("p");
    const first100 = this.getFirst100Words(firstParagraph.outerHTML);
    return first100 ? `${first100}...` : "";
  }

  getFirst100Words(paragraph: string): string {
    const words = paragraph.split(/\s+/); // Split the paragraph into words using whitespace as delimiter
    const first100 = words.slice(0, 40).join(" "); // Take the first 100 words and join them back with spaces
    return `${first100}...`;
  }

  private getUrlFriendlyString(input: string): string {
    // Replace special characters with dashes and convert to lowercase
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-");
  }

  showCustomAlert(): void {
    this.showOverlay = true;
    setTimeout(() => {
      const customAlert = document.getElementById("customAlert");
      if (customAlert) {
        customAlert.style.display = "block";
      }
    }, 100);
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

    //Logic to remove the value from the object
    for (let i = 0; i < this.searchObject.searchCriteriaList.length; i++) {
      if (
        this.searchObject.searchCriteriaList[i].value.includes(removedOption)
      ) {
        const currentOptions =
          this.searchObject.searchCriteriaList[i].value.split(", ");

        const updatedOptions = currentOptions.filter(
          (opt: any) => opt !== removedOption
        );

        this.searchObject.searchCriteriaList[i].value =
          updatedOptions.join(", ");
      }

      if (this.searchObject.searchCriteriaList[i].value.trim() === "") {
        this.searchObject.searchCriteriaList.splice(i, 1);
        i--;
      }
    }

    //Search Filter API Call
    if (this.selectedOptions.length > 0) {
      this.apiService.serachFilters(this.searchObject).subscribe(
        (data) => {
          // Handle the API response here
          console.log("API response:", data);
          this.mappedReports = data.researchMasterList;
          this.mappedReports = this.mappedReports.map((report: any) => {
            return {
              ...report,
              publishDate: this.epochToDate(report.publishDate),
            };
          });
          this.totalPages = data.researchMasterList.length / 5;
        },
        (error) => {
          // Handle any API errors here
          console.error("API error:", error);
        }
      );
    } else {
      this.loadResearchData();
    }
  }

  ngOnInit(): void {
    const accessToken = this.authService.getAccessToken();
    console.log("accesstoken", accessToken);

    this.isLogin = accessToken !== null ? true : false;
    // Now isLogin is a boolean

    console.log("is login", this.isLogin);
    this.loadResearchData();

    this.apiService.getReportType().subscribe((data: any) => {
      this.reportTypeData = data.map((item: any) => item.reportType);
    });

    this.apiService.getCategories().subscribe((data: any) => {
      this.categoryData = data.map((item: any) => item.categoryName);
      // console.table("Report Typ", this.categoryData);
    });

    this.apiService.getAuthors().subscribe((data: any) => {
      this.authorData = data.map((item: any) => item.name);
      // console.table("Report Typ", this.categoryData);
    });

    this.apiService.getRegion().subscribe((data: any) => {
      this.regionData = data.map((item: any) => item.regionName);
      // console.table("Report Typ", this.categoryData);
    });
  }

  loadResearchData(): void {
    const apiCall = this.isSubscribed
      ? this.apiService.getReseachListSubscribed()
      : this.apiService.getReseachList();

    apiCall.subscribe((data: any) => {
      this.Reports = data.researchMasterList;
      this.mappedReports = this.Reports;
      console.table("mapped report", this.mappedReports);
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
      this.mappedReports.sort((a, b) => a.publishDate - b.publishDate);
      this.mappedReports = this.mappedReports.map((report: any) => {
        return {
          ...report,
          publishDate: this.epochToDate(report.publishDate),
        };
      });
      console.table("mapped report change", this.mappedReports);

      console.log("total pages", data.researchMasterList.length / 5);
      this.totalPages = data.researchMasterList.length / 5;
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
    this.router.navigate(["/research-single", research.id]);
  }

  downloadResearch(id: any) {
    this.apiService.downloadReport(id).subscribe(
      (data) => {
        this.saveFile(data.blob, data.filename);
      },
      (error) => {
        console.error("Error downloading report:", error);
      }
    );
  }

  private saveFile(blobData: any, filename: any) {
    const blob = new Blob([blobData], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(blob);

    // Create a link element and simulate a click to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    // Clean up after download
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  epochToDate(epochTime: number): string {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(epochTime);
    const monthIndex = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    return `${months[monthIndex]} ${day}, ${year}`;
  }
  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
