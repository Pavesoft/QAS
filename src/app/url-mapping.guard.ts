import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { UrlMappingService } from "./Services/urlMappingService";

@Injectable({
  providedIn: "root",
})
export class UrlMappingGuard implements CanActivate {
  constructor(
    private urlMappingService: UrlMappingService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const currentUrl = new URL(state.url, window.location.origin).href;

    return this.urlMappingService.getMapping(currentUrl).pipe(
      map((toUrl) => {
        if (toUrl) {
          this.router.navigateByUrl(toUrl);
          return false; // Prevent navigation to the current URL
        } else {
          return true; // Allow navigation to the current URL
        }
      }),
      catchError(() => of(true)) // In case of error, allow navigation
    );
  }
}
