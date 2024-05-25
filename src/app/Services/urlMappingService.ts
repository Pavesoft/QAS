import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface UrlMapping {
  fromUrl: string;
  toUrl: string;
}

@Injectable({
  providedIn: "root",
})
export class UrlMappingService {
  private urlMappings: UrlMapping[] = [];

  constructor(private httpClient: HttpClient) {}

  getMapping(fromUrl: string): Observable<string | undefined> {
    console.log(fromUrl);
    return this.httpClient
      .get<UrlMapping[]>(
        "../../assets/fonts/Research_report_URL_redirection.json"
      )
      .pipe(
        map((data) => {
          this.urlMappings = data;
          console.log(this.urlMappings[0].fromUrl);
          const mapping = this.urlMappings.find(
            (m) => m.fromUrl === fromUrl + "/"
          );
          return mapping && mapping.toUrl;
        })
      );
  }
}
