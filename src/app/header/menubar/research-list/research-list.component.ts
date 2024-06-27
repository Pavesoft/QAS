import { Component, OnInit, Renderer2 } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ApiResponse,
  PaginationMetadata,
} from "src/app/Interfaces/api-response";
import { ResearchMasterDto } from "src/app/Interfaces/research-master-dto";
import { CartService } from "src/app/Services/cart.service";
import { CurrentResearchService } from "src/app/Services/current-research.service";
import { EcommBackendService } from "src/app/Services/ecomm-backend-service.service";

@Component({
  selector: "app-research-list",
  templateUrl: "./research-list.component.html",
  styleUrls: ["./research-list.component.scss"],
})
export class ResearchListComponent implements OnInit {
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

  categories = [
    {
      id: 1,
      category_name: "Application Development",
    },
    {
      id: 2,
      category_name: "Banking & Financial Services",
    },
    {
      id: 3,
      category_name: "BPM & Process Automation",
    },
    {
      id: 4,
      category_name: "Cloud Management",
    },
    {
      id: 5,
      category_name: "Comm. & Collaboration",
    },
    {
      id: 6,
      category_name: "CX and MarTech",
    },
    {
      id: 7,
      category_name: "Data Management",
    },
    {
      id: 8,
      category_name: "Data, Analytics and AI",
    },
    {
      id: 9,
      category_name: "EA Planning",
    },
    {
      id: 10,
      category_name: "Enterprise IT Services",
    },
    {
      id: 11,
      category_name: "Financial Crime & Compliance",
    },
    {
      id: 12,
      category_name: "IT Infrastructure & Networking",
    },
    {
      id: 13,
      category_name: "Information Security",
    },
    {
      id: 14,
      category_name: "Integrated Risk Management",
    },
    {
      id: 15,
      category_name: "IoT and Digitalization",
    },
    {
      id: 16,
      category_name: "HRTech",
    },
    {
      id: 17,
      category_name: "Privacy Management",
    },
    {
      id: 18,
      category_name: "Procurement",
    },
    {
      id: 19,
      category_name: "Project & Portfolio Mgmt.",
    },
    {
      id: 20,
      category_name: "Retail & eCommerce",
    },
    {
      id: 21,
      category_name: "Supply Chain Management",
    },
  ];

  reportType = [
    // { id: 1, report_name: 'DataSheet' },
    {
      id: 2,
      report_name: "Knowledge Brief",
    },
    {
      id: 3,
      report_name: "Market Insight",
    },
    {
      id: 4,
      report_name: "Market outlook",
    },
    {
      id: 5,
      report_name: "SPARK Matrix",
    },
    {
      id: 6,
      report_name: "Market Forecast",
    },
    {
      id: 7,
      report_name: "Market Share",
    },
  ];
  isCoverageSelected: boolean = true;

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

    this.route.queryParams.subscribe((params) => {
      // Check for query parameters and apply filters accordingly
      if (params["reportType"]) {
        console.clear();
        console.log(params);
        this.selectedReportType = params["reportType"];

        console.log(this.selectedReportType);
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
      totalPages: 100,
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

  // onReportTypeChange(reportId : number) { // Clear the selection of corresponding research coverage checkboxes
  //     this.categories.forEach(category => {
  //         if (this.filterOption[reportId]) { // If the report type checkbox is selected, clear the corresponding research coverage checkbox
  //             this.filterOption[category.id] = false;
  //         }
  //     });
  // }

  // onCategoryChange(categoryId : number) { // Clear the selection of corresponding report type checkboxes
  //     this.reportType.forEach(report => {
  //         if (this.filterOption[categoryId]) { // If the research coverage checkbox is selected, clear the corresponding report type checkbox
  //             this.filterOption[report.id] = false;
  //         }
  //     });
  // }

  resetFilters() {
    this.collection = this.originalCollection;
    this.selectedReportType = null; // Reset selected report type
    this.selectedCategories = []; // Reset selected categories
  }

  applyFilters() {
    // Filter the originalCollection based on selectedReportType and selectedCategories
    console.log(this.selectedCategories);

    const selectedCategoryNames = Object.keys(this.selectedCategories).filter(
      (categoryName) => this.selectedCategories[categoryName]
    );

    console.log(selectedCategoryNames);

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
    console.log(this.selectedReportType);
  }

  onCategoryChange(event: MatSelectChange): void {
    // Access the selected category IDs (an array)
    const selectedCategoryIds = event.value;

    this.selectedCategories = selectedCategoryIds;
    console.log(this.selectedCategories);
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

              // this.collection.pop();
              // this.collection.push(response.researchMasterList);
              // this.sortedResearchData = this.researchData;
              // this.totalResearchCount = response.pagination.totalItems;
              // this.paginationMetadata = response.pagination;
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

              // this.researchData = response.researchMasterList;
              // this.sortedResearchData = this.researchData;
              // this.totalResearchCount = response.pagination.totalItems;
              // this.paginationMetadata = response.pagination;
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

    console.log(this.setResearchService.getResearchId());

    const urlFriendlyName = this.getUrlFriendlyString(research.report);

    const url = `/market-research/${urlFriendlyName}-${research.id}`;
    console.log(history);
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

  /*
    searchReportByName(){
      this.sortedResearchData = this.researchData.filter(research =>
        research.report.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    */

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
