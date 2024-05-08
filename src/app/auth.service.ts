import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { of, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public $refreshToken = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.$refreshToken.subscribe(() => {
      this.refreshAccessToken().subscribe(); // Automatically refresh the token when the subject is triggered
    });
  }

  // Get stored access token
  getAccessToken(): string | null {
    return localStorage.getItem("jwtToken");
  }

  // Get stored refresh token
  getRefreshToken(): string | null {
    return localStorage.getItem("refreshToken");
  }

  // Store new access token
  setAccessToken(token: string): void {
    localStorage.setItem("jwtToken", token);
  }

  // Store new refresh token
  setRefreshToken(token: string): void {
    localStorage.setItem("refreshToken", token);
  }

  // Refresh the access token
  refreshAccessToken() {
    const token = this.getRefreshToken();

    if (!token) {
      return throwError("No refresh token available.");
    }

    const body = { token };

    return this.http
      .post("https://10.0.51.3:8091/users/refreshToken", body)
      .pipe(
        switchMap((response: any) => {
          console.log("refresh token ", response.jwtToken);
          localStorage.setItem("jwtToken", response.jwtToken); // Store the new access token
          return of(response.jwtToken);
        }),
        catchError((error) => {
          console.error("Failed to refresh token:", error);
          return throwError(error);
        })
      );
  }
}
