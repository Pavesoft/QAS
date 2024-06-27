import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ResearchMasterDto } from "src/app/Interfaces/research-master-dto";
import { CartService } from "src/app/Services/cart.service";

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

  constructor(
    public cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.cart.map((item) => ({
      ...item,
      count: 1, // Set count to 1 or appropriate initial value
      showGstContainer: true, // Initialize the visibility state
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
          item.quantity += +quantity; // Increment quantity if item already exists
          item.totalPrice += +price * +quantity; // Update total price accordingly
        } else {
          item = {
            research: research,
            quantity: +quantity,
            totalPrice: +price * +quantity,
            count: 1, // Initialize count to 1 here or adjust as needed
            showGstContainer: true, // Initialize the visibility state
          };

          this.cart.push(item); // Add new item to cart if it doesn't exist
        }
      }
    });
  }

  removeFromCart(item: CartItem): void {
    const index = this.cart.indexOf(item);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.cartService.removeFromCart(item);
      if (this.activeItem === item) {
        this.activeItem = null; // Reset the active item if it was removed
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
      this.activeItem.showGstContainer = true; // Hide the previous active item's container
    }
    item.showGstContainer = !item.showGstContainer;
    this.activeItem = item.showGstContainer ? item : null;
  }

  formatPrice(price: number): string {
    // Convert the number to a string and add commas every three digits from the right
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
}
