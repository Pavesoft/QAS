import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ResearchMasterDto } from "src/app/Interfaces/research-master-dto";
import { CartService } from "src/app/Services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
  cart: {
    research: ResearchMasterDto;
    quantity: number;
    totalPrice: number;
  }[] = [];
  count: number = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    if (this.count > 0) {
      this.count--;
    }
  }

  constructor(
    public cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    ////console.log(this.cartService.cart);
    this.cart = this.cartService.cart;
    this.route.queryParams.subscribe((params) => {
      const productId = params["productId"];
      const productName = params["productName"];
      const price = params["price"];
      const quantity = params["quantity"];

      if (productId && productName && price && quantity) {
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
          price2: 0,
          tableOfContent: "",
          categoryList: [],
          authors: [],
        };

        const item = {
          research: research,
          quantity: +quantity,
          totalPrice: +price * +quantity,
        };

        // Add the buy now item to the cart
        this.cart.push(item);
      }
      console.log("thi.cart", this.cart);
    });
  }

  removeFromCart(item: {
    research: ResearchMasterDto;
    quantity: number;
    totalPrice: number;
  }): void {
    ////console.log('Before:', this.cart);

    this.cartService.removeFromCart(item);

    ////console.log('After:', this.cart);
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cart) {
      totalPrice += item.totalPrice;
    }
    return totalPrice;
  }

  checkout(totalPrice: any): void {
    this.router.navigate(["/checkout"], {
      queryParams: {
        totalPrice: totalPrice,
      },
    });
  }

  getTotalCartItems(): number {
    return this.cartService.getTotalCartItems();
  }
}
