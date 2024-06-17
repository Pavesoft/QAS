import { Component, HostListener, OnInit } from "@angular/core";
import { NavigationEnd, NavigationStart } from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { EcommBackendService } from "src/app/Services/ecomm-backend-service.service";
import { ApiResponse } from "src/app/Interfaces/api-response";
import { ResearchMasterDto } from "src/app/Interfaces/research-master-dto";
import { filter } from "rxjs";
import { UrlMappingService } from "./Services/urlMappingService";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  errorMessage: string = "";
  researchMaster: ResearchMasterDto = {} as ResearchMasterDto;
  constructor(
    private meta: Meta,
    private router: Router,
    private ecommBackendService: EcommBackendService,
    private urlMappingService: UrlMappingService
  ) {}

  title = "Quadrant-Solutions";

  receiveData(data: string) {
    // console.log("Data received in parent:", data);
  }

  getResearchById(id: number, currenturl: String): void {
    if (
      currenturl.startsWith("blogs/") ||
      currenturl.startsWith("press-release/")
    ) {
      this.ecommBackendService.getPressReleaseById(id).subscribe(
        (response: ApiResponse) => {
          if (response.success) {
            this.meta.addTag({
              name: "title",
              property: "og:title",
              content: response.singlePressRelease.blogTitle,
            });
            if (response.singlePressRelease.postImgPath)
              this.meta.addTag({
                name: "image",
                property: "og:image",
                content: response.singlePressRelease.postImgPath,
              });
          } else {
            this.errorMessage = response.message;
          }
        },
        (error) => {
          this.errorMessage = "Error occurred while fetching blog.";
        }
      );
    } else {
      this.ecommBackendService.getResearchMasterDtoById(id).subscribe(
        (response: any) => {
          this.researchMaster = response;
          this.meta.addTag({
            name: "title",
            property: "og:title",
            content: this.researchMaster.report,
          });
        },
        (error: any) => {
          console.error("Error fetching research:", error);
        }
      );
    }
  }

  private getUrlFriendlyString(input: string): string {
    // Replace special characters with dashes and convert to lowercase
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-");
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const currentUrl = new URL(event.url, window.location.origin).href;

        this.urlMappingService.getMapping(currentUrl).subscribe((toUrl) => {
          if (toUrl) {
            window.location.href = toUrl;
          }
        });
      }
    });
    window.onbeforeunload = null;
    this.setCanonicalUrl();

    this.updateCanonicalUrlOnRouteChange();

    //console.log(this.router.url);

    const currentUrl = window.location.pathname.replace(/^\/+/, "");
    const matches = currentUrl.match(/-(\d+)$/);

    // if(matches && (currentUrl.startsWith("blogs/") || currentUrl.startsWith("press-release/")
    //  || currentUrl.startsWith("market-research/"))){
    //   this.meta.addTag({ name:'url', property: 'og:url', content: 'https://quadrant-solutions.com/'+currentUrl});
    //   this.getResearchById(parseInt(matches[1]), currentUrl);
    // }

    this.router.events.subscribe((event: any) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  updateCanonicalUrlOnRouteChange(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe(() => {
        const canonicalUrl = this.getCanonicalUrl();
        // Access the global function to set the canonical URL
        (window as any).setCanonicalUrl(canonicalUrl);
      });
  }

  setCanonicalUrl(): void {
    const canonicalUrl = this.getCanonicalUrl();
    // Access the global function to set the canonical URL
    (window as any).setCanonicalUrl(canonicalUrl);
  }

  getCanonicalUrl(): string {
    // Your logic to retrieve the canonical URL
    const currentUrl = window.location.href;
    const canonicalUrl = `${currentUrl}`;
    return canonicalUrl;
  }
}
