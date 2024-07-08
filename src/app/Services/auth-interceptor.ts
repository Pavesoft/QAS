import { Injectable, inject } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, catchError, switchMap, throwError } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authService = inject(AuthService);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getAccessToken(); // Get the stored access token

    // Clone the request and add the access token to the header
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken || "DefaultToken"}`, // Use the access token
      },
    });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          // Handle 401 error by refreshing the token
          return this.authService.refreshAccessToken().pipe(
            switchMap((newAccessToken: any) => {
              // Retry the request with the new access token
              const newAuthReq = req.clone({
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

        return throwError(error); // If not 401, propagate the error
      })
    );
  }
}
