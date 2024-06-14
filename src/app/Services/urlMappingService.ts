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
    function addWwwToUrl(url: any) {
      // Use a regular expression to identify the protocol and domain
      const urlPattern = /^(https?:\/\/)([^/]+)/;

      // Replace the domain with "www." if it doesn't already start with "www."
      const modifiedUrl = url.replace(
        urlPattern,
        (match: any, protocol: any, domain: any) => {
          if (!domain.startsWith("www.")) {
            return `${protocol}www.${domain}`;
          }
          return match; // Return the original match if "www." is already present
        }
      );

      return modifiedUrl;
    }

    // const url =
    //   "https://quadrant-solutions.com/market_research/2018-emerging-star-iot-security-market-device-identity-management/";
    const newUrl = addWwwToUrl(fromUrl);

    console.log("newurl", newUrl);
    console.log("fom url", fromUrl);

    return this.httpClient
      .get<UrlMapping[]>("../../assets/fonts/Redirection_url.json")
      .pipe(
        map((data) => {
          this.urlMappings = data;
          const mapping = _.find(
            this.urlMappings,
            (m) =>
              m.fromUrl === fromUrl + "/" ||
              m.fromUrl === fromUrl ||
              m.fromUrl === newUrl
          );
          console.log("chekc in old urldata", mapping);
          return mapping ? mapping.toUrl : undefined;
        })
      );
  }
}
