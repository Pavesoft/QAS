import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit {
  targetDate: Date = new Date("2024-09-09T00:00:00");
  days: string = "00";
  hours: string = "00";
  minutes: string = "00";
  seconds: string = "00";
  interval: any;

  ngOnInit() {
    this.updateCountdown();
    this.interval = setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const currentDate = new Date();
    const difference = this.targetDate.getTime() - currentDate.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      this.days = String(days).padStart(2, "0");
      this.hours = String(hours).padStart(2, "0");
      this.minutes = String(minutes).padStart(2, "0");
      this.seconds = String(seconds).padStart(2, "0");
    } else {
      clearInterval(this.interval);
      // Handle what happens when the countdown reaches zero
    }
  }
}
