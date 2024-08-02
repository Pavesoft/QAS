import { Component, OnInit, AfterViewInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from "@angular/forms";
import * as intlTelInput from "intl-tel-input";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as _ from "lodash";
import { baseURl } from "const";

@Component({
  selector: "app-download-invoice",
  templateUrl: "./download-invoice.component.html",
  styleUrls: ["./download-invoice.component.scss"],
})
export class DownloadInvoiceComponent implements OnInit, AfterViewInit {
  content: string = "Download Invoice";

  isEditing = false;
  oldUrlData: any;
  isLoading = false;
  subscriptions: any[] = [];
  showAllReportsForReportType: { [key: string]: boolean } = {};
  download_invoices: any[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private httpClient: HttpClient
  ) {}

  ngAfterViewInit(): void {
    const inputElement = document.querySelector("#businessPhone1");
    if (inputElement) {
      intlTelInput(inputElement, {
        initialCountry: "us",
        separateDialCode: true,
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.1.8/js/utils.min.js",
      });
    }
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  ngOnInit(): void {
    this.httpClient
      .get<any[]>("assets/fonts/data/oldUrlData.json")
      .subscribe((data: any) => {
        this.oldUrlData = data.oldUrlData;
      });

    // Fetch download invoices data
    this.fetchDownloadInvoices();
  }

  passwordsMatch(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get("password");
    const confirmPassword = control.get("confirmPassword");
    if (password?.value !== confirmPassword?.value) {
      return { mismatch: true };
    }
    return null;
  }

  displayContent(content: string) {
    this.content = content;
  }

  fetchDownloadInvoices() {
    this.isLoading = true;
    const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http.get<any[]>(`${baseURl}/orders`, { headers }).subscribe(
      (data: any) => {
        this.download_invoices = data.body;
        this.isLoading = false;
      },
      (error: any) => {
        this.isLoading = false;
      }
    );
  }

  downloadInvoice(orderId: string) {
    const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http
      .get(`${baseURl}/invoice?orderId=${orderId}`, {
        headers,
        responseType: "blob",
      })
      .subscribe((response: Blob) => {
        const url = window.URL.createObjectURL(response);
        window.open(url);
      });
  }

  downloadReport(orderId: string, fileName: string) {
    const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http
      .get(`${baseURl}/invoice?orderId=${orderId}`, {
        headers,
        responseType: "blob", // Ensure responseType is blob for binary data like PDF
      })
      .subscribe((response: Blob) => {
        // Create a new Blob object and initiate a download
        const blob = new Blob([response], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);

        // Create a link element, set its href and download attributes, then click it programmatically
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName; // Specify the filename you want to download as
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a); // Clean up the DOM after the download
        window.URL.revokeObjectURL(url); // Release the object URL
      });
  }

  getUniqueReportTypes(): string[] {
    const uniqueReportTypes = [
      ...new Set(this.subscriptions.map((sub) => sub.reportType).flat()),
    ];
    return uniqueReportTypes;
  }

  filteredSubscriptions(reportType: string): any[] {
    return this.subscriptions.filter((sub) =>
      sub.reportType.includes(reportType)
    );
  }

  toggleShowAllReports(reportType: string) {
    this.showAllReportsForReportType[reportType] =
      !this.showAllReportsForReportType[reportType];
  }

  replaceSpaces(value: string): string {
    const regexPattern = /[^a-zA-Z0-9\s]/g;

    if (value && typeof value === "string") {
      return value
        .replace(regexPattern, " ")
        .replace(/\s+/g, "-")
        .toLowerCase();
    } else {
      return "";
    }
  }

  researchHref(name: string, id: any) {
    let nameChange = this.replaceSpaces(name);
    let href = "/market-research/" + nameChange + "-" + id;
    const objIndex = _.findIndex(
      this.oldUrlData,
      (item: any) => item.URL_ID == id
    );
    if (objIndex !== -1) {
      href = this.oldUrlData[objIndex].To_URL;
    }

    return href;
  }
}
