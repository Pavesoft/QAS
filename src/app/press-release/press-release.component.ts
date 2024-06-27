import { Component, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import {
  ApiResponse,
  PaginationMetadata,
} from "src/app/Interfaces/api-response";
import {
  PressReleseList,
  ResearchMasterDto,
} from "src/app/Interfaces/research-master-dto";
import { CartService } from "src/app/Services/cart.service";
import { EcommBackendService } from "src/app/Services/ecomm-backend-service.service";

@Component({
  selector: "app-press-release",
  templateUrl: "./press-release.component.html",
  styleUrls: ["./press-release.component.scss"],
})
export class PressReleaseComponent implements OnInit {
  researchData: PressReleseList[] = [];
  sortedResearchData: PressReleseList[] = [];
  p: any; // Current page number
  pageSize: any; // Number of items per page
  totalItems: any; // Total number of research items
  totalResearchCount: any;
  currentPage: any;
  paginationMetadata!: PaginationMetadata;
  alertType = "";
  message = "";
  cart: { research: PressReleseList; quantity: number; totalPrice: number }[] =
    [];
  totalCartNo: any;
  showOverlay: boolean = false;
  isLoading: boolean = false;
  loading: boolean = false;
  searchText = "";
  filterOption: any[] = []; // Initialize the filterOption array
  selectedFilters: number[] = [];

  categories = [
    { id: 1, category_name: "Application Development" },
    { id: 2, category_name: "Banking & Financial Services" },
    { id: 3, category_name: "BPM & Process Automation" },
    { id: 4, category_name: "Cloud Management" },
    { id: 5, category_name: "Comm. & Collaboration" },
    { id: 6, category_name: "CX and MarTech" },
    { id: 7, category_name: "Data Management" },
    { id: 8, category_name: "Data, Analytics and AI" },
    { id: 9, category_name: "EA Planning" },
    { id: 10, category_name: "Enterprise IT Services" },
    { id: 11, category_name: "Financial Crime & Compliance" },
    { id: 12, category_name: "IT Infrastructure & Networking" },
    { id: 13, category_name: "Information Security" },
    { id: 14, category_name: "Integrated Risk Management" },
    { id: 15, category_name: "IoT and Digitalization" },
    { id: 16, category_name: "HRTech" },
    { id: 17, category_name: "Privacy Management" },
    { id: 18, category_name: "Procurement" },
    { id: 19, category_name: "Project & Portfolio Mgmt." },
    { id: 20, category_name: "Retail & eCommerce" },
    { id: 21, category_name: "Supply Chain Management" },
  ];

  reportType = [
    { id: 1, report_name: "DataSheet" },
    { id: 2, report_name: "Knowledge Brief" },
    { id: 3, report_name: "Market Insight" },
    { id: 4, report_name: "Market outlook" },
    { id: 5, report_name: "SPARK Matrix" },
    { id: 6, report_name: "Market Forecast" },
    { id: 7, report_name: "Market Share" },
  ];
  isCoverageSelected: boolean = true;
  metaService: any;

  constructor(
    private researchService: EcommBackendService,
    private router: Router,
    private cartService: CartService,
    private renderer: Renderer2
  ) {
    // this.paginationMetadata = null;
  }

  ngOnInit(): void {
    this.renderer.setProperty(document.documentElement, "scrollTop", 0);
    this.renderer.setProperty(document.body, "scrollTop", 0);

    this.researchService.getTotalResearch().subscribe((res: any) => {
      //console.log(res.count)
      this.totalItems = res.count;
    });

    this.paginationMetadata = {
      currentPage: 1,
      pageSize: 20,
      totalItems: this.totalItems,
      totalPages: 100,
    };

    this.getResearchData(
      this.paginationMetadata.currentPage,
      this.paginationMetadata.pageSize
    );
    this.currentPage = this.paginationMetadata.currentPage;
    this.pageSize = this.paginationMetadata.pageSize;
  }

  printId(id: any, category: string) {
    //console.log(id);

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

    //console.log(this.filterOption);
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

  onReportTypeChange(reportId: number) {
    // Clear the selection of corresponding research coverage checkboxes
    this.categories.forEach((category) => {
      if (this.filterOption[reportId]) {
        // If the report type checkbox is selected, clear the corresponding research coverage checkbox
        this.filterOption[category.id] = false;
      }
    });
  }

  onCategoryChange(categoryId: number) {
    // Clear the selection of corresponding report type checkboxes
    this.reportType.forEach((report) => {
      if (this.filterOption[categoryId]) {
        // If the research coverage checkbox is selected, clear the corresponding report type checkbox
        this.filterOption[report.id] = false;
      }
    });
  }

  applyFilters(): void {
    if (this.filterOption[0].category === "category") {
      this.selectedFilters = [];

      this.selectedFilters = this.filterOption.map((option) => option.id);

      //console.log(this.filterOption[0].category)
      //console.log(this.selectedFilters)

      this.isCoverageSelected = true;
    } else if (this.filterOption[0].category === "reportType") {
      this.selectedFilters = [];

      this.selectedFilters = this.filterOption.map((option) => option.id);

      //console.log(this.filterOption[0].category)
      //console.log(this.selectedFilters)

      this.isCoverageSelected = false;
      //console.log(this.isCoverageSelected)
    }

    //console.log(this.selectedFilters)
    this.currentPage = 1; // Reset the current page to 1
  }

  getUrlFriendlyString(input: string): string {
    // Replace special characters with dashes and convert to lowercase
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-");
  }

  showResearchDetails(research: any): void {
    // //console.log(research)
    //console.log(research)
    const urlFriendlyName = this.getUrlFriendlyString(research.blogTitle);
    const url = `/press-release/${urlFriendlyName}-${research.id}`;

    if (research && research.id && research.blogTitle) {
      //console.log(research.blogTitle)
      this.router.navigate([url], {
        state: {
          researchData: research,
        },
      });
    } else {
      console.error("Selected research not found in the filtered data.");
    }
  }

  // This is the method that load all research from db on page load
  getResearchData(page: any, pageSize: any): void {
    this.isLoading = true;
    this.researchService.getPressReleaseData("0", "250").subscribe(
      (response: any) => {
        if (response) {
          //console.log(response)
          this.paginationMetadata = response.pagination;
          this.researchData = response.blogList;
          this.sortedResearchData = this.researchData;
          console.log("this.dorteddata", this.sortedResearchData);
          this.paginationMetadata = response.pagination;
          this.message = response.message;
          this.totalResearchCount = response.count;
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
    ////console.log(this.cartService.getCart().length)
    return this.cartService.getCart().length;
  }

  buyNow(research: ResearchMasterDto) {
    this.router.navigate(["/cart"], {
      queryParams: {
        productId: research.id,
        productName: research.report,
        price: research.price,
        quantity: 1,
      },
    });
  }

  /*
    searchReportByName(){
      this.sortedResearchData = this.researchData.filter(research =>
        research.report.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    */

  searchReportByName(reportName: any) {
    //console.log(reportName)
    this.isLoading = true;
    this.researchService
      .getResearchDataByName(
        reportName,
        this.paginationMetadata.currentPage,
        this.pageSize
      )
      .subscribe(
        (response: ApiResponse) => {
          if (response.success) {
            this.researchData = response.blogList;
            this.sortedResearchData = this.researchData;
            this.totalResearchCount = response.pagination.totalItems;
            this.paginationMetadata = response.pagination;
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

  // Calculate the range of pages to display in the pagination control
  getPaginationRange(): number[] {
    const start = Math.max(this.currentPage - 2, 1);
    const end = Math.min(
      start + 4,
      Math.ceil(
        this.paginationMetadata.totalItems / this.paginationMetadata.pageSize
      )
    );

    return Array.from(
      {
        length: end - start + 1,
      },
      (_, i) => i + start
    );
  }

  // Method to navigate to a specific page
  goToPage(page: number): void {
    //console.log(page)
    if (page >= 1 && page <= this.paginationMetadata?.totalPages) {
      this.currentPage = page;
      //console.log(this.selectedFilters)
      if (this.selectedFilters.length === 0) {
        this.getResearchData(page, this.pageSize);
      }
      if (this.message === "Cannot fetch the result") {
        alert("end of result");
      }
    }
  }

  getCartItems(): number {
    this.totalCartNo = this.cartService.getTotalCartItems();
    ////console.log(this.totalCartNo)
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
