import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { baseURl } from "const";
@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getReseachList(page: any, size: any): Observable<any[]> {
    // const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      // Authorization: `Bearer ${token}`,
    });

    return this.http.get<any[]>(
      `${baseURl}/research-masters/research-list?page=${page - 1}&size=${size}`
      // { headers: headers }
    );
  }
  getReseachListToken(page: any, size: any): Observable<any[]> {
    const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any[]>(
      `${baseURl}/research-masters/research-list?page=${page - 1}&size=${size}`,
      { headers: headers }
    );
  }

  getReseachListSubscribed(page: any, size: any): Observable<any[]> {
    const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any[]>(
      `${baseURl}/research-masters/research-list-subscribed?page=${
        page - 1
      }&size=${size}`,
      { headers: headers }
    );
  }

  serachFilters(post: any, page: any, size: any): Observable<any> {
    return this.http.post<any>(
      `${baseURl}/research-masters/search?page=${page - 1}&size=${size}`,
      post
    );
  }
  serachFiltersToken(post: any, page: any, size: any): Observable<any> {
    const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<any>(
      `${baseURl}/research-masters/search?page=${page - 1}&size=${size}`,
      post,
      { headers: headers }
    );
  }

  getReportType(): Observable<any[]> {
    // const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      // Authorization: `Bearer ${token}`,
    });
    return this.http.get<any[]>(`${baseURl}/research-masters/report-types`);
  }

  getCategories(): Observable<any[]> {
    // const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      // Authorization: `Bearer ${token}`,
    });
    return this.http.get<any[]>(`${baseURl}/research-masters/categories`);
  }
  getAuthors(): Observable<any[]> {
    // const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      // Authorization: `Bearer ${token}`,
    });
    return this.http.get<any[]>(`${baseURl}/research-masters/authors`);
  }
  getRegion(): Observable<any[]> {
    // const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      // Authorization: `Bearer ${token}`,
    });
    return this.http.get<any[]>(`${baseURl}/research-masters/regions`);
  }

  downloadReport(id: any): Observable<Blob | any> {
    const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .get(`${baseURl}/research-masters/downloadReport/2856`, {
        headers: headers,
        responseType: "blob",
        observe: "response", // Include the full response
      })
      .pipe(
        map((response: HttpResponse<Blob>) => {
          const contentDisposition: any = response.headers.get(
            "Content-Disposition"
          );
          const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
          const matches = filenameRegex.exec(contentDisposition);
          const filename =
            matches && matches.length > 1
              ? matches[1].replace(/['"]/g, "")
              : "downloaded.pdf";
          console.log("contentDisposition", contentDisposition);
          console.log("filename regex", filenameRegex);
          console.log("matches", matches);
          console.log("filename", filename);
          return {
            blob: response.body,
            filename: filename,
          };
        })
      );
  }

  getResearchById(id: number): Observable<any> {
    return this.http.get<any>(`${baseURl}/research-masters/${id}`);
  }

  addPost(post: any): Observable<any> {
    return this.http.post<any>(`${baseURl}/posts`, post);
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${baseURl}/posts/${id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${baseURl}/posts/${id}`);
  }
}
