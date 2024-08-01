import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { ResearchMasterDto } from "src/app/Interfaces/research-master-dto";
import { CartService } from "src/app/Services/cart.service";
import { AuthService } from "src/app/auth.service";
import { baseURl } from "const";

import { EcommBackendService } from "src/app/Services/ecomm-backend-service.service";
import { ApiResponse } from "src/app/Interfaces/api-response";

interface CartItem {
  research: ResearchMasterDto;
  quantity: number;
  totalPrice: number;
  count: number;
  showGstContainer: boolean;
}

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];
  activeItem: CartItem | null = null;
  userOrderData: any = {};
  reportName: string[] = [];
  totalPrice: number = 0;
  isLoading: boolean = false;
  res: any;
  userDetails: any;

  constructor(
    public cartService: CartService,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService,
    public dialog: MatDialog,
    private ecommService: EcommBackendService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.cart.map((item) => ({
      ...item,
      count: 1,
      showGstContainer: true,
    }));

    this.route.queryParams.subscribe((params) => {
      const productId = params["productId"];
      const productName = params["productName"];
      const price = params["price"];
      const quantity = params["quantity"];
      const price2 = params["price2"];

      if (productId && productName && price && quantity && price2) {
        const research: ResearchMasterDto = {
          id: +productId,
          report: productName,
          price: +price,
          categoryName: "",
          reportType: "",
          description: "",
          author: "",
          mAuthor: "",
          publishDate: new Date(),
          price2: +price2,
          tableOfContent: "",
          categoryList: [],
          authors: [],
        };

        let item = this.cart.find(
          (cartItem) => cartItem.research.id === +productId
        );
        if (item) {
          item.quantity += +quantity;
          item.totalPrice += +price * +quantity;
        } else {
          item = {
            research: research,
            quantity: +quantity,
            totalPrice: +price * +quantity,
            count: 1,
            showGstContainer: true,
          };

          this.cart.push(item);
        }
      }
    });

    this.fetchUserDetails();
  }

  removeFromCart(item: CartItem): void {
    const index = this.cart.indexOf(item);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.cartService.removeFromCart(item);
      if (this.activeItem === item) {
        this.activeItem = null;
      }
    }
  }

  getTotalPrice(): number {
    return this.cart.reduce(
      (total, item) => total + item.research.price * item.quantity,
      0
    );
  }

  checkout(totalPrice: any): void {
    this.router.navigate(["/checkout"], {
      queryParams: {
        totalPrice: totalPrice,
      },
    });
  }

  increment(item: CartItem): void {
    this.cartService.incrementToCartQuantity(item.research);
    item.quantity++;
    item.totalPrice += item.research.price;
  }

  decrement(item: CartItem): void {
    this.cartService.decrementToCartQuantity(item.research);
    if (item.quantity > 1) {
      item.quantity--;
      item.totalPrice -= item.research.price;
      this.cartService.saveCart();
    } else {
      this.removeFromCart(item);
    }
  }

  getTotalCartItems(): number {
    return this.cartService.getTotalCartItems();
  }

  getTotalReports(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  toggleGstContainer(item: CartItem): void {
    if (this.activeItem && this.activeItem !== item) {
      this.activeItem.showGstContainer = true;
    }
    item.showGstContainer = !item.showGstContainer;
    this.activeItem = item.showGstContainer ? item : null;
  }

  formatPrice(price: number): string {
    return price.toLocaleString("en-US");
  }

  calculateDiscountPercentage(price: number, price2: number): number {
    if (price > price2) {
      return ((price - price2) / price) * 100;
    }
    return 0;
  }

  getTotalDiscount(): number {
    return this.cart.reduce((totalDiscount, item) => {
      const discount = item.research.price - item.research.price2;
      return totalDiscount + (discount > 0 ? discount * item.quantity : 0);
    }, 0);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  openUserDetailsForm(): void {
    // Check if user data is available in local storage
    const storedUser = localStorage.getItem("userDetails");

    let userDetails = storedUser ? JSON.parse(storedUser) : null;

    if (userDetails) {
      // Use the stored user data
      const mergedData = {
        cart: this.cart,
        user: {
          name: userDetails.firstName,
          mobileNumber: userDetails.mobileNumber,
          workEmail: userDetails.workEmail,
        },
      };
      this.saveMergedData(mergedData);
    } else {
      // Handle the case where user details are not available in local storage
      alert("User details not found. Please log in or provide your details.");
      this.router.navigate(["/home"]);
    }
  }

  saveMergedData(mergedData: any): void {
    this.userOrderData = mergedData;
    this.placeOrder();
  }

  placeOrder(): void {
    this.cartService.getCart().forEach((element) => {
      this.reportName.push(element.research.report);
    });

    const description = this.reportName.join(", ");
    this.totalPrice = this.getTotalPrice();

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
            localStorage.setItem("Origin", window.location.host);
            localStorage.setItem("HDFCSessionID", response.session.session.id);
            localStorage.setItem("HDFCOrderID", orderId);
            localStorage.setItem(
              "HDFCSessionSuccessIndicator",
              response.session.successIndicator
            );
            const sessionID = localStorage.getItem("HDFCSessionID");
            const successIndicator = localStorage.getItem(
              "HDFCSessionSuccessIndicator"
            );
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

  saveOrderData(orderData: any): void {
    this.ecommService.createOrder(orderData).subscribe(
      (response: ApiResponse) => {
        // console.log(response);
      },
      (error: any) => {
        console.error("Failed to create order:", error);
      }
    );
  }

  genUniqueId(): string {
    const dateStr = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 8);
    return `${dateStr}-${randomStr}-${dateStr}-${randomStr}`;
  }
  fetchUserDetails() {
    this.isLoading = true;
    const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.httpClient
      .get<any>(`${baseURl}/users/userdetails`, { headers })
      .subscribe(
        (data: any) => {
          this.userDetails = data;
          localStorage.setItem("userDetails", JSON.stringify(data));
          this.isLoading = false;

          // Call initPhoneNumberInput here, after this.user.phoneCountryCode is set
        },
        (error: any) => {
          this.isLoading = false;
        }
      );
  }
}
