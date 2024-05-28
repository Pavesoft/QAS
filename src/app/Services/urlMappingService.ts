import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as _ from "lodash";

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
    return this.httpClient
      .get<UrlMapping[]>("../../assets/fonts/Redirection_url.json")
      .pipe(
        map((data) => {
          this.urlMappings = data;
          const mapping = _.find(
            this.urlMappings,
            (m) => m.fromUrl === fromUrl + "/"
          );
          return mapping ? mapping.toUrl : undefined;
        })
      );
  }
}
