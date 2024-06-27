import { Component, OnInit, Renderer2, AfterViewInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Title, Meta } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { ResearchMasterDto } from "src/app/Interfaces/research-master-dto";
import { CartService } from "src/app/Services/cart.service";
import { CurrentResearchService } from "src/app/Services/current-research.service";
import { EcommBackendService } from "src/app/Services/ecomm-backend-service.service";

@Component({
  selector: "app-single-research",
  templateUrl: "./single-research.component.html",
  styleUrls: ["./single-research.component.scss"],
})
export class SingleResearchComponent implements AfterViewInit {
  isLoading = false;

  ResearchDetails: any = [];
  researchMaster: ResearchMasterDto = {} as ResearchMasterDto;
  alertType: string = "";
  message: string = "";
  showOverlay: boolean = true;
  totalCartNo: any = "";
  researchData: ResearchMasterDto = {} as ResearchMasterDto;
  isSparkMatrix: Boolean = false;

  constructor(
    private ecommBackendService: EcommBackendService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router,
    private researchService: CurrentResearchService,
    private titleService: Title,
    private meta: Meta,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.setProperty(document.documentElement, "scrollTop", 0);
    this.renderer.setProperty(document.body, "scrollTop", 0);

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);

    this.researchData = history.state.researchData;

    let id = this.route.snapshot.params["reportName-:reportId"];
    const matches = id.match(/-(\d+)$/); // Extract numeric part following the last dash "-"

    if (matches && matches.length > 1) {
      const reportId = matches[1];
      this.getResearchById(reportId);
    } else {
      // Handle the case where there is no valid reportId
      console.error("Invalid reportId");
    }
  }

  ngAfterViewInit(): void {
    // Scroll to the top of the page for mobile devices with a width of 480px or less
    if (window.innerWidth <= 480) {
      this.renderer.setProperty(document.body, "scrollTop", 0);
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

  private getUrlFriendlyString(input: string): string {
    // Replace special characters with dashes and convert to lowercase
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-");
  }
  showResearchDetails(research: any): void {
    //console.log(research)
    const urlFriendlyName = this.getUrlFriendlyString(research.report);
    const url = `/market-research/${urlFriendlyName}-${research.id}`;

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

  getResearchById(id: number) {
    //console.log(id)
    this.ecommBackendService.getResearchMasterDtoById(id).subscribe(
      (response: any) => {
        // Success: handle the response
        // console.log(response);
        this.researchMaster = response;
        if (response.reportType === "SPARK Matrix") {
          this.isSparkMatrix = true;
        } else {
          this.isSparkMatrix = false;
        }
        this.showResearchDetails(this.researchMaster);
        this.titleService.setTitle(this.researchMaster.report);
      },
      (error: any) => {
        // Error: handle the error
        console.error("Error fetching research:", error);
        // this.router.navigate(['not-found'])
      }
    );
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

  getCartItems(): number {
    this.totalCartNo = this.cartService.getTotalCartItems();
    ////console.log(this.totalCartNo)
    return this.cartService.getTotalCartItems();
  }
}
