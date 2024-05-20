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
    count: number;
  }[] = [];

  constructor(
    public cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    ////console.log(this.cartService.cart);
    this.cart = this.cartService.cart.map((item) => ({
      ...item,
      count: 1, // Set count to 0 or appropriate initial value
    }));
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
          count: 1,
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
    count: number;
  }): void {
    const index = this.cart.indexOf(item);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.cartService.removeFromCart(item);
    }
  }
  getTotalPrice(): number {
    return this.cart.reduce(
      (total, item) => total + item.research.price * item.count,
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

  increment(item: any): void {
    item.count++;
  }

  decrement(item: any): void {
    if (item.count > 1) {
      item.count--;
    }
  }

  getTotalCartItems(): number {
    return this.cartService.getTotalCartItems();
  }

  getTotalReports(): number {
    return this.cart.reduce((total, item) => total + item.count, 0);
  }
}
