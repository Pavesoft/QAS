import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule, Title, Meta } from "@angular/platform-browser";
import { TokenInterceptor } from "./intercepter/token-interceptor.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./homepage/home/home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GameChangingToolComponent } from "./homepage/game-changing-tool/game-changing-tool.component";
import { OurclientsComponent } from "./homepage/ourclients/ourclients.component";
import { HowwedifferentComponent } from "./homepage/howwedifferent/howwedifferent.component";
import { UpcomingeventsComponent } from "./homepage/upcomingevents/upcomingevents.component";
import { RecentremerkableComponent } from "./homepage/recentremerkable/recentremerkable.component";
import { TestimonialComponent } from "./homepage/testimonial/testimonial.component";
import { SearchbarComponent } from "./homepage/searchbar/searchbar.component";

import { TopbarComponent } from "./header/topbar/topbar.component";
import { MenubarComponent } from "./header/menubar/menubar.component";
import { BannerComponent } from "./homepage/banner/banner.component";
import { CardComponent } from "./homepage/card/card.component";
import { WorkinprogressComponent } from "./workinprogress/workinprogress.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ResearchListComponent } from "./header/menubar/research-list/research-list.component";
import { EcommBackendService } from "./Services/ecomm-backend-service.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SingleResearchComponent } from "./header/menubar/single-research/single-research.component";
import { CartComponent } from "./header/menubar/cart/cart.component";
import { CheckoutComponent } from "./header/menubar/checkout/checkout.component";
import { CheckoutDialogComponent } from "./header/menubar/checkout-dialog/checkout-dialog.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PaymentComponent } from "./header/menubar/payment/payment.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { UserDetailsFormComponent } from "./CommonComponents/user-details-form/user-details-form.component";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { ContactComponent } from "./contact/contact/contact.component";
import { AboutComponent } from "./about/about/about.component";
import { CareerComponent } from "./career/career/career.component";
import { CSSComponent } from "./CSS/css/css.component";
import { SparkmatrixComponent } from "./sparkmatrix/sparkmatrix/sparkmatrix.component";
import { CookiePolicyComponent } from "./CookiePolicy/cookie-policy/cookie-policy.component";
import { TermsofUseComponent } from "./TermsofUse/termsof-use/termsof-use.component";
import { PersonalInformationComponent } from "./PersonalInformation/personal-information/personal-information.component";
import { TechnoNXTComponent } from "./TechnoNXT/techno-nxt/techno-nxt.component";
import { MarineComponent } from "./marine/marine/marine.component";
import { WhaoComponent } from "./whao/whao/whao.component";
import { RoiComponent } from "./roi/roi/roi.component";
import { AdvisoryservicesComponent } from "./advisoryservices/advisoryservices/advisoryservices.component";
import { MarketIntelligenceAnalystComponent } from "./career/market-intelligence-analyst/market-intelligence-analyst.component";
import { RefundpolicyComponent } from "./refundpolicy/refundpolicy/refundpolicy.component";
import { BecomeComponent } from "./become/become/become.component";
import { TalkComponent } from "./talk/talk/talk.component";
import { ApplicationDevelopmentComponent } from "./domains/application-development/application-development.component";
import { BankingAndFinancialServicesComponent } from "./domains/banking-and-financial-services/banking-and-financial-services.component";
import { PressReleaseComponent } from "./press-release/press-release.component";
import { BlogComponent } from "./blog-post/blog/blog.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { NgxPayPalModule } from "ngx-paypal";
import { SinglePressReleseComponent } from "./press-release/single-press-relese/single-press-relese.component";
import { BusinessProcessManagementAutomationComponent } from "./domains/business-process-management-automation/business-process-management-automation.component";
import { DownloadFormComponent } from "./download-form/download-form.component";
import { SingleBlogComponent } from "./blog-post/single-blog/single-blog.component";
import { NgxPaginationModule } from "ngx-pagination";
import { ClientPartnerComponent } from "./career/client-partner/client-partner.component";
import { CookieService } from "ngx-cookie-service";
import { QuadrantResearchMethodologiesComponent } from "./quadrant-research-methodologies/quadrant-research-methodologies.component";
import { CloudManagementComponent } from "./domains/cloud-management/cloud-management.component";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

