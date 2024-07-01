import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../Services/research-services";
import { ResearchMasterDto } from "../Interfaces/research-master-dto";
import { CartService } from "../Services/cart.service";
import { AuthService } from "../auth.service";
import { Title, Meta } from "@angular/platform-browser";
import * as _ from "lodash";

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
    public authService: AuthService,
    private cartService: CartService,
    private meta: Meta,
    private titleService: Title
  ) {}

  research: any;
  reportTypeData: string[] = [];
  categoryData: string[] = [];
  Reports: any;
  mappedReports: any[] = [];
  authorsArray: any[] = [];
  authorsSet = new Set();
  isSubscribed: any = "";
  oldUrlData: any = "";
  hrefSlug: any = "";
  isLoading: boolean = true;
  isLogin: any;
  alertType = "";
  message = "";
  showOverlay: boolean = false;
  dataFetched: boolean = false;
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
  formatPrice(price: number): string {
    // Convert the number to a string and add commas every three digits from the right
    return price.toLocaleString("en-US");
  }

  goToBack() {
    this.router.navigate(["/market-research"]);
  }
  closeCustomAlert(): void {
    const customAlert = document.getElementById("customAlert");
    if (customAlert) {
      customAlert.style.display = "none";
    }
    this.showOverlay = false;
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
    console.log("href", href);
    // this.updateUrlWithReportName(this.Reports.report, this.Reports.id);
    return href;
  }

  ngOnInit(): void {
    this.httpClient
      .get<any[]>("assets/fonts/data/oldUrlData.json")
      .subscribe((data: any) => {
        this.oldUrlData = data.oldUrlData;
      });

    const accessToken = this.authService.getAccessToken();
    this.isLogin = accessToken !== null ? true : false;
    let id = this.route.snapshot.params["reportName-:reportId"];

    const matches = id.match(/-(\d+)$/); // Extract numeric part following the last dash "-"

    if (matches && matches.length > 1) {
      const reportId = matches[1];
      const apiCall = this.isLogin
        ? this.apiService.getResearchByIdToken(reportId)
        : this.apiService.getResearchById(reportId);
      apiCall.subscribe((data: any) => {
        this.dataFetched = true;

        this.Reports = data.researchMaster;
        this.titleService.setTitle(this.Reports.report);
        this.meta.updateTag({
          property: "og:site_name",
          content: this.Reports.report,
        });
        this.meta.updateTag({
          name: "description",
          content: this.Reports.report,
        });
        this.meta.updateTag({
          name: "title",
          property: "og:title",
          content: this.Reports.report,
        });

        this.Reports.publishDate = this.epochToDate(this.Reports.publishDate);
        this.isLoading = false;

        this.isSubscribed = this.Reports.isSubscribed;
        const newSlug = this.researchHref(this.Reports.report, this.Reports.id);

        this.updateUrlWithReportName(
          newSlug,
          this.Reports.report,
          this.Reports.id
        );
      });
    } else {
      // Handle the case where there is no valid reportId
      console.error("Invalid reportId");
    }

    // this.apiService.getResearchById(researchId).subscribe((data: any) => {
    //   this.Reports = data.researchMaster;
    //   this.Reports.publishDate = this.epochToDate(this.Reports.publishDate);
    //   this.isLoading = false;
    // });
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

  updateUrlWithReportName(
    newSlug: String,
    reportName: string,
    reportId: string
  ) {
    console.log("new slug in single report", newSlug);
    const newUrl = `/${newSlug}`;
    this.router.navigate([newUrl], {
      relativeTo: this.route,
      replaceUrl: true,
      state: { reportName, reportId },
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
