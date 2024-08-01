import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { ResearchMasterDto } from "src/app/Interfaces/research-master-dto";
import { CartService } from "src/app/Services/cart.service";
import { CheckoutDialogComponent } from "../checkout-dialog/checkout-dialog.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import url from "src/utils/api-url";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserDetailsFormComponent } from "src/app/CommonComponents/user-details-form/user-details-form.component";
import { environment } from "environment.prod";
import { EcommBackendService } from "src/app/Services/ecomm-backend-service.service";
import { ApiResponse } from "src/app/Interfaces/api-response";
@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent {
  totalPrice: any;
  cart: {
    research: ResearchMasterDto;
    quantity: number;
    totalPrice: number;
  }[] = [];
  response: any;
  sessionID: any;
  showPaymentDialog: boolean = false;
  res: any = [];
  variable = "any";
  isLoading: boolean = false;
  checkoutForm: FormGroup; // Reactive form
  userDetails: any = {
    name: "",
    email: "",
    address: "",
  };
  showUserDetailsForm: boolean = false;
  userOrderData: any = {};
  reportName: any = [];

  constructor(
    private ecommService: EcommBackendService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      address: ["", Validators.required],
      // Add more fields as per your requirements
    });
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();

    this.route.queryParams.subscribe((params) => {
      this.totalPrice = params["totalPrice"];
      // //console.log(this.totalPrice)
    });
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cart) {
      totalPrice += item.totalPrice;
    }
    return totalPrice;
  }

  openUserDetailsForm(): void {
    const dialogRef: MatDialogRef<UserDetailsFormComponent> = this.dialog.open(
      UserDetailsFormComponent,
      {
        width: "400px",
        data: {}, // Pass any data you want to pre-fill in the form
        disableClose: true,
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle the form submission here
        // //console.log('User details form submitted:', result);
        this.cartService.setUser(result); // Save the user data
        const mergedData = {
          cart: this.cart,
          user: {
            name: result.fullName,
            mobileNumber: result.mobileNumber,
            workEmail: result.workEmail,
            // Add more user properties as needed
          },
        };
        // //console.log("mergedData")
        // //console.log(mergedData)

        // Proceed with the necessary actions, such as saving the user details and placing the order
        this.saveMergedData(mergedData);
      } else {
        // Handle the cancellation or closing of the dialog
        // //console.log('User details form closed');
        alert("Canceled !");
        this.router.navigate(["/home"]);
      }
    });
  }

  saveMergedData(mergedData: any): void {
    // Perform the necessary actions to save the merged data to the database
    // You can make an HTTP request to your backend API here
    // //console.log(mergedData)
    this.userOrderData = mergedData;

    // You can access the form data using result.name, result.email, result.phoneNumber, etc.
    this.placeOrder();
  }

  placeOrder(): void {
    this.cartService.getCart().forEach((element) => {
      this.reportName.push(element.research.report);
      // console.log(this.reportName);
    });

    const description = this.reportName.join(", ");

    this.isLoading = true;

    const orderId = this.genUniqueId();

    const requestOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Basic bWVyY2hhbnQuVEVTVDk5MDEwMzgzOjgxNzgyNGM4ZWE2MGRhNzIyMTRlYTUyZDM3MjhkYjY4",
      }),
    };

    const payload = {
      apiOperation: "INITIATE_CHECKOUT",
      interaction: {
        operation: "PURCHASE",
        returnUrl: "https://quadrant-solutions.com/thank-you",
        merchant: {
          name: "Quadrant Knowledge Solutions",
          address: {
            line1: "3rd Floor, Wing 4, Cluster D, Eon Free Zone Rd",
            line2: "EON Free Zone, Kharadi, Pune, Maharashtra 411014",
          },
        },
      },
      order: {
        amount: this.totalPrice,
        currency: "USD",
        id: orderId,
        description: description,
        reference: orderId,
      },
    };

    this.ecommService.createSession(payload, this.userOrderData).subscribe(
      (response: any) => {
        if (response) {
          setTimeout(() => {
            this.isLoading = false;
            this.res = response;
            // console.log(response);
            // console.log(response.session.session.id);
            localStorage.setItem("Origin", window.location.host);
            localStorage.setItem("HDFCSessionID", response.session.session.id);
            localStorage.setItem("HDFCOrderID", orderId);
            localStorage.setItem(
              "HDFCSessionSuccessIndicator",
              response.session.successIndicator
            );
            let sessionID = localStorage.getItem("HDFCSessionID");
            let successIndicator = localStorage.getItem(
              "HDFCSessionSuccessIndicator"
            );
            // alert(sessionID);
            this.router.navigate(["/payment"], {
              queryParams: {
                sessionID: sessionID,
                successIndicator: successIndicator,
                uid: response.uid,
              },
            });
          }, 2000);
        }
      },
      (error: any) => {
        // console.log(error);
      }
    );
  }

  saveOrderData(orderData: any) {
    this.ecommService.createOrder(orderData).subscribe(
      (response: ApiResponse) => {
        //console.log(response);
        // Handle the response as needed
      },
      (error: any) => {
        console.error("Failed to create order:", error);
        // Handle the error as needed
      }
    );
  }

  genUniqueId(): string {
    const dateStr = Date.now().toString(36); // convert num to base 36 and stringify

    const randomStr = Math.random().toString(36).substring(2, 8);
    // start at index 2 to skip decimal point
    // //console.log(`${dateStr}-${randomStr}-${dateStr}-${randomStr}`);
    return `${dateStr}-${randomStr}-${dateStr}-${randomStr}`;
  }
}
