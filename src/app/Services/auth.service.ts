import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root", // Makes this service available globally in your app
})
export class AuthService {
  isLoggedIn = false;

  constructor() {}

  setLoggedIn(value: boolean): void {
    this.isLoggedIn = value;
  }

  getLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
