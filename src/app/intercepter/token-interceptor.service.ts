import { Injectable, inject } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { AuthService } from "../auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  authService = inject(AuthService);
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      request = this.addToken(request, accessToken);
    }

    return next.handle(request).pipe(
      catchError((error) => {
        // Check if the error is due to an expired access token
        if (error.status === 0) {
          console.log("error.status", error);
          return this.authService.refreshAccessToken().pipe(
            switchMap((newAccessToken: any) => {
              // Retry the request with the new access token
              const newAuthReq = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${newAccessToken}`, // Use the new access token
                },
              });
              return next.handle(newAuthReq); // Retry the request
            }),
            catchError((refreshError) => {
              console.error("Failed to refresh token:", refreshError);
              return throwError(refreshError); // Return the error if refreshing fails
            })
          );
        }

        return throwError(error);
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  // private handleTokenExpired(
  //   request: HttpRequest<any>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<any>> {
  //   // Call the refresh token endpoint to get a new access token
  //   return this.authService.refreshAccessToken().pipe(
  //     switchMap(() => {
  //       const newAccessToken = localStorage.getItem("accessToken");
  //       // Retry the original request with the new access token
  //       return next.handle(this.addToken(request, newAccessToken));
  //     }),
  //     catchError((error) => {
  //       // Handle refresh token error (e.g., redirect to login page)
  //       console.error("Error handling expired access token:", error);
  //       return throwError(error);
  //     })
  //   );
  // }
}
