import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CartService } from "src/app/Services/cart.service"; // Cart service import
import { MatDialog } from "@angular/material/dialog";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn = false;
  totalCartItems = 0;
  errorMessage = ""; 
  firstName: string = '';// For showing error messages

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private cartService: CartService,
    public dialog: MatDialog
  ) {
    // Initialize the form with validations
    this.loginForm = this.fb.group({
      email: [
        "",
        [Validators.required, Validators.email], // Ensure it's a valid email and required
      ],
      password: [
        "",
        [Validators.required, Validators.minLength(10)], // At least 10 characters and required
      ],
    });
  }

  ngOnInit() {
    this.checkLoginStatus();
    this.updateCartItems();
    this.firstName = localStorage.getItem("fname") || ""; 
  }

  checkLoginStatus() {
    const token = localStorage.getItem("jwtToken"); // Check for JWT token in local storage
    this.isLoggedIn = !!token; // If the token exists, set `isLoggedIn` to true
    localStorage.setItem("isLogin", this.isLoggedIn.toString());
  }

 onLogin() {
  if (this.loginForm.invalid) {
    this.errorMessage = "Invalid input. Please correct the errors and try again.";
    return;
  }

  const loginData = {
    username: this.loginForm.get("email")?.value,
    password: this.loginForm.get("password")?.value,
  };

  this.http
    .post("http://10.0.51.3:8091/users/login", loginData)
    .pipe(
      catchError((error) => {
        console.error("Login failed:", error);
        this.errorMessage = "Login failed. Please check your credentials and try again.";
        this.loginForm.reset();
        return of(null);
      })
    )
    .subscribe((response: any) => {
      if (response && response.jwtToken) {
        localStorage.setItem("jwtToken", response.jwtToken);
        localStorage.setItem("fname", response.fname);
        
        this.isLoggedIn = true;
        this.firstName = response.fname; // Store the first name
        localStorage.setItem("isLogin", this.isLoggedIn.toString());
        window.location.reload();
        this.closeModal("exampleModal1");
        this.errorMessage = "";
        
      } else {
        this.errorMessage = "Incorrect email or password. Please try again.";
      }
    });
}

  onLogout() {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("fname");// Remove the JWT token
    this.isLoggedIn = false; // Update the login status
    localStorage.setItem("isLogin", this.isLoggedIn.toString());
     window.location.reload();
  }

  getCartItems(): number {
    console.log(this.totalCartItems)
    return this.totalCartItems;
  }

  updateCartItems() {
    this.totalCartItems = this.cartService.getTotalCartItems(); // Update the cart items
  }

  closeModal(modalId: string) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("show"); // Hide the modal
      document.body.classList.remove("modal-open"); // Remove 'modal-open' class from body
      const backdrop = document.querySelector(".modal-backdrop");
      if (backdrop) {
        backdrop.remove(); // Remove the backdrop
      }
    }
  }
}
