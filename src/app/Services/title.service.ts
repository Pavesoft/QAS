// services/title/title.service.ts
import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class TitleService {
  constructor(private title: Title) {}

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  getTitle(): string {
    return this.title.getTitle();
  }
}
