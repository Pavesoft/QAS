import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "../Services/research-services";
import { AuthService } from "../auth.service";
import { ResearchMasterDto } from "../Interfaces/research-master-dto";
import { CartService } from "../Services/cart.service";
import { debounce } from "lodash";
import { FormControl, FormGroup } from "@angular/forms";
import * as _ from "lodash";
@Component({
  selector: "app-research",
  templateUrl: "./research.component.html",
  styleUrls: ["./research.component.scss"],
})
export class ResearchComponent implements OnInit {
  [x: string]: any;

  options: string[] = [
    "All Reports",
    "Knowledge Brief",
    "Market Insights",
    "Market Outlook",
    "SPARK Matrix",
  ];

  toppingsControl = new FormControl([]);
  selectedAuthors: string[] = [];

  onAuthorCheck(event: Event, author: string) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.selectedAuthors.push(author);
    } else {
      this.selectedAuthors = this.selectedAuthors.filter(
        (item) => item !== author
      );
    }
  }
  date: any;
  startDate: Date | undefined;
  endDate: Date | undefined;
  isLoading: Boolean = true;
  selectedOptions: String[] = [];
  reportTypeData: string[] = [];
  categoryData: string[] = [];
  authorData: string[] = [];
  regionData: string[] = [];
  reportTypeOptions: string[] = [];
  categoryOptions: string[] = [];
  regionNameOptions: string[] = [];
  authorsOptions: string[] = [];
  searchValue: string = "";
  filteredReports: any[] = [];
  mappedReports: any[] = [];
  datechanges: any[] = [];
  searchObject: any = { searchCriteriaList: [] };
  searchCriteriaList: any[] = [];
  currentPage = 1;
  totalPages: any; // Set the total number of pages here
  visiblePages = 5;
  itemsPerPage: number = 10;
  startIndex: number = 0; // Initial value for starting index
  endIndex = this.itemsPerPage;
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
  searchText: string = "";
  debouncedSearch = debounce(this.makeApiCall, 300);
  formattedDate: any = "";
  showDateRangePicker: boolean = false;
  oldUrlData: any;
  range: any = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  foods: any[] = [
    { value: "10", viewValue: "10" },
    { value: "25", viewValue: "25" },
    { value: "50", viewValue: "50" },
    { value: "75", viewValue: "75" },
    { value: "100", viewValue: "100" },
  ];
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private apiService: ApiService,
    public authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.httpClient
      .get<any[]>("assets/fonts/data/oldUrlData.json")
      .subscribe((data: any) => {
        this.oldUrlData = data.oldUrlData;
      });
    const accessToken = this.authService.getAccessToken();

    this.isLogin = accessToken !== null ? true : false;
    // Now isLogin is a boolean
    if (!this.searchText.trim()) {
      this.loadResearchData();
    }

    this.apiService.getReportType().subscribe((data: any) => {
      this.reportTypeData = data.map((item: any) => item.reportType);
      let desiredOrder = [
        "Market Share",
        "Market Forecast",
        "Market Insight",
        "SPARK Matrix",
      ];
      function customSort(a: any, b: any) {
        let indexA = desiredOrder.indexOf(a);
        let indexB = desiredOrder.indexOf(b);
        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB; // Maintain the desired order for the first four elements
        } else if (indexA !== -1) {
          return -1; // Place elements from desiredOrder before others
        } else if (indexB !== -1) {
          return 1; // Place elements not in desiredOrder after others
        } else {
          return 0; // Maintain the original order for elements not in desiredOrder
        }
      }
      this.reportTypeData.sort(customSort);
    });

    this.apiService.getCategories().subscribe((data: any) => {
      this.categoryData = data.map((item: any) => item.categoryName);
      this.categoryData.sort((a: string, b: string) => a.localeCompare(b));
    });

    this.apiService.getAuthors().subscribe((data: any) => {
      this.authorData = data.map((item: any) => item.name);
      this.authorData.sort((a: string, b: string) => a.localeCompare(b));
      // console.table("Report Typ", this.categoryData);
    });

    this.apiService.getRegion().subscribe((data: any) => {
      this.regionData = data.map((item: any) => item.regionName);
    });
  }

  clearDateRange() {
    // Reset the form controls to their initial state
    this.range.reset();

    // Before removing the 'publishDate' filter

    // Explicitly define the type of 'item' in the lambda function
    this.searchObject.searchCriteriaList =
      this.searchObject.searchCriteriaList.filter(
        (item: any) => item.filterKey !== "publishDate"
      );

    // After removing the 'publishDate' filter

    // Check if the searchCriteriaList has any remaining criteria
    if (this.searchObject.searchCriteriaList.length > 0) {
      // If there are any criteria left, call loadSearchData()
      this.loadSearchData();
    } else {
      // If there's nothing left in searchCriteriaList, call loadResearchData()
      this.loadResearchData();
    }
  }
  formatPrice(price: number): string {
    // Convert the number to a string and add commas every three digits from the right
    return price.toLocaleString("en-US");
  }
  onDateRangeChange() {
    const startDate = new Date(this.range.value.start).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }
    );

    const endDate = new Date(this.range.value.end).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    this.formattedDate = `${startDate}, ${endDate}`;
    if (this.formattedDate !== "") {
      this.isLoading = true;
      const requestBody = {
        filterKey: "publishDate",
        value: this.formattedDate,
        operation: "bt",
      };
      const publishDateFilterIndex =
        this.searchObject.searchCriteriaList.findIndex(
          (criteria: any) => criteria.filterKey === "publishDate"
        );
      if (publishDateFilterIndex !== -1) {
        // Update value for existing publishDate filter
        this.searchObject.searchCriteriaList[publishDateFilterIndex].value =
          this.formattedDate;
      } else {
        this.searchObject.searchCriteriaList.push(requestBody);
        this.searchObject.dataOption = "all";
      }

      this.loadSearchData();
      this.onPageChange(1);
      this.isLoading = false;
    } else {
      this.loadResearchData();
    }
  }

  onSearchChange(event: any) {
    this.isLoading = true;
    this.searchText = event.target.value;
    this.debouncedSearch(event.target.value); // Call debounced API call
  }

  makeApiCall(searchText: string) {
    if (searchText !== "") {
      this.isLoading = true;
      const requestBody = {
        filterKey: "description",
        value: searchText,
        operation: "like",
      };
      const searchTextIndex = this.searchObject.searchCriteriaList.findIndex(
        (criteria: any) => criteria.filterKey === "description"
      );
      if (searchTextIndex !== -1) {
        // Update value for existing publishDate filter
        this.searchObject.searchCriteriaList[searchTextIndex].value =
          searchText;
      } else {
        this.searchObject.searchCriteriaList.push(requestBody);
        this.searchObject.dataOption = "all";
      }
      this.loadSearchData();
      this.onPageChange(this.currentPage);
      this.isLoading = false;
    } else if (this.searchObject.searchCriteriaList.length > 0) {
      // Assuming searchObject is already defined with the provided structure
      this.searchObject.searchCriteriaList =
        this.searchObject.searchCriteriaList.filter(
          (criteria: any) => criteria.filterKey !== "description"
        );
      this.loadSearchData();
      this.isLoading = false;
    } else {
      this.loadResearchData();
    }
  }

  calculateButtonHeight(): number {
    const contentHeight = 24; // Assuming 24px as the default content height
    const paddingVertical = 12; // Assuming 12px vertical padding
    const totalOptionsHeight = this.reportTypeOptions.length * contentHeight; // Total height of options content

    // Calculate total height including padding
    const totalHeight = totalOptionsHeight + paddingVertical;

    return totalHeight;
  }
  // onItemsPerPageChange() {
  //   // Reset to first page when changing items per page
  //   this.currentPage = 1;
  // }
  applyPagination(): void {
    this.startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.endIndex = this.startIndex + this.itemsPerPage;
    // Update filteredReports based on the startIndex and endIndex
    this.filteredReports = this.mappedReports.slice(
      this.startIndex,
      this.endIndex
    );
  }

  getFirstPage(): number {
    return (this.currentPage = 1); // The first page is always 1
  }

  getLastPages(): number {
    return (this.currentPage = this.totalPages);
  }
  onPageChange(page: number): void {
    this.currentPage = page;
    if (this.searchObject.searchCriteriaList.length > 0) {
      this.loadSearchData();
    } else {
      this.loadResearchData();
    }
  }

  onItemsPerPageChange(itemsPerPage: any): void {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1; // Reset to the first page when items per page changes
    if (this.searchObject.searchCriteriaList.length > 0) {
      this.apiService
        .serachFilters(this.searchObject, this.currentPage, this.itemsPerPage)
        .subscribe((response) => {
          this.mappedReports = response.researchMasterList;
          this.mappedReports.sort((a, b) => b.publishDate - a.publishDate);
          this.mappedReports = this.mappedReports.map((report: any) => {
            return {
              ...report,
              publishDate: this.epochToDate(report.publishDate),
            };
          });
          // this.totalPages =
          //   response.researchMasterList.length / this.itemsPerPage;
          this.currentPage = response.pagination.currentPage + 1;
          this.itemsPerPage = response.pagination.pageSize;
          this.totalPages = response.pagination.totalPages;
        });
    } else {
      this.loadResearchData();
    }
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
    const cart = this.cartService.getCart();
    const existingCartItem = cart.find(
      (item) => item.research.id === research.id
    );
    const Research: ResearchMasterDto = {
      id: +research.id,
      report: research.report,
      price: +research.price,
      categoryName: "",
      reportType: "",
      description: "",
      author: "",
      mAuthor: "",
      publishDate: new Date(),
      price2: 0,
      tableOfContent: "",
    };

    // const item = {
    //   research: research,
    //   quantity: +1,
    //   totalPrice: +research.price * +1,
    // };
    if (existingCartItem) {
      this.alertType = "Failed";
      this.message = "This item is already in the cart.";
      this.showCustomAlert();
    } else {
      this.alertType = "Success";
      this.message = "This item was added to cart.";
      this.cartService.addToCart(Research);
      this.showCustomAlert();
    }
  }

  buyNow(research: ResearchMasterDto) {
    const cart = this.cartService.getCart();
    const existingCartItem = cart.find(
      (item) => item.research.id === research.id
    );
    const Research: ResearchMasterDto = {
      id: +research.id,
      report: research.report,
      price: +research.price,
      categoryName: "",
      reportType: "",
      description: "",
      author: "",
      mAuthor: "",
      publishDate: new Date(),
      price2: 0,
      tableOfContent: "",
    };
    if (existingCartItem) {
      this.alertType = "Failed";
      this.message = "This item is already in the cart.";
      this.showCustomAlert();
    } else {
      this.alertType = "Success";
      this.message = "This item was added to cart.";
      this.cartService.addToCart(Research);
      this.showCustomAlert();
      this.router.navigate(["/cart"]);
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
    if (!this.categoryOptions.includes(option)) {
      this.categoryOptions.push(option);
    } else {
      const index = this.categoryOptions.indexOf(option);
      if (index !== -1) {
        this.categoryOptions.splice(index, 1);
      }
    }
    this.selectedOptions = [
      ...this.reportTypeOptions,
      ...this.categoryOptions,
      ...this.regionNameOptions,
      ...this.authorsOptions,
    ];
    this.updateMappedReports("category");
  }

  onAuthorClick(option: string) {
    if (!this.authorsOptions.includes(option)) {
      this.authorsOptions.push(option);
    } else {
      const index = this.authorsOptions.indexOf(option);
      if (index !== -1) {
        this.authorsOptions.splice(index, 1);
      }
    }
    this.selectedOptions = [
      ...this.reportTypeOptions,
      ...this.categoryOptions,
      ...this.regionNameOptions,
      ...this.authorsOptions,
    ];
    this.updateMappedReports("authors");
  }

  onReportCheck(event: any, option: string) {
    if (event.target && event.target.checked) {
      this.reportTypeOptions.push(option);
    } else {
      const index = this.reportTypeOptions.indexOf(option);
      if (index !== -1) {
        this.reportTypeOptions.splice(index, 1);
      }
    }
    this.selectedOptions = [
      ...this.reportTypeOptions,
      ...this.categoryOptions,
      ...this.regionNameOptions,
      ...this.authorsOptions,
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
      ...this.reportTypeOptions,
      ...this.categoryOptions,
      ...this.regionNameOptions,
      ...this.authorsOptions,
    ];
    this.updateMappedReports("category");
  }

  onRegionCheck(event: any, option: string) {
    if (event.target && event.target.checked) {
      this.regionNameOptions.push(option);
    } else {
      const index = this.regionNameOptions.indexOf(option);
      if (index !== -1) {
        this.regionNameOptions.splice(index, 1);
      }
    }
    this.selectedOptions = [
      ...this.reportTypeOptions,
      ...this.categoryOptions,
      ...this.regionNameOptions,
      ...this.authorsOptions,
    ];
    this.updateMappedReports("regionName");
  }

  onAnalystCheck(event: any, option: string) {
    if (event.target && event.target.checked) {
      this.authorsOptions.push(option);
    } else {
      const index = this.authorsOptions.indexOf(option);
      if (index !== -1) {
        this.authorsOptions.splice(index, 1);
      }
    }
    this.selectedOptions = [
      ...this.reportTypeOptions,
      ...this.categoryOptions,
      ...this.regionNameOptions,
      ...this.authorsOptions,
    ];
    this.updateMappedReports("authors");
  }

  updateMappedReports(type: string) {
    // This will be the search criteria list to be updated
    let filterArray: any[] = [...this.searchObject.searchCriteriaList];

    // Check if there's already a criteria for the given type
    const criteriaIndex = filterArray.findIndex(
      (criteria) => criteria.filterKey === type
    );

    // Depending on the type, apply appropriate filtering logic
    if (type === "category") {
      const filteredReports = this.mappedReports.filter((report) =>
        this.categoryOptions.includes(report.categoryName)
      );
      this.mappedReports =
        filteredReports.length > 0 ? filteredReports : this.mappedReports;
    } else if (type === "reportType") {
      const filteredReports = this.mappedReports.filter((report) =>
        this.reportTypeOptions.includes(report.reportType)
      );
      this.mappedReports =
        filteredReports.length > 0 ? filteredReports : this.mappedReports;
    } else if (type === "author") {
      const filteredReports = this.mappedReports.filter((report) =>
        this.authorsOptions.includes(report.author)
      );
      this.mappedReports =
        filteredReports.length > 0 ? filteredReports : this.mappedReports;
    } else if (type === "regionName") {
      const filteredReports = this.mappedReports.filter((report) =>
        this.regionNameOptions.includes(report.region)
      );
      this.mappedReports =
        filteredReports.length > 0 ? filteredReports : this.mappedReports;
    }

    // Create or update the filter criteria
    const newCriteriaValue = this[type + "Options"].join(", ");

    if (criteriaIndex !== -1) {
      // If criteria exists, update its value
      filterArray[criteriaIndex].value = newCriteriaValue;
    } else {
      // Otherwise, create a new one
      filterArray.push({
        filterKey: type,
        value: newCriteriaValue,
        operation: "in",
      });
    }

    // Remove duplicate criteria for the same filterKey
    filterArray = filterArray.reduce((acc, item) => {
      const existingIndex = acc.findIndex(
        (criteria: any) => criteria.filterKey === item.filterKey
      );
      if (existingIndex !== -1) {
        acc[existingIndex] = item; // Keep the last instance
      } else {
        acc.push(item);
      }
      return acc;
    }, []);

    // Ensure empty criteria are removed
    this.searchObject.searchCriteriaList = filterArray.filter(
      (criteria) => criteria.value.trim() !== ""
    );

    // Set dataOption to "all"
    this.searchObject.dataOption = "all";

    if (
      this.selectedOptions.length > 0 ||
      this.searchObject.searchCriteriaList.length > 0
    ) {
      this.isLoading = true;
      this.apiService
        .serachFilters(this.searchObject, this.currentPage, this.itemsPerPage)
        .subscribe(
          (data) => {
            // Handle API response
            this.mappedReports = data.researchMasterList.map((report: any) => {
              return {
                ...report,
                publishDate: this.epochToDate(report.publishDate),
              };
            });
            this.currentPage = data.pagination.currentPage + 1;
            this.itemsPerPage = data.pagination.pageSize;
            this.totalPages = data.pagination.totalPages;
          },
          (error) => {
            console.error("API error:", error);
          }
        );
      this.isLoading = false;
      this.onPageChange(1);
    } else {
      this.loadResearchData();
    }
  }

  removeOption(index: number) {
    const removedOption: any = this.selectedOptions[index];
    this.selectedOptions.splice(index, 1);

    // Remove the option from specific arrays if it exists
    if (this.reportTypeOptions.includes(removedOption)) {
      const reportIndex = this.reportTypeOptions.indexOf(removedOption);
      this.reportTypeOptions.splice(reportIndex, 1);
    }
    if (this.categoryOptions.includes(removedOption)) {
      const domainIndex = this.categoryOptions.indexOf(removedOption);
      this.categoryOptions.splice(domainIndex, 1);
    }
    if (this.regionNameOptions.includes(removedOption)) {
      const regionIndex = this.regionNameOptions.indexOf(removedOption);
      this.regionNameOptions.splice(regionIndex, 1);
    }
    if (this.authorsOptions.includes(removedOption)) {
      const analystIndex = this.authorsOptions.indexOf(removedOption);
      this.authorsOptions.splice(analystIndex, 1);
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
    if (
      this.selectedOptions.length > 0 ||
      this.searchObject.searchCriteriaList.length > 0
    ) {
      this.loadSearchData();
      this.onPageChange(1);
    } else if (
      this.selectedOptions.length <= 0 ||
      this.searchObject.searchCriteriaList.length < 0
    ) {
      this.loadResearchData();
      this.onPageChange(1);
    }
  }

  loadResearchData(): void {
    this.isLoading = true;
    this.isSubscribed =
      localStorage.getItem("isSubscribed") === "true" ? true : false;
    console.log(this.isSubscribed);
    const apiCall = this.isSubscribed
      ? this.apiService.getReseachListSubscribed(
          this.currentPage,
          this.itemsPerPage
        )
      : this.isLogin
      ? this.apiService.getReseachListToken(this.currentPage, this.itemsPerPage)
      : this.apiService.getReseachList(this.currentPage, this.itemsPerPage);

    apiCall.subscribe((data: any) => {
      this.Reports = data.researchMasterList;
      this.mappedReports = this.Reports;

      data.researchMasterList.forEach((item: any) => {
        if (!this.authorsSet.has(item.author)) {
          this.authorsSet.add(item.author);
        }
        if (!this.authorsSet.has(item.mauthor)) {
          this.authorsSet.add(item.mauthor);
        }
      });
      // console.log("author array", this.authorsArray);
      this.mappedReports.sort((a, b) => b.publishDate - a.publishDate);
      this.mappedReports = this.mappedReports.map((report: any) => {
        return {
          ...report,
          publishDate: this.epochToDate(report.publishDate),
        };
      });

      // this.totalPages = data.researchMasterList.length / this.itemsPerPage;
      this.currentPage = data.pagination.currentPage + 1;
      this.itemsPerPage = data.pagination.pageSize;
      this.totalPages = data.pagination.totalPages;
      this.isLoading = false;
    });
  }

  loadSearchData(): void {
    const apiCall = this.isSubscribed
      ? this.apiService.serachFiltersToken(
          this.searchObject,
          this.currentPage,
          this.itemsPerPage
        )
      : this.apiService.serachFilters(
          this.searchObject,
          this.currentPage,
          this.itemsPerPage
        );
    apiCall.subscribe((response) => {
      this.mappedReports = response.researchMasterList;
      this.mappedReports.sort(
        (a: any, b: any) => b.publishDate - a.publishDate
      );
      this.mappedReports = this.mappedReports.map((report: any) => {
        return {
          ...report,
          publishDate: this.epochToDate(report.publishDate),
        };
      });

      // this.totalPages =
      //   response.researchMasterList.length / this.itemsPerPage;
      this.currentPage = response.pagination.currentPage + 1;
      this.itemsPerPage = response.pagination.pageSize;
      this.totalPages = response.pagination.totalPages;
    });
  }
  getFirstParagraph(htmlContent: string): string {
    if (/<[a-z][\s\S]*>/i.test(htmlContent)) {
      const parser = new DOMParser();
      const parsedHtml: any = parser.parseFromString(htmlContent, "text/html");
      const paragraphs: any = Array.from(parsedHtml.querySelectorAll("p"));

      // Find the first non-empty paragraph
      const nonEmptyParagraph: any = paragraphs.find(
        (p: any) => p.textContent.trim() !== ""
      );

      let firstParagraph = nonEmptyParagraph
        ? nonEmptyParagraph.textContent.trim()
        : parsedHtml.querySelector("body").textContent.trim();
      firstParagraph = this.removeQuotesAtStartAndEnd(firstParagraph);

      let first100 = this.getFirst100Words(firstParagraph);

      first100 = this.removeQuotesAtStartAndEnd(first100);
      // Apply CSS for font size
      parsedHtml.querySelector("body").style.fontSize = "18px";
      paragraphs.forEach((p: any) => {
        p.style.fontSize = "18px";
      });
      return first100 ? `${first100}...` : "";
    } else {
      // If htmlContent is empty or doesn't contain HTML tags, return the first 100 words directly

      return this.getFirst100Words(htmlContent);
    }
  }

  removeQuotesAtStartAndEnd(content: string): string {
    if (content.startsWith('"') && content.endsWith('"')) {
      return content.slice(1, -1);
    }
    return content;
  }

  getFirst100Words(paragraph: string): string {
    const words = paragraph.split(/\s+/); // Split the paragraph into words using whitespace as delimiter
    const first100 = words.slice(0, 40).join(" "); // Take the first 100 words and join them back with spaces
    return `${first100}`;
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

  closeCustomAlert(): void {
    const customAlert = document.getElementById("customAlert");
    if (customAlert) {
      customAlert.style.display = "none";
    }
    this.showOverlay = false;
  }

  replaceSpaces(value: string): string {
    const regexPattern = /[^a-zA-Z0-9\s]/g;

    if (value && typeof value === "string") {
      return value
        .replace(regexPattern, " ")
        .replace(/\s+/g, "-")
        .toLowerCase();
    } else {
      return "";
    }
  }

  researchHref(name: string, id: any) {
    let nameChange = this.replaceSpaces(name);
    let href = "/market-research/" + nameChange + "-" + id;
    const objIndex = _.findIndex(
      this.oldUrlData,
      (item: any) => item.URL_ID == id
    );
    if (objIndex !== -1) {
      href = this.oldUrlData[objIndex].To_URL;
    }

    return href;
  }

  toggleResearchType(isSubscribed: boolean): void {
    localStorage.setItem("isSubscribed", String(isSubscribed));
    this.isSubscribed =
      localStorage.getItem("isSubscribed") === "true" ? true : false;
    if (this.isSubscribed) {
      this.searchObject.isSubscribed = true;
    } else {
      delete this.searchObject.isSubscribed;
    }
    if (this.searchObject.searchCriteriaList.length > 0) {
      this.loadSearchData();
    } else {
      this.loadResearchData();
    }
  }

  navigateToResearchSingle(research: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        research: research,
      },
    };
    const reportSlug = research.report.replace(/\s+/g, "-");
    this.router.navigate(["/market-research", `${reportSlug}-${research.id}`]);
  }

  downloadResearch(id: any, reportName: any) {
    this.apiService.downloadReport(id, reportName).subscribe(
      (data) => {
        this.saveFile(data.blob, data.filename);
      },
      (error) => {
        console.error("Error downloading report:", error);
      }
    );
  }

  readReport(id: any, reportName: any) {
    this.apiService.downloadReport(id, reportName).subscribe(
      (data) => {
        this.readView(data.blob, data.filename);
      },
      (error) => {
        console.error("Error downloading report:", error);
      }
    );
  }

  private readView(blobData: any, filename: any) {
    const blob = new Blob([blobData], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
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
