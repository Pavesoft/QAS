import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
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
    return localStorage.getItem('accessToken');
  }

  // Get stored refresh token
  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  // Store new access token
  setAccessToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  // Store new refresh token
  setRefreshToken(token: string): void {
    localStorage.setItem('refreshToken', token);
  }

  // Refresh the access token
  refreshAccessToken() {
    const refreshToken = this.getRefreshToken();

    if (!refreshToken) {
      return throwError('No refresh token available.');
    }

    const body = { refreshToken };

    return this.http.post('http://10.0.51.3:8091/users/refreshToken', body).pipe(
      switchMap((response: any) => {
        this.setAccessToken(response.accessToken); // Store the new access token
        return of(response.accessToken);
      }),
      catchError((error) => {
        console.error('Failed to refresh token:', error);
        return throwError(error);
      })
    );
  }
}
