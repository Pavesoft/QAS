import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { baseURl } from "const"; // Correct the import path for baseURL

@Injectable({
  providedIn: "root",
})
export class TopbarService {
  constructor(private http: HttpClient) {}

  fetchNotifications(): Observable<any[]> {
    const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    });

    return this.http.get<any[]>(
      `${baseURl}/notification/get-user-notification`,
      { headers }
    );
  }

  markNotificationAsRead(notificationId: number): Observable<any> {
    const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    });

    return this.http.post(
      `${baseURl}/notification/mark-read/${notificationId}`,
      {},
      { headers }
    );
  }

  markAllNotificationsAsRead(): Observable<any> {
    const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    });

    return this.http.post(
      `${baseURl}/notification/mark-all-read`,
      {},
      { headers }
    );
  }

  canMarkAllAsRead(notifications: any[]): boolean {
    return notifications.some((notification) => !notification.isRead);
  }

  submitEnquiry(data: any): Observable<any> {
    return this.http.post(`${baseURl}/enquiry/submit`, data);
  }

  logout(bearerToken: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${bearerToken}`,
    });

    return this.http.post<any>(`${baseURl}/users/logout`, {}, { headers });
  }
}
