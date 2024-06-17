import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { TopbarComponent } from "./header/topbar/topbar.component";
import { baseURl } from "const";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  topbarComponent = Inject(TopbarComponent);

  public $refreshToken = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.$refreshToken.subscribe(() => {
      this.refreshAccessToken().subscribe();
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

    return this.http.post(`${baseURl}/users/refreshToken`, body).pipe(
      switchMap((response: any) => {
        // console.log("called function", response.jwtToken);
        localStorage.setItem("jwtToken", response.jwtToken); // Store the new access token
        return response.jwtToken; // Return the new token
      }),
      catchError((error: any) => {
        if (error.status === 401) {
          localStorage.removeItem("jwtToken");
          localStorage.removeItem("refreshToken"); // Remove the JWT token

          window.location.reload(); // Trigger logout event
        }
        return throwError(error);
      })
    );
  }

  // Observable to notify about logout
}
