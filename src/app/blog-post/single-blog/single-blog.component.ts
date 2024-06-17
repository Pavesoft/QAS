
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title,Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/Interfaces/api-response';
import { PressReleseList } from 'src/app/Interfaces/research-master-dto';
import { CartService } from 'src/app/Services/cart.service';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';



@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent {
  
  isLoading:Boolean = false;
  ResearchDetails: any = [];
  researchMaster: PressReleseList = {} as PressReleseList;
  alertType: string = "";
  message: string = "";
  showOverlay: boolean = true;
  totalCartNo:any = '';
  errorMessage: string='';
  blogData:any
  
  

  urlMappings = {
    mappings: [
      {
       "Title": "2023 Contact Center Market Trends to Watch",
       "ID": 180,
       "Type": "Blog",
       "From URL": "blogs/2023-contact-center-market-trends-to-watch",
       "To URL": "blogs/2023-contact-center-market-trends-to-watch-180"
      },
      {
       "Title": "5 Things You Should Know About Content Strategy",
       "ID": 150,
       "Type": "Blog",
       "From URL": "blogs/5-things-you-should-know-about-content-strategy",
       "To URL": "blogs/5-things-you-should-know-about-content-strategy-150"
      },
      {
       "Title": "6sense and Integrate Announce Partnership to Enhance ABM Strategies",
       "ID": 195,
       "Type": "Blog",
       "From URL": "blogs/6sense-and-integrate-announce-partnership-to-enhance-abm-strategies",
       "To URL": "blogs/6sense-and-integrate-announce-partnership-to-enhance-abm-strategies-195"
      },
      {
       "Title": "8&#215;8 Recently Announced the Launch of its 8&#215;8 Customer Labs Open Beta Program",
       "ID": 178,
       "Type": "Blog",
       "From URL": "blogs/8x8-recently-announced-the-launch-of-its-8x8-customer-labs-open-beta-program",
       "To URL": "blogs/8x8-recently-announced-the-launch-of-its-8x8-customer-labs-open-beta-program-178"
      },
      {
       "Title": "Accenture acquires Brazilian cybersecurity company Morphus.",
       "ID": 204,
       "Type": "Blog",
       "From URL": "blogs/accenture-acquires-brazilian-cybersecurity-company-morphus",
       "To URL": "blogs/accenture-acquires-brazilian-cybersecurity-company-morphus-204"
      },
      {
       "Title": "Achieving Warehouse Operational Excellence Through Automation  ",
       "ID": 130,
       "Type": "Blog",
       "From URL": "blogs/achieving-warehouse-operational-excellence-through-automation",
       "To URL": "blogs/achieving-warehouse-operational-excellence-through-automation-130"
      },
      {
       "Title": "ACI Worldwide Adds Swift Go to Cross-Border Payment Offering",
       "ID": 241,
       "Type": "Blog",
       "From URL": "blogs/aci-worldwide-adds-swift-go-to-cross-border-payment-offering",
       "To URL": "blogs/aci-worldwide-adds-swift-go-to-cross-border-payment-offering-241"
      },
      {
       "Title": "Acquia Unveils AI-Infused DAM System for Transforming Collaboration Through Creative Workflows",
       "ID": 246,
       "Type": "Blog",
       "From URL": "blogs/acquia-unveils-ai-infused-dam-system-for-transforming-collaboration-through-creative-workflows",
       "To URL": "blogs/acquia-unveils-ai-infused-dam-system-for-transforming-collaboration-through-creative-workflows-246"
      },
      {
       "Title": "Act-On acquires security compliance certifications",
       "ID": 196,
       "Type": "Blog",
       "From URL": "blogs/act-on-acquires-security-compliance-certifications",
       "To URL": "blogs/act-on-acquires-security-compliance-certifications-196"
      },
      {
       "Title": "Artificial Intelligence coupled with hyper-automation is a game-changing technology",
       "ID": 57,
       "Type": "Blog",
       "From URL": "blogs/ai-coupled-with-hyper-automation-is-a-game-changing-technology",
       "To URL": "blogs/artificial-intelligence-coupled-with-hyper-automation-is-a-game-changing-technology-57"
      },
      {
       "Title": "AI & ML pipelines can now create a continuous self-learning knowledge system",
       "ID": 68,
       "Type": "Blog",
       "From URL": "blogs/ai-ml-pipelines-can-now-create-a-continuous-self-learning-knowledge-system",
       "To URL": "blogs/ai-ml-pipelines-can-now-create-a-continuous-self-learning-knowledge-system-68"
      },
      {
       "Title": "Airtel and Lemnisk shake hands on creating CDP!",
       "ID": 167,
       "Type": "Blog",
       "From URL": "blogs/airtel-and-lemnisk-shake-hands-on-creating-cdp",
       "To URL": "blogs/airtel-and-lemnisk-shake-hands-on-creating-cdp-167"
      },
      {
       "Title": "API Economy: Past, Present and Future Perspectives",
       "ID": 290,
       "Type": "Blog",
       "From URL": "blogs/api-economy-past-present-and-future-perspectives",
       "To URL": "blogs/api-economy-past-present-and-future-perspectives--290"
      },
      {
       "Title": "A Possible Roadmap for Successful Digital Transformation",
       "ID": 116,
       "Type": "Blog",
       "From URL": "blogs/a-possible-roadmap-for-successful-digital-trandformation",
       "To URL": "blogs/a-possible-roadmap-for-successful-digital-transformation-116"
      },
      {
       "Title": "Augmented Analytics – Disruption in the Data Analytics and BI space",
       "ID": 134,
       "Type": "Blog",
       "From URL": "blogs/augmented-analytics-disruption-in-the-data-analytics-and-bi-space",
       "To URL": "blogs/augmented-analytics-disruption-in-the-data-analytics-and-bi-space-134"
      },
      {
       "Title": "Autonomous Mobile Robots – Warehouse Management and Supply Chain Applications",
       "ID": 52,
       "Type": "Blog",
       "From URL": "blogs/autonomous-mobile-robots-warehouse-management-and-supply-chain-applications",
       "To URL": "blogs/autonomous-mobile-robots-warehouse-management-and-supply-chain-applications-52"
      },
      {
       "Title": "Behavioural Biometrics Solutions are Changing Security & Authentication for the Better",
       "ID": 190,
       "Type": "Blog",
       "From URL": "blogs/behavioural-biometrics-solutions-are-changing-security-authentication-for-the-better",
       "To URL": "blogs/behavioural-biometrics-solutions-are-changing-security-authentication-for-the-better-190"
      },
      {
       "Title": "Benefits of automating the procurement process",
       "ID": 176,
       "Type": "Blog",
       "From URL": "blogs/benefits-of-automating-the-procurement-process",
       "To URL": "blogs/benefits-of-automating-the-procurement-process-176"
      },
      {
       "Title": "Benefits of using the accounts payable software",
       "ID": 149,
       "Type": "Blog",
       "From URL": "blogs/benefits-of-using-the-accounts-payable-software",
       "To URL": "blogs/benefits-of-using-the-accounts-payable-software-149"
      },
      {
       "Title": "BioCatch and Microsoft Join Forces to Power Advanced Online Fraud Detection in Cloud-based Intelligent Banking Platform",
       "ID": 247,
       "Type": "Blog",
       "From URL": "blogs/biocatch-and-microsoft-join-forces-to-power-advanced-online-fraud-detection-in-cloud-based-intelligent-banking-platform",
       "To URL": "blogs/biocatch-and-microsoft-join-forces-to-power-advanced-online-fraud-detection-in-cloud-based-intelligent-banking-platform-247"
      },
      {
       "Title": "BOC Group’s Business Transformation Suite ADONIS 15.0 and it&#8217;s updated features.",
       "ID": 174,
       "Type": "Blog",
       "From URL": "blogs/boc-groups-business-transformation-suite-adonis-15-0-and-its-updated-features",
       "To URL": "blogs/boc-group-business-transformation-suite-adonis-150-and-its-updated-features-174"
      },
      {
       "Title": "Both the people & the culture you build are key for  building  an innovation-driven culture",
       "ID": 65,
       "Type": "Blog",
       "From URL": "blogs/both-the-people-the-culture-you-build-are-key",
       "To URL": "blogs/both-the-people-the-culture-you-build-are-key-for-building-an-innovation-driven-culture-65"
      },
      {
       "Title": "BPC Partners with Ellipse to Enhance Card Security in SmartVista for e-Commerce",
       "ID": 245,
       "Type": "Blog",
       "From URL": "blogs/bpc-partners-with-ellipse-to-enhance-card-security-in-smartvista-for-e-commerce",
       "To URL": "blogs/bpc-partners-with-ellipse-to-enhance-card-security-in-smartvista-for-e-commerce-245"
      },
      {
       "Title": "CDPs potential to address diverse customer data use cases",
       "ID": 184,
       "Type": "Blog",
       "From URL": "blogs/cdps-potential-to-address-diverse-customer-data-use-cases",
       "To URL": "blogs/cdps-potential-to-address-diverse-customer-data-use-cases-184"
      },
      {
       "Title": "Clarivate cut down its board size to improve its organizational decision making.",
       "ID": 186,
       "Type": "Blog",
       "From URL": "blogs/clarivate-cut-down-its-board-size-to-improve-its-organizational-decision-making",
       "To URL": "blogs/clarivate-cut-down-its-board-size-to-improve-its-organizational-decision-making-186"
      },
      {
       "Title": "Cloud Data Management and its Importance in 2023",
       "ID": 187,
       "Type": "Blog",
       "From URL": "blogs/cloud-data-management-and-its-importance-in-2023",
       "To URL": "blogs/cloud-data-management-and-its-importance-in-2023-187"
      },
      {
       "Title": "Cloudflare and Microsoft strategic partnership to strengthen Zero Trust network Security.",
       "ID": 203,
       "Type": "Blog",
       "From URL": "blogs/cloudflare-and-microsoft-strategic-partnership-to-strengthen-zero-trust-network-security",
       "To URL": "blogs/cloudflare-and-microsoft-strategic-partnership-to-strengthen-zero-trust-network-security-203"
      },
      {
       "Title": "Competitive Market Positioning & Ranking – Keeping Business Relevant & Sustainable",
       "ID": 139,
       "Type": "Blog",
       "From URL": "blogs/competitive-market-positioning-ranking-keeping-business-relevant-sustainable-2",
       "To URL": "blogs/competitive-market-positioning-ranking-keeping-business-relevant-sustainable-139"
      },
      {
       "Title": "Content Service Platform: Next Gen ECM",
       "ID": 257,
       "Type": "Blog",
       "From URL": "blogs/content-service-platform-next-gen-ecm",
       "To URL": "blogs/content-service-platform-next-gen-ecm-257"
      },
      {
       "Title": "Contract Management Software helps Efficiently Perform Procurement Functions",
       "ID": 288,
       "Type": "Blog",
       "From URL": "blogs/contract-management-software-helps-efficiently-perform-procurement-functions",
       "To URL": "blogs/contract-management-software-helps-efficiently-perform-procurement-functions--288"
      },
      {
       "Title": "Conversation with ChatGPT               ",
       "ID": 192,
       "Type": "Blog",
       "From URL": "blogs/conversation-with-chatgpt",
       "To URL": "blogs/conversation-with-chatgpt-192"
      },
      {
       "Title": "Creatio Announces Partnership with Mobile XL to address the growing demand for no-code workflow Automation and CRM ",
       "ID": 297,
       "Type": "Blog",
       "From URL": "blogs/creatio-announces-partnership-with-mobile-xl-to-address-the-growing-demand-for-no-code-workflow-automation-and-crm",
       "To URL": "blogs/creatio-announces-partnership-with-mobile-xl-to-address-the-growing-demand-for-no-code-workflow-automation-and-crm-297"
      },
      {
       "Title": "Cryptocurrencies and AML Compliance: Need to understand this is rising for the VASPs",
       "ID": 197,
       "Type": "Blog",
       "From URL": "blogs/cryptocurrencies-and-aml-compliance-need-to-understand-this-is-rising-for-the-vasps",
       "To URL": "blogs/cryptocurrencies-and-aml-compliance-need-to-understand-this-is-rising-for-the-vasps-197"
      },
      {
       "Title": "CSG Xponent Transforms Customer Engagement to Drive Customer Growth and Loyalty",
       "ID": 138,
       "Type": "Blog",
       "From URL": "blogs/csg-xponent-transforms-customer-engagement-to-drive-customer-growth-and-loyalty",
       "To URL": "blogs/csg-xponent-transforms-customer-engagement-to-drive-customer-growth-and-loyalty-138"
      },
      {
       "Title": "Customer Journey Mapping: Evolution over the ages.",
       "ID": 179,
       "Type": "Blog",
       "From URL": "blogs/customer-journey-mapping-evolution-over-the-ages",
       "To URL": "blogs/customer-journey-mapping-evolution-over-the-ages-179"
      },
      {
       "Title": "CyberMaxx acquires CipherTechs, LLC",
       "ID": 212,
       "Type": "Blog",
       "From URL": "blogs/cybermaxx-acquires-ciphertechs-llc",
       "To URL": "blogs/cybermaxx-acquires-ciphertechs-llc-212"
      },
      {
       "Title": "Cybersecurity Industry Trials ChatGPT&#8217;s Capabilities as a cybersecurity watchdog",
       "ID": 228,
       "Type": "Blog",
       "From URL": "blogs/cybersecurity-industry-trials-chatgpts-capabilities-as-a-cybersecurity-watchdog",
       "To URL": "blogs/cybersecurity-industry-trials-chatgpts-capabilities-as-a-cybersecurity-watchdog-228"
      },
      {
       "Title": "Cybersecurity Trends & Best Practices An Organisation Can Adopt",
       "ID": 129,
       "Type": "Blog",
       "From URL": "blogs/cybersecurity-trends-best-practices-an-organisation-can-adopt",
       "To URL": "blogs/cybersecurity-trends-best-practices-an-organisation-can-adopt-129"
      },
      {
       "Title": "Data-Driven Experimentation and Creative Decision-Making with AI",
       "ID": 121,
       "Type": "Blog",
       "From URL": "blogs/data-driven-experimentation-and-creative-decision-making-with-ai",
       "To URL": "blogs/data-driven-experimentation-and-creative-decision-making-with-ai-121"
      },
      {
       "Title": "Data Science and Machine Learning Evolution.",
       "ID": 208,
       "Type": "Blog",
       "From URL": "blogs/data-science-and-machine-learning-evolution",
       "To URL": "blogs/data-science-and-machine-learning-evolution-208"
      },
      {
       "Title": "DDoS Mitigation Market Trends and Its Impact",
       "ID": 4,
       "Type": "Blog",
       "From URL": "blogs/ddos-mitigation-market-trends-and-its-impact",
       "To URL": "blogs/ddos-mitigation-market-trends-and-its-impact-4"
      },
      {
       "Title": "Developing a Resilient Governance, Risk, & Compliance Program for Your Business with GRC 5.0",
       "ID": 216,
       "Type": "Blog",
       "From URL": "blogs/developing-a-resilient-governance-risk-compliance-program-for-your-business-with-grc-5-0",
       "To URL": "blogs/developing-a-resilient-governance-risk-compliance-program-for-your-business-with-grc-50-216"
      },
      {
       "Title": "Digital business platforms are the real game-changing technologies in 2022",
       "ID": 64,
       "Type": "Blog",
       "From URL": "blogs/digital-business-platforms-are-the-real-game-changing-technologies-in-2022",
       "To URL": "blogs/digital-business-platforms-are-the-real-game-changing-technologies-in-2022-64"
      },
      {
       "Title": "Digitization will dominate the entire supply chain",
       "ID": 59,
       "Type": "Blog",
       "From URL": "blogs/digitization-will-dominate-the-entire-supply-chain",
       "To URL": "blogs/digitization-will-dominate-the-entire-supply-chain-59"
      },
      {
       "Title": "Diners Club Perú Expands Acquiring Network and Bolsters Fraud Detection with BPC Partnership",
       "ID": 284,
       "Type": "Blog",
       "From URL": "blogs/diners-club-peru-expands-acquiring-network-and-bolsters-fraud-detection-with-bpc-partnership",
       "To URL": "blogs/diners-club-per-expands-acquiring-network-and-bolsters-fraud-detection-with-bpc-partnership--284"
      },
      {
       "Title": "Effective management of the procurement risks",
       "ID": 220,
       "Type": "Blog",
       "From URL": "blogs/effective-management-of-the-procurement-risks",
       "To URL": "blogs/effective-management-of-the-procurement-risks-220"
      },
      {
       "Title": "Embracing the Future: Exploring the Benefits of Autonomous Finance and Synergy between Embedded Finance and Autonomous Finance.",
       "ID": 285,
       "Type": "Blog",
       "From URL": "blogs/embracing-the-future-exploring-the-benefits-of-autonomous-finance-and-synergy-between-embedded-finance-and-autonomous-finance",
       "To URL": "blogs/embracing-the-future-exploring-the-benefits-of-autonomous-finance-and-synergy-between-embedded-finance-and-autonomous-finance--285"
      },
      {
       "Title": "Enabling a Proactive Cybersecurity",
       "ID": 158,
       "Type": "Blog",
       "From URL": "blogs/enabling-a-proactive-cybersecurity",
       "To URL": "blogs/enabling-a-proactive-cybersecurity-158"
      },
      {
       "Title": "Factors Contributing to the Growth of the AMR Market",
       "ID": 74,
       "Type": "Blog",
       "From URL": "blogs/factors-contributing-to-the-growth-of-the-amr-market",
       "To URL": "blogs/factors-contributing-to-the-growth-of-the-amr-market-74"
      },
      {
       "Title": "FCA Priorities and their implications for Payment Companies",
       "ID": 226,
       "Type": "Blog",
       "From URL": "blogs/fca-priorities-and-their-implications-for-payment-companies",
       "To URL": "blogs/fca-priorities-and-their-implications-for-payment-companies-226"
      },
      {
       "Title": "Feedzai Unveils AI-Powered Proactive Fraud Detection Engine- Railgun",
       "ID": 291,
       "Type": "Blog",
       "From URL": "blogs/feedzai-unveils-ai-powered-proactive-fraud-detection-engine-railgun",
       "To URL": "blogs/feedzai-unveils-ai-powered-proactive-fraud-detection-engine-railgun--291"
      },
      {
       "Title": "FICO Partners with Teradata to Combat Fraud and Boost Business Results",
       "ID": 240,
       "Type": "Blog",
       "From URL": "blogs/fico-partners-with-teradata-to-combat-fraud-and-boost-business-results",
       "To URL": "blogs/fico-partners-with-teradata-to-combat-fraud-and-boost-business-results-240"
      },
      {
       "Title": "Five9 Outages and Issues: 4th to 5th January’23",
       "ID": 159,
       "Type": "Blog",
       "From URL": "blogs/five9-outages-and-issues-4th-to-5th-january23",
       "To URL": "blogs/five9-outages-and-issues-4th-to-5th-january-23-159"
      },
      {
       "Title": "Five Ways To Enhance User Adoption Strategies For Technology Solutions",
       "ID": 233,
       "Type": "Blog",
       "From URL": "blogs/five-ways-to-enhance-user-adoption-strategies-for-technology-solutions",
       "To URL": "blogs/five-ways-to-enhance-user-adoption-strategies-for-technology-solutions-233"
      },
      {
       "Title": "Force Marketing Unveils Customer Data Platform for Auto Industry",
       "ID": 185,
       "Type": "Blog",
       "From URL": "blogs/force-marketing-unveils-customer-data-platform-for-auto-industry",
       "To URL": "blogs/force-marketing-unveils-customer-data-platform-for-auto-industry-185"
      },
      {
       "Title": "Forecasting Future Trends in <br>Information Security",
       "ID": 156,
       "Type": "Blog",
       "From URL": "blogs/forecasting-future-trends-in-information-security",
       "To URL": "blogs/forecasting-future-trends-in-brinformation-security-156"
      },
      {
       "Title": "Forter acquires Immue to provide enhanced fraud management.",
       "ID": 217,
       "Type": "Blog",
       "From URL": "blogs/forter-acquires-immue-to-provide-enhanced-fraud-management",
       "To URL": "blogs/forter-acquires-immue-to-provide-enhanced-fraud-management-217"
      },
      {
       "Title": "From Personalized Products to Personalized Experiences &#8211; Here’s How the World of MarTech is Changing",
       "ID": 111,
       "Type": "Blog",
       "From URL": "blogs/from-personalized-products-to-personalized-experiences-heres-how-the-world-of-martech-is-changing",
       "To URL": "blogs/from-personalized-products-to-personalized-experiences-here-how-the-world-of-martech-is-changing-111"
      },
      {
       "Title": "Gamification of Ship from Store Fulfilment Strategy: An Innovative Way for Order Fulfillment",
       "ID": 229,
       "Type": "Blog",
       "From URL": "blogs/gamification-of-ship-from-store-fulfilment-strategy-an-innovative-way-for-order-fulfillment",
       "To URL": "blogs/gamification-of-ship-from-store-fulfilment-strategy-an-innovative-way-for-order-fulfillment-229"
      },
      {
       "Title": "Godrej Körber Supply Chain firmly set to Perform well in India’s Warehouse Automation & Management Market",
       "ID": 131,
       "Type": "Blog",
       "From URL": "blogs/godrej-korber-supply-chain-firmly-set-to-perform-well-in-indias-warehouse-automation-management-market",
       "To URL": "blogs/godrej-krber-supply-chain-firmly-set-to-perform-well-in-india-warehouse-automation-management-market-131"
      },
      {
       "Title": "Harnessing Synergy: Credit Risk Technology Solutions and Current Expected Credit Loss (CECL) Solution",
       "ID": 250,
       "Type": "Blog",
       "From URL": "blogs/harnessing-synergy-credit-risk-technology-solutions-and-current-expected-credit-loss-cecl-solution",
       "To URL": "blogs/harnessing-synergy-credit-risk-technology-solutions-and-current-expected-credit-loss-cecl-solution-250"
      },
      {
       "Title": "Honeywell to Acquire SCADAfence to Boost OT Security Offerings",
       "ID": 293,
       "Type": "Blog",
       "From URL": "blogs/honeywell-to-acquire-scadafence-to-boost-ot-security-offerings",
       "To URL": "blogs/honeywell-to-acquire-scadafence-to-boost-ot-security-offerings-293"
      },
      {
       "Title": "Hong Kong Amends Anti-Money Laundering Bill to Include Crypto",
       "ID": 168,
       "Type": "Blog",
       "From URL": "blogs/hong-kong-amends-anti-money-laundering-bill-to-include-crypto",
       "To URL": "blogs/hong-kong-amends-anti-money-laundering-bill-to-include-crypto-168"
      },
      {
       "Title": "How AMRs are Transforming Warehouse Operations?",
       "ID": 54,
       "Type": "Blog",
       "From URL": "blogs/how-amrs-are-transforming-warehouse-operations",
       "To URL": "blogs/how-amrs-are-transforming-warehouse-operations-54"
      },
      {
       "Title": "How Generative AI is transforming DAM and unlocking new possibilities for businesses.",
       "ID": 286,
       "Type": "Blog",
       "From URL": "blogs/how-generative-ai-is-transforming-dam-and-unlocking-new-possibilities-for-businesses",
       "To URL": "blogs/how-generative-ai-is-transforming-dam-and-unlocking-new-possibilities-for-businesses--286"
      },
      {
       "Title": "How to gain more out of your Customer Data Platform",
       "ID": 170,
       "Type": "Blog",
       "From URL": "blogs/how-to-gain-more-out-of-your-customer-data-platform",
       "To URL": "blogs/how-to-gain-more-out-of-your-customer-data-platform-170"
      },
      {
       "Title": "How to live your life Internet-Size in the Metaverse?",
       "ID": 71,
       "Type": "Blog",
       "From URL": "blogs/how-to-live-your-life-internet-size-in-the-metaverse",
       "To URL": "blogs/how-to-live-your-life-internet-size-in-the-metaverse-71"
      },
      {
       "Title": "How to Not Make the Wrong Technology Decisions",
       "ID": 234,
       "Type": "Blog",
       "From URL": "blogs/how-to-not-make-the-wrong-technology-decisions",
       "To URL": "blogs/how-to-not-make-the-wrong-technology-decisions-234"
      },
      {
       "Title": "How to successfully implement an Autonomous Mobile Robot project?",
       "ID": 84,
       "Type": "Blog",
       "From URL": "blogs/how-to-successfully-implement-an-autonomous-mobile-robot-project",
       "To URL": "blogs/how-to-successfully-implement-an-autonomous-mobile-robot-project-84"
      },
      {
       "Title": "Hybrid cloud & AI are the two next great shifts in the technology landscape",
       "ID": 55,
       "Type": "Blog",
       "From URL": "blogs/hybrid-cloud-ai-are-the-two-next-great-shifts-in-the-technology-landscape",
       "To URL": "blogs/hybrid-cloud-ai-are-the-two-next-great-shifts-in-the-technology-landscape-55"
      },
      {
       "Title": "Immersive Experience for Improving Digital Healthcare",
       "ID": 109,
       "Type": "Blog",
       "From URL": "blogs/immersive-experience-for-improving-digital-healthcare",
       "To URL": "blogs/immersive-experience-for-improving-digital-healthcare-109"
      },
      {
       "Title": "Importance of ROI While Making a Software Selection",
       "ID": 232,
       "Type": "Blog",
       "From URL": "blogs/importance-of-roi-while-making-a-software-selection",
       "To URL": "blogs/importance-of-roi-while-making-a-software-selection-232"
      },
      {
       "Title": "Industrial giant Siemens introduces India’s first 5G routers",
       "ID": 207,
       "Type": "Blog",
       "From URL": "blogs/industrial-giant-siemens-introduces-indias-first-5g-routers",
       "To URL": "blogs/industrial-giant-siemens-introduces-india-first-5g-routers-207"
      },
      {
       "Title": "Informatica’s Successful Transition Towards Cloud-Native Intelligent Data Management Cloud (IDMC)",
       "ID": 227,
       "Type": "Blog",
       "From URL": "blogs/informaticas-successful-transition-towards-cloud-native-intelligent-data-management-cloud-idmc",
       "To URL": "blogs/informatica-successful-transition-towards-cloud-native-intelligent-data-management-cloud-idmc-227"
      },
      {
       "Title": "Ingka Group acquires Made4net, a global supply chain software company.",
       "ID": 248,
       "Type": "Blog",
       "From URL": "blogs/ingka-group-acquires-made4net-a-global-supply-chain-software-company",
       "To URL": "blogs/ingka-group-acquires-made4net-a-global-supply-chain-software-company-248"
      },
      {
       "Title": "InMoment Becomes the early Adopters of GPT to Incorporate it into their VoC Platform",
       "ID": 236,
       "Type": "Blog",
       "From URL": "blogs/inmoment-becomes-the-early-adopters-of-gpt-to-incorporate-it-into-their-voc-platform",
       "To URL": "blogs/inmoment-becomes-the-early-adopters-of-gpt-to-incorporate-it-into-their-voc-platform-236"
      },
      {
       "Title": "Innovation leaders ultimately prefer best-of-breed & interoperability",
       "ID": 60,
       "Type": "Blog",
       "From URL": "blogs/innovation-leaders-ultimately-prefer-best-of-breed-interoperability",
       "To URL": "blogs/innovation-leaders-ultimately-prefer-best-of-breed-interoperability-60"
      },
      {
       "Title": "Insider Trading: Uncovering the Illegal Practice and Its Consequences",
       "ID": 239,
       "Type": "Blog",
       "From URL": "blogs/insider-trading-uncovering-the-illegal-practice-and-its-consequences",
       "To URL": "blogs/insider-trading-uncovering-the-illegal-practice-and-its-consequences-239"
      },
      {
       "Title": "Internet of Behavior (IoB) is Posing Concerns for Data Privacy & Security",
       "ID": 169,
       "Type": "Blog",
       "From URL": "blogs/internet-of-behavior-iob-is-posing-concerns-for-data-privacy-security",
       "To URL": "blogs/internet-of-behavior-iob-is-posing-concerns-for-data-privacy-security-169"
      },
      {
       "Title": "Introducing Pimcore 11: Next-Gen Data Management",
       "ID": 237,
       "Type": "Blog",
       "From URL": "blogs/introducing-pimcore-11-next-gen-data-management",
       "To URL": "blogs/introducing-pimcore-11-next-gen-data-management-237"
      },
      {
       "Title": "iProov has partnered with Undercoverlab for faster and more accurate user authentication through facial biometrics",
       "ID": 251,
       "Type": "Blog",
       "From URL": "blogs/iproov-has-partnered-with-undercoverlab-for-faster-and-more-accurate-user-authentication-through-facial-biometrics",
       "To URL": "blogs/iproov-has-partnered-with-undercoverlab-for-faster-and-more-accurate-user-authentication-through-facial-biometrics-251"
      },
      {
       "Title": "Israeli cyber security firm Wiz raises $300 million in funding",
       "ID": 213,
       "Type": "Blog",
       "From URL": "blogs/israeli-cyber-security-firm-wiz-raises-300-million-in-funding",
       "To URL": "blogs/israeli-cyber-security-firm-wiz-raises-300-million-in-funding-213"
      },
      {
       "Title": "IT Infrastructure Services Market &#8211; Trends, Challenges & Growth Strategies ",
       "ID": 135,
       "Type": "Blog",
       "From URL": "blogs/it-infrastructure-services-market-trends-challenges-growth-strategies",
       "To URL": "blogs/it-infrastructure-services-market-trends-challenges-growth-strategies-135"
      },
      {
       "Title": "It’s become increasingly important for organizations to adopt digital transformation",
       "ID": 63,
       "Type": "Blog",
       "From URL": "blogs/its-become-increasingly-important-for-organizations-to-adopt-digital-transformation",
       "To URL": "blogs/it-become-increasingly-important-for-organizations-to-adopt-digital-transformation-63"
      },
      {
       "Title": "It’s not enough to merely procure & combine disparate technology components",
       "ID": 62,
       "Type": "Blog",
       "From URL": "blogs/its-not-enough-to-merely-procure-combine-disparate-technology-components",
       "To URL": "blogs/it-not-enough-to-merely-procure-combine-disparate-technology-components-62"
      },
      {
       "Title": "Ivalua launches Environmental Impact Centre to curb greenhouse emissions",
       "ID": 188,
       "Type": "Blog",
       "From URL": "blogs/ivalua-launches-environmental-impact-centre-to-curb-greenhouse-emissions",
       "To URL": "blogs/ivalua-launches-environmental-impact-centre-to-curb-greenhouse-emissions-188"
      },
      {
       "Title": "Jimmy John- The QSR plans to gamify its customer loyalty program.",
       "ID": 166,
       "Type": "Blog",
       "From URL": "blogs/jimmy-john-the-qsr-plans-to-gamify-its-customer-loyalty-program",
       "To URL": "blogs/jimmy-john-the-qsr-plans-to-gamify-its-customer-loyalty-program-166"
      },
      {
       "Title": "Körber Fortifies its Leadership Position in the Supply Chain Software Market by Acquiring EnVista’s Omnichannel and Global Freight Audit & Payment Services",
       "ID": 114,
       "Type": "Blog",
       "From URL": "blogs/korber-fortifies-its-leadership-position-in-the-supply-chain-software-market-by-acquiring-envistas-omnichannel-and-global-freight-audit-and-payment-services",
       "To URL": "blogs/krber-fortifies-its-leadership-position-in-the-supply-chain-software-market-by-acquiring-envista-omnichannel-and-global-freight-audit-payment-services-114"
      },
      {
       "Title": "Körber Supply Chain Highlights Major Innovations, Success Stories & Strategies",
       "ID": 72,
       "Type": "Blog",
       "From URL": "blogs/korber-supply-chain-highlights-major-innovations-success-stories-strategies",
       "To URL": "blogs/krber-supply-chain-highlights-major-innovations-success-stories-strategies-72"
      },
      {
       "Title": "LexisNexis® Risk Solutions Launches RiskNarrative™: Next-Generation Customer Lifecycle Management Platform for Enhanced Risk Decision-Making and Seamless Customer Journeys",
       "ID": 259,
       "Type": "Blog",
       "From URL": "blogs/lexisnexis-risk-solutions-launches-risknarrative-next-generation-customer-lifecycle-management-platform-for-enhanced-risk-decision-making-and-seamless-customer-journeys",
       "To URL": "blogs/lexisnexis-risk-solutions-launches-risknarrative-next-generation-customer-lifecycle-management-platform-for-enhanced-risk-decision-making-and-seamless-customer-journeys-259"
      },
      {
       "Title": "LogPoint Enhances SOAR Platform with ChatGPT Integration for Smarter Incident Response",
       "ID": 230,
       "Type": "Blog",
       "From URL": "blogs/logpoint-enhances-soar-platform-with-chatgpt-integration-for-smarter-incident-response",
       "To URL": "blogs/logpoint-enhances-soar-platform-with-chatgpt-integration-for-smarter-incident-response-230"
      },
      {
       "Title": "Lucid Software Launches Enhanced Visualization Capabilities",
       "ID": 238,
       "Type": "Blog",
       "From URL": "blogs/lucid-software-launches-enhanced-visualization-capabilities",
       "To URL": "blogs/lucid-software-launches-enhanced-visualization-capabilities-238"
      },
      {
       "Title": "Madison Logic, a leading account-based marketing platform vendor to be acquired by BC Partners",
       "ID": 165,
       "Type": "Blog",
       "From URL": "blogs/madison-logic-a-leading-account-based-marketing-platform-vendor-to-be-acquired-by-bc-partners",
       "To URL": "blogs/madison-logic-a-leading-account-based-marketing-platform-vendor-to-be-acquired-by-bc-partners-165"
      },
      {
       "Title": "MediaValet Introduces Cutting-Edge Integration for Traceable Watermarking of Digital Assets",
       "ID": 242,
       "Type": "Blog",
       "From URL": "blogs/mediavalet-introduces-cutting-edge-integration-for-traceable-watermarking-of-digital-assets",
       "To URL": "blogs/mediavalet-introduces-cutting-edge-integration-for-traceable-watermarking-of-digital-assets-242"
      },
      {
       "Title": "Metaverse & the possibilities it can bring in",
       "ID": 151,
       "Type": "Blog",
       "From URL": "blogs/metaverse-the-possibilities-it-can-bring-in",
       "To URL": "blogs/metaverse-the-possibilities-it-can-bring-in-151"
      },
      {
       "Title": "Mitel set to acquire Atos’s Unified Communications & Collaborations Business (Unify)",
       "ID": 171,
       "Type": "Blog",
       "From URL": "blogs/mitel-set-to-acquire-atoss-unified-communications-collaborations-business-unify",
       "To URL": "blogs/mitel-set-to-acquire-atos-unified-communications-collaborations-business-unify-171"
      },
      {
       "Title": "Monetizing the Data for Business Growth",
       "ID": 108,
       "Type": "Blog",
       "From URL": "blogs/monetizing-the-data-for-business-growth",
       "To URL": "blogs/monetizing-the-data-for-business-growth-108"
      },
      {
       "Title": "Networking Giant Avaya Officially Files for Bankruptcy Under Chapter 11 — What’s Next.",
       "ID": 205,
       "Type": "Blog",
       "From URL": "blogs/networking-giant-avaya-officially-files-for-bankruptcy-under-chapter-11-whats-next",
       "To URL": "blogs/networking-giant-avaya-officially-files-for-bankruptcy-under-chapter-11-what-next-205"
      },
      {
       "Title": "New cybersecurity mandates by CISA and Low-code security automation to the rescue.",
       "ID": 173,
       "Type": "Blog",
       "From URL": "blogs/new-cybersecurity-mandates-by-cisa-and-low-code-security-automation-to-the-rescue",
       "To URL": "blogs/new-cybersecurity-mandates-by-cisa-and-low-code-security-automation-to-the-rescue-173"
      },
      {
       "Title": "Newgen and Temenos Revolutionize Banking Operations and Customer Experiences",
       "ID": 244,
       "Type": "Blog",
       "From URL": "blogs/newgen-and-temenos-revolutionize-banking-operations-and-customer-experiences",
       "To URL": "blogs/newgen-and-temenos-revolutionize-banking-operations-and-customer-experiences-244"
      },
      {
       "Title": "New ways of working, new systems, new equipment",
       "ID": 69,
       "Type": "Blog",
       "From URL": "blogs/new-ways-of-working-new-systems-new-equipment",
       "To URL": "blogs/new-ways-of-working-new-systems-new-equipment-69"
      },
      {
       "Title": "NICE and Cognizant Announce Strategic Partnership for Digital Customer Experience Transformation",
       "ID": 191,
       "Type": "Blog",
       "From URL": "blogs/nice-and-cognizant-announce-strategic-partnership-for-digital-customer-experience-transformation",
       "To URL": "blogs/nice-and-cognizant-announce-strategic-partnership-for-digital-customer-experience-transformation-191"
      },
      {
       "Title": "NICE Introduces integration of its CXone Expert and OpenAI’s generative modelling to transform its AI-powered customer service.",
       "ID": 177,
       "Type": "Blog",
       "From URL": "blogs/nice-introduces-integration-of-its-cxone-expert-and-openais-generative-modelling-to-transform-its-ai-powered-customer-service",
       "To URL": "blogs/nice-introduces-integration-of-its-cxone-expert-and-openai-generative-modelling-to-transform-its-ai-powered-customer-service-177"
      },
      {
       "Title": "Omnichannel Order Management System Do&#8217;s and Dont&#8217;s",
       "ID": 225,
       "Type": "Blog",
       "From URL": "blogs/omnichannel-order-management-system-dos-and-donts",
       "To URL": "blogs/omnichannel-order-management-system-dos-and-donts-225"
      },
      {
       "Title": "OneID to Transform Digital Identity Verification through IDVerse Integration",
       "ID": 292,
       "Type": "Blog",
       "From URL": "blogs/oneid-to-transform-digital-identity-verification-through-idverse-integration",
       "To URL": "blogs/oneid-to-transform-digital-identity-verification-through-idverse-integration--292"
      },
      {
       "Title": "OneTrust partners with Supply Wisdom to Help Users Evaluate Critical Risks Posed by Third-Party Vendors.",
       "ID": 201,
       "Type": "Blog",
       "From URL": "blogs/onetrust-partners-with-supply-wisdom-to-help-users-evaluate-critical-risks-posed-by-third-party-vendors",
       "To URL": "blogs/onetrust-partners-with-supply-wisdom-to-help-users-evaluate-critical-risks-posed-by-third-party-vendors-201"
      },
      {
       "Title": "OpenText acquires Micro Focus in a bid to expand its product portfolio and customer reach.",
       "ID": 189,
       "Type": "Blog",
       "From URL": "blogs/opentext-acquires-micro-focus-in-a-bid-to-expand-its-product-portfolio-and-customer-reach",
       "To URL": "blogs/opentext-acquires-micro-focus-in-a-bid-to-expand-its-product-portfolio-and-customer-reach-189"
      },
      {
       "Title": "Operationalizing Data Strategy for Delivering Business Results",
       "ID": 148,
       "Type": "Blog",
       "From URL": "blogs/operationalizing-data-strategy-for-delivering-business-results",
       "To URL": "blogs/operationalizing-data-strategy-for-delivering-business-results-148"
      },
      {
       "Title": "Organizations should change & adapt faster than the world around them",
       "ID": 56,
       "Type": "Blog",
       "From URL": "blogs/organizations-should-change-adapt-faster-than-the-world-around-them",
       "To URL": "blogs/organizations-should-change-adapt-faster-than-the-world-around-them-56"
      },
      {
       "Title": "Paymentology and Vodafone Fiji Partner to Enable Seamless Digital Payments for Fijians",
       "ID": 249,
       "Type": "Blog",
       "From URL": "blogs/paymentology-and-vodafone-fiji-partner-to-enable-seamless-digital-payments-for-fijians",
       "To URL": "blogs/paymentology-and-vodafone-fiji-partner-to-enable-seamless-digital-payments-for-fijians-249"
      },
      {
       "Title": "Paymentology Partners with PayCard to Empower Guinea&#8217;s Unbanked Population with Financial Services",
       "ID": 289,
       "Type": "Blog",
       "From URL": "blogs/paymentology-partners-with-paycard-to-empower-guineas-unbanked-population-with-financial-services",
       "To URL": "blogs/paymentology-partners-with-paycard-to-empower-guineas-unbanked-population-with-financial-services--289"
      },
      {
       "Title": "Perceptyx acquires Humu",
       "ID": 296,
       "Type": "Blog",
       "From URL": "blogs/perceptyx-acquires-humu",
       "To URL": "blogs/perceptyx-acquires-humu-296"
      },
      {
       "Title": "Playvox Launches New Workforce Engagement Solutions for Salesforce Contact Centers.",
       "ID": 199,
       "Type": "Blog",
       "From URL": "blogs/playvox-launches-new-workforce-engagement-solutions-for-salesforce-contact-centers",
       "To URL": "blogs/playvox-launches-new-workforce-engagement-solutions-for-salesforce-contact-centers-199"
      },
      {
       "Title": "Priorities for CIOs/CTOs in 2023 & beyond",
       "ID": 164,
       "Type": "Blog",
       "From URL": "blogs/priorities-for-cios-ctos-in-2023-beyond",
       "To URL": "blogs/priorities-for-ciosctos-in-2023-beyond-164"
      },
      {
       "Title": "Privileged Access Management: A Market Outlook",
       "ID": 142,
       "Type": "Blog",
       "From URL": "blogs/privileged-access-management-a-market-outlook",
       "To URL": "blogs/privileged-access-management-a-market-outlook-142"
      },
      {
       "Title": "Privileged Access Management: A Market Outlook Part-2",
       "ID": 154,
       "Type": "Blog",
       "From URL": "blogs/privileged-access-management-a-market-outlook-part-2",
       "To URL": "blogs/privileged-access-management-a-market-outlook-part-2-154"
      },
      {
       "Title": "Procurement Software & Its Benefits",
       "ID": 112,
       "Type": "Blog",
       "From URL": "blogs/procurement-software-its-benefits",
       "To URL": "blogs/procurement-software-its-benefits-112"
      },
      {
       "Title": "Procure-to-pay software helps achieve procurement process excellence",
       "ID": 146,
       "Type": "Blog",
       "From URL": "blogs/procure-to-pay-software-helps-achieve-procurement-process-excellence",
       "To URL": "blogs/procure-to-pay-software-helps-achieve-procurement-process-excellence-146"
      },
      {
       "Title": "Quantexa acquires Aylien to integrate varied data types in order to drive automated decision making.",
       "ID": 211,
       "Type": "Blog",
       "From URL": "blogs/quantexa-acquires-aylien-to-integrate-varied-data-types-in-order-to-drive-automated-decision-making",
       "To URL": "blogs/quantexa-acquires-aylien-to-integrate-varied-data-types-in-order-to-drive-automated-decision-making-211"
      },
      {
       "Title": "Quantexa and Carahsoft Join Forces to Drive Advanced Data Analytics Solutions",
       "ID": 258,
       "Type": "Blog",
       "From URL": "blogs/quantexa-and-carahsoft-join-forces-to-drive-advanced-data-analytics-solutions",
       "To URL": "blogs/quantexa-and-carahsoft-join-forces-to-drive-advanced-data-analytics-solutions-258"
      },
      {
       "Title": "Radware launches cloud-focused cybersecurity partner initiative",
       "ID": 194,
       "Type": "Blog",
       "From URL": "blogs/radware-launches-cloud-focused-cybersecurity-partner-initiative",
       "To URL": "blogs/radware-launches-cloud-focused-cybersecurity-partner-initiative-194"
      },
      {
       "Title": "Role of AI in Sales Force Automation (SFA) to Improve Customer Experience",
       "ID": 255,
       "Type": "Blog",
       "From URL": "blogs/role-of-ai-in-sales-force-automation-sfa-to-improve-customer-experience",
       "To URL": "blogs/role-of-ai-in-sales-force-automation-sfa-to-improve-customer-experience-255"
      },
      {
       "Title": "Role of B2B Marketing Automation Platforms in Personalizing Content Using Behavioural Data",
       "ID": 282,
       "Type": "Blog",
       "From URL": "blogs/role-of-b2b-marketing-automation-platforms-in-personalizing-content-using-behavioural-data",
       "To URL": "blogs/role-of-b2b-marketing-automation-platforms-in-personalizing-content-using-behavioural-data--282"
      },
      {
       "Title": "Sales Enablement Platform: What, Why and Best Practices to look out for in 2023",
       "ID": 163,
       "Type": "Blog",
       "From URL": "blogs/sales-enablement-platform-what-why-and-best-practices-to-look-out-for-in-2023",
       "To URL": "blogs/sales-enablement-platform-what-why-and-best-practices-to-look-out-for-in-2023-163"
      },
      {
       "Title": "Salesforce Implementation Service and Why One Needs It.",
       "ID": 202,
       "Type": "Blog",
       "From URL": "blogs/salesforce-implementation-covers-a-wide-range-of-services-right-from-consulting-customization-migration-integration-and-support-its-origin-can-be-traced-around-2008-when-organizations-were-implem",
       "To URL": "blogs/salesforce-implementation-service-and-why-one-needs-it-202"
      },
      {
       "Title": "Sales Performance Management: An Effective Guide",
       "ID": 155,
       "Type": "Blog",
       "From URL": "blogs/sales-performance-management-an-effective-guide",
       "To URL": "blogs/sales-performance-management-an-effective-guide-155"
      },
      {
       "Title": "Security Orchestration and Automated Response for threat detection, analysis, and remediation.",
       "ID": 200,
       "Type": "Blog",
       "From URL": "blogs/security-orchestration-and-automated-response-for-threat-detection-analysis-and-remediation",
       "To URL": "blogs/security-orchestration-and-automated-response-for-threat-detection-analysis-and-remediation-200"
      },
      {
       "Title": "Software Solutions Help Organizations Achieve Procurement Process Excellence",
       "ID": 152,
       "Type": "Blog",
       "From URL": "blogs/software-solutions-help-organizations-achieve-procurement-process-excellence",
       "To URL": "blogs/software-solutions-help-organizations-achieve-procurement-process-excellence-152"
      },
      {
       "Title": "Source-to-Pay software helps overcome procurement challenges",
       "ID": 161,
       "Type": "Blog",
       "From URL": "blogs/source-to-pay-software-helps-overcome-procurement-challenges",
       "To URL": "blogs/source-to-pay-software-helps-overcome-procurement-challenges-161"
      },
      {
       "Title": "Spend Analysis is the Cornerstone on Which Rests the Strategic Sourcing Program’s Success",
       "ID": 125,
       "Type": "Blog",
       "From URL": "blogs/spend-analysis-is-the-cornerstone-on-which-rests-the-strategic-sourcing-programs-success",
       "To URL": "blogs/spend-analysis-is-the-cornerstone-on-which-rests-the-strategic-sourcing-program-success-125"
      },
      {
       "Title": "Strategy to adopt advanced technologies & scale digitalization rapidly",
       "ID": 61,
       "Type": "Blog",
       "From URL": "blogs/strategy-to-adopt-advanced-technologies-scale-digitalization-rapidly",
       "To URL": "blogs/strategy-to-adopt-advanced-technologies-scaledigitalization-rapidly-61"
      },
      {
       "Title": "Streamline and efficiently manage the order-to-cash process with software",
       "ID": 287,
       "Type": "Blog",
       "From URL": "blogs/streamline-and-efficiently-manage-the-order-to-cash-process-with-software",
       "To URL": "blogs/streamline-and-efficiently-manage-the-order-to-cash-process-with-software--287"
      },
      {
       "Title": "The Importance of Procurement in Supply Chain Management",
       "ID": 157,
       "Type": "Blog",
       "From URL": "blogs/supply-chain-management-procurement",
       "To URL": "blogs/the-importance-of-procurement-in-supply-chain-management-157"
      },
      {
       "Title": "Supply Chain Management: Trends and Outlook 2023",
       "ID": 175,
       "Type": "Blog",
       "From URL": "blogs/supply-chain-management-trends-and-outlook-2023",
       "To URL": "blogs/supply-chain-management-trends-and-outlook-2023-175"
      },
      {
       "Title": "Sylq Forms Strategic Partnership with ThetaRay AI to Automate AML Monitoring and Customer Screening",
       "ID": 243,
       "Type": "Blog",
       "From URL": "blogs/sylq-forms-strategic-partnership-with-thetaray-ai-to-automate-aml-monitoring-and-customer-screening",
       "To URL": "blogs/sylq-forms-strategic-partnership-with-thetaray-ai-to-automate-aml-monitoring-and-customer-screening-243"
      },
      {
       "Title": "Technology Integration and Interoperability in PLM Landscape",
       "ID": 214,
       "Type": "Blog",
       "From URL": "blogs/technology-integration-and-interoperability-in-plm-landscape",
       "To URL": "blogs/technology-integration-and-interoperability-in-plm-landscape-214"
      },
      {
       "Title": "Terminus, a leading account-based marketing platform vendor maximizes ad spend for marketers with less than 3% fraud rate",
       "ID": 182,
       "Type": "Blog",
       "From URL": "blogs/terminus-a-leading-account-based-marketing-platform-vendor-maximizes-ad-spend-for-marketers-with-less-than-3-fraud-rate",
       "To URL": "blogs/terminus-a-leading-account-based-marketing-platform-vendor-maximizes-ad-spend-for-marketers-with-less-than-3-fraud-rate-182"
      },
      {
       "Title": "Terminus Announces New Curated Go-to-Market Data Solution",
       "ID": 224,
       "Type": "Blog",
       "From URL": "blogs/terminus-announces-new-curated-go-to-market-data-solution",
       "To URL": "blogs/terminus-announces-new-curated-go-to-market-data-solution-224"
      },
      {
       "Title": "The Brooks Group and Allego enter partnership to simplify sales training practices",
       "ID": 218,
       "Type": "Blog",
       "From URL": "blogs/the-brooks-group-and-allego-enter-partnership-to-simplify-sales-training-practices",
       "To URL": "blogs/the-brooks-group-and-allego-enter-partnership-to-simplify-sales-training-practices-218"
      },
      {
       "Title": "The Future Of CX & Best Practices To Align With It",
       "ID": 153,
       "Type": "Blog",
       "From URL": "blogs/the-future-of-cx-best-practices",
       "To URL": "blogs/the-future-of-cx-best-practices-to-align-with-it-153"
      },
      {
       "Title": "The Major Technology Disruptions to look for in 2022 & Beyond",
       "ID": 53,
       "Type": "Blog",
       "From URL": "blogs/the-major-technology-disruptions-to-look-for-in-2022-beyond",
       "To URL": "blogs/the-major-technology-disruptions-to-look-for-in-2022-beyond-53"
      },
      {
       "Title": "The market needs the next generation of EA tool that uses Artificial Intelligence",
       "ID": 67,
       "Type": "Blog",
       "From URL": "blogs/the-market-needs-the-next-generation-of-ea-tool-that-uses-ai",
       "To URL": "blogs/the-market-needs-the-next-generation-of-ea-tool-that-uses-artificial-intelligence-67"
      },
      {
       "Title": "The WHAO Effect: Decoding Vendor Assessment ",
       "ID": 254,
       "Type": "Blog",
       "From URL": "blogs/the-whao-effect-decoding-vendor-assessments",
       "To URL": "blogs/the-whao-effect-decoding-vendor-assessment-254"
      },
      {
       "Title": "The WHAO Formula of Attracting End-Users ",
       "ID": 253,
       "Type": "Blog",
       "From URL": "blogs/the-whao-formula-of-attracting-end-users",
       "To URL": "blogs/-the-whao-formula-of-attracting-end-users-253"
      },
      {
       "Title": "The world of marketing is evolving with Digital Marketing Analytics – Here is a guide to stay updated",
       "ID": 162,
       "Type": "Blog",
       "From URL": "blogs/the-world-of-marketing-is-evolving-with-digital-marketing-analytics-here-is-a-guide-to-stay-updated",
       "To URL": "blogs/the-world-of-marketing-is-evolving-with-digital-marketing-analytics-here-is-a-guide-to-stay-updated-162"
      },
      {
       "Title": "ToolsGroup Announces Major Enhancements to Its Supply and Demand Planning Solution. ",
       "ID": 215,
       "Type": "Blog",
       "From URL": "blogs/toolsgroup-announces-major-enhancements-to-its-industry-leading-demand-planning-solution",
       "To URL": "blogs/toolsgroup-announces-major-enhancements-to-its-supply-and-demand-planning-solution-215"
      },
      {
       "Title": "Top CX trends Of 2023",
       "ID": 181,
       "Type": "Blog",
       "From URL": "blogs/top-cx-trends-in-2023",
       "To URL": "blogs/top-cx-trends-of-2023-181"
      },
      {
       "Title": "Top Trends in BPM & Process Automation in 2023 and the Way Beyond",
       "ID": 193,
       "Type": "Blog",
       "From URL": "blogs/top-trends-in-bpm-process-automation-in-2023-and-the-way-beyond",
       "To URL": "blogs/top-trends-in-bpm-process-automation-in-2023-and-the-way-beyond-193"
      },
      {
       "Title": "Top Trends to watch out for in 2023 regarding fraud and financial crime",
       "ID": 183,
       "Type": "Blog",
       "From URL": "blogs/top-trends-to-watch-out-for-in-2023-regarding-fraud-and-financial-crime",
       "To URL": "blogs/top-trends-to-watch-out-for-in-2023-regarding-fraud-and-financial-crime-183"
      },
      {
       "Title": "Treasure Data-AWS join forces to enhance Customer Data Management and drive digital transformation.",
       "ID": 198,
       "Type": "Blog",
       "From URL": "blogs/treasure-data-aws-join-forces-to-enhance-customer-data-management-and-drive-digital-transformation",
       "To URL": "blogs/treasure-data-aws-join-forces-to-enhance-customer-data-management-and-drive-digital-transformation-198"
      },
      {
       "Title": "Trends Driving the Anti-Money Laundering Technologies",
       "ID": 110,
       "Type": "Blog",
       "From URL": "blogs/trends-driving-the-anti-money-laundering-technologies",
       "To URL": "blogs/trends-driving-the-anti-money-laundering-technologies-110"
      },
      {
       "Title": "TrueMoney and Paymentology Join Forces to Enhance Financial Services and Promote Cashless Payments in Thailand and Cambodia",
       "ID": 283,
       "Type": "Blog",
       "From URL": "blogs/truemoney-and-paymentology-join-forces-to-enhance-financial-services-and-promote-cashless-payments-in-thailand-and-cambodia",
       "To URL": "blogs/truemoney-and-paymentology-join-forces-to-enhance-financial-services-and-promote-cashless-payments-in-thailand-and-cambodia--283"
      },
      {
       "Title": "Use of Interoperability in Hybrid Workplaces.",
       "ID": 209,
       "Type": "Blog",
       "From URL": "blogs/use-of-interoperability-in-hybrid-workplaces",
       "To URL": "blogs/use-of-interoperability-in-hybrid-workplaces-209"
      },
      {
       "Title": "Vendor Briefings – A must-have Strategy for the Tech Companies",
       "ID": 222,
       "Type": "Blog",
       "From URL": "blogs/vendor-briefings-a-must-have-strategy-for-the-tech-companies",
       "To URL": "blogs/vendor-briefings-a-must-have-strategy-for-the-tech-companies-222"
      },
      {
       "Title": "Walmart Commerce partnering with Salesforce to offer frictionless delivery for customers.",
       "ID": 206,
       "Type": "Blog",
       "From URL": "blogs/walmart-commerce-partnering-with-salesforce-to-offer-frictionless-delivery-for-customers",
       "To URL": "blogs/walmart-commerce-partnering-with-salesforce-to-offer-frictionless-delivery-for-customers-206"
      },
      {
       "Title": "We see a dramatic increase in collaborative automation",
       "ID": 58,
       "Type": "Blog",
       "From URL": "blogs/we-see-a-dramatic-increase-in-collaborative-automation",
       "To URL": "blogs/we-see-a-dramatic-increase-in-collaborative-automation-58"
      },
      {
       "Title": "Why Vendor Rating Assessment is a Pre-Investment Criterion ",
       "ID": 256,
       "Type": "Blog",
       "From URL": "blogs/why-vendor-rating-assessment-is-a-pre-investment-criterion",
       "To URL": "blogs/why-vendor-rating-assessment-is-a-pre-investment-criterion-256"
      },
      {
       "Title": "Will the Emerging Technologies enable building a Resilient Supply Chain?",
       "ID": 86,
       "Type": "Blog",
       "From URL": "blogs/will-the-emerging-technologies-enable-building-a-resilient-supply-chain",
       "To URL": "blogs/will-the-emerging-technologies-enable-building-a-resilient-supply-chain-86"
      },
      {
       "Title": "Will work from home (WFH) culture act as the major restraining factor for the global IWMS market?",
       "ID": 272,
       "Type": "Blog",
       "From URL": "blogs/will-work-from-home-wfh-culture-act-as-the-major-restraining-factor-for-the-global-iwms-market",
       "To URL": "blogs/will-work-from-home-wfh-culture-act-as-the-major-restraining-factor-for-the-global-iwms-market-272"
      },
      {
       "Title": "Workplace Trends Re-Defining Organizations in 2023",
       "ID": 223,
       "Type": "Blog",
       "From URL": "blogs/workplace-trends-re-defining-organizations-in-2023",
       "To URL": "blogs/workplace-trends-re-defining-organizations-in-2023-223"
      },
      {
       "Title": "Yieldify Acquisition to Help Epsilon Expand into the Mid-Market Segment",
       "ID": 231,
       "Type": "Blog",
       "From URL": "blogs/yieldify-acquisition-to-help-epsilon-expand-into-the-mid-market-segment",
       "To URL": "blogs/yieldify-acquisition-to-help-epsilon-expand-into-the-mid-market-segment-231"
      },
     ]
}
 

  constructor(private ecommBackendService: EcommBackendService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private titleService:Title,
    private router: Router,
    private meta:Meta) { }

  ngOnInit(): void {


  

    // alert("new comp")
    const currentUrl = window.location.pathname.replace(/^\/+/, '');

    this.urlMappings.mappings.forEach((element : any) => {
      if (element["From URL"] === currentUrl){
        // alert("found it")
        const newUrl = element["To URL"];
        // console.log(newUrl)
        this.router.navigateByUrl(newUrl).then((res:any)=>{
          window.location.reload()
        });
      }
    })

    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }

 

        this.blogData = history.state.blogData;

        let id = this.route.snapshot.params['blogName-:blogId'];
        
        const matches = id.match(/-(\d+)$/); // Extract numeric part following the last dash "-"
        
        // console.log(matches);
// 
        if (matches.length > 1) {
          
          const reportId = matches[1];
          // alert(reportId)
          this.getResearchById(reportId);

        }else {
          // Handle the case where there is no valid reportId
          console.error('Invalid reportId');
        }

        this.route.queryParams.subscribe((params) => {
          const researchId = params['id'];
          this.researchMaster = history.state.blogData;
          //console.log(this.route.snapshot.params)
          let id = this.route.snapshot.params['blogName'];
          var reportId = id.substr(id.length - 3)
          this.getResearchById(Number(reportId));
          
        });
  }

  getResearchById(id: number): void {
    this.isLoading = true;
    this.ecommBackendService.getPressReleaseById(id).subscribe(
      (response: ApiResponse) => {
        // console.log(response)
        if (response.success) {
          this.researchMaster = response.singlePressRelease;
          // Handle the successful response here
          this.showResearchDetails(response.singlePressRelease)
          this.titleService.setTitle(response.singlePressRelease.blogTitle)
          this.isLoading = false;

          
      
        } else {
          this.errorMessage = response.message;
          // Handle the error response here
          alert("not found")
          this.router.navigate(['not-found'])
        }
      },
      (error) => {
        this.errorMessage = 'Error occurred while fetching blog.';
        // Handle any HTTP errors here
          // this.router.navigate(['not-found'])
      }
    );
  }

  showResearchDetails(research: any): void {
    // //console.log(research)
    //console.log(research)
    const urlFriendlyName = this.getUrlFriendlyString(research.blogTitle);
    const url = `/blogs/${urlFriendlyName}-${research.id}`;

    if (research && research.id && research.blogTitle) {
      //console.log(research.blogTitle)
      this.router.navigate([url], {
        state: {
          blogData: research
        }
      });
    } else {
      console.error('Selected research not found in the filtered data.');
    }
  }

  downloadForm(research:any){

    //console.log(research)

    const urlFriendlyName = this.getUrlFriendlyString(research.blogTitle);
    const url = `/download-form/blogs/${urlFriendlyName}-${research.id}`;

    if (research && research.id && research.blogTitle) {
      //console.log(research.blogTitle)
      this.router.navigate([url], {
        state: {
          blogData: research
        }
      });
    } else {
      console.error('Selected research not found in the filtered data.');
    }

  }

  private getUrlFriendlyString(input: string): string {
    // Replace special characters with dashes and convert to lowercase
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-');
  }


}
