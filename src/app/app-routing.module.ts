import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./homepage/home/home.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { WorkinprogressComponent } from "./workinprogress/workinprogress.component";
import { ResearchListComponent } from "./header/menubar/research-list/research-list.component";
import { SingleResearchComponent } from "./header/menubar/single-research/single-research.component";
import { CartComponent } from "./header/menubar/cart/cart.component";
import { CheckoutComponent } from "./header/menubar/checkout/checkout.component";
import { CheckoutDialogComponent } from "./header/menubar/checkout-dialog/checkout-dialog.component";
import { PaymentComponent } from "./header/menubar/payment/payment.component";
import { ContactComponent } from "./contact/contact/contact.component";
import { AboutComponent } from "./about/about/about.component";
import { CareerComponent } from "./career/career/career.component";
import { CSSComponent } from "./CSS/css/css.component";
import { CookiePolicyComponent } from "./CookiePolicy/cookie-policy/cookie-policy.component";
import { TermsofUseComponent } from "./TermsofUse/termsof-use/termsof-use.component";
import { PersonalInformationComponent } from "./PersonalInformation/personal-information/personal-information.component";
import { TechnoNXTComponent } from "./TechnoNXT/techno-nxt/techno-nxt.component";
import { MarineComponent } from "./marine/marine/marine.component";
import { WhaoComponent } from "./whao/whao/whao.component";
import { RoiComponent } from "./roi/roi/roi.component";
import { SparkmatrixComponent } from "./sparkmatrix/sparkmatrix/sparkmatrix.component";
import { AdvisoryservicesComponent } from "./advisoryservices/advisoryservices/advisoryservices.component";
import { MarketIntelligenceAnalystComponent } from "./career/market-intelligence-analyst/market-intelligence-analyst.component";
import { RefundpolicyComponent } from "./refundpolicy/refundpolicy/refundpolicy.component";
import { MarineformComponent } from "./form/marineform/marineform.component";

import { BecomeComponent } from "./become/become/become.component";
import { TalkComponent } from "./talk/talk/talk.component";
import { ApplicationDevelopmentComponent } from "./domains/application-development/application-development.component";
import { BankingAndFinancialServicesComponent } from "./domains/banking-and-financial-services/banking-and-financial-services.component";
import { PressReleaseComponent } from "./press-release/press-release.component";
import { BlogComponent } from "./blog-post/blog/blog.component";
import { RegisterComponent } from "./auth/register/register.component";
import { LoginComponent } from "./auth/login/login.component";
import { SinglePressReleseComponent } from "./press-release/single-press-relese/single-press-relese.component";
import { BusinessProcessManagementAutomationComponent } from "./domains/business-process-management-automation/business-process-management-automation.component";
import { DownloadFormComponent } from "./download-form/download-form.component";
import { SingleBlogComponent } from "./blog-post/single-blog/single-blog.component";
import { ClientPartnerComponent } from "./career/client-partner/client-partner.component";
import { PaymentFailedComponent } from "./header/menubar/payment-failed/payment-failed.component";
import { CommunicationCollaborationComponent } from "./domains/communication-collaboration/communication-collaboration.component";
import { CxAndMartechComponent } from "./domains/cx-and-martech/cx-and-martech.component";
import { QuadrantResearchMethodologiesComponent } from "./quadrant-research-methodologies/quadrant-research-methodologies.component";
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
import { CloudManagementComponent } from "./domains/cloud-management/cloud-management.component";
import { OldPressReleseRedirectComponent } from "./CommonComponents/old-press-relese-redirect/old-press-relese-redirect.component";
import { CitationPolicyComponent } from "./citation-policy/citation-policy.component";
import { VideoGalleryComponent } from "./video-gallery/video-gallery.component";
import { CanonicalservicesComponent } from "./canonicalservices/canonicalservices.component";
import { PodcastsComponent } from "./podcasts/podcasts.component";
import { WebinarComponent } from "./webinar/webinar.component";
import { ResearchComponent } from "./research/research.component";
import { ResearchSingleComponent } from "./research-single/research-single.component";
import { SubscriptionComponent } from "./subscription/subscription.component";
import { ThankyouComponent } from "./thankyou/thankyou.component";
import { EnquiryformComponent } from "./enquiryform/enquiryform.component";
import { UrlMappingGuard } from "./url-mapping.guard";
import { ProfileComponent } from "./profile/profile.component";
import { SubscriptionsComponent } from "./subscriptions/subscriptions.component";
import { DownloadInvoiceComponent } from "./download-invoice/download-invoice.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { AuthGuard } from "./auth.guard";

