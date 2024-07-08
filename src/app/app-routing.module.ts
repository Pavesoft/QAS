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

// const routes: Routes = [];
const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomepageComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "home",
    component: HomepageComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "wip",
    component: WorkinprogressComponent,
    title: "Business Management Consultants | Quadrant Solutions",
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
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "research-single/:id/:subscribed",
    component: ResearchSingleComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "subscription",
    component: SubscriptionComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "cart",
    component: CartComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },

  {
    path: "checkout",
    component: CheckoutComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "thank-you",
    component: CheckoutDialogComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "payment-redirect",
    component: PaymentFailedComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "payment",
    component: PaymentComponent,
    title: "Business Management Consultants | Quadrant Solutions",
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
    title: "Business Management Consultants | Quadrant Solutions",
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
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/cloud-management",
    component: CloudManagementComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/communication-collaboration",
    component: CommunicationCollaborationComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/cx-and-martech",
    component: CxAndMartechComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/data-analytics-and-artificial-intelligence",
    component: DataAnalyticsAndArtificialIntelligenceComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/data-management-service",
    component: DataManagementServiceComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/enterprise-it-services",
    component: EnterpriseItServicesComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/enterprise-architecture-planning",
    component: EnterpriseArchitecturePlanningComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/financial-crime-and-compliance",
    component: FinancialCrimeAndComplianceComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/hrtech",
    component: HrtechComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/information-security",
    component: InformationSecurityComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/integrated-risk-management",
    component: IntegratedRiskManagementComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/internet-of-things-and-digitization",
    component: InternetOfThingsAndDigitizationComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/it-infrastructure-and-networking",
    component: ItInfrastructureAndNetworkingComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/privacy-data-management",
    component: PrivacyDataManagementComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/procurement-management",
    component: ProcurementManagementComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/project-and-portfolio-management",
    component: ProjectAndPortfolioManagementComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/retail-and-ecommerce",
    component: RetailAndEcommerceComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/supply-chain-management",
    component: SupplyChainManagementComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "press-release",
    component: PressReleaseComponent,
    title: " Press Release - Quadrant Knowledge Solutions",
  },
  {
    path: "press-release/:pressReleseName-:pressReleseId",
    component: SinglePressReleseComponent,
    title: "Business Management Consultants | Quadrant Solutions",
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
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "blogs/:blogName",
    pathMatch: "full",
    component: OldPressReleseRedirectComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/business-process-management-automation",
    component: BusinessProcessManagementAutomationComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "download-form",
    component: DownloadFormComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "download-form/:formName",
    component: DownloadFormComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "download-form/:path/:formName",
    component: DownloadFormComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "login",
    component: LoginComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "press-release/:pressReleseName",
    component: SinglePressReleseComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "business-process-management-automation",
    component: BusinessProcessManagementAutomationComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "client-partner",
    component: ClientPartnerComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "quadrant-research-methodologies",
    component: QuadrantResearchMethodologiesComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "marineform",
    component: MarineformComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "enquiryform",
    component: EnquiryformComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },

  {
    path: "citation-policy",
    component: CitationPolicyComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "domains/application-development",
    component: ApplicationDevelopmentComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "video-gallery",
    component: VideoGalleryComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "podcasts",
    component: PodcastsComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "webinar",
    component: WebinarComponent,
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "**",
    component: OldPressReleseRedirectComponent,
    canActivate: [UrlMappingGuard],
    title: "Business Management Consultants | Quadrant Solutions",
  },
  {
    path: "not-found",
    component: OldPressReleseRedirectComponent,
    canActivate: [UrlMappingGuard],
    title: "Business Management Consultants | Quadrant Solutions",
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
