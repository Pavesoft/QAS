import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { EcommBackendService } from "../Services/ecomm-backend-service.service";
import { ResearchMasterDto } from "../Interfaces/research-master-dto";
import { ActivatedRoute, Router } from "@angular/router";
import { CartService } from "../Services/cart.service";
import { CurrentResearchService } from "../Services/current-research.service";
import { MatSelectChange } from "@angular/material/select";
import { ApiResponse, PaginationMetadata } from "../Interfaces/api-response";
import { ViewportScroller } from "@angular/common";

@Component({
  selector: "app-thankyou",
  templateUrl: "./thankyou.component.html",
  styleUrls: ["./thankyou.component.scss"],
})
export class ThankyouComponent {
  @ViewChild("topElement", { static: true })
  topElement!: ElementRef;
  ElementRef: any;

  formType: string | undefined;

  isLoading: boolean = true;
  researchData: ResearchMasterDto[] = [];
  sortedResearchData: ResearchMasterDto[] = [];
  p: any; // Current page number
  pageSize: any; // Number of items per page
  totalItems: any; // Total number of research items
  totalResearchCount: any;
  currentPage: any;
  paginationMetadata!: PaginationMetadata;
  alertType = "";
  message = "";
  cart: {
    research: ResearchMasterDto;
    quantity: number;
    totalPrice: number;
  }[] = [];
  totalCartNo: any;
  showOverlay: boolean = false;
  loading: boolean = false;
  searchText = "";
  filterOption: any[] = []; // Initialize the filterOption array
  selectedFilters: number[] = [];
  collection: any = [];
  originalCollection: any = [];
  selectedReportType: any = {};
  selectedCategories: any = [];

  isCoverageSelected: boolean = true;
  reportOrBlogName: any;
  reportType: any;
  reportId: any;
  reportType1: any;

