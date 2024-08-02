import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, catchError, filter, map, of } from "rxjs";
import { FormDto, ResearchMasterDto } from "../Interfaces/research-master-dto";
import { ApiResponse, OrderRequestDto } from "../Interfaces/api-response";
import urls from "src/utils/api-url";
import { baseURl } from "const";

@Injectable({
  providedIn: "root",
})
export class EcommBackendService {
  // private apiUrl = 'http://10.0.51.3:8090/';

  //private apiUrl = 'http://localhost:8090';
  //private apiUrl='http://localhost:8090/QuadrantEcom-0.0.1-SNAPSHOT'

  constructor(private http: HttpClient) {}

  paypalData(transId: any) {
    let orderId = transId;
    //console.log(orderId)
  }

  saveFormData(
    id: any,
    fName: any,
    lName: any,
    officeEmail: any,
    businessPhone: any,
    jobTitle: any,
    formCategory: any,
    countryId: any,
    companyName: any,
    cityName: any,
    zipCode: any,
    description: any,
    reportId: any,
    downloadSampleReport: any
  ) {
    //
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post<ApiResponse>(
      `${baseURl}/form-data/save-form-details?fName=${fName}&lName=${lName}&officeEmail=${officeEmail}&businessPhone=${businessPhone}&jobTitle=${jobTitle}&formCategory=${formCategory}&countryId=${countryId}&companyName=${companyName}&cityName=${cityName}&zipCode=${zipCode}&description=${description}&reportId=${reportId}&downloadSampleReport=${downloadSampleReport}`,
      { headers }
    );
  }

  searchByName(searchString: any) {
    return this.http.get(
      `${baseURl}/quadrant-solutions/get-result-with-name?reportName=${searchString}`
    );
  }

  createOrder(orderRequestDto: OrderRequestDto): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      `${baseURl}/orders/create-order`,
      orderRequestDto
    );
  }

  createSession(sessionRequestDto: any, orderRequestDto: any) {
    const mergedData = {
      sessionRequestDto: sessionRequestDto,
      orderRequestDto: orderRequestDto,
    };
    return this.http.post(`${baseURl}/session/creation`, mergedData, {});
  }

  setPaymentFlag(uid: string, successIndicator: string) {
    if (uid === "") {
      return this.http.post<ApiResponse>(
        `
      ${baseURl}/orders/change-payment-status?successIndicator=${successIndicator}
      `,
        {}
      );
    } else {
      return this.http.post<ApiResponse>(
        `${baseURl}/orders/change-payment-status?uid=${uid}`,
        {}
      );
    }
  }

  getResearchMasterDtoById(id: number): Observable<ResearchMasterDto> {
    const url = `${baseURl}/research-masters/fetch-research-with-id?id=${id}`;
    return this.http.get<ApiResponse>(url).pipe(
      catchError((error): Observable<ApiResponse> => {
        console.error("Error fetching research:", error);
        return of(error); // Return null or handle the error as per your requirements
      }),
      filter(
        (response: ApiResponse | null): response is ApiResponse =>
          response !== null
      ),
      map((response: ApiResponse): ResearchMasterDto => {
        if (response.success) {
          return response.researchMaster;
        } else {
          throw new Error(
            response.message ? response.message : "Failed to fetch research"
          );
        }
      })
    );
  }

  getPressReleaseById(id: number): Observable<ApiResponse> {
    const url = `${baseURl}/blogs/get-blog-by-id?id=${id}`;
    return this.http.get<ApiResponse>(url);
  }

  getResearchData(page: any, size: any): Observable<ApiResponse> {
    const params = new HttpParams()
      .set("page", page.toString())
      .set("size", size.toString());

    return this.http.get<ApiResponse>(
      `${baseURl}/research-masters/research-list`,
      { params }
    );
  }

  getResearchData1(page: any, size: any): Observable<ApiResponse> {
    const params = new HttpParams()
      .set("page", page.toString())
      .set("size", size.toString());

    return this.http.get<ApiResponse>(`${baseURl}/research/research-list`, {
      params,
    });
  }
  getResearchWithNgxPagination(page: any, size: any) {
    const params = new HttpParams()
      .set("page", page.toString())
      .set("size", size.toString());

    return this.http.get(`${baseURl}/research-masters/research-list`, {
      params,
    });
  }

  getPressReleaseData(page: any, size: any): Observable<ApiResponse> {
    const params = new HttpParams()
      .set("page", page.toString())
      .set("size", size.toString());

    return this.http.get<ApiResponse>(`${baseURl}/blogs/get-all-blogs`, {
      params,
    });
  }

  getBlogList(page: any, size: any): Observable<ApiResponse> {
    const params = new HttpParams()
      .set("page", page.toString())
      .set("size", size.toString());

    return this.http.get<ApiResponse>(`${baseURl}/blogs/get-blogs-list`, {
      params,
    });
  }

  getBlogById(id: number): Observable<ApiResponse> {
    const url = `${baseURl}/blogs/get-single-blog-by-id?id=${id}`;
    return this.http.get<ApiResponse>(url);
  }

  getTotalResearch(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      `${baseURl}/research-masters/get-total-research-number`
    );
  }

  getResearchDataWithFilterType(
    reportTypeIds: number[],
    page: any = 0,
    pageSize: any = 1000
  ) {
    const params = new HttpParams()
      .set("reportTypeIds", reportTypeIds.join(","))
      .set("page", page.toString())
      .set("pageSize", pageSize.toString());

    //console.log(`${baseURl}/research-masters/research-by-report-type`, params)

    return this.http.get(
      `${baseURl}/research-masters/research-by-report-type`,
      { params }
    );
  }

  getResearchDataWithFilterCoverage(
    reportCoverageIds: number[],
    page: any,
    pageSize: any
  ): Observable<ApiResponse> {
    const params = new HttpParams()
      .set("reportCoverageIds", reportCoverageIds.join(","))
      .set("page", page.toString())
      .set("pageSize", pageSize.toString());

    return this.http.get<ApiResponse>(
      `${baseURl}/research-masters/research-by-report-coverage`,
      { params }
    );
  }

  getResearchDataByName(
    reportName: string,
    page: any,
    pageSize: any
  ): Observable<ApiResponse> {
    const params = new HttpParams()
      .set("reportName", reportName.toString())
      .set("page", page.toString())
      .set("pageSize", pageSize.toString());

    return this.http.get<ApiResponse>(
      `${baseURl}/research-masters/fetch-research-with-name`,
      { params }
    );
  }

  getTotalResearchCount(): Observable<number> {
    return this.http.get<number>(`${baseURl}/research-masters/research/count`);
  }

  getLatestApplicationDevelopmentDomainData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      `${baseURl}/domains/application-development`
    );
  }

  getLatestCLoudManagementDomainData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${baseURl}/domains/cloud-management`);
  }

  getLatestBankingFinancialDomainData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      `${baseURl}/domains/Banking-Financial-Services`
    );
  }

  getlatestreportdata(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      `${baseURl}/research-masters/latest-reports`
    );
  }
}