// const routes: Routes = [];
const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomepageComponent,
  },
  {
    path: "home",
    component: HomepageComponent,
  },
  {
    path: "wip",
    component: WorkinprogressComponent,
  },
  {
    path: "market-research",
    component: ResearchComponent,
    title: " Strategic Market Outlook - Quadrant Knowledge Solutions",
  },
  {
    path: "market-research/:reportName-:reportId",
    component: ResearchSingleComponent,
  },
  //   {
  //     path: "market_research/:reportName",
  //     component: OldUrlRedirectComponent,
  //   },
  {
    path: "research",
    component: ResearchComponent,
  },
  {
    path: "research-single/:id/:subscribed",
    component: ResearchSingleComponent,
  },
  {
    path: "subscription",
    component: SubscriptionComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "download-invoice",
    component: DownloadInvoiceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "subscriptions",
    component: SubscriptionsComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "checkout",
    component: CheckoutComponent,
  },
  {
    path: "thank-you",
    component: CheckoutDialogComponent,
  },
  {
    path: "payment-redirect",
    component: PaymentFailedComponent,
  },
  {
    path: "payment",
    component: PaymentComponent,
  },
  {
    path: "contact-us",
    component: ContactComponent,
    title: "Contact Us- Quadrant Knowledge Solutions",
  },
  {
    path: "contact-us/:formName",
    component: ContactComponent,
    title: "Contact Us- Quadrant Knowledge Solutions",
  },
  {
    path: "about-us",
    component: AboutComponent,
    title: "About Us- Quadrant Knowledge Solutions",
  },
  {
    path: "career",
    component: CareerComponent,
    title: "Career - Quadrant Knowledge Solutions",
  },
  {
    path: "content-strategy-services",
    component: CSSComponent,
    title: "Content Stragegy Services - Quadrant Knowledge Solutions",
  },
  {
    path: "CookiePolicy",
    component: CookiePolicyComponent,
    title: "Cookie Policy - Quadrant Knowledge Solutions",
  },
  {
    path: "TermsofUse",
    component: TermsofUseComponent,
    title: " Terms Of Use - Quadrant Knowledge Solutions",
  },
  {
    path: "PersonalInformation",
    component: PersonalInformationComponent,
    title: " Personal Information - Quadrant Knowledge Solutions",
  },
  {
    path: "technonxt",
    component: TechnoNXTComponent,
    title: "TechnoNXT - Quadrant Knowledge Solutions",
  },
  {
    path: "marine-market-intelligence-epitome",
    component: MarineComponent,
    title: "MARINE - Quadrant Knowledge Solutions",
  },
  {
    path: "whao-assessment",
    component: WhaoComponent,
    title: "WHAO Assessment - Quadrant Knowledge Solutions",
  },
  {
    path: "roi-benchmark-report",
    component: RoiComponent,
    title:
      "Marketing ROI Benchmark Strategy & Report - Quadrant Knowledge Solutions",
  },
  {
    path: "report_type/spark-matrix",
    component: SparkmatrixComponent,
    title: " Spark Matrix - Quadrant Knowledge Solutions",
  },
  {
    path: "advisoryservices",
    component: AdvisoryservicesComponent,
    title: "Quadrant Advisory Services - Quadrant Knowledge Solutions",
  },
  {
    path: "market-intelligence-analyst",
    component: MarketIntelligenceAnalystComponent,
  },
  {
    path: "refundpolicy",
    component: RefundpolicyComponent,
    title: "Refund Policy - Quadrant Knowledge Solutions",
  },

  {
    path: "thankyou/become-a-client",
    component: ThankyouComponent,
    title: "Thank You - Quadrant Knowledge Solutions",
  },

  {
    path: "thankyou/talk-to-analyst",
    component: ThankyouComponent,
    title: "Thank You - Quadrant Knowledge Solutions",
  },

  {
    path: "thankyou/contact-us",
    component: ThankyouComponent,
    title: "Thank You - Quadrant Knowledge Solutions",
  },

  {
    path: "thankyou/advisoryservices",
    component: ThankyouComponent,
    title: "Thank You - Quadrant Knowledge Solutions",
  },

  //  {
  //     path: 'thankyou/:formType',
  //     component: ThankyouComponent,
  //     title: 'Thank You - Quadrant Knowledge Solutions'

  // },

  {
    path: "thankyou/:type/:id",
    component: ThankyouComponent,
    title: "Thank You - Quadrant Knowledge Solutions",
  },

  {
    path: "become-a-client",
    component: BecomeComponent,
    title: " Become A Client- Quadrant Knowledge Solutions",
  },
  {
    path: "talk-to-analyst",
    component: TalkComponent,
    title: " Talk To Analyst - Quadrant Knowledge Solutions",
  },
  {
    path: "domains/banking-and-financial-services",
    component: BankingAndFinancialServicesComponent,
  },
  {
    path: "domains/cloud-management",
    component: CloudManagementComponent,
  },
  {
    path: "domains/communication-collaboration",
    component: CommunicationCollaborationComponent,
  },
  {
    path: "domains/cx-and-martech",
    component: CxAndMartechComponent,
  },
  {
    path: "domains/data-analytics-and-artificial-intelligence",
    component: DataAnalyticsAndArtificialIntelligenceComponent,
  },
  {
    path: "domains/data-management-service",
    component: DataManagementServiceComponent,
  },
  {
    path: "domains/enterprise-it-services",
    component: EnterpriseItServicesComponent,
  },
  {
    path: "domains/enterprise-architecture-planning",
    component: EnterpriseArchitecturePlanningComponent,
  },
  {
    path: "domains/financial-crime-and-compliance",
    component: FinancialCrimeAndComplianceComponent,
  },
  {
    path: "domains/hrtech",
    component: HrtechComponent,
  },
  {
    path: "domains/information-security",
    component: InformationSecurityComponent,
  },
  {
    path: "domains/integrated-risk-management",
    component: IntegratedRiskManagementComponent,
  },
  {
    path: "domains/internet-of-things-and-digitization",
    component: InternetOfThingsAndDigitizationComponent,
  },
  {
    path: "domains/it-infrastructure-and-networking",
    component: ItInfrastructureAndNetworkingComponent,
  },
  {
    path: "domains/privacy-data-management",
    component: PrivacyDataManagementComponent,
  },
  {
    path: "domains/procurement-management",
    component: ProcurementManagementComponent,
  },
  {
    path: "domains/project-and-portfolio-management",
    component: ProjectAndPortfolioManagementComponent,
  },
  {
    path: "domains/retail-and-ecommerce",
    component: RetailAndEcommerceComponent,
  },
  {
    path: "domains/supply-chain-management",
    component: SupplyChainManagementComponent,
  },
  {
    path: "press-release",
    component: PressReleaseComponent,
    title: " Press Release - Quadrant Knowledge Solutions",
  },
  {
    path: "press-release/:pressReleseName-:pressReleseId",
    component: SinglePressReleseComponent,
  },
  {
    path: "blogs",
    component: BlogComponent,
    title: " Blogs - Quadrant Knowledge Solutions",
  },
  {
    path: "blogs/:blogName-:blogId",
    pathMatch: "full",
    component: SingleBlogComponent,
  },
  {
    path: "blogs/:blogName",
    pathMatch: "full",
    component: OldPressReleseRedirectComponent,
  },
  {
    path: "domains/business-process-management-automation",
    component: BusinessProcessManagementAutomationComponent,
  },
  {
    path: "download-form",
    component: DownloadFormComponent,
  },
  {
    path: "download-form/:formName",
    component: DownloadFormComponent,
  },
  {
    path: "download-form/:path/:formName",
    component: DownloadFormComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "press-release/:pressReleseName",
    component: SinglePressReleseComponent,
  },
  {
    path: "business-process-management-automation",
    component: BusinessProcessManagementAutomationComponent,
  },
  {
    path: "client-partner",
    component: ClientPartnerComponent,
  },
  {
    path: "quadrant-research-methodologies",
    component: QuadrantResearchMethodologiesComponent,
  },
  {
    path: "marineform",
    component: MarineformComponent,
  },
  {
    path: "enquiryform",
    component: EnquiryformComponent,
  },

  {
    path: "citation-policy",
    component: CitationPolicyComponent,
  },
  {
    path: "domains/application-development",
    component: ApplicationDevelopmentComponent,
  },
  {
    path: "video-gallery",
    component: VideoGalleryComponent,
  },
  {
    path: "podcasts",
    component: PodcastsComponent,
  },
  {
    path: "webinar",
    component: WebinarComponent,
  },
  {
    path: "**",
    component: OldPressReleseRedirectComponent,
    canActivate: [UrlMappingGuard],
  },
  {
    path: "not-found",
    component: OldPressReleseRedirectComponent,
    canActivate: [UrlMappingGuard],
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
