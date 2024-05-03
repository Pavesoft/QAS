import { HostListener, Injectable } from '@angular/core';
import { ResearchMasterDto } from '../Interfaces/research-master-dto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: { research: ResearchMasterDto, quantity: number, totalPrice: number }[] = [];
  user: any; // Modify the user property type as per your requirements

  
  private cartKey = 'cart';
  private userKey = 'user';

  constructor() {
    this.loadCart();
    window.onbeforeunload = function() {
      localStorage.clear();
      return '';
    };
  }
  


  loadCart(): void {
    const cartData = localStorage.getItem(this.cartKey);
    this.cart = cartData ? JSON.parse(cartData) : [];
  }

  saveCart(): void {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
  }

  loadUser(): void {
    const userData = localStorage.getItem(this.userKey);
    this.user = userData ? JSON.parse(userData) : null;
  }

  saveUser(): void {
    localStorage.setItem(this.userKey, JSON.stringify(this.user));
  }

  setUser(user: any): void {
    this.user = user;
    this.saveUser();
  }

  getUser(): any {
    return this.user;
  }

  getCart(): { research: ResearchMasterDto, quantity: number, totalPrice: number }[] {
    return this.cart;
  }

  addToCart(research: any): void {
    const cartItem = this.cart.find(item => item.research.id === research.id);
    if (cartItem) {
      alert('This item is already in the cart.');
    } else {
      const newCartItem = {
        research: research,
        quantity: 1,
        totalPrice: research.price
      };
      this.cart.push(newCartItem);
      this.saveCart();
    }
  }

  removeFromCart(item: { research: ResearchMasterDto, quantity: number, totalPrice: number }): void {
    const index = this.cart.findIndex(cartItem => cartItem.research.id === item.research.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.saveCart();
    }
  }

  getTotalCartItems(): number {
    let totalItems = 0;
    for (const item of this.cart) {
      totalItems += item.quantity;
    }
    return totalItems;
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cart) {
        totalPrice += item.totalPrice;
    }
    return totalPrice;
}

}
