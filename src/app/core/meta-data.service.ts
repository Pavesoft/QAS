import { Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class MetaDataService {
  constructor(private meta: Meta, private title: Title) {}

  updateMetaData(title: string): void {
    // Update the <title> tag
    this.title.setTitle(title);

    // Update meta tags for sharing
    this.meta.updateTag({ name: "og:title", content: title });
    this.meta.updateTag({ name: "og:description", content: title });
    this.meta.updateTag({ name: "description", content: title });
    this.meta.updateTag({ property: "og:title", content: title });
    this.meta.updateTag({ property: "og:description", content: title });
  }
}
