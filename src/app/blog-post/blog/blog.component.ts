import { Component, Renderer2 } from "@angular/core";
import {
  ApiResponse,
  PaginationMetadata,
} from "src/app/Interfaces/api-response";
import {
  PressReleseList,
  ResearchMasterDto,
} from "src/app/Interfaces/research-master-dto";
import { CartService } from "src/app/Services/cart.service";
import { Router } from "@angular/router";

import { EcommBackendService } from "src/app/Services/ecomm-backend-service.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent {
  researchData: PressReleseList[] = [];
  sortedResearchData: PressReleseList[] = [];
  collection: any = [];
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

  isCoverageSelected: boolean = true;

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

  getFormattedTitle(title: any): string {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = title;
    return tempElement.innerText.trim();
  }

  capitalizeFirstChar(author: string): string {
    if (author) {
      return author.charAt(0).toUpperCase() + author.slice(1);
    }
    return author;
  }

  // This is the method that load all research from db on page load
  getResearchData(page: any, pageSize: any): void {
    this.loading = true;
    this.researchService.getBlogList("0", "100").subscribe(
      (response: any) => {
        //console.log(response)
        if (response.success) {
          // console.log(response);
          response.blogList.forEach((element: any) => {
            const myString = element.postImgPath;
            const containsTab = myString.includes("\t");
            if (containsTab) {
              element.postImgPath = myString.replace(/\t/g, "");
            }
            this.collection.push(element);
            this.loading = false;
          });

          // Retrieve the total research count
          this.researchService.getTotalResearchCount().subscribe(
            (count: number) => {
              this.totalResearchCount = count;
              this.loading = false;
            },
            (error) => {
              console.error("Failed to fetch total research count:", error);
              this.loading = false;
            }
          );
        } else {
          console.error("Failed to fetch research data:", response.message);
          this.loading = false;
        }
      },
      (error) => {
        console.error("An error occurred:", error);
        this.loading = false;
      }
    );
  }

  // this is filter api for report type

  getUrlFriendlyString(input: string): string {
    // Replace special characters with dashes and convert to lowercase
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-");
  }

  showResearchDetails(blog: any): void {
    // //console.log(research)
    //console.log(research)
    const urlFriendlyName = this.getUrlFriendlyString(blog.blogTitle);
    const url = `/blogs/${urlFriendlyName}-${blog.id}`;
    // console.log(history);
    if (blog && blog.id && blog.blogTitle) {
      //console.log(research.blogTitle)
      this.router.navigate([url], {
        state: {
          blogData: blog,
        },
      });
    } else {
      console.error("Selected research not found in the filtered data.");
    }
  }

  downloadForm(research: any) {
    //console.log(research)

    const urlFriendlyName = this.getUrlFriendlyString(research.blogTitle);
    const url = `/download-form/${urlFriendlyName}${research.id}`;

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

  /*
  searchReportByName(){
    this.sortedResearchData = this.researchData.filter(research =>
      research.report.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  */

  searchReportByName(reportName: any) {
    //console.log(reportName)
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
            this.loading = false;
          } else {
            console.error("Failed to fetch research data:", response.message);
            this.loading = false;
          }
        },
        (error: any) => {
          console.error("An error occurred:", error);
          this.loading = false;
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

      this.getResearchData(page, this.pageSize);

      if (this.message === "Cannot fetch the result") {
        alert("end of result");
      }
    }
  }
}