  constructor(
    private researchService: EcommBackendService,
    private router: Router,
    private cartService: CartService,
    private setResearchService: CurrentResearchService,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {
    // this.paginationMetadata = null;
  }

  ngOnInit(): void {
    this.renderer.setProperty(document.documentElement, "scrollTop", 0);
    this.renderer.setProperty(document.body, "scrollTop", 0);

    this.route.params.subscribe((params) => {
      this.formType = params["formType"];
    });

    this.route.params.subscribe((params) => {
      this.reportType1 = params["type"];
      this.reportId = params["id"];

      // Use this.reportType and this.reportId to customize the content of the thank you page
    });

    this.route.queryParams.subscribe((params) => {
      // Check for query parameters and apply filters accordingly
      if (params["reportType"]) {
        console.clear();
        // console.log(params);
        this.selectedReportType = params["reportType"];

        // console.log(this.selectedReportType);
      }
      if (params["categories"]) {
        const categoryNames = params["categories"].split(",");
        categoryNames.forEach((categoryName: any) => {
          this.selectedCategories[categoryName] = true;
        });
      }

      // Call your filter function here to apply filters
      // this.applyFilters();
    });

    this.researchService.getTotalResearch().subscribe((res: any) => {
      // ////console.log(res.count)
      this.totalItems = res.count;
    });

    this.paginationMetadata = {
      currentPage: 1,
      pageSize: 20,
      totalItems: this.totalItems,
      totalPages: 1,
    };

    // this.getResearchData(this.paginationMetadata.currentPage,this.paginationMetadata.pageSize);
    this.currentPage = this.paginationMetadata.currentPage;
    this.pageSize = this.paginationMetadata.pageSize;
    this.getData(
      this.paginationMetadata.currentPage,
      this.paginationMetadata.pageSize
    );
  }

  // resetFilters() {
  //     this.isLoading = true;
  //     this.collection = []
  //     this.getData(0, 2000);
  // }

  getData(currentPage: any, pageSize: any) {
    this.researchService
      .getResearchWithNgxPagination("0", "1000")
      .subscribe((dat: any) => {
        if (dat.success) {
          this.isLoading = false;

          // //console.log(dat.researchMasterList.length);
          for (let i = 0; i < dat.researchMasterList.length; i++) {
            this.collection.push(dat.researchMasterList[i]);
            this.originalCollection.push(dat.researchMasterList[i]);
          }

          if (this.selectedReportType != "[object Object]") {
            this.applyFilters();
          }

          // //console.log(this.collection);
        }
      });
  }

  printId(id: any, category: string) {
    // //console.log(id);

    const existingIndex = this.filterOption.findIndex(
      (item) => item.id === id && item.category === category
    );
    if (existingIndex !== -1) {
      // Remove the item with matching ID and category
      this.filterOption.splice(existingIndex, 1);
    } else {
      if (category === "reportType") {
        // Remove any items from the 'category' category
        this.filterOption = this.filterOption.filter(
          (item) => item.category !== "category"
        );
      } else if (category === "category") {
        // Remove any items from the 'reportType' category
        this.filterOption = this.filterOption.filter(
          (item) => item.category !== "reportType"
        );
      }

      // Add a new item with the ID and category
      this.filterOption.push({ id, category });
    }

    // //console.log(this.filterOption);
  }

  isReportTypeSelected(id: any): boolean {
    return this.filterOption.some(
      (item) => item.id === id && item.category === "reportType"
    );
  }

  isCategorySelected(id: any): boolean {
    return this.filterOption.some(
      (item) => item.id === id && item.category === "category"
    );
  }

  getFormattedDescription(description: any): string {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = description;
    return tempElement.innerText.trim();
  }

  capitalizeFirstChar(author: string): string {
    if (author) {
      return author.charAt(0).toUpperCase() + author.slice(1);
    }
    return author;
  }

  resetFilters() {
    this.collection = this.originalCollection;
    this.selectedReportType = null; // Reset selected report type
    this.selectedCategories = []; // Reset selected categories
  }

  applyFilters() {
    // Filter the originalCollection based on selectedReportType and selectedCategories
    //   console.log(this.selectedCategories);

    const selectedCategoryNames = Object.keys(this.selectedCategories).filter(
      (categoryName) => this.selectedCategories[categoryName]
    );

    //   console.log(selectedCategoryNames);

    this.collection = this.originalCollection.filter((research: any) => {
      const reportTypeMatch = this.selectedReportType
        ? research.reportType === this.selectedReportType
        : true;
      const categoryMatch =
        selectedCategoryNames.length === 0
          ? true
          : selectedCategoryNames.includes(research.categoryName);
      return reportTypeMatch && categoryMatch;
    });

    // Construct a query parameter object
    const queryParams: any = {};
    if (this.selectedReportType) {
      queryParams.reportType = this.selectedReportType;
    }
    if (selectedCategoryNames.length > 0) {
      queryParams.categories = selectedCategoryNames.join(",");
    }

    // Use the router to navigate to the new URL with query parameters
    this.router.navigate(["/market-research"], { queryParams: queryParams });
  }

  onReportTypeChange(event: MatSelectChange): void {
    // Access the selected report type ID
    const selectedReportTypeId = event.value;

    this.selectedReportType = selectedReportTypeId;
    //   console.log(this.selectedReportType)
  }

  onCategoryChange(event: MatSelectChange): void {
    // Access the selected category IDs (an array)
    const selectedCategoryIds = event.value;

    this.selectedCategories = selectedCategoryIds;
    //   console.log(this.selectedCategories)
  }

  // this is filter api for report type
  getFilteredResearchData(
    isCoverageSelected: boolean,
    reportTypeIds: number[],
    currentPage: any,
    pageSize: any
  ): void {
    this.sortedResearchData = [];
    // check if coverage is selected or type is selected
    // //console.log("is coverage selected "+ isCoverageSelected);

    if (isCoverageSelected) {
      this.researchService
        .getResearchDataWithFilterCoverage(reportTypeIds, "1", "1000")
        .subscribe(
          (response: any) => {
            // //console.log("inside report coverage filter")
            if (response.success) {
              response.researchMasterList.forEach((element: any) => {
                this.collection.push(element);
              });

              this.isLoading = false;
            } else {
              console.error("Failed to fetch research data:", response.message);
              this.isLoading = false;
            }
          },
          (error) => {
            console.error("An error occurred:", error);
            this.isLoading = false;
          }
        );
    } else {
      this.researchService
        .getResearchDataWithFilterType(reportTypeIds, "0", "1000")
        .subscribe(
          (response: any) => {
            // //console.log("inside report type filter")
            // //console.log(response)
            if (response.success) {
              response.researchMasterList.forEach((element: any) => {
                this.collection.push(element);
              });

              this.isLoading = false;
            } else {
              console.error("Failed to fetch research data:", response.message);
              this.isLoading = false;
            }
          },
          (error) => {
            console.error("An error occurred:", error);
            this.isLoading = false;
          }
        );
    }
  }

  getUrlFriendlyString(input: string): string {
    // Replace special characters with dashes and convert to lowercase
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-");
  }

  showResearchDetails(research: any): void {
    // ////console.log(research)

    this.setResearchService.setResearchDetails(research);

    //   console.log(this.setResearchService.getResearchId())

    const urlFriendlyName = this.getUrlFriendlyString(research.report);

    const url = `/market-research/${urlFriendlyName}-${research.id}`;
    //   console.log(history)
    if (research && research.id && research.report) {
      this.router.navigate([url], {
        state: {
          researchData: research,
        },
      });
      // window.open(url, '_blank');
    } else {
      console.error("Selected research not found in the filtered data.");
    }
  }

  addToCart(research: ResearchMasterDto): void {
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

  getTotalCartItems(): number {
    // ////console.log(this.cartService.getCart().length)
    return this.cartService.getCart().length;
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

  searchReportByName(reportName: any) {
    // //console.log(reportName)
    this.collection = [];
    this.isLoading = true;
    this.researchService
      .getResearchDataByName(reportName, "1", "1000")
      .subscribe(
        (response: ApiResponse) => {
          if (response.success) {
            response.researchMasterList.forEach((element: any) => {
              this.collection.push(element);
            });
            this.isLoading = false;
          } else {
            console.error("Failed to fetch research data:", response.message);
            this.isLoading = false;
          }
        },
        (error) => {
          console.error("An error occurred:", error);
          this.isLoading = false;
          alert("No Result Found !");
        }
      );
  }

  getCartItems(): number {
    this.totalCartNo = this.cartService.getTotalCartItems();
    // ////console.log(this.totalCartNo)
    return this.cartService.getTotalCartItems();
  }

  showCustomAlert(): void {
    this.showOverlay = true; // Assuming this is for showing an overlay or backdrop

    setTimeout(() => {
      const customAlert = document.getElementById("customAlert");
      if (customAlert) {
        customAlert.style.display = "block";

        setTimeout(() => {
          customAlert.style.display = "none"; // Hide the alert after one second
          this.showOverlay = false; // Hide the overlay as well, if applicable
        }, 1000);
      }
    }, 1000);
  }

  closeCustomAlert(): void {
    const customAlert = document.getElementById("customAlert");
    if (customAlert) {
      customAlert.style.display = "none";
    }
    this.showOverlay = false;
  }
}