import { OldUrlRedirectComponent } from "./CommonComponents/old-url-redirect-component/old-url-redirect-component.component";
import { PaymentFailedComponent } from "./header/menubar/payment-failed/payment-failed.component";
import { CommunicationCollaborationComponent } from "./domains/communication-collaboration/communication-collaboration.component";
import { CxAndMartechComponent } from "./domains/cx-and-martech/cx-and-martech.component";
import { DataAnalyticsAndArtificialIntelligenceComponent } from "./domains/data-analytics-and-artificial-intelligence/data-analytics-and-artificial-intelligence.component";
import { DataManagementServiceComponent } from "./domains/data-management-service/data-management-service.component";
import { EnterpriseArchitecturePlanningComponent } from "./domains/enterprise-architecture-planning/enterprise-architecture-planning.component";
import { EnterpriseItServicesComponent } from "./domains/enterprise-it-services/enterprise-it-services.component";
import { FinancialCrimeAndComplianceComponent } from "./domains/financial-crime-and-compliance/financial-crime-and-compliance.component";
import { HrtechComponent } from "./domains/hrtech/hrtech.component";
import { InformationSecurityComponent } from "./domains/information-security/information-security.component";
import { IntegratedRiskManagementComponent } from "./domains/integrated-risk-management/integrated-risk-management.component";
import { InternetOfThingsAndDigitizationComponent } from "./domains/internet-of-things-and-digitization/internet-of-things-and-digitization.component";
import { ItInfrastructureAndNetworkingComponent } from "./domains/it-infrastructure-and-networking/it-infrastructure-and-networking.component";
import { PrivacyDataManagementComponent } from "./domains/privacy-data-management/privacy-data-management.component";
import { ProcurementManagementComponent } from "./domains/procurement-management/procurement-management.component";
import { ProjectAndPortfolioManagementComponent } from "./domains/project-and-portfolio-management/project-and-portfolio-management.component";
import { RetailAndEcommerceComponent } from "./domains/retail-and-ecommerce/retail-and-ecommerce.component";
import { SupplyChainManagementComponent } from "./domains/supply-chain-management/supply-chain-management.component";
import { MarineformComponent } from "./form/marineform/marineform.component";
import {
  MatOptionModule,
  MatPseudoCheckboxModule,
} from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { OldPressReleseRedirectComponent } from "./CommonComponents/old-press-relese-redirect/old-press-relese-redirect.component";
import { CitationPolicyComponent } from "./citation-policy/citation-policy.component";
import { VideoGalleryComponent } from "./video-gallery/video-gallery.component";
import { PodcastsComponent } from "./podcasts/podcasts.component";
import { WebinarComponent } from "./webinar/webinar.component";
import { ThankyouComponent } from "./thankyou/thankyou.component";
import { CanonicalservicesComponent } from "./canonicalservices/canonicalservices.component";
import { ResearchComponent } from "./research/research.component";
import { ResearchSingleComponent } from "./research-single/research-single.component";
import { SubscriptionComponent } from "./subscription/subscription.component";
import { EnquiryformComponent } from "./enquiryform/enquiryform.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

import { FilterPipe } from "./filter.pipe";

// const appRoutes:Routes=[
//   {path:'aboutus' , component: WorkinprogressComponent},
//   {path:'pressrelees' , component: WorkinprogressComponent},
//   {path:'careers' , component: WorkinprogressComponent},
//   {path:'bluefolder' , component: WorkinprogressComponent}

// ];

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GameChangingToolComponent,
    OurclientsComponent,
    HowwedifferentComponent,
    UpcomingeventsComponent,
    RecentremerkableComponent,
    TestimonialComponent,
    TopbarComponent,
    MenubarComponent,
    BannerComponent,
    CardComponent,
    SearchbarComponent,
    WorkinprogressComponent,
    HomepageComponent,
    ResearchListComponent,
    SingleResearchComponent,
    CartComponent,
    CheckoutComponent,
    CheckoutDialogComponent,
    PaymentComponent,
    UserDetailsFormComponent,
    ContactComponent,
    AboutComponent,
    CareerComponent,
    CSSComponent,
    SparkmatrixComponent,
    CookiePolicyComponent,
    TermsofUseComponent,
    PersonalInformationComponent,
    TechnoNXTComponent,
    MarineComponent,
    WhaoComponent,
    RoiComponent,
    AdvisoryservicesComponent,
    MarketIntelligenceAnalystComponent,
    RefundpolicyComponent,
    BecomeComponent,
    TalkComponent,
    ApplicationDevelopmentComponent,
    BankingAndFinancialServicesComponent,
    PressReleaseComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    SinglePressReleseComponent,
    BusinessProcessManagementAutomationComponent,
    DownloadFormComponent,
    SingleBlogComponent,
    ClientPartnerComponent,
    QuadrantResearchMethodologiesComponent,
    CloudManagementComponent,
    QuadrantResearchMethodologiesComponent,
    PaymentFailedComponent,
    CommunicationCollaborationComponent,
    CxAndMartechComponent,
    DataAnalyticsAndArtificialIntelligenceComponent,
    DataManagementServiceComponent,
    EnterpriseArchitecturePlanningComponent,
    EnterpriseItServicesComponent,
    FinancialCrimeAndComplianceComponent,
    HrtechComponent,
    InformationSecurityComponent,
    IntegratedRiskManagementComponent,
    InternetOfThingsAndDigitizationComponent,
    ItInfrastructureAndNetworkingComponent,
    PrivacyDataManagementComponent,
    ProcurementManagementComponent,
    ProjectAndPortfolioManagementComponent,
    RetailAndEcommerceComponent,
    SupplyChainManagementComponent,
    MarineformComponent,
    OldPressReleseRedirectComponent,
    CitationPolicyComponent,
    VideoGalleryComponent,
    PodcastsComponent,
    WebinarComponent,
    ThankyouComponent,
    CanonicalservicesComponent,
    ResearchComponent,
    ResearchSingleComponent,
    SubscriptionComponent,
    EnquiryformComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    NgxPayPalModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatTooltipModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPseudoCheckboxModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,

    // RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EcommBackendService,
    CookieService,
    Title,
    Meta,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
