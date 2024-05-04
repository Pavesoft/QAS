import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../Services/research-services";
import { ResearchMasterDto } from "../Interfaces/research-master-dto";
import { CartService } from "../Services/cart.service";

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
    private apiService: ApiService,
    private cartService: CartService
  ) {}

  research: any;
  reportTypeData: string[] = [];
  categoryData: string[] = [];
  Reports: any;
  mappedReports: any[] = [];
  authorsArray: any[] = [];
  authorsSet = new Set();
  isSubscribed: any = "";
  isLoading: boolean = true;
  alertType = "";
  message = "";
  showOverlay: boolean = false;
  cart: {
    research: ResearchMasterDto;
    quantity: number;
    totalPrice: number;
  }[] = [];

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

  readReport(id: any) {
    this.apiService.downloadReport(id).subscribe(
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
    console.log(research);

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

  private getUrlFriendlyString(input: string): string {
    // Replace special characters with dashes and convert to lowercase
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-");
  }

  ngOnInit(): void {
    const researchId: any = this.route.snapshot.paramMap.get("id");
    this.isSubscribed = this.route.snapshot.paramMap.get("subscribed");

    this.apiService.getResearchById(researchId).subscribe((data: any) => {
      this.Reports = data.researchMaster;
      this.Reports.publishDate = this.epochToDate(this.Reports.publishDate);
      this.isLoading = false;
    });
    // if (isSubscribed == "true") {
    //   this.isLoading = true;
    //   this.apiService.getReseachListSubscribed().subscribe((data: any) => {
    //     const filterData = data.researchMasterList.filter(
    //       (item: any) => item.id === parseInt(researchId)
    //     );

    //     this.Reports = filterData[0];
    //     this.Reports.publishDate = this.epochToDate(this.Reports.publishDate);
    //     this.isLoading = false;
    //   });
    // } else {
    //   this.isLoading = true;
    //   this.apiService.getReseachList().subscribe((data: any) => {
    //     const filterData = data.researchMasterList.filter(
    //       (item: any) => item.id === parseInt(researchId)
    //     );
    //     this.Reports = filterData[0];
    //     console.log(this.Reports);
    //     this.Reports.publishDate = this.epochToDate(this.Reports.publishDate);
    //     this.isLoading = false;
    //   });
    // }

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
