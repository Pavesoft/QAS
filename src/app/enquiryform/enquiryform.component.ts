import { Component } from '@angular/core';

@Component({
  selector: 'app-enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.scss']
})
export class EnquiryformComponent {

  cartItems: any[] = [
    { id: 1, name: 'Product A', quantity: 2, price: 10.99 },
    { id: 2, name: 'Product B', quantity: 1, price: 5.49 },
    { id: 3, name: 'Product C', quantity: 3, price: 20.99 }
  ];

  incrementQuantity(item: any) {
    item.quantity++;
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(itemId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  }
}
