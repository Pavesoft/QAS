import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EcommBackendService} from 'src/app/Services/ecomm-backend-service.service';

@Component({selector: 'app-old-url-redirect-component', templateUrl: './old-url-redirect-component.component.html', styleUrls: ['./old-url-redirect-component.component.scss']})
export class OldUrlRedirectComponent implements OnInit { // Import or load your JSON object here

    urlMappings : any = {
        mappings: [
            {
                "From URL": "market_research/datasheet-leak-detection-systems-market",
                "To URL": "market-research/datasheet-leak-detection-systems-market-1",
                "URL ID": 1
            },
            {
                "From URL": "market_research/datasheet-smart-pumps-market",
                "To URL": "market-research/datasheet-smart-pumps-market-2",
                "URL ID": 2
            },
            {
                "From URL": "market_research/datasheet-industrial-ups-market",
                "To URL": "market-research/datasheet-industrial-ups-market-3",
                "URL ID": 3
            },
            {
                "From URL": "market_research/datasheet-machine-safety-systems-market",
                "To URL": "market-research/datasheet-machine-safety-systems-market-4",
                "URL ID": 4
            }, {
                "From URL": "market_research/datasheet-process-safety-systems-market",
                "To URL": "market-research/datasheet-process-safety-systemsã‚a market-5",
                "URL ID": 5
            }, {
                "From URL": "market_research/datasheet-human-machine-interface-hmi-software-market",
                "To URL": "market-research/datasheet-human-machine-interface-hmi-software-market-6",
                "URL ID": 6
            }, {
                "From URL": "market_research/datasheet-programmable-logic-controllers-plc-market",
                "To URL": "market-research/datasheet-programmable-logic-controllers-plc-market-7",
                "URL ID": 7
            }, {
                "From URL": "market_research/datasheet-distributed-control-systems-dcs-market",
                "To URL": "market-research/datasheet-distributed-control-systems-dcs-market-8",
                "URL ID": 8
            }, {
                "From URL": "market_research/datasheet-scada-for-oil-gas-industry-market",
                "To URL": "market-research/datasheet-scada-for-oil-&-gas-industry-market-9",
                "URL ID": 9
            }, {
                "From URL": "market_research/datasheet-scada-for-water-wastewater-industry-market",
                "To URL": "market-research/datasheet-scada-for-water-&-wastewater-industry-market-10",
                "URL ID": 10
            }, {
                "From URL": "market_research/datasheet-scada-for-electric-power-industry",
                "To URL": "market-research/datasheet-scada-for-electric-power-industry-11",
                "URL ID": 11
            }, {
                "From URL": "market_research/datasheet-general-motion-control-gmc-market",
                "To URL": "market-research/datasheet-general-motion-control-gmc-market-12",
                "URL ID": 12
            }, {
                "From URL": "market_research/datasheet-process-simulation-and-optimization-market",
                "To URL": "market-research/datasheet-process-simulation-and-optimization-market-13",
                "URL ID": 13
            }, {
                "From URL": "market_research/datasheet-manufacturing-execution-systems-mes-for-process-industries",
                "To URL": "market-research/datasheet-manufacturing-execution-systems-mes-for-process-industries-14",
                "URL ID": 14
            }, {
                "From URL": "market_research/datasheet-manufacturing-execution-systems-mes-for-discrete-industries",
                "To URL": "market-research/datasheet-manufacturing-execution-systems-mes-for-discrete-industries-15",
                "URL ID": 15
            }, {
                "From URL": "market_research/datasheet-asset-performance-management-apm-market",
                "To URL": "market-research/datasheet-asset-performance-management-apm-market-16",
                "URL ID": 16
            }, {
                "From URL": "market_research/datasheet-governance-risk-and-compliance-grc-platform-market",
                "To URL": "market-research/datasheet-governance-risk-and-compliance-grc-platform-market-17",
                "URL ID": 17
            }, {
                "From URL": "market_research/datasheet-file-analysis-market",
                "To URL": "market-research/datasheet-file-analysis-market-18",
                "URL ID": 18
            }, {
                "From URL": "market_research/datasheet-robotics-process-automation-rpa-market",
                "To URL": "market-research/datasheet-robotics-process-automation-rpa-market-19",
                "URL ID": 19
            }, {
                "From URL": "market_research/datasheet-it-process-automation-itpa-market",
                "To URL": "market-research/datasheet-it-process-automation-itpa-market-20",
                "URL ID": 20
            }, {
                "From URL": "market_research/datasheet-product-lifecycle-management-plm-market",
                "To URL": "market-research/datasheet-product-lifecycle-management-plm-market-21",
                "URL ID": 21
            }, {
                "From URL": "market_research/datasheet-intelligent-data-catalogs-market",
                "To URL": "market-research/datasheet-intelligent-data-catalogs-market-22",
                "URL ID": 22
            }, {
                "From URL": "market_research/datasheet-grc-platforms",
                "To URL": "market-research/datasheet-grc-platforms-24",
                "URL ID": 24
            }, {
                "From URL": "market_research/datasheet-it-risk-management",
                "To URL": "market-research/datasheet-it-risk-management-25",
                "URL ID": 25
            }, {
                "From URL": "market_research/datasheet-vendor-risk-management",
                "To URL": "market-research/datasheet-vendor-risk-management-26",
                "URL ID": 26
            }, {
                "From URL": "market_research/datasheet-risk-based-authentication",
                "To URL": "market-research/datasheet-risk-based-authentication-27",
                "URL ID": 27
            }, {
                "From URL": "market_research/datasheet-security-information-event-management",
                "To URL": "market-research/datasheet-security-information-&-event-management-28",
                "URL ID": 28
            }, {
                "From URL": "market_research/datasheet-user-entity-behavior-analytics",
                "To URL": "market-research/datasheet-user-&-entity-behavior-analytics-29",
                "URL ID": 29
            }, {
                "From URL": "market_research/datasheet-customer-journey-analytics",
                "To URL": "market-research/datasheet-customer-journey-analytics-31",
                "URL ID": 31
            }, {
                "From URL": "market_research/datasheet-customer-data-platforms",
                "To URL": "market-research/datasheet-customer-data-platforms-32",
                "URL ID": 32
            }, {
                "From URL": "market_research/datasheet-multi-enterprise-supply-chain-business-network",
                "To URL": "market-research/datasheet-multi-enterprise-supply-chain-business-network-36",
                "URL ID": 36
            }, {
                "From URL": "market_research/datasheet-sales-operations-planning",
                "To URL": "market-research/datasheet-sales-&-operations-planning-37",
                "URL ID": 37
            }, {
                "From URL": "market_research/datasheet-security-orchestration-automation-soar",
                "To URL": "market-research/datasheet-security-orchestration-&-automation-soar-40",
                "URL ID": 40
            }, {
                "From URL": "market_research/datasheet-vulnerability-analysis",
                "To URL": "market-research/datasheet-vulnerability-analysis-41",
                "URL ID": 41
            }, {
                "From URL": "market_research/datasheet-customer-journey-mapping",
                "To URL": "market-research/datasheet-customer-journey-mapping-42",
                "URL ID": 42
            }, {
                "From URL": "market_research/datasheet-voice-of-the-customers",
                "To URL": "market-research/datasheet-voice-of-the-customers-45",
                "URL ID": 45
            }, {
                "From URL": "market_research/datasheet-autonomous-mobile-robots",
                "To URL": "market-research/datasheet-autonomous-mobile-robots-46",
                "URL ID": 46
            }, {
                "From URL": "market_research/datasheet-omnichannel-order-management",
                "To URL": "market-research/datasheet-omnichannel-order-management-47",
                "URL ID": 47
            }, {
                "From URL": "market_research/datasheet-warehouse-management-systems",
                "To URL": "market-research/datasheet-warehouse-management-systems-50",
                "URL ID": 50
            }, {
                "From URL": "market_research/datasheet-transportation-management-systems",
                "To URL": "market-research/datasheet-transportation-management-systems-51",
                "URL ID": 51
            }, {
                "From URL": "market_research/datasheet-customer-journey-analytics-market",
                "To URL": "market-research/datasheet-customer-journey-analytics-market-53",
                "URL ID": 53
            }, {
                "From URL": "market_research/market-forecast-analysis-omnichannel-order-management-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-omnichannel-order-management-2022-2027-worldwide-58",
                "URL ID": 58
            }, {
                "From URL": "market_research/market-forecast-analysis-sales-operations-planning-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-sales-&-operations-planning-2022-2027-worldwide-62",
                "URL ID": 62
            }, {
                "From URL": "market_research/market-forecast-analysis-transportation-management-systems-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-transportation-management-systems-2022-2027-worldwide-66",
                "URL ID": 66
            }, {
                "From URL": "market_research/market-forecast-analysis-digital-threat-intelligence-management-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-digital-threat-intelligence-management-2022-2027-worldwide-68",
                "URL ID": 68
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-journey-analytics-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-customer-journey-analytics-2022-2027-worldwide-72",
                "URL ID": 72
            }, {
                "From URL": "market_research/market-forecast-analysis-voice-of-the-customers-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-voice-of-the-customers-2022-2027-worldwide-76",
                "URL ID": 76
            }, {
                "From URL": "market_research/market-forecast-analysis-account-based-marketing-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-account-based-marketing-2022-2027-worldwide-90",
                "URL ID": 90
            }, {
                "From URL": "market_research/market-forecast-analysis-ad-tech-platform-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-ad-tech-platform-2022-2027-worldwide-92",
                "URL ID": 92
            }, {
                "From URL": "market_research/market-forecast-analysis-strategic-sourcing-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-strategic-sourcing-2022-2027-emea-94",
                "URL ID": 94
            }, {
                "From URL": "market_research/market-forecast-analysis-strategic-sourcing-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-strategic-sourcing-2022-2027-north-america-96",
                "URL ID": 96
            }, {
                "From URL": "market_research/market-forecast-analysis-procure-to-pay-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-procure-to-pay-2022-2027-emea-100",
                "URL ID": 100
            }, {
                "From URL": "market_research/market-forecast-analysis-procure-to-pay-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-procure-to-pay-2022-2027-apac-104",
                "URL ID": 104
            }, {
                "From URL": "market_research/market-forecast-analysis-contract-lifecycle-management-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-contract-lifecycle-management-2022-2027-north-america-108",
                "URL ID": 108
            }, {
                "From URL": "market_research/market-forecast-analysis-supplier-relationship-risk-management-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-supplier-relationship-&-risk-management-2022-2027-north-america-114",
                "URL ID": 114
            }, {
                "From URL": "market_research/market-forecast-analysis-cpq-application-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-cpq-application-2022-2027-emea-118",
                "URL ID": 118
            }, {
                "From URL": "market_research/market-forecast-analysis-cpq-application-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-cpq-application-2022-2027-north-america-120",
                "URL ID": 120
            }, {
                "From URL": "market_research/market-forecast-analysis-account-payable-automation-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-account-payable-automation-2022-2027-apac-128",
                "URL ID": 128
            }, {
                "From URL": "market_research/market-forecast-analysis-account-receivable-application-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-account-receivable-application-2022-2027-north-america-132",
                "URL ID": 132
            }, {
                "From URL": "market_research/market-forecast-analysis-enterprise-fraud-management-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-enterprise-fraud-management-2022-2027-apac-136",
                "URL ID": 136
            }, {
                "From URL": "market_research/market-forecast-analysis-enterprise-fraud-management-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-enterprise-fraud-management-2022-2027-emea-138",
                "URL ID": 138
            }, {
                "From URL": "market_research/market-forecast-analysis-enterprise-fraud-management-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-enterprise-fraud-management-2022-2027-north-america-140",
                "URL ID": 140
            }, {
                "From URL": "market_research/market-forecast-analysis-anti-money-laundering-aml-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-anti-money-laundering-aml-2022-2027-apac-142",
                "URL ID": 142
            }, {
                "From URL": "market_research/market-forecast-analysis-anti-money-laundering-aml-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-anti-money-laundering-aml-2022-2027-emea-144",
                "URL ID": 144
            }, {
                "From URL": "market_research/market-forecast-analysis-anti-money-laundering-aml-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-anti-money-laundering-aml-2022-2027-north-america-146",
                "URL ID": 146
            }, {
                "From URL": "market_research/market-forecast-analysis-know-your-customer-kyc-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-know-your-customer-kyc-2022-2027-apac-148",
                "URL ID": 148
            }, {
                "From URL": "market_research/market-forecast-analysis-know-your-customer-kyc-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-know-your-customer-kyc-2022-2027-emea-150",
                "URL ID": 150
            }, {
                "From URL": "market_research/market-forecast-analysis-know-your-customer-kyc-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-know-your-customer-kyc-2022-2027-north-america-152",
                "URL ID": 152
            }, {
                "From URL": "market_research/market-forecast-analysis-trade-surveillance-monitoring-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-trade-surveillance-&-monitoring-2022-2027-apac-154",
                "URL ID": 154
            }, {
                "From URL": "market_research/market-forecast-analysis-trade-surveillance-monitoring-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-trade-surveillance-&-monitoring-2022-2027-emea-156",
                "URL ID": 156
            }, {
                "From URL": "market_research/market-forecast-analysis-trade-surveillance-monitoring-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-trade-surveillance-&-monitoring-2022-2027-north-america-158",
                "URL ID": 158
            }, {
                "From URL": "market_research/market-forecast-analysis-privacy-management-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-privacy-management-2022-2027-apac-160",
                "URL ID": 160
            }, {
                "From URL": "market_research/market-forecast-analysis-privacy-management-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-privacy-management-2022-2027-emea-162",
                "URL ID": 162
            }, {
                "From URL": "market_research/market-forecast-analysis-privacy-management-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-privacy-management-2022-2027-north-america-164",
                "URL ID": 164
            }, {
                "From URL": "market_research/market-forecast-analysis-user-entity-behavior-analytics-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-user-&-entity-behavior-analytics-2022-2027-worldwide-166",
                "URL ID": 166
            }, {
                "From URL": "market_research/market-forecast-analysis-vulnerability-analysis-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-vulnerability-analysis-2022-2027-worldwide-168",
                "URL ID": 168
            }, {
                "From URL": "market_research/market-forecast-analysis-intrusion-detection-prevention-system-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-intrusion-detection/prevention-system-2022-2027-worldwide-170",
                "URL ID": 170
            }, {
                "From URL": "market_research/market-forecast-analysis-network-access-control-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-network-access-control-2022-2027-worldwide-172",
                "URL ID": 172
            }, {
                "From URL": "market_research/market-forecast-analysis-deception-technology-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-deception-technology-2022-2027-worldwide-174",
                "URL ID": 174
            }, {
                "From URL": "market_research/market-forecast-analysis-network-traffic-analysis-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-network-traffic-analysis-2022-2027-worldwide-176",
                "URL ID": 176
            }, {
                "From URL": "market_research/market-forecast-analysis-priviledged-access-management-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-priviledged-a access-management-2022-2027-worldwide-178",
                "URL ID": 178
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-iam-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-customer-iam-2022-2027-worldwide-180",
                "URL ID": 180
            }, {
                "From URL": "market_research/market-forecast-analysis-bot-management-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-bot-management-2022-2027-worldwide-182",
                "URL ID": 182
            }, {
                "From URL": "market_research/market-forecast-analysis-ddos-mitigation-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-ddos-mitigation-2022-2027-worldwide-184",
                "URL ID": 184
            }, {
                "From URL": "market_research/market-forecast-analysis-web-application-firewall-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-web-application-firewall-2022-2027-worldwide-186",
                "URL ID": 186
            }, {
                "From URL": "market_research/market-forecast-analysis-unified-endpoint-management-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-unified-endpoint-management-2022-2027-worldwide-188",
                "URL ID": 188
            }, {
                "From URL": "market_research/market-forecast-analysis-autonomous-mobile-robots-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-autonomous-mobile-robots-2022-2027-worldwide-190",
                "URL ID": 190
            }, {
                "From URL": "market_research/market-forecast-analysis-autonomous-mobile-robots-2022-2027-worldwide-2",
                "To URL": "market-research/market-forecast-analysis-autonomous-mobile-robots-2022-2027-worldwide-190",
                "URL ID": 190
            }, {
                "From URL": "market_research/market-forecast-analysis-eecommerce-fraud-prevention-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-eecommerce-fraud-prevention-2022-2027-apac-192",
                "URL ID": 192
            }, {
                "From URL": "market_research/market-forecast-analysis-eecommerce-fraud-prevention-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-eecommerce-fraud-prevention-2022-2027-emea-194",
                "URL ID": 194
            }, {
                "From URL": "market_research/market-forecast-analysis-eecommerce-fraud-prevention-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-eecommerce-fraud-prevention-2022-2027-north-america-196",
                "URL ID": 196
            }, {
                "From URL": "market_research/market-forecast-analysis-enterprise-fraud-management-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-enterprise-fraud-management-2022-2027-worldwide-198",
                "URL ID": 198
            }, {
                "From URL": "market_research/market-forecast-analysis-anti-money-laundering-aml-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-anti-money-laundering-aml-2022-2027-worldwide-200",
                "URL ID": 200
            }, {
                "From URL": "market_research/market-forecast-analysis-know-your-customer-kyc-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-know-your-customer-kyc-2022-2027-worldwide-202",
                "URL ID": 202
            }, {
                "From URL": "market_research/market-forecast-analysis-trade-surveillance-monitoring-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-trade-surveillance-&-monitoring-2022-2027-worldwide-204",
                "URL ID": 204
            }, {
                "From URL": "market_research/market-forecast-analysis-privacy-management-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-privacy-management-2022-2027-worldwide-206",
                "URL ID": 206
            }, {
                "From URL": "market_research/market-forecast-analysis-eecommerce-fraud-prevention-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-eecommerce-fraud-prevention-2022-2027-worldwide-208",
                "URL ID": 208
            }, {
                "From URL": "market_research/market-forecast-analysis-procure-to-pay-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-procure-to-pay-2022-2027-worldwide-212",
                "URL ID": 212
            }, {
                "From URL": "market_research/market-forecast-analysis-supplier-relationship-risk-management-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-supplier-relationship-&-risk-management-2022-2027-worldwide-216",
                "URL ID": 216
            }, {
                "From URL": "market_research/market-forecast-analysis-account-receivable-application-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-account-receivable-application-2022-2027-worldwide-222",
                "URL ID": 222
            }, {
                "From URL": "market_research/market-forecast-analysis-grc-platforms-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-grc-platforms-2022-2027-worldwide-224",
                "URL ID": 224
            }, {
                "From URL": "market_research/market-forecast-analysis-digital-risk-protection-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-digital-risk-protection-2022-2027-worldwide-226",
                "URL ID": 226
            }, {
                "From URL": "market_research/market-forecast-analysis-enterprise-treasury-risk-management-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-enterprise-treasury-&-risk-management-2022-2027-worldwide-228",
                "URL ID": 228
            }, {
                "From URL": "market_research/market-forecast-analysis-security-information-event-management-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-security-information-&-event-management-2022-2027-worldwide-230",
                "URL ID": 230
            }, {
                "From URL": "market_research/market-forecast-analysis-security-orchestration-automation-soar-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-security-orchestration-&-automation-soar-2022-2027-worldwide-232",
                "URL ID": 232
            }, {
                "From URL": "market_research/market-forecast-analysis-it-risk-management-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-it-risk-management-2022-2027-worldwide-234",
                "URL ID": 234
            }, {
                "From URL": "market_research/market-forecast-analysis-vendor-risk-management-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-vendor-risk-management-2022-2027-worldwide-236",
                "URL ID": 236
            }, {
                "From URL": "market_research/market-forecast-analysis-risk-based-authentication-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-risk-based-authentication-2022-2027-worldwide-238",
                "URL ID": 238
            }, {
                "From URL": "market_research/market-forecast-analysis-grc-platforms-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-grc-platforms-2022-2027-apac-240",
                "URL ID": 240
            }, {
                "From URL": "market_research/market-forecast-analysis-grc-platforms-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-grc-platforms-2022-2027-emea-242",
                "URL ID": 242
            }, {
                "From URL": "market_research/market-forecast-analysis-grc-platforms-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-grc-platforms-2022-2027-north-america-244",
                "URL ID": 244
            }, {
                "From URL": "market_research/market-forecast-analysis-it-risk-management-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-it-risk-management-2022-2027-apac-246",
                "URL ID": 246
            }, {
                "From URL": "market_research/market-forecast-analysis-it-risk-management-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-it-risk-management-2022-2027-emea-248",
                "URL ID": 248
            }, {
                "From URL": "market_research/market-forecast-analysis-it-risk-management-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-it-risk-management-2022-2027-north-america-250",
                "URL ID": 250
            }, {
                "From URL": "market_research/market-forecast-analysis-vendor-risk-management-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-vendor-risk-management-2022-2027-apac-252",
                "URL ID": 252
            }, {
                "From URL": "market_research/market-forecast-analysis-vendor-risk-management-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-vendor-risk-management-2022-2027-emea-254",
                "URL ID": 254
            }, {
                "From URL": "market_research/market-forecast-analysis-vendor-risk-management-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-vendor-risk-management-2022-2027-north-america-256",
                "URL ID": 256
            }, {
                "From URL": "market_research/market-forecast-analysis-risk-based-authentication-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-risk-based-authentication-2022-2027-apac-258",
                "URL ID": 258
            }, {
                "From URL": "market_research/market-forecast-analysis-risk-based-authentication-2022-2027-apac-2",
                "To URL": "market-research/market-forecast-analysis-risk-based-authentication-2022-2027-apac-258",
                "URL ID": 258
            }, {
                "From URL": "market_research/market-forecast-analysis-risk-based-authentication-2022-2027-apac-3",
                "To URL": "market-research/market-forecast-analysis-risk-based-authentication-2022-2027-apac-258",
                "URL ID": 258
            }, {
                "From URL": "market_research/market-forecast-analysis-risk-based-authentication-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-risk-based-authentication-2022-2027-emea-260",
                "URL ID": 260
            }, {
                "From URL": "market_research/market-forecast-analysis-risk-based-authentication-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-risk-based-authentication-2022-2027-north-america-262",
                "URL ID": 262
            }, {
                "From URL": "market_research/market-forecast-analysis-digital-risk-protection-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-digital-risk-protection-2022-2027-apac-264",
                "URL ID": 264
            }, {
                "From URL": "market_research/market-forecast-analysis-digital-risk-protection-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-digital-risk-protection-2022-2027-emea-266",
                "URL ID": 266
            }, {
                "From URL": "market_research/market-forecast-analysis-digital-risk-protection-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-digital-risk-protection-2022-2027-north-america-268",
                "URL ID": 268
            }, {
                "From URL": "market_research/market-forecast-analysis-enterprise-treasury-risk-management-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-enterprise-treasury-&-risk-management-2022-2027-apac-270",
                "URL ID": 270
            }, {
                "From URL": "market_research/market-forecast-analysis-enterprise-treasury-risk-management-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-enterprise-treasury-&-risk-management-2022-2027-emea-272",
                "URL ID": 272
            }, {
                "From URL": "market_research/market-forecast-analysis-enterprise-treasury-risk-management-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-enterprise-treasury-&-risk-management-2022-2027-north-america-274",
                "URL ID": 274
            }, {
                "From URL": "market_research/market-forecast-analysis-security-information-event-management-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-security-information-&-event-management-2022-2027-apac-276",
                "URL ID": 276
            }, {
                "From URL": "market_research/market-forecast-analysis-security-information-event-management-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-security-information-&-event-management-2022-2027-emea-278",
                "URL ID": 278
            }, {
                "From URL": "market_research/market-forecast-analysis-security-information-event-management-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-security-information-&-event-management-2022-2027-north-america-280",
                "URL ID": 280
            }, {
                "From URL": "market_research/market-forecast-analysis-security-orchestration-automation-soar-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-security-orchestration-&-automation-soar-2022-2027-emea-282",
                "URL ID": 282
            }, {
                "From URL": "market_research/market-forecast-analysis-security-orchestration-automation-soar-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-security-orchestration-&-automation-soar-2022-2027-north-america-284",
                "URL ID": 284
            }, {
                "From URL": "market_research/market-forecast-analysis-security-orchestration-automation-soar-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-security-orchestration-&-automation-soar-2022-2027-apac-286",
                "URL ID": 286
            }, {
                "From URL": "market_research/market-forecast-analysis-user-entity-behavior-analytics-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-user-&-entity-behavior-analytics-2022-2027-emea-288",
                "URL ID": 288
            }, {
                "From URL": "market_research/market-forecast-analysis-user-entity-behavior-analytics-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-user-&-entity-behavior-analytics-2022-2027-north-america-290",
                "URL ID": 290
            }, {
                "From URL": "market_research/market-forecast-analysis-user-entity-behavior-analytics-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-user-&-entity-behavior-analytics-2022-2027-apac-292",
                "URL ID": 292
            }, {
                "From URL": "market_research/market-forecast-analysis-vulnerability-analysis-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-vulnerability-analysis-2022-2027-emea-294",
                "URL ID": 294
            }, {
                "From URL": "market_research/market-forecast-analysis-vulnerability-analysis-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-vulnerability-analysis-2022-2027-north-america-296",
                "URL ID": 296
            }, {
                "From URL": "market_research/market-forecast-analysis-vulnerability-analysis-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-vulnerability-analysis-2022-2027-apac-298",
                "URL ID": 298
            }, {
                "From URL": "market_research/market-forecast-analysis-secure-access-service-edge-sase-2022-2027apac",
                "To URL": "market-research/market-forecast-analysis-secure-access-service-edge-sase-2022-2027apac-300",
                "URL ID": 300
            }, {
                "From URL": "market_research/market-forecast-analysis-secure-access-service-edge-sase-2022-2027north-america",
                "To URL": "market-research/market-forecast-analysis-secure-access-service-edge-sase-2022-2027north-america-302",
                "URL ID": 302
            }, {
                "From URL": "market_research/market-forecast-analysis-secure-access-service-edge-sase-2022-2027emea",
                "To URL": "market-research/market-forecast-analysis-secure-access-service-edge-sase-2022-2027emea-304",
                "URL ID": 304
            }, {
                "From URL": "market_research/market-forecast-analysis-intrusion-detection-prevention-system-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-intrusion-detection/prevention-system-2022-2027-emea-306",
                "URL ID": 306
            }, {
                "From URL": "market_research/market-forecast-analysis-intrusion-detection-prevention-system-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-intrusion-detection/prevention-system-2022-2027-north-america-308",
                "URL ID": 308
            }, {
                "From URL": "market_research/market-forecast-analysis-intrusion-detection-prevention-system-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-intrusion-detection/prevention-system-2022-2027-apac-310",
                "URL ID": 310
            }, {
                "From URL": "market_research/market-forecast-analysis-network-access-control-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-network-access-control-2022-2027-emea-312",
                "URL ID": 312
            }, {
                "From URL": "market_research/market-forecast-analysis-network-access-control-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-network-access-control-2022-2027-north-america-314",
                "URL ID": 314
            }, {
                "From URL": "market_research/market-forecast-analysis-network-access-control-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-network-access-control-2022-2027-apac-316",
                "URL ID": 316
            }, {
                "From URL": "market_research/market-forecast-analysis-deception-technology-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-deception-technology-2022-2027-emea-318",
                "URL ID": 318
            }, {
                "From URL": "market_research/market-forecast-analysis-deception-technology-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-deception-technology-2022-2027-north-america-320",
                "URL ID": 320
            }, {
                "From URL": "market_research/market-forecast-analysis-network-traffic-analysis-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-network-traffic-analysis-2022-2027-emea-324",
                "URL ID": 324
            }, {
                "From URL": "market_research/market-forecast-analysis-network-traffic-analysis-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-network-traffic-analysis-2022-2027-north-america-326",
                "URL ID": 326
            }, {
                "From URL": "market_research/market-forecast-analysis-network-traffic-analysis-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-network-traffic-analysis-2022-2027-apac-328",
                "URL ID": 328
            }, {
                "From URL": "market_research/market-forecast-analysis-priviledged-access-management-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-priviledged-access-management-2022-2027-emea-330",
                "URL ID": 330
            }, {
                "From URL": "market_research/market-forecast-analysis-priviledged-access-management-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-priviledged-access-management-2022-2027-north-america-332",
                "URL ID": 332
            }, {
                "From URL": "market_research/market-forecast-analysis-priviledged-access-management-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-priviledged-access-management-2022-2027-apac-334",
                "URL ID": 334
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-iam-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-customer-iam-2022-2027-emea-336",
                "URL ID": 336
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-iam-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-customer-iam-2022-2027-north-america-338",
                "URL ID": 338
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-iam-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-customer-iam-2022-2027-apac-340",
                "URL ID": 340
            }, {
                "From URL": "market_research/market-forecast-analysis-bot-management-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-bot-management-2022-2027-emea-342",
                "URL ID": 342
            }, {
                "From URL": "market_research/market-forecast-analysis-bot-management-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-bot-management-2022-2027-north-america-344",
                "URL ID": 344
            }, {
                "From URL": "market_research/market-forecast-analysis-bot-management-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-bot-management-2022-2027-apac-346",
                "URL ID": 346
            }, {
                "From URL": "market_research/market-forecast-analysis-ddos-mitigation-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-ddos-mitigation-2022-2027-emea-348",
                "URL ID": 348
            }, {
                "From URL": "market_research/market-forecast-analysis-ddos-mitigation-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-ddos-mitigation-2022-2027-north-america-350",
                "URL ID": 350
            }, {
                "From URL": "market_research/market-forecast-analysis-ddos-mitigation-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-ddos-mitigation-2022-2027-apac-352",
                "URL ID": 352
            }, {
                "From URL": "market_research/market-forecast-analysis-web-application-firewall-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-web-application-firewall-2022-2027-emea-354",
                "URL ID": 354
            }, {
                "From URL": "market_research/market-forecast-analysis-web-application-firewall-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-web-application-firewall-2022-2027-north-america-356",
                "URL ID": 356
            }, {
                "From URL": "market_research/market-forecast-analysis-web-application-firewall-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-web-application-firewall-2022-2027-apac-358",
                "URL ID": 358
            }, {
                "From URL": "market_research/market-forecast-analysis-unified-endpoint-management-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-unified-endpoint-management-2022-2027-emea-360",
                "URL ID": 360
            }, {
                "From URL": "market_research/market-forecast-analysis-unified-endpoint-management-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-unified-endpoint-management-2022-2027-north-america-362",
                "URL ID": 362
            }, {
                "From URL": "market_research/market-forecast-analysis-unified-endpoint-management-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-unified-endpoint-management-2022-2027-apac-364",
                "URL ID": 364
            }, {
                "From URL": "market_research/market-forecast-analysis-digital-threat-intelligence-management-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-digital-threat-intelligence-management-2022-2027-emea-366",
                "URL ID": 366
            }, {
                "From URL": "market_research/market-forecast-analysis-digital-threat-intelligence-management-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-digital-threat-intelligence-management-2022-2027-north-america-368",
                "URL ID": 368
            }, {
                "From URL": "market_research/market-forecast-analysis-digital-threat-intelligence-management-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-digital-threat-intelligence-management-2022-2027-apac-370",
                "URL ID": 370
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-journey-mapping-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-customer-journey-mapping-2022-2027-north-america-374",
                "URL ID": 374
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-journey-mapping-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-customer-journey-mapping-2022-2027-apac-376",
                "URL ID": 376
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-journey-analytics-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-customer-journey-analytics-2022-2027-emea-378",
                "URL ID": 378
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-journey-analytics-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-customer-journey-analytics-2022-2027-apac-382",
                "URL ID": 382
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-data-platforms-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-customer-data-platforms-2022-2027-emea-384",
                "URL ID": 384
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-data-platforms-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-customer-data-platforms-2022-2027-north-america-386",
                "URL ID": 386
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-data-platforms-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-customer-data-platforms-2022-2027-apac-388",
                "URL ID": 388
            }, {
                "From URL": "market_research/market-forecast-analysis-voice-of-the-customers-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-voice-of-the-customers-2022-2027-emea-390",
                "URL ID": 390
            }, {
                "From URL": "market_research/market-forecast-analysis-voice-of-the-customers-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-voice-of-the-customers-2022-2027-apac-394",
                "URL ID": 394
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-loyalty-solutions-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-customer-loyalty-solutions-2022-2027-north-america-398",
                "URL ID": 398
            }, {
                "From URL": "market_research/market-forecast-analysis-digital-experience-platform-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-digital-experience-platform-2022-2027-emea-402",
                "URL ID": 402
            }, {
                "From URL": "market_research/market-forecast-analysis-digital-experience-platform-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-digital-experience-platform-2022-2027-north-america-404",
                "URL ID": 404
            }, {
                "From URL": "market_research/market-forecast-analysis-b2b-price-optimization-and-management-applications-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-b2b-price-optimization-and-management-applications-2022-2027-emea-408",
                "URL ID": 408
            }, {
                "From URL": "market_research/market-forecast-analysis-b2b-price-optimization-and-management-applications-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-b2b-price-optimization-and-management-applications-2022-2027-north-america-410",
                "URL ID": 410
            }, {
                "From URL": "market_research/market-forecast-analysis-b2b-price-optimization-and-management-applications-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-b2b-price-optimization-and-management-applications-2022-2027-apac-412",
                "URL ID": 412
            }, {
                "From URL": "market_research/market-forecast-analysis-retail-forecasting-and-replanishment-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-retail-forecasting-and-replenishment-2022-2027-apac-418",
                "URL ID": 418
            }, {
                "From URL": "market_research/market-forecast-analysis-intelligent-retail-pricing-and-promotion-optimization-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-intelligent-retail-pricing-and-promotion-optimization-2022-2027-emea-420",
                "URL ID": 420
            }, {
                "From URL": "market_research/market-forecast-analysis-retail-plm-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-retail-plm-2022-2027-emea-426",
                "URL ID": 426
            }, {
                "From URL": "market_research/market-forecast-analysis-retail-plm-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-retail-plm-2022-2027-apac-430",
                "URL ID": 430
            }, {
                "From URL": "market_research/market-forecast-analysis-account-based-marketing-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-account-based-marketing-2022-2027-emea-432",
                "URL ID": 432
            }, {
                "From URL": "market_research/market-forecast-analysis-account-based-marketing-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-account-based-marketing-2022-2027-apac-436",
                "URL ID": 436
            }, {
                "From URL": "market_research/market-forecast-analysis-ad-tech-platform-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-ad-tech-platform-2022-2027-emea-438",
                "URL ID": 438
            }, {
                "From URL": "market_research/market-forecast-analysis-ad-tech-platform-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-ad-tech-platform-2022-2027-apac-442",
                "URL ID": 442
            }, {
                "From URL": "market_research/market-forecast-analysis-autonomous-mobile-robots-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-autonomous-mobile-robots-2022-2027-emea-444",
                "URL ID": 444
            }, {
                "From URL": "market_research/market-forecast-analysis-autonomous-mobile-robots-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-autonomous-mobile-robots-2022-2027-north-america-446",
                "URL ID": 446
            }, {
                "From URL": "market_research/market-forecast-analysis-omnichannel-order-management-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-omnichannel-order-management-2022-2027-emea-450",
                "URL ID": 450
            }, {
                "From URL": "market_research/market-forecast-analysis-omnichannel-order-management-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-omnichannel-order-management-2022-2027-north-america-452",
                "URL ID": 452
            }, {
                "From URL": "market_research/market-forecast-analysis-omnichannel-order-management-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-omnichannel-order-management-2022-2027-apac-454",
                "URL ID": 454
            }, {
                "From URL": "market_research/market-forecast-analysis-multi-enterprise-supply-chain-business-network-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-multi-enterprise-supply-chain-business-network-2022-2027-emea-456",
                "URL ID": 456
            }, {
                "From URL": "market_research/market-forecast-analysis-multi-enterprise-supply-chain-business-network-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-multi-enterprise-supply-chain-business-network-2022-2027-north-america-458",
                "URL ID": 458
            }, {
                "From URL": "market_research/market-forecast-analysis-multi-enterprise-supply-chain-business-network-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-multi-enterprise-supply-chain-business-network-2022-2027-apac-460",
                "URL ID": 460
            }, {
                "From URL": "market_research/market-forecast-analysis-sales-operations-planning-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-sales-&-operations-planning-2022-2027-emea-462",
                "URL ID": 462
            }, {
                "From URL": "market_research/market-forecast-analysis-warehouse-management-systems-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-warehouse-management-systems-2022-2027-apac-472",
                "URL ID": 472
            }, {
                "From URL": "market_research/market-forecast-analysis-transportation-management-systems-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-transportation-management-systems-2022-2027-north-america-476",
                "URL ID": 476
            }, {
                "From URL": "market_research/market-forecast-analysis-sales-operations-planning-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-sales-&-operations-planning-2022-2027-north-america-500",
                "URL ID": 500
            }, {
                "From URL": "market_research/market-forecast-analysis-sales-operations-planning-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-sales-&-operations-planning-2022-2027-apac-502",
                "URL ID": 502
            }, {
                "From URL": "market_research/market-forecast-analysis-warehouse-management-systems-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-warehouse-management-systems-2022-2027-emea-504",
                "URL ID": 504
            }, {
                "From URL": "market_research/market-forecast-analysis-warehouse-management-systems-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-warehouse-management-systems-2022-2027-north-america-506",
                "URL ID": 506
            }, {
                "From URL": "market_research/market-forecast-analysis-transportation-management-systems-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-transportation-management-systems-2022-2027-emea-510",
                "URL ID": 510
            }, {
                "From URL": "market_research/market-forecast-analysis-transportation-management-systems-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-transportation-management-systems-2022-2027-apac-514",
                "URL ID": 514
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-journey-mapping-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-customer-journey-mapping-2022-2027-emea-516",
                "URL ID": 516
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-journey-analytics-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-customer-journey-analytics-2022-2027-north-america-524",
                "URL ID": 524
            }, {
                "From URL": "market_research/market-forecast-analysis-voice-of-the-customers-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-voice-of-the-customers-2022-2027-north-america-536",
                "URL ID": 536
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-loyalty-solutions-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-customer-loyalty-solutions-2022-2027-emea-540",
                "URL ID": 540
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-loyalty-solutions-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-customer-loyalty-solutions-2022-2027-apac-544",
                "URL ID": 544
            }, {
                "From URL": "market_research/market-forecast-analysis-digital-experience-platform-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-digital-experience-platform-2022-2027-apac-550",
                "URL ID": 550
            }, {
                "From URL": "market_research/market-forecast-analysis-retail-forecasting-and-replanishment-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-retail-forecasting-and-replenishment-2022-2027-north-america-560",
                "URL ID": 560
            }, {
                "From URL": "market_research/market-forecast-analysis-intelligent-retail-pricing-and-promotion-optimization-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-intelligent-retail-pricing-and-promotion-optimization-2022-2027-north-america-566",
                "URL ID": 566
            }, {
                "From URL": "market_research/market-forecast-analysis-intelligent-retail-pricing-and-promotion-optimization-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-intelligent-retail-pricing-and-promotion-optimization-2022-2027-apac-568",
                "URL ID": 568
            }, {
                "From URL": "market_research/market-forecast-analysis-retail-plm-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-retail-plm-2022-2027-north-america-572",
                "URL ID": 572
            }, {
                "From URL": "market_research/market-forecast-analysis-account-based-marketing-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-account-based-marketing-2022-2027-north-america-578",
                "URL ID": 578
            }, {
                "From URL": "market_research/market-forecast-analysis-ad-tech-platform-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-ad-tech-platform-2022-2027-north-america-584",
                "URL ID": 584
            }, {
                "From URL": "market_research/market-forecast-analysis-strategic-sourcing-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-strategic-sourcing-2022-2027-worldwide-588",
                "URL ID": 588
            }, {
                "From URL": "market_research/market-forecast-analysis-contract-lifecycle-management-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-contract-lifecycle-management-2022-2027-worldwide-592",
                "URL ID": 592
            }, {
                "From URL": "market_research/market-forecast-analysis-cpq-application-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-cpq-application-2022-2027-worldwide-596",
                "URL ID": 596
            }, {
                "From URL": "market_research/market-forecast-analysis-account-payable-automation-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-account-payable-automation-2022-2027-worldwide-598",
                "URL ID": 598
            }, {
                "From URL": "market_research/market-forecast-analysis-strategic-sourcing-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-strategic-sourcing-2022-2027-apac-604",
                "URL ID": 604
            }, {
                "From URL": "market_research/market-forecast-analysis-procure-to-pay-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-procure-to-pay-2022-2027-north-america-608",
                "URL ID": 608
            }, {
                "From URL": "market_research/market-forecast-analysis-contract-lifecycle-management-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-contract-lifecycle-management-2022-2027-emea-612",
                "URL ID": 612
            }, {
                "From URL": "market_research/market-forecast-analysis-contract-lifecycle-management-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-contract-lifecycle-management-2022-2027-apac-616",
                "URL ID": 616
            }, {
                "From URL": "market_research/market-forecast-analysis-supplier-relationship-risk-management-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-supplier-relationship-&-risk-management-2022-2027-emea-618",
                "URL ID": 618
            }, {
                "From URL": "market_research/market-forecast-analysis-supplier-relationship-risk-management-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-supplier-relationship-&-risk-management-2022-2027-apac-622",
                "URL ID": 622
            }, {
                "From URL": "market_research/market-forecast-analysis-cpq-application-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-cpq-application-2022-2027-apac-628",
                "URL ID": 628
            }, {
                "From URL": "market_research/market-forecast-analysis-account-payable-automation-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-account-payable-automation-2022-2027-emea-630",
                "URL ID": 630
            }, {
                "From URL": "market_research/market-forecast-analysis-account-payable-automation-2022-2027-north-america",
                "To URL": "market-research/market-forecast-analysis-account-payable-automation-2022-2027-north-america-632",
                "URL ID": 632
            }, {
                "From URL": "market_research/market-forecast-analysis-account-receivable-application-2022-2027-emea",
                "To URL": "market-research/market-forecast-analysis-account-receivable-application-2022-2027-emea-636",
                "URL ID": 636
            }, {
                "From URL": "market_research/market-forecast-analysis-account-receivable-application-2022-2027-apac",
                "To URL": "market-research/market-forecast-analysis-account-receivable-application-2022-2027-apac-640",
                "URL ID": 640
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-journey-mapping-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-customer-journey-mapping-2022-2027-worldwide-642",
                "URL ID": 642
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-data-platforms-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-customer-data-platforms-2022-2027-worldwide-646",
                "URL ID": 646
            }, {
                "From URL": "market_research/market-forecast-analysis-customer-loyalty-solutions-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-customer-loyalty-solutions-2022-2027-worldwide-650",
                "URL ID": 650
            }, {
                "From URL": "market_research/market-forecast-analysis-digital-experience-platform-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-digital-experience-platform-2022-2027-worldwide-652",
                "URL ID": 652
            }, {
                "From URL": "market_research/market-forecast-analysis-b2b-price-optimization-and-management-applications-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-b2b-price-optimization-and-management-applications-2022-2027-worldwide-654",
                "URL ID": 654
            }, {
                "From URL": "market_research/market-forecast-analysis-retail-forecasting-and-replanishment-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-retail-forecasting-and-replenishment-2022-2027-worldwide-656",
                "URL ID": 656
            }, {
                "From URL": "market_research/market-forecast-analysis-intelligent-retail-pricing-and-promotion-optimization-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-intelligent-retail-pricing-and-promotion-optimization-2022-2027-worldwide-658",
                "URL ID": 658
            }, {
                "From URL": "market_research/market-forecast-analysis-retail-plm-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-retail-plm-2022-2027-worldwide-660",
                "URL ID": 660
            }, {
                "From URL": "market_research/market-forecast-analysis-multi-enterprise-supply-chain-business-network-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-multi-enterprise-supply-chain-business-network-2022-2027-worldwide-670",
                "URL ID": 670
            }, {
                "From URL": "market_research/market-forecast-analysis-warehouse-management-systems-2022-2027-worldwide",
                "To URL": "market-research/market-forecast-analysis-warehouse-management-systems-2022-2027-worldwide-674",
                "URL ID": 674
            }, {
                "From URL": "market_research/web-email-security-market-research",
                "To URL": "market-research/market-outlook-web-and-email-security-2016-2021-worldwide-678",
                "URL ID": 678
            }, {
                "From URL": "market_research/geographic-information-systems-gis-market-research",
                "To URL": "market-research/market-outlook-geographic-information-systems-gis-2017-2022-worldwide-680",
                "URL ID": 680
            }, {
                "From URL": "market_research/geographic-information-systems-gis-market-outlook-emea-region",
                "To URL": "market-research/market-outlook-geographic-information-systems-gis-2017-2022-emea-region-682",
                "URL ID": 682
            }, {
                "From URL": "market_research/geographic-information-systems-market-outlook-asia-region",
                "To URL": "market-research/market-outlook-geographic-information-systems-gis-2017-2022-asia-pacific-region-684",
                "URL ID": 684
            }, {
                "From URL": "market_research/geographic-information-systems-gis-market-outlook-americas-region",
                "To URL": "market-research/market-outlook-geographic-information-systems-gis-2017-2022-americas-region-686",
                "URL ID": 686
            }, {
                "From URL": "market_research/data-center-ups-market-research",
                "To URL": "market-research/market-outlook-data-center-ups-2017-2022-worldwide-688",
                "URL ID": 688
            }, {
                "From URL": "market_research/data-center-cooling-market-research",
                "To URL": "market-research/market-outlook-data-center-cooling-2017-2022-worldwide-690",
                "URL ID": 690
            }, {
                "From URL": "market_research/3d-printing-market-research-asia-region",
                "To URL": "market-research/market-outlook-3d-printing-2017-2022-asia-pacific-region-692",
                "URL ID": 692
            }, {
                "From URL": "market_research/3d-printing-market-research-americas-region",
                "To URL": "market-research/market-outlook-3d-printing-2017-2022-americas-region-694",
                "URL ID": 694
            }, {
                "From URL": "market_research/biometric-systems-market-research",
                "To URL": "market-research/market-outlook-biometric-systems-2017-2022-worldwide-696",
                "URL ID": 696
            }, {
                "From URL": "market_research/internet-of-things-retail-iot",
                "To URL": "market-research/market-outlook-internet-of-things-iot-in-retail-2018-2023-worldwide-698",
                "URL ID": 698
            }, {
                "From URL": "market_research/programmable-logic-controllers-plc-market-outlook",
                "To URL": "market-research/market-outlook-programmable-logic-controllers-plcs-2016-2021-worldwide-700",
                "URL ID": 700
            }, {
                "From URL": "market_research/smart-pumps-market-outlook",
                "To URL": "market-research/market-outlook-smart-pumps-2016-2021-worldwide-702",
                "URL ID": 702
            }, {
                "From URL": "market_research/market-outlook-process-simulation-and-optimization",
                "To URL": "market-research/market-outlook-process-simulation-and-optimization-2016-2021-worldwide-704",
                "URL ID": 704
            }, {
                "From URL": "market_research/distributed-control-systems-dcs-market-outlook",
                "To URL": "market-research/market-outlook-distributed-control-systems-dcs-2016-2021-worldwide-706",
                "URL ID": 706
            }, {
                "From URL": "market_research/leak-detection-systems-market-outlook",
                "To URL": "market-research/market-outlook-leak-detection-systems-2016-2021-worldwide-708",
                "URL ID": 708
            }, {
                "From URL": "market_research/industrial-cyber-security-market-outlook-research",
                "To URL": "market-research/market-outlook-ics-security-2018-2023-worldwide-710",
                "URL ID": 710
            }, {
                "From URL": "market_research/low-power-wide-area-network-lpwan-global-market-outlook-research",
                "To URL": "market-research/market-outlook-low-power-wide-area-network-lpwan-2017-2022-worldwide-712",
                "URL ID": 712
            }, {
                "From URL": "market_research/market-outlook-global-trade-management-gtm-2017-2022-worldwide",
                "To URL": "market-research/market-outlook-global-trade-management-gtm-2017-2022-worldwide-714",
                "URL ID": 714
            }, {
                "From URL": "market_research/market-outlook-privileged-access-management-2017-2022-worldwide",
                "To URL": "market-research/market-outlook-privileged-access-management-2017-2022-worldwide-716",
                "URL ID": 716
            }, {
                "From URL": "market_research/market-outlook-software-defined-wide-area-network-sd-wan-2016-2021-worldwide",
                "To URL": "market-research/market-outlook-software-defined-wide-area-network-sd-wan-2016-2021-worldwide-718",
                "URL ID": 718
            }, {
                "From URL": "market_research/process-safety-systems-market-outlook",
                "To URL": "market-research/market-outlook-process-safety-systems-2017-2022-worldwide-720",
                "URL ID": 720
            }, {
                "From URL": "market_research/manufacturing-execution-systems-mes-for-process-industries-market-outlook",
                "To URL": "market-research/market-outlook-manufacturing-execution-systems-mes-for-process-industries-2017-2022-worldwide-722",
                "URL ID": 722
            }, {
                "From URL": "market_research/machine-safety-systems-market-outlook",
                "To URL": "market-research/market-outlook-machine-safety-systems-2017-2022-worldwide-724",
                "URL ID": 724
            }, {
                "From URL": "market_research/market-outlook-transportation-management-systems-tms-worldwide",
                "To URL": "market-research/market-outlook-transportation-management-systems-tms-2017-2022-worldwide-726",
                "URL ID": 726
            }, {
                "From URL": "market_research/market-outlook-endpoint-detection-and-response-edr-q1-2017-worldwide",
                "To URL": "market-research/market-outlook-endpoint-detection-and-response-edr-q1-2017-worldwide-728",
                "URL ID": 728
            }, {
                "From URL": "market_research/market-outlook-cloud-access-security-broker-casb-2018-2023-worldwide",
                "To URL": "market-research/market-outlook-cloud-access-security-broker-casb-2018-2023-worldwide-730",
                "URL ID": 730
            }, {
                "From URL": "market_research/human-machine-interface-hmi-software-market-outlook",
                "To URL": "market-research/market-outlook-human-machine-interface-hmi-software-2017-2022-worldwide-732",
                "URL ID": 732
            }, {
                "From URL": "market_research/web-mobile-analytics-market-outlook-research",
                "To URL": "market-research/market-outlook-web-and-mobile-analytics-2017-2022-worldwide-734",
                "URL ID": 734
            }, {
                "From URL": "market_research/machine-vision-market-research",
                "To URL": "market-research/market-outlook-machine-vision-2017-2022-worldwide-736",
                "URL ID": 736
            }, {
                "From URL": "market_research/3d-printing-market-research-emea-region",
                "To URL": "market-research/market-outlook-3d-printing-2017-2022-emea-region-738",
                "URL ID": 738
            }, {
                "From URL": "market_research/3d-printing-market-research-worldwide",
                "To URL": "market-research/market-outlook-3d-printing-2017-2022-worldwide-740",
                "URL ID": 740
            }, {
                "From URL": "market_research/market-outlook-online-fraud-detection-2017-2022-worldwide",
                "To URL": "market-research/market-outlook-online-fraud-detection-2017-2022-worldwide-742",
                "URL ID": 742
            }, {
                "From URL": "market_research/market-outlook-warehouse-management-systems-2017-2022-worldwide",
                "To URL": "market-research/market-outlook-warehouse-management-systems-2017-2022-worldwide-744",
                "URL ID": 744
            }, {
                "From URL": "market_research/text-analytics-market-outlook",
                "To URL": "market-research/market-outlook-text-analytics-2017-2022-worldwide-746",
                "URL ID": 746
            }, {
                "From URL": "market_research/market-outlook-data-loss-prevention-dlp-software-2017-2022-worldwide",
                "To URL": "market-research/market-outlook-data-loss-prevention-dlp-software-2017-2022-worldwide-748",
                "URL ID": 748
            }, {
                "From URL": "market_research/low-voltage-ac-drives-lv-ac-drives-market-research",
                "To URL": "market-research/market-outlook-low-voltage-ac-drives-lv-ac-drives-2017-2022-worldwide-750",
                "URL ID": 750
            }, {
                "From URL": "market_research/predictive-analytics-banking-financial-services-insurance-bfsi-industry-market-outlook",
                "To URL": "market-research/market-outlook-predictive-analytics-for-banking-financial-services-and-insurance-bfsi-industry-2019-2024worldwide-752",
                "URL ID": 752
            }, {
                "From URL": "market_research/market-outlook-telecom-fraud-management-solution-2017-2022-worldwide",
                "To URL": "market-research/market-outlook-telecom-fraud-management-solution-2017-2022-worldwide-754",
                "URL ID": 754
            }, {
                "From URL": "market_research/scada-for-electric-power-industry-market-outlook",
                "To URL": "market-research/market-outlook-scada-a for-electric-power-industry-2017-2022-worldwide-756",
                "URL ID": 756
            }, {
                "From URL": "market_research/scada-for-water-wastewater-industry-market-outlook",
                "To URL": "market-research/market-outlook-scada-a for-water-&-wastewater-industry-2017-2022-worldwide-758",
                "URL ID": 758
            }, {
                "From URL": "market_research/scada-for-oil-gas-industry-market-outlook",
                "To URL": "market-research/market-outlook-scada-for-oil-&-gas-industry-2017-2022-worldwide-760",
                "URL ID": 760
            }, {
                "From URL": "market_research/industrial-ups-market-outlook",
                "To URL": "market-research/market-outlook-industrial-ups-2017-2022-worldwide-762",
                "URL ID": 762
            }, {
                "From URL": "market_research/big-data-analytics-market-outlook",
                "To URL": "market-research/market-outlook-big-data-analytics-2017-2022-worldwide-764",
                "URL ID": 764
            }, {
                "From URL": "market_research/low-voltage-ac-drives-lv-ac-drives-india-market-research",
                "To URL": "market-research/market-outlook-low-voltage-ac-drives-lv-ac-drives-2017-2022-india-766",
                "URL ID": 766
            }, {
                "From URL": "market_research/market-outlook-governance-risk-compliance-grc-platform-2017-2022-worldwide",
                "To URL": "market-research/market-outlook-governance-risk-and-compliance-grc-platform-2017-2022-worldwide-768",
                "URL ID": 768
            }, {
                "From URL": "market_research/market-outlook-electronic-signature-e-signature-2017-2022-worldwide",
                "To URL": "market-research/market-outlook-electronic-signature-e-signature-2017-2022-worldwide-770",
                "URL ID": 770
            }, {
                "From URL": "market_research/identity-as-a-service-idaas-market-outlook",
                "To URL": "market-research/market-outlook-identity-as-a-service-idaas-2017-2022-worldwide-772",
                "URL ID": 772
            }, {
                "From URL": "market_research/market-outlook-enterprise-wlan-worldwide",
                "To URL": "market-research/market-outlook-enterprise-wlan-2017-2022-worldwide-774",
                "URL ID": 774
            }, {
                "From URL": "market_research/general-motion-control-gmc-market-outlook",
                "To URL": "market-research/market-outlook-market-general-motion-control-gmc-2017-2022-worldwide-776",
                "URL ID": 776
            }, {
                "From URL": "market_research/market-outlook-security-automation-and-orchestration-sao-2017-2022-worldwide",
                "To URL": "market-research/market-outlook-security-automation-and-orchestration-sao-2017-2022-worldwide-778",
                "URL ID": 778
            }, {
                "From URL": "market_research/market-outlook-network-access-control-nac-2018-2023-worldwide",
                "To URL": "market-research/market-outlooka network-access-control-nac-2018-2023-worldwide-780",
                "URL ID": 780
            }, {
                "From URL": "market_research/market-outlook-privileged-access-management-pam-2018-2023-worldwide",
                "To URL": "market-research/market-outlook-privileged-access-management-pam-2018-2023-worldwide-782",
                "URL ID": 782
            }, {
                "From URL": "market_research/market-outlook-customer-identity-access-management-ciam-2018-2023-worldwide",
                "To URL": "market-research/market-outlook-customer-identity-and-access-management-ciam-2018-2023-worldwide-784",
                "URL ID": 784
            }, {
                "From URL": "market_research/market-outlook-global-trade-management-gtm-2018-2023-worldwide",
                "To URL": "market-research/market-outlook-global-trade-management-gtm-2018-2023-worldwide-786",
                "URL ID": 786
            }, {
                "From URL": "market_research/market-outlook-warehouse-management-systems-wms-2018-2023-worldwide",
                "To URL": "market-research/market-outlook-warehouse-management-systems-wms-2018-2023-worldwide-788",
                "URL ID": 788
            }, {
                "From URL": "market_research/market-outlook-software-defined-wide-area-network-sd-wan-2018-2023-worldwide",
                "To URL": "market-research/market-outlook-software-defined-wide-area-network-sd-wan-2018-2023-worldwide-790",
                "URL ID": 790
            }, {
                "From URL": "market_research/identity-access-management-market-research",
                "To URL": "market-research/market-outlook-identity-and-access-management-2018-2023-worldwide-792",
                "URL ID": 792
            }, {
                "From URL": "market_research/market-outlook-ddos-mitigation-2018-2023-worldwide",
                "To URL": "market-research/market-outlook-ddos-mitigation-2018-2023-worldwide-796",
                "URL ID": 796
            }, {
                "From URL": "market_research/iot-platform-global-market-outlook",
                "To URL": "market-research/market-outlook-iot-platform-2018-2023-worldwide-798",
                "URL ID": 798
            }, {
                "From URL": "market_research/market-outlook-digital-commerce-platforms-2018-2023-worldwide",
                "To URL": "market-research/market-outlook-digital-commerce-platforms-2018-2023-worldwide-800",
                "URL ID": 800
            }, {
                "From URL": "market_research/iot-security-market-research-worldwide",
                "To URL": "market-research/market-outlook-iot-security-2018-2023-worldwide-802",
                "URL ID": 802
            }, {
                "From URL": "market_research/data-loss-prevention-dlp-software-market-outlook",
                "To URL": "market-research/market-outlook-data-loss-prevention-dlp-software-2018-2023-worldwide-804",
                "URL ID": 804
            }, {
                "From URL": "market_research/vulnerability-management-market-outlook",
                "To URL": "market-research/market-outlook-vulnerability-management-2018-2023-worldwide-806",
                "URL ID": 806
            }, {
                "From URL": "market_research/market-outlook-next-generation-antivirus-ngav-market",
                "To URL": "market-research/market-outlook-next-generation-antivirus-ngav-2017-2022-worldwide-808",
                "URL ID": 808
            }, {
                "From URL": "market_research/market-outlook-file-analysis-software",
                "To URL": "market-research/market-outlook-file-analysis-software-2018-2023-worldwide-810",
                "URL ID": 810
            }, {
                "From URL": "market_research/asset-performance-management-apm-market-outlook",
                "To URL": "market-research/market-outlook-asset-performance-management-apm-2019-2024-worldwide-812",
                "URL ID": 812
            }, {
                "From URL": "market_research/manufacturing-execution-systems-mes-for-discrete-industries-market-outlook",
                "To URL": "market-research/market-outlookmanufacturing-execution-systems-mes-for-discrete-industries-2017-2022-worldwide-814",
                "URL ID": 814
            }, {
                "From URL": "market_research/governance-risk-compliance-grc-platform-market-outlook",
                "To URL": "market-research/market-outlook-governance-risk-and-compliance-grc-platform-2018-2023-worldwide-816",
                "URL ID": 816
            }, {
                "From URL": "market_research/market-outlook-robotics-process-automation-rpa-worldwide",
                "To URL": "market-research/market-outlook-robotics-process-automation-rpa-2018-2023-worldwide-818",
                "URL ID": 818
            }, {
                "From URL": "market_research/market-outlook-e-discovery-solution-2018-2023-worldwide",
                "To URL": "market-research/market-outlook-e-discovery-solution-2018-2023-worldwide-820",
                "URL ID": 820
            }, {
                "From URL": "market_research/user-entity-behavior-analytics-ueba-market-outlook",
                "To URL": "market-research/market-outlook-user-and-entity-behavior-analytics-ueba-2018-2023-worldwide-822",
                "URL ID": 822
            }, {
                "From URL": "market_research/market-outlook-it-process-automation-itpa-2018-2023-worldwide",
                "To URL": "market-research/market-outlook-it-process-automation-itpa-2018-2023-worldwide-824",
                "URL ID": 824
            }, {
                "From URL": "market_research/market-outlook-mobile-engagement-automation-2018-2023-worldwide",
                "To URL": "market-research/market-outlook-mobile-engagement-automation-2018-2023-worldwide-828",
                "URL ID": 828
            }, {
                "From URL": "market_research/market-outlook-deception-technology-2018-2023",
                "To URL": "market-research/market-outlook-deception-technology-2018-2023-worldwide-830",
                "URL ID": 830
            }, {
                "From URL": "market_research/market-outlook-identity-management-governance-2018-2023",
                "To URL": "market-research/market-outlook-identity-management-&-governance-2018-2023-worldwide-832",
                "URL ID": 832
            }, {
                "From URL": "market_research/market-outlook-product-information-management-pim-solutions-2018-2023",
                "To URL": "market-research/market-outlook-product-information-management-pim-solutions-2018-2023-worldwide-834",
                "URL ID": 834
            }, {
                "From URL": "market_research/market-outlook-application-security-testing-ast-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-application-security-testing-ast-2019-2024-worldwide-840",
                "URL ID": 840
            }, {
                "From URL": "market_research/market-outlook-customer-iam-ciam2019-2024-worldwide",
                "To URL": "market-research/market-outlook-customer-iam-ciam2019-2024-worldwide-842",
                "URL ID": 842
            }, {
                "From URL": "market_research/market-outlook-privileged-access-management-pam-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-privileged-access-management-pam-2019-2024-worldwide-846",
                "URL ID": 846
            }, {
                "From URL": "market_research/market-outlook-it-risk-management-itrm-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-it-risk-management-itrm-2019-2024-worldwide-848",
                "URL ID": 848
            }, {
                "From URL": "market_research/market-outlook-vendor-risk-management-vrm-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-vendor-risk-management-vrm-2019-2024-worldwide-850",
                "URL ID": 850
            }, {
                "From URL": "market_research/market-outlook-software-defined-wan-sd-wan-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-software-defined-wan-sd-wan-2019-2024-worldwide-852",
                "URL ID": 852
            }, {
                "From URL": "market_research/market-outlook-network-access-control-nac-2019-2024-worldwide",
                "To URL": "market-research/market-outlooka network-access-control-nac-2019-2024-worldwide-856",
                "URL ID": 856
            }, {
                "From URL": "market_research/market-outlook-iot-identity-access-management-iot-iam-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-iot-identity-&-access-management-iot-iam-2019-2024-worldwide-858",
                "URL ID": 858
            }, {
                "From URL": "market_research/market-outlook-enterprise-fraud-management-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-enterprise-fraud-management-2019-2024-worldwide-860",
                "URL ID": 860
            }, {
                "From URL": "market_research/market-outlook-procure-to-pay-solutions-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-procure-to-pay-solutions-2019-2024-worldwide-862",
                "URL ID": 862
            }, {
                "From URL": "market_research/market-outlook-warehouse-management-systems-wms-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-warehouse-management-systems-wms-2019-2024-worldwide-868",
                "URL ID": 868
            }, {
                "From URL": "market_research/market-outlook-bot-management-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-bot-management-2019-2024-worldwide-870",
                "URL ID": 870
            }, {
                "From URL": "market_research/market-outlook-customer-journey-analytics-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-customer-journey-analytics-2019-2024-worldwide-872",
                "URL ID": 872
            }, {
                "From URL": "market_research/data-loss-prevention-dlp-market-outlook-2019-spark-matrix",
                "To URL": "market-research/market-outlook-data-loss-prevention-dlp-software-2019-2024-worldwide-880",
                "URL ID": 880
            }, {
                "From URL": "market_research/market-outlook-ddos-mitigation-spark-matrix",
                "To URL": "market-research/market-outlook-ddos-mitigation-2019-2024-worldwide-882",
                "URL ID": 882
            }, {
                "From URL": "market_research/market-outlook-enterprise-idaas-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-enterprise-identity-as-a-service-idaas-2019-2024-worldwide-888",
                "URL ID": 888
            }, {
                "From URL": "market_research/market-outlook-contract-lifecycle-management-clm-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-contract-lifecycle-management-clm-2019-2024-worldwide-890",
                "URL ID": 890
            }, {
                "From URL": "market_research/market-outlook-security-automation-and-orchestration-sao-platforms-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-security-automation-and-orchestration-sao-platforms-2019-2024-worldwide-892",
                "URL ID": 892
            }, {
                "From URL": "market_research/market-outlook-global-trade-management-gtm-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-global-trade-management-gtm-2019-2024-worldwide-894",
                "URL ID": 894
            }, {
                "From URL": "market_research/market-outlook-governance-risk-and-compliance-grc-platform-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-governance-risk-and-compliance-grc-platform-2019-2024-worldwide-896",
                "URL ID": 896
            }, {
                "From URL": "market_research/market-outlook-data-science-and-machine-learning-platforms-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-data-science-and-machine-learning-platforms-2019-2024-worldwide-898",
                "URL ID": 898
            }, {
                "From URL": "market_research/market-outlook-robotic-process-automation-rpa-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-robotic-process-automation-rpa-2019-2024-worldwide-900",
                "URL ID": 900
            }, {
                "From URL": "market_research/anti-money-laundering-aml-market-outlook-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-anti-money-laundering-aml-solutions2019-2024-worldwide-902",
                "URL ID": 902
            }, {
                "From URL": "market_research/product-lifecycle-management-plm-market-outlook-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-product-lifecycle-management-plm2019-2024-worldwide-904",
                "URL ID": 904
            }, {
                "From URL": "market_research/market-outlook-customer-loyalty-solutions-2020-2025-worldwide",
                "To URL": "market-research/market-outlook-customer-loyalty-solutions-2020-2025-worldwide-906",
                "URL ID": 906
            }, {
                "From URL": "market_research/market-outlook-human-capital-management-hcm-2020-2025-worldwide",
                "To URL": "market-research/market-outlook-human-capital-management-hcm-2020-2025-worldwide-910",
                "URL ID": 910
            }, {
                "From URL": "market_research/market-outlook-b2b-digital-commerce-platforms-2020-2025-worldwide",
                "To URL": "market-research/market-outlook-b2b-digital-commerce-platforms-2020-2025-worldwide-912",
                "URL ID": 912
            }, {
                "From URL": "market_research/market-outlook-b2c-digital-commerce-platforms-2020-2025-worldwide",
                "To URL": "market-research/market-outlook-b2c-digital-commerce-platforms-2020-2025-worldwide-914",
                "URL ID": 914
            }, {
                "From URL": "market_research/market-outlook-endpoint-detection-and-response-edr-2020-2025-worldwide",
                "To URL": "market-research/market-outlook-endpoint-detection-and-response-edr-2020-2025-worldwide-918",
                "URL ID": 918
            }, {
                "From URL": "market_research/market-outlook-data-preparation-tools-2020-2025-worldwide",
                "To URL": "market-research/market-outlook-data-preparation-tools-2020-2025-worldwide-920",
                "URL ID": 920
            }, {
                "From URL": "market_research/market-outlook-talent-management-application-2020-2025-worldwide",
                "To URL": "market-research/market-outlook-talent-management-application-2020-2025-worldwide-922",
                "URL ID": 922
            }, {
                "From URL": "market_research/market-outlook-industrial-cybersecurity-ics-security-2020-2025-worldwide",
                "To URL": "market-research/market-outlook-industrial-cybersecurity-ics-security-2020-2025-worldwide-926",
                "URL ID": 926
            }, {
                "From URL": "market_research/market-outlook-customer-journey-analytics-2018-2023-worldwide",
                "To URL": "market-research/market-outlook-customer-journey-analytics-2018-2023-worldwide-930",
                "URL ID": 930
            }, {
                "From URL": "market_research/market-outlook-data-science-machine-learning-platforms-2018-2023",
                "To URL": "market-research/market-outlook-data-science-and-machine-learning-platforms-2018-2023-worldwide-936",
                "URL ID": 936
            }, {
                "From URL": "market_research/product-lifecycle-management-plm-market-outlook",
                "To URL": "market-research/market-outlook-product-lifecycle-management-plm2018-2023-worldwide-938",
                "URL ID": 938
            }, {
                "From URL": "market_research/market-outlook-digital-automation-platforms2019-2024-worldwide",
                "To URL": "market-research/market-outlook-digital-automation-platforms-2019-2024-worldwide-940",
                "URL ID": 940
            }, {
                "From URL": "market_research/market-outlook-industrial-iot-iiot-platform-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-industrial-iot-iiot-platform-2019-2024-worldwide-944",
                "URL ID": 944
            }, {
                "From URL": "market_research/market-outlook-fraud-analytics-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-fraud-analytics-2019-2024-worldwide-946",
                "URL ID": 946
            }, {
                "From URL": "market_research/market-outlook-customer-data-platforms-cdp-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-customer-data-platforms-cdp-2019-2024-worldwide-948",
                "URL ID": 948
            }, {
                "From URL": "market_research/customer-journey-mapping-market-2019-spark-matrix",
                "To URL": "market-research/market-outlook-customer-journey-mapping-2019-2024-worldwide-952",
                "URL ID": 952
            }, {
                "From URL": "market_research/intelligent-data-catalogs-market-2019-spark-matrix",
                "To URL": "market-research/market-outlook-intelligent-data-catalogs-2019-2024-worldwide-954",
                "URL ID": 954
            }, {
                "From URL": "market_research/digital-banking-platforms-market-outlook-2019-spark-matrix",
                "To URL": "market-research/market-outlook-digital-banking-platforms-2019-2024-worldwide-956",
                "URL ID": 956
            }, {
                "From URL": "market_research/market-outlook-omnichannel-order-management-systems-oms-2019",
                "To URL": "market-research/market-outlook-omnichannel-order-management-systems-2019-2024-worldwide-958",
                "URL ID": 958
            }, {
                "From URL": "market_research/market-outlook-personalization-platforms-2019-2024-worldwide",
                "To URL": "market-research/market-outlook-personalization-platforms-2019-2024-worldwide-962",
                "URL ID": 962
            }, {
                "From URL": "market_research/market-outlook-web-conferencing-2020-2025-worldwide",
                "To URL": "market-research/market-outlook-web-conferencing-2020-2025-worldwide-968",
                "URL ID": 968
            }, {
                "From URL": "market_research/market-outlook-voice-of-the-customer-voc-platforms-2020-2025-worldwide",
                "To URL": "market-research/market-outlook-voice-of-the-customer-voc-platforms-2020-2025-worldwide-970",
                "URL ID": 970
            }, {
                "From URL": "market_research/market-outlook-low-code-application-development-platforms-2020-2025",
                "To URL": "market-research/market-outlook-low-code-application-development-lcad-platforms-2020-2025-worldwide-974",
                "URL ID": 974
            }, {
                "From URL": "market_research/spark-matrix-ddos-mitigation-q2-2018",
                "To URL": "market-research/spark-matrix-ddos-mitigation-q2-2018-976",
                "URL ID": 976
            }, {
                "From URL": "market_research/spark-matrix-data-loss-prevention-dlp-q3-2018",
                "To URL": "market-research/spark-matrix-data-loss-prevention-dlp-q3-2018-978",
                "URL ID": 978
            }, {
                "From URL": "market_research/spark-matrix-vulnerability-management-q3-2018",
                "To URL": "market-research/spark-matrix-vulnerability-management-q3-2018-980",
                "URL ID": 980
            }, {
                "From URL": "market_research/spark-matrix-data-center-networking",
                "To URL": "market-research/spark-matrix-data-center-networking-982",
                "URL ID": 982
            }, {
                "From URL": "market_research/spark-matrix-digital-risk-protection-drp-2020",
                "To URL": "market-research/spark-matrix-digital-risk-protection-drp-2020-984",
                "URL ID": 984
            }, {
                "From URL": "market_research/spark-matrix-enterprise-fraud-management-efm-2020",
                "To URL": "market-research/spark-matrix-enterprise-fraud-management-efm-2020-986",
                "URL ID": 986
            }, {
                "From URL": "market_research/spark-matrix-autonomous-mobile-robot-amr-2020",
                "To URL": "market-research/spark-matrix-autonomous-mobile-robot-amr-2020-988",
                "URL ID": 988
            }, {
                "From URL": "market_research/spark-matrix-b2c-customer-data-platforms-cdp-2020",
                "To URL": "market-research/spark-matrix-b2c-customer-data-platforms-cdp-2020-990",
                "URL ID": 990
            }, {
                "From URL": "market_research/spark-matrix-low-code-application-development-platforms-2020",
                "To URL": "market-research/spark-matrix-low-code-application-development-lcad-platforms-2020-992",
                "URL ID": 992
            }, {
                "From URL": "market_research/spark-matrix-ecommerce-fraud-prevention-2020",
                "To URL": "market-research/spark-matrix-e-commerce-fraud-prevention-2020-994",
                "URL ID": 994
            }, {
                "From URL": "market_research/spark-matrix-network-access-control-nac-2020",
                "To URL": "market-research/spark-matrix-network-access-control-nac-2020-996",
                "URL ID": 996
            }, {
                "From URL": "market_research/spark-matrix-industrial-iot-iiot-platforms-2020",
                "To URL": "market-research/spark-matrix-industrial-iot-iiot-platforms-2020-998",
                "URL ID": 998
            }, {
                "From URL": "market_research/spark-matrix-iot-identity-access-management-iot-iam-2020",
                "To URL": "market-research/spark-matrix-iot-identity-and-access-management-iot-iam-2020-1000",
                "URL ID": 1000
            }, {
                "From URL": "market_research/spark-matrix-trade-surveillance-and-monitoring-2020",
                "To URL": "market-research/spark-matrix-trade-surveillance-and-monitoring-2020-1004",
                "URL ID": 1004
            }, {
                "From URL": "market_research/spark-matrix-strategic-sourcing-application-2020",
                "To URL": "market-research/spark-matrix-strategic-sourcing-application-2020-1006",
                "URL ID": 1006
            }, {
                "From URL": "market_research/spark-matrix-enterprise-architecture-ea-tools-2020",
                "To URL": "market-research/spark-matrix-enterprise-architecture-ea-tools-2020-1008",
                "URL ID": 1008
            }, {
                "From URL": "market_research/spark-matrix-life-insurance-policy-administration-system-2020",
                "To URL": "market-research/spark-matrix-life-insurance-policy-administration-system-2020-1010",
                "URL ID": 1010
            }, {
                "From URL": "market_research/spark-matrix-pc-core-insurance-platform-2020",
                "To URL": "market-research/spark-matrix-p&c-core-insurance-platform-2020-1012",
                "URL ID": 1012
            }, {
                "From URL": "market_research/spark-matrix-digital-experience-platform-dxp-2020",
                "To URL": "market-research/spark-matrix-digital-experience-platform-dxp-2020-1014",
                "URL ID": 1014
            }, {
                "From URL": "market_research/spark-matrix-multichannel-marketing-platform-2020",
                "To URL": "market-research/spark-matrix-multichannel-marketing-platform-2020-1016",
                "URL ID": 1016
            }, {
                "From URL": "market_research/spark-matrix-customer-journey-mapping-cjm-2020",
                "To URL": "market-research/spark-matrix-customer-journey-mapping-cjm-2020-1018",
                "URL ID": 1018
            }, {
                "From URL": "market_research/spark-matrix-privileged-access-management-pam-2020",
                "To URL": "market-research/spark-matrix-privileged-access-management-pam-2020-1020",
                "URL ID": 1020
            }, {
                "From URL": "market_research/spark-matrix-card-management-system-cms-2020",
                "To URL": "market-research/spark-matrix-card-management-system-cms-2020-1022",
                "URL ID": 1022
            }, {
                "From URL": "market_research/spark-matrix-cloud-financial-planning-analysis-2020",
                "To URL": "market-research/spark-matrix-cloud-financial-planning-&-analysis-2020-1024",
                "URL ID": 1024
            }, {
                "From URL": "market_research/spark-matrix-process-mining-2020",
                "To URL": "market-research/spark-matrix-process-mining-2020-1028",
                "URL ID": 1028
            }, {
                "From URL": "market_research/spark-matrix-bot-management-2020",
                "To URL": "market-research/spark-matrix-bot-management-2020-1030",
                "URL ID": 1030
            }, {
                "From URL": "market_research/spark-matrix-mobile-threat-management-2020",
                "To URL": "market-research/spark-matrix-mobile-threat-management-2020-1032",
                "URL ID": 1032
            }, {
                "From URL": "market_research/spark-matrix-enterprise-treasury-and-risk-management-2020",
                "To URL": "market-research/spark-matrix-enterprise-treasury-and-risk-management-2020-1034",
                "URL ID": 1034
            }, {
                "From URL": "market_research/spark-matrix-multi-country-payroll-mcp-solution-2020",
                "To URL": "market-research/spark-matrix-multi-country-payroll-mcp-solution-2020-1036",
                "URL ID": 1036
            }, {
                "From URL": "market_research/spark-matrix-intelligent-document-processing-idp-2020",
                "To URL": "market-research/spark-matrix-intelligent-document-processing-idp-2020-1038",
                "URL ID": 1038
            }, {
                "From URL": "market_research/spark-matrix-retail-plm-application-2020",
                "To URL": "market-research/spark-matrix-retail-plm-application-2020-1040",
                "URL ID": 1040
            }, {
                "From URL": "market_research/spark-matrix-retail-execution-platform-2020",
                "To URL": "market-research/spark-matrix-retail-execution-platform-2020-1042",
                "URL ID": 1042
            }, {
                "From URL": "market_research/spark-matrix-security-information-event-management-siem-2021",
                "To URL": "market-research/spark-matrix-security-information-and-event-management-siem-2021-1048",
                "URL ID": 1048
            }, {
                "From URL": "market_research/spark-matrix-software-defined-wan-sd-wan-2021",
                "To URL": "market-research/spark-matrix-software-defined-wan-sd-wan-2021-1050",
                "URL ID": 1050
            }, {
                "From URL": "market_research/spark-matrix-conversational-platforms-2021",
                "To URL": "market-research/spark-matrix-conversational-platforms-2021-1052",
                "URL ID": 1052
            }, {
                "From URL": "market_research/spark-matrix-deception-technology-2021",
                "To URL": "market-research/spark-matrix-deception-technology-2021-1056",
                "URL ID": 1056
            }, {
                "From URL": "market_research/spark-matrix-digital-banking-platform-2021",
                "To URL": "market-research/spark-matrix-digital-banking-platform-2021-1060",
                "URL ID": 1060
            }, {
                "From URL": "market_research/spark-matrix-b2b-digital-commerce-platform-2021",
                "To URL": "market-research/spark-matrix-b2b-digital-commerce-platform-2021-1062",
                "URL ID": 1062
            }, {
                "From URL": "market_research/spark-matrix-b2c-digital-commerce-platform-2021",
                "To URL": "market-research/spark-matrix-b2c-digital-commerce-platform-2021-1064",
                "URL ID": 1064
            }, {
                "From URL": "market_research/spark-matrix-anti-money-laundering-aml-solution-2021",
                "To URL": "market-research/spark-matrix-anti-money-laundering-aml-solution-2021-1066",
                "URL ID": 1066
            }, {
                "From URL": "market_research/spark-matrix-know-your-customer-kyc-solution-2021",
                "To URL": "market-research/spark-matrix-know-your-customer-kyc-solution-2021-1068",
                "URL ID": 1068
            }, {
                "From URL": "market_research/spark-matrix-enterprise-augmented-reality-ar-platform-2021",
                "To URL": "market-research/spark-matrix-enterprise-augmented-reality-ar-platform-2021-1070",
                "URL ID": 1070
            }, {
                "From URL": "market_research/spark-matrix-identity-as-a-service-idaas-2021",
                "To URL": "market-research/spark-matrix-identity-as-a-service-idaas-2021-1072",
                "URL ID": 1072
            }, {
                "From URL": "market_research/spark-matrix-contract-lifecycle-management-clm-2021",
                "To URL": "market-research/spark-matrix-contract-lifecycle-management-clm-2021-1074",
                "URL ID": 1074
            }, {
                "From URL": "market_research/spark-matrix-governance-risk-and-compliance-grc-platforms-2021",
                "To URL": "market-research/spark-matrix-governance-risk-and-compliance-grc-platforms-2021-1076",
                "URL ID": 1076
            }, {
                "From URL": "market_research/spark-matrix-sales-enablement-platforms-2021",
                "To URL": "market-research/spark-matrix-sales-enablement-platforms-2021-1078",
                "URL ID": 1078
            }, {
                "From URL": "market_research/spark-matrix-unified-endpoint-management-uem-2021",
                "To URL": "market-research/spark-matrix-unified-endpoint-management-uem-2021-1080",
                "URL ID": 1080
            }, {
                "From URL": "market_research/spark-matrix-virtual-customer-assistants-vca-2021",
                "To URL": "market-research/spark-matrix-virtual-customer-assistants-vca-2021-1082",
                "URL ID": 1082
            }, {
                "From URL": "market_research/spark-matrix-configure-price-and-quote-cpq-application-2021",
                "To URL": "market-research/spark-matrix-configure-price-and-quote-cpq-application-2021-1084",
                "URL ID": 1084
            }, {
                "From URL": "market_research/spark-matrix-enterprise-information-archiving-2021",
                "To URL": "market-research/spark-matrix-digital-asset-management-dam-2021-1086",
                "URL ID": 1086
            }, {
                "From URL": "market_research/spark-matrix-ddos-mitigation-2021",
                "To URL": "market-research/spark-matrix-ddos-mitigation-2021-1088",
                "URL ID": 1088
            }, {
                "From URL": "market_research/spark-matrix-talent-acquisition-application-2021",
                "To URL": "market-research/spark-matrix-talent-acquisition-application-2021-1090",
                "URL ID": 1090
            }, {
                "From URL": "market_research/spark-matrix-value-stream-management-vsm-2021",
                "To URL": "market-research/spark-matrix-value-stream-management-vsm-2021-1092",
                "URL ID": 1092
            }, {
                "From URL": "market_research/spark-matrix-risk-based-authentication-rba-2021",
                "To URL": "market-research/spark-matrix-risk-based-authentication-rba-2021-1094",
                "URL ID": 1094
            }, {
                "From URL": "market_research/spark-matrix-low-code-application-development-platform-2021",
                "To URL": "market-research/spark-matrix-low-code-application-development-platform-2021-1096",
                "URL ID": 1096
            }, {
                "From URL": "market_research/spark-matrix-subscription-management-2021",
                "To URL": "market-research/spark-matrix-subscription-management-2021-1098",
                "URL ID": 1098
            }, {
                "From URL": "market_research/spark-matrix-autonomous-mobile-robots-amr-2021",
                "To URL": "market-research/spark-matrix-autonomous-mobile-robots-amr-2021-1100",
                "URL ID": 1100
            }, {
                "From URL": "market_research/spark-matrix-iot-identity-access-management-iot-iam-2021",
                "To URL": "market-research/spark-matrix-iot-identity-&-access-management-iot-iam-2021-1102",
                "URL ID": 1102
            }, {
                "From URL": "market_research/spark-matrix-zero-trust-network-security-ztns-2021",
                "To URL": "market-research/spark-matrix-zero-trust-network-security-ztns-2021-1104",
                "URL ID": 1104
            }, {
                "From URL": "market_research/spark-matrix-robotic-process-automation-rpa-2021",
                "To URL": "market-research/spark-matrix-robotic-process-automation-rpa-2021-1106",
                "URL ID": 1106
            }, {
                "From URL": "market_research/spark-matrix-customer-data-platform-cdp-2021",
                "To URL": "market-research/spark-matrix-customer-data-platform-cdp-2021-1108",
                "URL ID": 1108
            }, {
                "From URL": "market_research/spark-matrix-data-masking-2021",
                "To URL": "market-research/spark-matrix-data-masking-2021-1110",
                "URL ID": 1110
            }, {
                "From URL": "market_research/spark-matrix-innovation-management-2021",
                "To URL": "market-research/spark-matrix-innovation-management-platform-2021-1112",
                "URL ID": 1112
            }, {
                "From URL": "market_research/spark-matrix-account-receivable-application-2021",
                "To URL": "market-research/spark-matrix-account-receivable-application-2021-1114",
                "URL ID": 1114
            }, {
                "From URL": "market_research/spark-matrix-warehouse-management-system-wms-platform-2021",
                "To URL": "market-research/spark-matrix-warehouse-management-systems-wms-2021-1116",
                "URL ID": 1116
            }, {
                "From URL": "market_research/spark-matrix-enterprise-architecture-ea-tools-2021",
                "To URL": "market-research/spark-matrix-enterprise-architecture-ea-tools-2021-1118",
                "URL ID": 1118
            }, {
                "From URL": "market_research/spark-matrix-sales-operational-planning-2021",
                "To URL": "market-research/spark-matrix-sales-&-operational-planning-2021-1120",
                "URL ID": 1120
            }, {
                "From URL": "market_research/spark-matrix-integrated-workplace-management-systems-2021",
                "To URL": "market-research/spark-matrix-integrated-workplace-management-systems-2021-1122",
                "URL ID": 1122
            }, {
                "From URL": "market_research/spark-matrix-customer-journey-mapping-cjm-2021",
                "To URL": "market-research/spark-matrix-customer-journey-mapping-cjm-2021-1124",
                "URL ID": 1124
            }, {
                "From URL": "market_research/spark-matrix-voice-of-the-customer-voc-platform-2021",
                "To URL": "market-research/spark-matrix-voice-of-the-customer-voc-platform-2021-1126",
                "URL ID": 1126
            }, {
                "From URL": "market_research/spark-matrix-sales-force-automation-2021",
                "To URL": "market-research/spark-matrix-sales-force-automation-2021-1130",
                "URL ID": 1130
            }, {
                "From URL": "market_research/spark-matrix-ecommerce-fraud-prevention-2021",
                "To URL": "market-research/spark-matrix-ecommerce-fraud-prevention-2021-1132",
                "URL ID": 1132
            }, {
                "From URL": "market_research/spark-matrix-enterprise-fraud-management-2021",
                "To URL": "market-research/spark-matrix-enterprise-fraud-management-efm-2021-1134",
                "URL ID": 1134
            }, {
                "From URL": "market_research/spark-matrix-insider-risk-management-solution-2021",
                "To URL": "market-research/spark-matrix-insider-risk-management-solution-2021-1138",
                "URL ID": 1138
            }, {
                "From URL": "market_research/spark-matrix-personalization-platform-2021",
                "To URL": "market-research/spark-matrix-personalization-platform-2021-1140",
                "URL ID": 1140
            }, {
                "From URL": "market_research/spark-matrix-customer-journey-analytics-cja-2021",
                "To URL": "market-research/spark-matrix-customer-journey-analytics-cja-2021-1144",
                "URL ID": 1144
            }, {
                "From URL": "market_research/spark-matrix-account-based-marketing-abm-2021",
                "To URL": "market-research/spark-matrix-account-based-marketing-abm-platform-2021-1146",
                "URL ID": 1146
            }, {
                "From URL": "market_research/spark-matrix-vendor-management-system-vms-2021",
                "To URL": "market-research/spark-matrix-vendor-management-system-vms-2021-1148",
                "URL ID": 1148
            }, {
                "From URL": "market_research/spark-matrix-vendor-management-system-vms-2021-2",
                "To URL": "market-research/spark-matrix-vendor-management-system-vms-2021-1148",
                "URL ID": 1148
            }, {
                "From URL": "market_research/spark-matrix-anti-phishing-solutions-2021",
                "To URL": "market-research/spark-matrix-anti-phishing-solutions-2021-1150",
                "URL ID": 1150
            }, {
                "From URL": "market_research/spark-matrix-intelligent-business-process-management-ibpms-suites-2021",
                "To URL": "market-research/spark-matrix-intelligent-business-process-management-ibpms-suites-2021-1152",
                "URL ID": 1152
            }, {
                "From URL": "market_research/spark-matrix-card-management-system-cms-solution-2021",
                "To URL": "market-research/spark-matrix-card-management-system-cms-solution-2021-1154",
                "URL ID": 1154
            }, {
                "From URL": "market_research/spark-matrix-data-management-and-analytics-services-dmas-2021",
                "To URL": "market-research/spark-matrix-data-management-and-analytics-services-dmas-2021-1156",
                "URL ID": 1156
            }, {
                "From URL": "market_research/spark-matrix-cloud-financial-planning-and-analysis-2021",
                "To URL": "market-research/spark-matrix-cloud-financial-planning-and-analysis-2021-1158",
                "URL ID": 1158
            }, {
                "From URL": "market_research/spark-matrix-data-quality-tools-2021",
                "To URL": "market-research/spark-matrix-data-quality-tools-2021-1160",
                "URL ID": 1160
            }, {
                "From URL": "market_research/spark-matrix-intelligent-data-catalogs-2021",
                "To URL": "market-research/spark-matrix-intelligent-data-catalogs-2021-1162",
                "URL ID": 1162
            }, {
                "From URL": "market_research/spark-matrix-project-and-portfolio-management-ppm-2021",
                "To URL": "market-research/spark-matrix-project-and-portfolio-management-ppm-2021-1164",
                "URL ID": 1164
            }, {
                "From URL": "market_research/spark-matrix-end-user-experience-management-euem-2021",
                "To URL": "market-research/spark-matrix-end-user-experience-management-euem-2021-1166",
                "URL ID": 1166
            }, {
                "From URL": "market_research/spark-matrix-enterprise-agile-planning-eap-tools-2021",
                "To URL": "market-research/spark-matrix-enterprise-agile-planning-eap-tools-2021-1168",
                "URL ID": 1168
            }, {
                "From URL": "market_research/spark-matrix-user-authentication-2021",
                "To URL": "market-research/spark-matrix-user-authentication-2021-1170",
                "URL ID": 1170
            }, {
                "From URL": "market_research/spark-matrix-intelligent-retail-pricing-and-promotion-optimization-2021",
                "To URL": "market-research/spark-matrix-intelligent-retail-pricing-and-promotion-optimization-2021-1172",
                "URL ID": 1172
            }, {
                "From URL": "market_research/spark-matrix-strategic-sourcing-application-2021",
                "To URL": "market-research/spark-matrix-strategic-sourcing-application-2021-1174",
                "URL ID": 1174
            }, {
                "From URL": "market_research/spark-matrix-trade-surveillance-and-monitoring-solution-2021",
                "To URL": "market-research/spark-matrix-trade-surveillance-and-monitoring-solution-2021-1176",
                "URL ID": 1176
            }, {
                "From URL": "market_research/spark-matrix-sales-performance-management-2021",
                "To URL": "market-research/spark-matrix-sales-performance-management-2021-1178",
                "URL ID": 1178
            }, {
                "From URL": "market_research/spark-matrix-digital-experience-platform-dxp-2021",
                "To URL": "market-research/spark-matrix-digital-experience-platform-dxp-2021-1180",
                "URL ID": 1180
            }, {
                "From URL": "market_research/spark-matrix-product-lifecycle-management-plm-2021-2",
                "To URL": "market-research/spark-matrix-p&c-core-insurance-platform-2021-1182",
                "URL ID": 1182
            }, {
                "From URL": "market_research/spark-matrix-managed-detection-and-response-mdr-2021",
                "To URL": "market-research/spark-matrix-managed-detection-and-response-mdr-2021-1184",
                "URL ID": 1184
            }, {
                "From URL": "market_research/spark-matrix-intelligent-document-processing-idp-2021",
                "To URL": "market-research/spark-matrix-intelligent-document-processing-idp-2021-1186",
                "URL ID": 1186
            }, {
                "From URL": "market_research/spark-matrix-cross-channel-video-advertising-platform-2021",
                "To URL": "market-research/spark-matrix-cross-channel-video-advertising-platform-2021-1188",
                "URL ID": 1188
            }, {
                "From URL": "market_research/spark-matrix-cybersecurity-risk-ratings-platform-2021",
                "To URL": "market-research/spark-matrix-cybersecurity-risk-ratings-platform-2021-1190",
                "URL ID": 1190
            }, {
                "From URL": "market_research/spark-matrix-mobile-threat-management-mtm-2021",
                "To URL": "market-research/spark-matrix-mobile-threat-management-mtm-2021-1192",
                "URL ID": 1192
            }, {
                "From URL": "market_research/spark-matrix-artificial-intelligence-for-it-operations-aiops-2021",
                "To URL": "market-research/spark-matrix-artificial-intelligence-for-it-operations-aiops-2021-1194",
                "URL ID": 1194
            }, {
                "From URL": "market_research/spark-matrix-process-mining-2021",
                "To URL": "market-research/spark-matrix-process-mining-2021-1196",
                "URL ID": 1196
            }, {
                "From URL": "market_research/spark-matrix-unified-communication-as-a-services-2021",
                "To URL": "market-research/spark-matrix-unified-communication-as-a-services-2021-1198",
                "URL ID": 1198
            }, {
                "From URL": "market_research/spark-matrix-cloud-management-platform-2021",
                "To URL": "market-research/spark-matrix-cloud-management-platform-2021-1200",
                "URL ID": 1200
            }, {
                "From URL": "market_research/spark-matrix-human-capital-management-hcm-2021",
                "To URL": "market-research/spark-matrix-human-capital-management-hcm-2021-1202",
                "URL ID": 1202
            }, {
                "From URL": "market_research/spark-matrix-market-competitive-intelligence-platform-2021",
                "To URL": "market-research/spark-matrix-market-&-competitive-intelligence-platform-2021-1204",
                "URL ID": 1204
            }, {
                "From URL": "market_research/spark-matrix-multi-country-payroll-platform-2021",
                "To URL": "market-research/spark-matrix-multi-country-payroll-platform-2021-1206",
                "URL ID": 1206
            }, {
                "From URL": "market_research/spark-matrix-object-based-storage-2021-2",
                "To URL": "market-research/spark-matrix-object-based-storage-2021-1208",
                "URL ID": 1208
            }, {
                "From URL": "market_research/spark-matrix-multi-enterprise-supply-chain-business-networks-mescbn-2021",
                "To URL": "market-research/spark-matrix-multi-enterprise-supply-chain-business-networks-mescbn-2021-1210",
                "URL ID": 1210
            }, {
                "From URL": "market_research/spark-matrix-crm-lead-management-2021",
                "To URL": "market-research/spark-matrix-crm-lead-management-2021-1212",
                "URL ID": 1212
            }, {
                "From URL": "market_research/spark-matrix-bot-management-2021",
                "To URL": "market-research/spark-matrix-bot-management-2021-1214",
                "URL ID": 1214
            }, {
                "From URL": "market_research/spark-matrix-life-insurance-policy-administration-system-2021-2",
                "To URL": "market-research/spark-matrix-life-insurance-policy-administration-system-2021-1216",
                "URL ID": 1216
            }, {
                "From URL": "market_research/spark-matrix-api-management-2021",
                "To URL": "market-research/spark-matrix-api-management-2021-1218",
                "URL ID": 1218
            }, {
                "From URL": "market_research/spark-matrix-it-managed-security-services-2021",
                "To URL": "market-research/spark-matrix-it-managed-security-services-2021-1220",
                "URL ID": 1220
            }, {
                "From URL": "market_research/spark-matrix-disaster-recovery-as-a-service-2021",
                "To URL": "market-research/spark-matrix-disaster-recovery-as-a-service-2021-1222",
                "URL ID": 1222
            }, {
                "From URL": "market_research/spark-matrix-retail-forecasting-replenishment-2021",
                "To URL": "market-research/spark-matrix-retail-forecasting-&-replenishment-2021-1224",
                "URL ID": 1224
            }, {
                "From URL": "market_research/spark-matrix-retail-assortment-management-applications-2021",
                "To URL": "market-research/spark-matrix-retail-assortment-management-applications-2021-1226",
                "URL ID": 1226
            }, {
                "From URL": "market_research/spark-matrix-retail-execution-platform-2021",
                "To URL": "market-research/spark-matrix-retail-execution-platform-2021-1228",
                "URL ID": 1228
            }, {
                "From URL": "market_research/spark-matrix-intelligent-process-automation-solutions-and-services-ipa-2021",
                "To URL": "market-research/spark-matrix-intelligent-process-automation-solutions-and-services-ipa-2021-1230",
                "URL ID": 1230
            }, {
                "From URL": "market_research/spark-matrix-product-lifecycle-management-plm-2021",
                "To URL": "market-research/spark-matrix-product-lifecycle-management-plm-2021-1232",
                "URL ID": 1232
            }, {
                "From URL": "market_research/spark-matrix-digital-adoption-platform-2021",
                "To URL": "market-research/spark-matrix-digital-adoption-platform-2021-1234",
                "URL ID": 1234
            }, {
                "From URL": "market_research/spark-matrix-digital-adoption-platform-2021-2",
                "To URL": "market-research/spark-matrix-employee-experience-management-exem-2021-1236",
                "URL ID": 1236
            }, {
                "From URL": "market_research/spark-matrix-digital-workplace-services-2021",
                "To URL": "market-research/spark-matrix-digital-workplace-services-2021-1238",
                "URL ID": 1238
            }, {
                "From URL": "market_research/spark-matrix-vendor-risk-management-vrm-2021",
                "To URL": "market-research/spark-matrix-vendor-risk-management-vrm-2021-1240",
                "URL ID": 1240
            }, {
                "From URL": "market_research/spark-matrix-communications-platform-as-a-service-cpaas-2021",
                "To URL": "market-research/spark-matrix-communications-platform-as-a-service-cpaas-2021-1242",
                "URL ID": 1242
            }, {
                "From URL": "market_research/spark-matrix-endpoint-detection-and-response-edr-2021",
                "To URL": "market-research/spark-matrix-endpoint-detection-and-response-edr-2021-1244",
                "URL ID": 1244
            }, {
                "From URL": "market_research/spark-matrix-connected-medical-device-security-2021",
                "To URL": "market-research/spark-matrix-connected-medical-device-security-2021-1246",
                "URL ID": 1246
            }, {
                "From URL": "market_research/spark-matrix-web-application-firewall-waf-2021",
                "To URL": "market-research/spark-matrix-web-application-firewall-waf-2021-1248",
                "URL ID": 1248
            }, {
                "From URL": "market_research/spark-matrix-enterprise-treasury-and-risk-management-solution-2021",
                "To URL": "market-research/spark-matrix-enterprise-treasury-and-risk-management-solution-2021-1250",
                "URL ID": 1250
            }, {
                "From URL": "market_research/spark-matrix-procure-to-pay-p2p-2021",
                "To URL": "market-research/spark-matrix-procure-to-pay-p2p-2021-1254",
                "URL ID": 1254
            }, {
                "From URL": "market_research/spark-matrix-procure-to-pay-p2p-2021-2",
                "To URL": "market-research/spark-matrix-procure-to-pay-p2p-2021-1254",
                "URL ID": 1254
            }, {
                "From URL": "market_research/spark-matrix-cloud-database-management-system-2022",
                "To URL": "market-research/spark-matrix-cloud-database-management-system-2022-1256",
                "URL ID": 1256
            }, {
                "From URL": "market_research/spark-matrix-digital-twin-of-an-organization-2022",
                "To URL": "market-research/spark-matrix-digital-twin-of-an-organization-2022-1258",
                "URL ID": 1258
            }, {
                "From URL": "market_research/spark-matrix-it-risk-management-itrm2022",
                "To URL": "market-research/spark-matrix-it-risk-management-itrm-2022-1260",
                "URL ID": 1260
            }, {
                "From URL": "market_research/spark-matrix-function-as-a-service-faas-2022",
                "To URL": "market-research/spark-matrix-function-as-a-service-faas-2022-1262",
                "URL ID": 1262
            }, {
                "From URL": "market_research/spark-matrix-higher-education-learning-management-systems-2022",
                "To URL": "market-research/spark-matrix-higher-education-learning-management-systems-2022-1264",
                "URL ID": 1264
            }, {
                "From URL": "market_research/spark-matrix-k-12-student-information-systems-2022",
                "To URL": "market-research/spark-matrix-k-12-student-information-systems-2022-1266",
                "URL ID": 1266
            }, {
                "From URL": "market_research/spark-matrix-customer-iam-2022",
                "To URL": "market-research/spark-matrix-customer-iam-2022-1268",
                "URL ID": 1268
            }, {
                "From URL": "market_research/spark-matrix-anti-money-laundering-aml-solution-2022",
                "To URL": "market-research/spark-matrix-anti-money-laundering-aml-solution-2022-1270",
                "URL ID": 1270
            }, {
                "From URL": "market_research/spark-matrix-digital-banking-platform-2022",
                "To URL": "market-research/spark-matrix-digital-banking-platform-2022-1272",
                "URL ID": 1272
            }, {
                "From URL": "market_research/spark-matrix-hr-outsourcing-services-2022",
                "To URL": "market-research/spark-matrix-hr-outsourcing-services-2022-1274",
                "URL ID": 1274
            }, {
                "From URL": "market_research/spark-matrix-know-your-customer-kyc-solution-2022",
                "To URL": "market-research/spark-matrix-know-your-customer-kyc-solution-2022-1276",
                "URL ID": 1276
            }, {
                "From URL": "market_research/spark-matrix-b2b-digital-commerce-platform-2022",
                "To URL": "market-research/spark-matrix-b2b-digital-commerce-platform-2022-1278",
                "URL ID": 1278
            }, {
                "From URL": "market_research/spark-matrix-speech-analytics-2022",
                "To URL": "market-research/spark-matrix-speech-analytics-2022-1280",
                "URL ID": 1280
            }, {
                "From URL": "market_research/spark-matrix-privacy-management-software-2022",
                "To URL": "market-research/spark-matrix-privacy-management-software-2022-1282",
                "URL ID": 1282
            }, {
                "From URL": "market_research/spark-matrix-b2c-digital-commerce-platform-2022",
                "To URL": "market-research/spark-matrix-b2c-digital-commerce-platform-2022-1284",
                "URL ID": 1284
            }, {
                "From URL": "market_research/spark-matrix-data-science-and-machine-learning-platform-2022",
                "To URL": "market-research/spark-matrix-data-science-and-machine-learning-platform-2022-1288",
                "URL ID": 1288
            }, {
                "From URL": "market_research/spark-matrix-governance-risk-and-compliance-grc-platforms-2022",
                "To URL": "market-research/spark-matrix-governance-risk-and-compliance-grc-platforms-2022-1290",
                "URL ID": 1290
            }, {
                "From URL": "market_research/spark-matrix-governance-risk-and-compliance-grc-platforms-2022-2",
                "To URL": "market-research/spark-matrix-governance-risk-and-compliance-grc-platforms-2022-1290",
                "URL ID": 1290
            }, {
                "From URL": "market_research/spark-matrix-integrated-payment-platform-2022",
                "To URL": "market-research/spark-matrix-integrated-payment-platform-2022-1292",
                "URL ID": 1292
            }, {
                "From URL": "market_research/spark-matrix-procurement-services-2022",
                "To URL": "market-research/spark-matrix-procurement-services-2022-1294",
                "URL ID": 1294
            }, {
                "From URL": "market_research/spark-matrix-customer-communication-management-ccm-2022",
                "To URL": "market-research/spark-matrix-customer-communication-management-ccm-2022-1296",
                "URL ID": 1296
            }, {
                "From URL": "market_research/spark-matrix-consumer-intelligence-platforms-2022",
                "To URL": "market-research/spark-matrix-consumer-intelligence-platforms-2022-1298",
                "URL ID": 1298
            }, {
                "From URL": "market_research/spark-matrix-cx-management-services-2022",
                "To URL": "market-research/spark-matrix-cx-management-services-2022-1300",
                "URL ID": 1300
            }, {
                "From URL": "market_research/spark-matrix-cloud-native-application-development-services-2022",
                "To URL": "market-research/spark-matrix-cloud-native-application-development-services-2022-1302",
                "URL ID": 1302
            }, {
                "From URL": "market_research/spark-matrix-text-analytics-platforms-2022",
                "To URL": "market-research/spark-matrix-text-analytics-platforms-2022-1304",
                "URL ID": 1304
            }, {
                "From URL": "market_research/spark-matrix-spend-analytics-2022",
                "To URL": "market-research/spark-matrix-spend-analytics-2022-1306",
                "URL ID": 1306
            }, {
                "From URL": "market_research/spark-matrix-digital-first-customer-service-solutions-2022",
                "To URL": "market-research/spark-matrix-digital-first-customer-service-solutions-2022-1308",
                "URL ID": 1308
            }, {
                "From URL": "market_research/spark-matrix-omnichannel-oms-2022",
                "To URL": "market-research/spark-matrix-omnichannel-oms-2022-1310",
                "URL ID": 1310
            }, {
                "From URL": "market_research/spark-matrix-customer-loyalty-solutions-2022",
                "To URL": "market-research/spark-matrix-customer-loyalty-solutions-2022-1312",
                "URL ID": 1312
            }, {
                "From URL": "market_research/spark-matrix-digital-threat-intelligence-management-2022",
                "To URL": "market-research/spark-matrix-digital-threat-intelligence-management-2022-1314",
                "URL ID": 1314
            }, {
                "From URL": "market_research/spark-matrix-accounts-payable-automation-2022",
                "To URL": "market-research/spark-matrix-accounts-payable-automation-2022-1316",
                "URL ID": 1316
            }, {
                "From URL": "market_research/spark-matrix-in-app-protection-2022",
                "To URL": "market-research/spark-matrix-in-app-protection-2022-1318",
                "URL ID": 1318
            }, {
                "From URL": "market_research/spark-matrix-metadata-management-2022",
                "To URL": "market-research/spark-matrix-metadata-management-2022-1320",
                "URL ID": 1320
            }, {
                "From URL": "market_research/spark-matrix-ad-tech-platform-2022",
                "To URL": "market-research/spark-matrix-ad-tech-platform-2022-1322",
                "URL ID": 1322
            }, {
                "From URL": "market_research/spark-matrix-software-defined-wan-services-2022",
                "To URL": "market-research/spark-matrix-software-defined-wan-services2022-1326",
                "URL ID": 1326
            }, {
                "From URL": "market_research/spark-matrix-account-based-marketing-abm-platform-2022",
                "To URL": "market-research/spark-matrix-account-based-marketing-abm-platform-2022-1328",
                "URL ID": 1328
            }, {
                "From URL": "market_research/spark-matrix-global-trade-management-gtm-2022",
                "To URL": "market-research/spark-matrix-global-trade-management-gtm-2022-1330",
                "URL ID": 1330
            }, {
                "From URL": "market_research/spark-matrix-software-defined-wide-area-networking-platforms-sd-wan-2022",
                "To URL": "market-research/spark-matrix-software-defined-wide-area-networking-platforms-sd-wan-2022-1332",
                "URL ID": 1332
            }, {
                "From URL": "market_research/spark-matrix-ai-services-2022",
                "To URL": "market-research/spark-matrix-ai-services-2022-1334",
                "URL ID": 1334
            }, {
                "From URL": "market_research/spark-matrix-deception-technology-2022",
                "To URL": "market-research/spark-matrix-deception-technology-2022-1336",
                "URL ID": 1336
            }, {
                "From URL": "market_research/spark-matrix-it-infrastructure-monitoring-tools-2022",
                "To URL": "market-research/spark-matrix-it-infrastructure-monitoring-tools-2022-1338",
                "URL ID": 1338
            }, {
                "From URL": "market_research/spark-matrix-robotic-process-automation-rpa-2022",
                "To URL": "market-research/spark-matrix-robotic-process-automation-rpa-2022-1340",
                "URL ID": 1340
            }, {
                "From URL": "market_research/spark-matrix-sales-enablement-platform-2022",
                "To URL": "market-research/spark-matrix-sales-enablement-platform-2022-1342",
                "URL ID": 1342
            }, {
                "From URL": "market_research/spark-matrix-supplier-relationship-risk-2022",
                "To URL": "market-research/spark-matrix-supplier-relationship-&-risk-2022-1344",
                "URL ID": 1344
            }, {
                "From URL": "market_research/spark-matrix-b2b-price-optimization-and-management-application-2022",
                "To URL": "market-research/spark-matrix-b2b-price-optimization-and-management-application-2022-1348",
                "URL ID": 1348
            }, {
                "From URL": "market_research/spark-matrix-ddos-mitigation-2022",
                "To URL": "market-research/spark-matrix-ddos-mitigation-2022-1350",
                "URL ID": 1350
            }, {
                "From URL": "market_research/spark-matrix-identity-capture-and-verification-2022",
                "To URL": "market-research/spark-matrix-identity-capture-and-verification-2022-1354",
                "URL ID": 1354
            }, {
                "From URL": "market_research/spark-matrix-customer-data-platform-cdp-2022",
                "To URL": "market-research/spark-matrix-customer-data-platform-cdp-2022-1356",
                "URL ID": 1356
            }, {
                "From URL": "market_research/spark-matrix-integrated-workplace-management-systems-2022",
                "To URL": "market-research/spark-matrix-integrated-workplace-management-systems-2022-1358",
                "URL ID": 1358
            }, {
                "From URL": "market_research/spark-matrix-contract-lifecycle-management-clm-2022",
                "To URL": "market-research/spark-matrix-contract-lifecycle-management-clm-2022-1360",
                "URL ID": 1360
            }, {
                "From URL": "market_research/spark-matrix-conversational-platform-2022",
                "To URL": "market-research/spark-matrix-conversational-platform-2022-1362",
                "URL ID": 1362
            }, {
                "From URL": "market_research/spark-matrix-contact-center-outsourcing-services-ccos-2022",
                "To URL": "market-research/spark-matrix-contact-center-outsourcing-services-ccos-2022-1364",
                "URL ID": 1364
            }, {
                "From URL": "market_research/spark-matrix-value-stream-management-vsm-2022",
                "To URL": "market-research/spark-matrix-value-stream-management-vsm-2022-1366",
                "URL ID": 1366
            }, {
                "From URL": "market_research/spark-matrix-unified-endpoint-management-uem-2022",
                "To URL": "market-research/spark-matrix-unified-endpoint-management-uem-2022-1368",
                "URL ID": 1368
            }, {
                "From URL": "market_research/spark-matrix-data-masking-2022",
                "To URL": "market-research/spark-matrix-data-masking-2022-1370",
                "URL ID": 1370
            }, {
                "From URL": "market_research/spark-matrix-digital-banking-services-2022",
                "To URL": "market-research/spark-matrix-digital-banking-services-2022-1372",
                "URL ID": 1372
            }, {
                "From URL": "market_research/spark-matrix-mobile-engagement-automation-2022",
                "To URL": "market-research/spark-matrix-mobile-engagement-automation-2022-1374",
                "URL ID": 1374
            }, {
                "From URL": "market_research/spark-matrix-voice-of-the-customer-voc-2022",
                "To URL": "market-research/spark-matrix-voice-of-the-customer-voc-2022-1376",
                "URL ID": 1376
            }, {
                "From URL": "market_research/spark-matrix-talent-management-application-2022",
                "To URL": "market-research/spark-matrix-talent-management-application-2022-1378",
                "URL ID": 1378
            }, {
                "From URL": "market_research/spark-matrix-b2b-marketing-automation-platform-2022",
                "To URL": "market-research/spark-matrix-b2b-marketing-automation-platform-2022-1380",
                "URL ID": 1380
            }, {
                "From URL": "market_research/spark-matrix-product-information-management-2022",
                "To URL": "market-research/spark-matrix-product-information-management-2022-1382",
                "URL ID": 1382
            }, {
                "From URL": "market_research/spark-matrix-customer-journey-mapping-2022",
                "To URL": "market-research/spark-matrix-customer-journey-mapping-2022-1386",
                "URL ID": 1386
            }, {
                "From URL": "market_research/spark-matrix-healthcare-it-services-2022",
                "To URL": "market-research/spark-matrix-healthcare-it-services-2022-1388",
                "URL ID": 1388
            }, {
                "From URL": "market_research/spark-matrix-intranet-platform-providers-2022",
                "To URL": "market-research/spark-matrix-intranet-platform-providers-2022-1392",
                "URL ID": 1392
            }, {
                "From URL": "market_research/spark-matrix-warehouse-management-system-wms-2022",
                "To URL": "market-research/spark-matrix-warehouse-management-system-wms-2022-1394",
                "URL ID": 1394
            }, {
                "From URL": "market_research/spark-matrix-autonomous-mobile-robots-amr-2022",
                "To URL": "market-research/spark-matrix-autonomous-mobile-robots-amr-2022-1396",
                "URL ID": 1396
            }, {
                "From URL": "market_research/spark-matrix-global-supply-chain-inventory-optimization-2022",
                "To URL": "market-research/spark-matrix-global-supply-chain-inventory-optimization-2022-1398",
                "URL ID": 1398
            }, {
                "From URL": "market_research/spark-matrix-software-composition-analysis-sca-2022",
                "To URL": "market-research/spark-matrix-software-composition-analysis-sca-2022-1400",
                "URL ID": 1400
            }, {
                "From URL": "market_research/spark-matrix-sales-force-automation-sfa-2022",
                "To URL": "market-research/spark-matrix-sales-force-automation-sfa-2022-1402",
                "URL ID": 1402
            }, {
                "From URL": "market_research/spark-matrix-accounts-receivable-applications-2022",
                "To URL": "market-research/spark-matrix-accounts-receivable-applications-2022a -1404",
                "URL ID": 1404
            }, {
                "From URL": "market_research/spark-matrix-customer-analytics-service-providers-2022",
                "To URL": "market-research/spark-matrix-customer-analytics-service-providers-2022-1406",
                "URL ID": 1406
            }, {
                "From URL": "market_research/spark-matrix-risk-based-authentication-rba-2022",
                "To URL": "market-research/spark-matrix-risk-based-authentication-rba-2022-1408",
                "URL ID": 1408
            }, {
                "From URL": "market_research/spark-matrix-digital-risk-protection-drp-2022",
                "To URL": "market-research/spark-matrix-digital-risk-protection-drp-2022-1410",
                "URL ID": 1410
            }, {
                "From URL": "market_research/spark-matrix-configure-price-quote-cpq-2022",
                "To URL": "market-research/spark-matrix-configure-price-&-quote-cpq-2022-1412",
                "URL ID": 1412
            }, {
                "From URL": "market_research/spark-matrix-data-preparation-tools-2022",
                "To URL": "market-research/spark-matrix-data-preparation-tools-2022-1414",
                "URL ID": 1414
            }, {
                "From URL": "market_research/spark-matrix-esignature-software-2022",
                "To URL": "market-research/spark-matrix-e-signature-software-2022-1420",
                "URL ID": 1420
            }, {
                "From URL": "market_research/spark-matrix-artificial-intelligence-for-it-operations-aiops-2022",
                "To URL": "market-research/spark-matrix-artificial-intelligence-for-it-operations-aiops2022-1422",
                "URL ID": 1422
            }, {
                "From URL": "market_research/spark-matrix-talent-acquisition-application-2022",
                "To URL": "market-research/spark-matrix-talent-acquisition-application-2022-1424",
                "URL ID": 1424
            }, {
                "From URL": "market_research/spark-matrix-low-code-application-development-for-business-developers-2022",
                "To URL": "market-research/spark-matrix-low-code-application-development-for-business-developers-2022-1426",
                "URL ID": 1426
            }, {
                "From URL": "market_research/spark-matrix-personalization-platform-2022",
                "To URL": "market-research/spark-matrix-personalization-platform-2022-1428",
                "URL ID": 1428
            }, {
                "From URL": "market_research/spark-matrix-data-management-and-analytics-services-dmas-2022",
                "To URL": "market-research/spark-matrix-data-management-and-analytics-services-dmas-2022-1430",
                "URL ID": 1430
            }, {
                "From URL": "market_research/spark-matrix-enterprise-architecture-tools-2022",
                "To URL": "market-research/spark-matrix-enterprise-architecture-tools-2022-1434",
                "URL ID": 1434
            }, {
                "From URL": "market_research/spark-matrix-privileged-access-management-pam-2022",
                "To URL": "market-research/spark-matrix-privileged-access-management-pam-2022-1436",
                "URL ID": 1436
            }, {
                "From URL": "market_research/spark-matrix-enterprise-fraud-management-efm-2022",
                "To URL": "market-research/spark-matrix-enterprise-fraud-management-efm-2022-1438",
                "URL ID": 1438
            }, {
                "From URL": "market_research/spark-matrix-iot-identity-access-management-iot-iam-2022",
                "To URL": "market-research/spark-matrix-iot-identity-&-access-management-iot-iam-2022-1440",
                "URL ID": 1440
            }, {
                "From URL": "market_research/spark-matrix-retail-assortment-management-application-2022",
                "To URL": "market-research/spark-matrix-retail-assortment-management-application-2022-1442",
                "URL ID": 1442
            }, {
                "From URL": "market_research/spark-matrix-enterprise-information-archiving-eia-2022",
                "To URL": "market-research/spark-matrix-enterprise-information-archiving-eia-2022a -1444",
                "URL ID": 1444
            }, {
                "From URL": "market_research/spark-matrix-sales-training-service-providers-2022",
                "To URL": "market-research/spark-matrix-sales-training-service-providers-2022-1446",
                "URL ID": 1446
            }, {
                "From URL": "market_research/spark-matrixsalesforce-implementation-services-2022",
                "To URL": "market-research/spark-matrixsalesforce-implementation-services-2022-1448",
                "URL ID": 1448
            }, {
                "From URL": "market_research/spark-matrix-intelligent-application-and-service-monitoring-2022",
                "To URL": "market-research/spark-matrix-intelligent-application-and-service-monitoring-2022-1450",
                "URL ID": 1450
            }, {
                "From URL": "market_research/spark-matrix-source-to-pay-s2p-suites-2022",
                "To URL": "market-research/spark-matrix-source-to-pay-s2p-suites-2022-1452",
                "URL ID": 1452
            }, {
                "From URL": "market_research/spark-matrix-vendor-management-system-q4-2022",
                "To URL": "market-research/spark-matrix-vendor-management-system-q4-2022-1454",
                "URL ID": 1454
            }, {
                "From URL": "market_research/spark-matrix-project-and-portfolio-management-2022",
                "To URL": "market-research/spark-matrix-project-and-portfolio-management-2022-1456",
                "URL ID": 1456
            }, {
                "From URL": "market_research/spark-matrix-ecommerce-fraud-prevention-2022",
                "To URL": "market-research/spark-matrix-e-commerce-fraud-prevention-2022-1458",
                "URL ID": 1458
            }, {
                "From URL": "market_research/spark-matrix-cross-channel-campaignmanagement-2022",
                "To URL": "market-research/spark-matrix-cross-channel-campaign-management-2022-1460",
                "URL ID": 1460
            }, {
                "From URL": "market_research/spark-matrix-application-transformation-services-2022",
                "To URL": "market-research/spark-matrix-application-transformation-services-2022-1462",
                "URL ID": 1462
            }, {
                "From URL": "market_research/spark-matrix-subscription-management-applications-2022",
                "To URL": "market-research/spark-matrix-subscription-management-applications-2022-1464",
                "URL ID": 1464
            }, {
                "From URL": "market_research/spark-matrix-current-expected-credit-loss-cecl-2022",
                "To URL": "market-research/spark-matrix-current-expected-credit-loss-cecl-2022-1466",
                "URL ID": 1466
            }, {
                "From URL": "market_research/spark-matrix-managed-detection-and-response-mdr-2022",
                "To URL": "market-research/spark-matrix-managed-detection-and-response-mdr-2022-1468",
                "URL ID": 1468
            }, {
                "From URL": "market_research/spark-matrix-financial-crime-and-compliance-fcc-operations-services-2022",
                "To URL": "market-research/spark-matrix-financial-crime-and-compliance-fcc-operations-services-2022-1470",
                "URL ID": 1470
            }, {
                "From URL": "market_research/spark-matrix-card-management-system-cms-2022",
                "To URL": "market-research/spark-matrix-card-management-system-cms-2022-1472",
                "URL ID": 1472
            }, {
                "From URL": "market_research/spark-matrixtm-sales-and-operations-planning-sop-2022",
                "To URL": "market-research/spark-matrix-sales-and-operations-planning-s&op-2022-1474",
                "URL ID": 1474
            }, {
                "From URL": "market_research/transportation-management-system-tms-2022",
                "To URL": "market-research/spark-matrix-transportation-management-system-tms-2022-1476",
                "URL ID": 1476
            }, {
                "From URL": "market_research/spark-matrix-product-lifecycle-management-2022",
                "To URL": "market-research/spark-matrix-product-lifecycle-management-2022-1478",
                "URL ID": 1478
            }, {
                "From URL": "market_research/spark-matrix-crm-customer-engagement-center-2022",
                "To URL": "market-research/spark-matrix-crm-customer-engagement-center-2022-1480",
                "URL ID": 1480
            }, {
                "From URL": "market_research/spark-matrix-content-service-platform-2022",
                "To URL": "market-research/spark-matrix-content-service-platform-2022-1482",
                "URL ID": 1482
            }, {
                "From URL": "market_research/spark-matrix-strategic-portfolio-management-2022",
                "To URL": "market-research/spark-matrix-strategic-portfolio-management-2022-1484",
                "URL ID": 1484
            }, {
                "From URL": "market_research/spark-matrix-cross-channel-video-advertising-platform-2022",
                "To URL": "market-research/spark-matrix-cross-channel-video-advertising-platform-2022-1486",
                "URL ID": 1486
            }, {
                "From URL": "market_research/spark-matrix-retail-product-lifecycle-management-plm-2022",
                "To URL": "market-research/spark-matrix-retail-product-lifecycle-management-plm-2022-1488",
                "URL ID": 1488
            }, {
                "From URL": "market_research/spark-matrix-market-competitive-intelligence-platform-q4-2022",
                "To URL": "market-research/spark-matrix-market-&-competitive-intelligence-platform-q4-2022-1490",
                "URL ID": 1490
            }, {
                "From URL": "market_research/spark-matrix-connected-medical-device-security-2022",
                "To URL": "market-research/spark-matrix-connected-medical-device-security-q4-2022-1492",
                "URL ID": 1492
            }, {
                "From URL": "market_research/spark-matrix-multichannel-marketing-hubs-2022",
                "To URL": "market-research/spark-matrix-multichannel-marketing-hubs-2022-1494",
                "URL ID": 1494
            }, {
                "From URL": "market_research/spark-matrix-trade-surveillance-and-monitoring-2022",
                "To URL": "market-research/spark-matrix-trade-surveillance-and-monitoring-2022-1496",
                "URL ID": 1496
            }, {
                "From URL": "market_research/spark-matrix-bot-management-2022",
                "To URL": "market-research/spark-matrix-bot-management-2022-1498",
                "URL ID": 1498
            }, {
                "From URL": "market_research/spark-matrix-intelligent-business-process-management-suites-q4-2022",
                "To URL": "market-research/spark-matrix-intelligent-business-process-management-suites-q4-2022-1500",
                "URL ID": 1500
            }, {
                "From URL": "market_research/spark-matrix-employee-experience-management-platform-2022",
                "To URL": "market-research/spark-matrix-employee-experience-management-platform-2022-1502",
                "URL ID": 1502
            }, {
                "From URL": "market_research/spark-matrix-identity-as-a-service-idaas-q4-2022",
                "To URL": "market-research/spark-matrix-identity-as-a-service-idaas-q4-2022-1504",
                "URL ID": 1504
            }, {
                "From URL": "market_research/spark-matrix-communications-platform-as-a-service-cpaas-2022",
                "To URL": "market-research/spark-matrix-communications-platform-as-a-service-cpaas-2022-1506",
                "URL ID": 1506
            }, {
                "From URL": "market_research/spark-matrix-cloud-observability-2022",
                "To URL": "market-research/spark-matrix-cloud-observability-2022-1508",
                "URL ID": 1508
            }, {
                "From URL": "market_research/spark-matrix-network-access-control-q4-2022",
                "To URL": "market-research/spark-matrix-network-access-control-q4-2022-1510",
                "URL ID": 1510
            }, {
                "From URL": "market_research/spark-matrix-web-application-firewall-waf-q4-2022",
                "To URL": "market-research/spark-matrix-web-application-firewall-waf-q4-2022-1512",
                "URL ID": 1512
            }, {
                "From URL": "market_research/spark-matrix-mobile-threat-management-q4-2022",
                "To URL": "market-research/spark-matrix-mobile-threat-management-q4-2022-1514",
                "URL ID": 1514
            }, {
                "From URL": "market_research/spark-matrix-chatbots-for-it-operations-q4-2022",
                "To URL": "market-research/spark-matrix-chatbots-for-it-operations-q4-2022-1516",
                "URL ID": 1516
            }, {
                "From URL": "market_research/spark-matrix-product-engineering-services-pes-2022",
                "To URL": "market-research/spark-matrix-product-engineering-services-pes-2022-1518",
                "URL ID": 1518
            }, {
                "From URL": "market_research/spark-matrix-multi-enterprise-supply-chain-business-networks-mescbn-2022",
                "To URL": "market-research/spark-matrix-multi-enterprise-supply-chain-business-networks-mescbn-2022-1520",
                "URL ID": 1520
            }, {
                "From URL": "market_research/spark-matrix-managed-security-services-mss-q4-2022",
                "To URL": "market-research/spark-matrix-managed-security-services-mss-q4-2022-1522",
                "URL ID": 1522
            }, {
                "From URL": "market_research/spark-matrix-intelligent-retail-pricing-and-promotion-optimization-irppo-2022",
                "To URL": "market-research/spark-matrix-intelligent-retail-pricing-and-promotion-optimization-irp&po-2022-1524",
                "URL ID": 1524
            }, {
                "From URL": "market_research/spark-matrix-digital-commerce-services-2022",
                "To URL": "market-research/spark-matrix-digital-commerce-services-2022-1526",
                "URL ID": 1526
            }, {
                "From URL": "market_research/spark-matrix-process-mining-2022",
                "To URL": "market-research/spark-matrix-process-mining-2022-1528",
                "URL ID": 1528
            }, {
                "From URL": "market_research/spark-matrix-object-based-storage-obs-2022",
                "To URL": "market-research/spark-matrix-object-based-storage-obs-2022a -1530",
                "URL ID": 1530
            }, {
                "From URL": "market_research/spark-matrix-customer-success-management-platform-2022",
                "To URL": "market-research/spark-matrix-customer-success-management-platform-2022-1532",
                "URL ID": 1532
            }, {
                "From URL": "market_research/spark-matrix-digital-adoption-platform-2022",
                "To URL": "market-research/spark-matrix-digital-adoption-platform-2022-1534",
                "URL ID": 1534
            }, {
                "From URL": "market_research/spark-matrix-intelligent-data-catalogs-2022",
                "To URL": "market-research/spark-matrix-intelligent-data-catalogs-2022-1536",
                "URL ID": 1536
            }, {
                "From URL": "market_research/spark-matrix-behavioral-biometrics-2022-2",
                "To URL": "market-research/spark-matrix-behavioral-biometrics-2022-1538",
                "URL ID": 1538
            }, {
                "From URL": "market_research/spark-matrix-intelligent-document-processing-idp-2022",
                "To URL": "market-research/spark-matrix-intelligent-document-processing-idp-2022-1542",
                "URL ID": 1542
            }, {
                "From URL": "market_research/spark-matrix-content-marketing-platform-2022",
                "To URL": "market-research/spark-matrix-content-marketing-platform-2022-1544",
                "URL ID": 1544
            }, {
                "From URL": "market_research/spark-matrix-financial-close-management-q4-2022",
                "To URL": "market-research/spark-matrix-financial-close-management-q4-2022-1546",
                "URL ID": 1546
            }, {
                "From URL": "market_research/spark-matrix-industrial-internet-of-things-iiot-platform-2022",
                "To URL": "market-research/spark-matrix-industrial-internet-of-things-iiot-platform-2022-1548",
                "URL ID": 1548
            }, {
                "From URL": "market_research/spark-matrix-workforce-engagement-management-wem-2022",
                "To URL": "market-research/spark-matrix-workforce-engagement-management-wem-2022-1550",
                "URL ID": 1550
            }, {
                "From URL": "market_research/spark-matrix-life-insurance-policy-administration-system-2022",
                "To URL": "market-research/spark-matrix-life-insurance-policy-administration-system-2022-1552",
                "URL ID": 1552
            }, {
                "From URL": "market_research/spark-matrix-multi-country-payroll-platform-q4-2022",
                "To URL": "market-research/spark-matrix-multi-country-payroll-platform-q4-2022-1554",
                "URL ID": 1554
            }, {
                "From URL": "market_research/spark-matrix-sales-performance-management-platform-2022",
                "To URL": "market-research/spark-matrix-sales-performance-management-platform-2022-1556",
                "URL ID": 1556
            }, {
                "From URL": "market_research/spark-matrix-b2b-customer-community-platform-2022",
                "To URL": "market-research/spark-matrix-b2b-customer-community-platform-2022-1558",
                "URL ID": 1558
            }, {
                "From URL": "market_research/spark-matrix-commercial-loan-origination-system-2022",
                "To URL": "market-research/spark-matrix-commercial-loan-origination-system-2022-1560",
                "URL ID": 1560
            }, {
                "From URL": "market_research/spark-matrix-watchlist-and-sanctions-monitoring-solutions-2022",
                "To URL": "market-research/spark-matrix-watchlist-and-sanctions-monitoring-solutions-2022-1562",
                "URL ID": 1562
            }, {
                "From URL": "market_research/spark-matrix-supply-chain-planning-scp-2022",
                "To URL": "market-research/spark-matrix-supply-chain-planning-scp-2022-1564",
                "URL ID": 1564
            }, {
                "From URL": "market_research/spark-matrix-supply-chain-control-tower-scct-2022",
                "To URL": "market-research/spark-matrix-supply-chain-control-tower-scct-2022-1566",
                "URL ID": 1566
            }, {
                "From URL": "market_research/spark-matrix-sustainability-management-2022",
                "To URL": "market-research/spark-matrix-sustainability-management-2022-1568",
                "URL ID": 1568
            }, {
                "From URL": "market_research/spark-matrix-network-observability-2022",
                "To URL": "market-research/spark-matrix-network-observability-2022-1570",
                "URL ID": 1570
            }, {
                "From URL": "market_research/spark-matrix-end-user-experience-management-q4-2022",
                "To URL": "market-research/spark-matrix-end-user-experience-management-q4-2022-1572",
                "URL ID": 1572
            }, {
                "From URL": "market_research/spark-matrix-enterprise-treasury-and-risk-management-2022",
                "To URL": "market-research/spark-matrix-enterprise-treasury-and-risk-management-2022-1574",
                "URL ID": 1574
            }, {
                "From URL": "market_research/spark-matrix-retail-forecasting-and-replenishment-2022",
                "To URL": "market-research/spark-matrix-retail-forecasting-and-replenishment-2022-1576",
                "URL ID": 1576
            }, {
                "From URL": "market_research/spark-matrix-digital-experience-platform-dxp-2022",
                "To URL": "market-research/spark-matrix-digital-experience-platform-dxp-2022-1578",
                "URL ID": 1578
            }, {
                "From URL": "market_research/spark-matrix-master-data-management-2022",
                "To URL": "market-research/spark-matrix-master-data-management-2022-1580",
                "URL ID": 1580
            }, {
                "From URL": "market_research/spark-matrix-retail-loan-origination-system-rlos-2022",
                "To URL": "market-research/spark-matrix-retail-loan-origination-system-rlos-2022-1582",
                "URL ID": 1582
            }, {
                "From URL": "market_research/spark-matrix-data-quality-tools-2022",
                "To URL": "market-research/spark-matrix-data-quality-tools-2022-1584",
                "URL ID": 1584
            }, {
                "From URL": "market_research/spark-matrix-it-service-management-tools-2022",
                "To URL": "market-research/spark-matrix-it-service-management-tools-2022-1586",
                "URL ID": 1586
            }, {
                "From URL": "market_research/spark-matrix-merchant-payment-platform-2022",
                "To URL": "market-research/spark-matrix-merchant-payment-platform-2022-1588",
                "URL ID": 1588
            }, {
                "From URL": "market_research/spark-matrix-bfs-risk-and-compliance-it-services-2022",
                "To URL": "market-research/spark-matrix-bfs-risk-and-compliance-it-services-2022-1590",
                "URL ID": 1590
            }, {
                "From URL": "market_research/spark-matrix-open-banking-intermediaries-2022",
                "To URL": "market-research/spark-matrix-open-banking-intermediaries-2022-1592",
                "URL ID": 1592
            }, {
                "From URL": "market_research/spark-matrix-marketplace-development-platform-2022",
                "To URL": "market-research/spark-matrix-marketplace-development-platform-2022-1594",
                "URL ID": 1594
            }, {
                "From URL": "market_research/spark-matrix-credit-risk-technology-solutions-2022",
                "To URL": "market-research/spark-matrix-credit-risk-technology-solutions-2022-1596",
                "URL ID": 1596
            }, {
                "From URL": "market_research/spark-matrix-manufacturing-execution-systems-mes-2022",
                "To URL": "market-research/spark-matrix-manufacturing-execution-systems-mes-2022-1598",
                "URL ID": 1598
            }, {
                "From URL": "market_research/spark-matrix-procure-to-pay-p2p-suites-2022",
                "To URL": "market-research/spark-matrix-procure-to-pay-p2p-suites-2022-1600",
                "URL ID": 1600
            }, {
                "From URL": "market_research/spark-matrix-strategic-sourcing-applications-2022",
                "To URL": "market-research/spark-matrix-strategic-sourcing-applications-2022-1602",
                "URL ID": 1602
            }, {
                "From URL": "market_research/spark-matrix-retail-execution-platform-2022",
                "To URL": "market-research/spark-matrix-retail-execution-platform-2022-1604",
                "URL ID": 1604
            }, {
                "From URL": "market_research/spark-matrix-business-continuity-management-2022",
                "To URL": "market-research/spark-matrix-business-continuity-management-2022-1606",
                "URL ID": 1606
            }, {
                "From URL": "market_research/spark-matrix-commercial-content-delivery-network-services-q4-2022",
                "To URL": "market-research/spark-matrix-commercial-content-delivery-network-services-q4-2022-1608",
                "URL ID": 1608
            }, {
                "From URL": "market_research/spark-matrix-pc-core-insurance-platform-2022",
                "To URL": "market-research/spark-matrix-p&c-core-insurance-platform-2022-1610",
                "URL ID": 1610
            }, {
                "From URL": "market_research/spark-matrixtm-data-integration-tools-q4-2022",
                "To URL": "market-research/spark-matrixtm-data-integration-tools-q4-2022-1612",
                "URL ID": 1612
            }, {
                "From URL": "market_research/spark-matrix-cloud-management-platform-q4-2022",
                "To URL": "market-research/spark-matrix-cloud-management-platform-q4-2022-1614",
                "URL ID": 1614
            }, {
                "From URL": "market_research/spark-matrix-digital-workplace-services-dws-q4-2022",
                "To URL": "market-research/spark-matrix-digital-workplace-services-dws-2023-1616",
                "URL ID": 1616
            }, {
                "From URL": "market_research/spark-matrix-innovation-management-2023",
                "To URL": "market-research/spark-matrix-a innovation-management-2023-1618",
                "URL ID": 1618
            }, {
                "From URL": "market_research/spark-matrix-anti-money-laundering-2023",
                "To URL": "market-research/spark-matrix-anti-money-laundering-2023-1620",
                "URL ID": 1620
            }, {
                "From URL": "market_research/spark-matrix-speech-analytics-q1-2023",
                "To URL": "market-research/spark-matrix-speech-analytics-q1-2023-1622",
                "URL ID": 1622
            }, {
                "From URL": "market_research/spark-matrix-customer-communication-management-2023",
                "To URL": "market-research/spark-matrix-customer-communication-management-q1-2023-1624",
                "URL ID": 1624
            }, {
                "From URL": "market_research/spark-matrix-know-your-customer-2023",
                "To URL": "market-research/spark-matrix-know-your-customer-2023-1626",
                "URL ID": 1626
            }, {
                "From URL": "market_research/spark-matrix-account-based-marketing-abm-platform-2023",
                "To URL": "market-research/spark-matrix-account-based-marketing-abm-platform-2023a -1628",
                "URL ID": 1628
            }, {
                "From URL": "market_research/spark-matrix-industrial-control-systems-ics-security-q2-2023",
                "To URL": "market-research/spark-matrix-industrial-control-systems-ics-security-q2-2023-1630",
                "URL ID": 1630
            }, {
                "From URL": "market_research/spark-matrix-governance-risk-and-compliance-2023",
                "To URL": "market-research/spark-matrix-governance-risk-and-compliance-grc-platforms-q2-2023-1632",
                "URL ID": 1632
            }, {
                "From URL": "market_research/spark-matrix-unified-communications-as-a-service-ucaas-q4-2022",
                "To URL": "market-research/spark-matrix-unified-communications-as-a-service-ucaas-q4-2022-1634",
                "URL ID": 1634
            }, {
                "From URL": "market_research/spark-matrix-supplier-relationship-risk-q2-2023",
                "To URL": "market-research/spark-matrixsupplier-relationship-&-risk-management-q2-2023-1636",
                "URL ID": 1636
            }, {
                "From URL": "market_research/spark-matrix-data-science-and-machine-learning-platforms-q2-2023",
                "To URL": "market-research/spark-matrix-data-science-and-machine-learning-platforms-q2-2023-1638",
                "URL ID": 1638
            }, {
                "From URL": "market_research/spark-matrix-adtech-platform-2023",
                "To URL": "market-research/spark-matrix-adtech-platform-q2-2023-1640",
                "URL ID": 1640
            }, {
                "From URL": "market_research/spark-matrix-cloud-native-application-development-services-2023",
                "To URL": "market-research/spark-matrix-cloud-native-application-development-services-q2-2023-1642",
                "URL ID": 1642
            }, {
                "From URL": "market_research/spark-matrix-contact-center-as-a-service-ccaas-2022",
                "To URL": "market-research/spark-matrix-contact-center-as-a-service-ccaas-2022-1644",
                "URL ID": 1644
            }, {
                "From URL": "market_research/spark-matrix-lcad-for-professional-developers-2022",
                "To URL": "market-research/spark-matrix-low-code-application-development-platform-for-professional-developers-2022-1646",
                "URL ID": 1646
            }, {
                "From URL": "market_research/spark-matrix-collaborative-work-management-cwm-2022",
                "To URL": "market-research/spark-matrix-collaborative-work-management-cwm-2022-1652",
                "URL ID": 1652
            }, {
                "From URL": "market_research/spark-matrix-virtual-customer-assistants-vca-2022",
                "To URL": "market-research/spark-matrix-virtual-customer-assistants-vca-2022-1654",
                "URL ID": 1654
            }, {
                "From URL": "market_research/spark-matrix-data-governance-solutions-2022",
                "To URL": "market-research/spark-matrix-data-governance-solutions-2022-1656",
                "URL ID": 1656
            }, {
                "From URL": "market_research/spark-matrix-contact-center-as-a-service-ccaas-2021",
                "To URL": "market-research/spark-matrix-contact-center-as-a-service-ccaas-2021-1658",
                "URL ID": 1658
            }, {
                "From URL": "market_research/spark-matrix-digital-risk-protection-drp-2021",
                "To URL": "market-research/spark-matrix-digital-risk-protection-drp-2021-1660",
                "URL ID": 1660
            }, {
                "From URL": "market_research/spark-matrix-omnichannel-order-management-systems-oms-2021",
                "To URL": "market-research/spark-matrix-omnichannel-order-management-systems-oms-2021-1666",
                "URL ID": 1666
            }, {
                "From URL": "market_research/spark-matrix-digital-twin-organization-dto-2021",
                "To URL": "market-research/spark-matrix-digital-twin-of-an-organization-dto-solution-2021-1668",
                "URL ID": 1668
            }, {
                "From URL": "market_research/spark-matrix-customer-communication-management-ccm-2020",
                "To URL": "market-research/spark-matrix-customer-communication-management-ccm-2020-1672",
                "URL ID": 1672
            }, {
                "From URL": "market_research/spark-matrix-retail-forecasting-and-replenishment-2020",
                "To URL": "market-research/spark-matrix-retail-forecasting-and-replenishment-2020-1674",
                "URL ID": 1674
            }, {
                "From URL": "market_research/spark-matrix-customer-journey-analytics-2020",
                "To URL": "market-research/spark-matrix-customer-journey-analytics-2020-1680",
                "URL ID": 1680
            }, {
                "From URL": "market_research/spark-matrix-metadata-management-2020",
                "To URL": "market-research/spark-matrix-metadata-management-2020-1696",
                "URL ID": 1696
            }, {
                "From URL": "market_research/market-insights-software-defined-perimeter-sdp-for-zero-trust-network-security-2020",
                "To URL": "market-research/market-insights-software-defined-perimeter-sdp-for-zero-trust-network-security-2020-1848",
                "URL ID": 1848
            }, {
                "From URL": "market_research/market-insights-the-convergence-of-journey-mapping-analytics-and-orchestration-solution-for-11-personalization",
                "To URL": "market-research/market-insights-the-convergence-of-journey-mapping-analytics-and-orchestration-solution-for-11-personalization-1850",
                "URL ID": 1850
            }, {
                "From URL": "market_research/modern-era-in-anti-money-laundering-aml-solution-ai-intelligent-automation",
                "To URL": "market-research/market-insight-onset-of-a-modern-era-in-anti-money-laundering-aml-solution-driven-by-ai-and-intelligent-automation-1852",
                "URL ID": 1852
            }, {
                "From URL": "market_research/advancements-augmented-reality-ar-hardware-emerging-use-cases-market-direction",
                "To URL": "market-research/market-insight-advancements-in-augmented-reality-ar-hardware-emerging-use-cases-and-market-direction-1854",
                "URL ID": 1854
            }, {
                "From URL": "market_research/market-insight-cdp-vendors-significantly-investing-in-incorporating-and-enhancing-predictive-analytics-ai-and-machine-learning-technologies-to-optimize-outcome-of-marketing-campaigns",
                "To URL": "market-research/market-insight-cdp-vendors-significantly-investing-in-incorporating-and-enhancing-predictive-analytics-ai-and-machine-learning-technologies-to-optimize-outcome-of-marketing-campaigns-1856",
                "URL ID": 1856
            }, {
                "From URL": "market_research/market-insight-cdp-vendors-focusing-on-catering-to-advanced-use-cases",
                "To URL": "market-research/market-insight-cdp-vendors-focusing-on-catering-to-advanced-use-cases-1858",
                "URL ID": 1858
            }, {
                "From URL": "market_research/market-insight-bent-of-cpq-landscape-towards-emerging-technologies-across-the-sales-cycle",
                "To URL": "market-research/market-insight-bent-of-cpq-landscape-towards-emerging-technologies-across-the-sales-cycle-1860",
                "URL ID": 1860
            }, {
                "From URL": "market_research/market-insight-user-experience-a-key-aspect-towards-providing-an-enhanced-capability-across-cpq-cycle",
                "To URL": "market-research/market-insight-user-experience---a-key-aspect-towards-providing-an-enhanced-capability-across-cpq-cycle-1862",
                "URL ID": 1862
            }, {
                "From URL": "market_research/market-insight-value-stream-management-vendors-ability-to-provide-insights-and-visibility-in-value-streams",
                "To URL": "market-research/market-insight-value-stream-management-vendors-ability-to-provide-insights-and-visibility-in-value-streams-1864",
                "URL ID": 1864
            }, {
                "From URL": "market_research/market-insight-adoption-of-vsm-in-accelerating-digital-transformation",
                "To URL": "market-research/market-insight-adoption-of-vsm-in-accelerating-digital-transformation-1866",
                "URL ID": 1866
            }, {
                "From URL": "market_research/market-insight-integrated-warehouse-management-execution-and-automation-solutions",
                "To URL": "market-research/market-insight-integrated-warehouse-management-execution-and-automation-solutions-1868",
                "URL ID": 1868
            }, {
                "From URL": "market_research/market-insight-ai-ml-and-process-automation-continue-to-intelligently-augment-the-uem-solutions",
                "To URL": "market-research/market-insight-ai-ml-and-process-automation-continue-to-intelligently-augment-the-uem-solutions-1870",
                "URL ID": 1870
            }, {
                "From URL": "market_research/market-insight-convergence-of-endpoint-management-and-advanced-security-capabilities-is-enabling-modern-management-by-uem-vendors",
                "To URL": "market-research/market-insight-convergence-of-endpoint-management-and-advanced-security-capabilities-is-enabling-modern-management-by-uem-vendors-1872",
                "URL ID": 1872
            }, {
                "From URL": "market_research/how-to-build-a-robust-grc-framework-for-enterprise",
                "To URL": "market-research/market-insight-how-to-build-a-robust-grc-framework-for-enterprise-1874",
                "URL ID": 1874
            }, {
                "From URL": "market_research/challenges-opportunities-and-innovations-in-transaction-monitoring-and-alert-management",
                "To URL": "market-research/market-insight-challenges-opportunities-and-innovations-in-transaction-monitoring-and-alert-management-1882",
                "URL ID": 1882
            }, {
                "From URL": "market_research/integrating-esg-risks-into-the-overall-risk-management-framework-and-strategy",
                "To URL": "market-research/market-insight-integrating-esg-risks-into-the-overall-risk-management-framework-and-strategy-1884",
                "URL ID": 1884
            }, {
                "From URL": "market_research/market-insight-latest-developments-in-process-mining-driving-emergence-of-task-mining-capabilities",
                "To URL": "market-research/market-insight-latest-developments-in-process-mining-driving-emergence-of-task-mining-capabilities-1886",
                "URL ID": 1886
            }, {
                "From URL": "market_research/growing-connection-between-the-enterprise-architecture-and-project-and-portfolio-management-to-line-up-it-projects-teams",
                "To URL": "market-research/market-insight-growing-connection-between-the-enterprise-architecture-and-project-and-portfolio-management-to-line-up-it-projects-teams-1888",
                "URL ID": 1888
            }, {
                "From URL": "market_research/market-insight-how-machine-learning-in-ddos-solutions-is-reducing-mitigation-time",
                "To URL": "market-research/market-insight-how-machine-learning-in-ddos-solutions-is-reducing-mitigation-time-1892",
                "URL ID": 1892
            }, {
                "From URL": "market_research/market-insight-saas-optimization-integrated-with-application-portfolio-management-enhancing-the-organizational-productivity",
                "To URL": "market-research/market-insight-saas-optimization-integrated-with-application-portfolio-management-enhancing-the-organizational-productivity-1894",
                "URL ID": 1894
            }, {
                "From URL": "market_research/market-insight-dynamics-of-micro-segmentation-of-customers-for-cx-targeting",
                "To URL": "market-research/market-insight-dynamics-of-micro-segmentation-of-customers-for-cx-targeting-1900",
                "URL ID": 1900
            }, {
                "From URL": "market_research/market-insight-role-of-agile-stores-in-shaping-overall-omnichannel-fulfilment-environment",
                "To URL": "market-research/market-insight-role-of-agile-stores-in-shaping-overall-omnichannel-fulfilment-environment-1902",
                "URL ID": 1902
            }, {
                "From URL": "market_research/market-insight-the-current-state-of-automated-data-governance-and-the-factors-encouraging-related-technology-investments-in-organizations",
                "To URL": "market-research/market-insight-the-current-state-of-automated-data-governance-and-the-factors-encouraging-related-technology-investments-in-organizations-1906",
                "URL ID": 1906
            }, {
                "From URL": "market_research/impact-of-attended-automation-on-agents-and-customer-experiences",
                "To URL": "market-research/market-insight-impact-of-attended-automation-on-agents-and-customer-experiences-1912",
                "URL ID": 1912
            }, {
                "From URL": "market_research/hyper-personalization-driven-contextual-banking-approach-revolutionizing-digital-banking-experience",
                "To URL": "market-research/hyper-personalization-driven-contextual-banking-approach-revolutionizing-digital-banking-experience-1926",
                "URL ID": 1926
            }, {
                "From URL": "market_research/industrial-internet-of-things-iiot-edge-computing-as-a-competitive-differentiator",
                "To URL": "market-research/industrial-internet-of-things-iiot-edge-computing-as-a-competitive-differentiator-1934",
                "URL ID": 1934
            }, {
                "From URL": "market_research/best-practices-towards-vulnerability-management-in-ot-ics-security",
                "To URL": "market-research/best-practices-towards-vulnerability-management-in-ot/-ics-security-1936",
                "URL ID": 1936
            }, {
                "From URL": "market_research/mergers-acquisitions-ma-and-divestitures-reshaping-iot-ecosystem",
                "To URL": "market-research/mergers-&-acquisitions-m&a-and-divestitures-reshaping-iot-ecosystem-1938",
                "URL ID": 1938
            }, {
                "From URL": "market_research/model-based-systems-engineering-mbse-and-plm-to-design-smart-connected-products",
                "To URL": "market-research/model-based-systems-engineering-mbse-and-plm-to-design-smart-connected-products-1940",
                "URL ID": 1940
            }, {
                "From URL": "market_research/the-evolving-landscape-of-cdps-and-their-impact-on-marketing-and-customer-experience",
                "To URL": "market-research/the-evolving-landscape-of-cdps-and-their-impact-on-marketing-and-customer-experience-1942",
                "URL ID": 1942
            }, {
                "From URL": "market_research/hyper-personalization-to-take-a-centre-stage-in-the-abm-market",
                "To URL": "market-research/hyper-personalization-to-take-a-centre-stage-in-the-abm-market-1944",
                "URL ID": 1944
            }, {
                "From URL": "market_research/criticality-of-zero-trust-network-security-in-hybrid-work-settings",
                "To URL": "market-research/criticality-of-zero-trust-network-security-in-hybrid-work-settings-1946",
                "URL ID": 1946
            }, {
                "From URL": "market_research/how-intent-data-is-helping-enhance-the-account-based-buying-journey",
                "To URL": "market-research/how-intent-data-is-helping-enhance-the-account-based-buying-journey-1948",
                "URL ID": 1948
            }, {
                "From URL": "market_research/digital-adoption-platforms-dap-assists-enterprises-in-improving-software-adoption-and-accelerating-their-digital-transformation-journey",
                "To URL": "market-research/digital-adoption-platforms-dap-assists-enterprises-in-improving-software-adoption-and-accelerating-their-digital-transformation-journey-1950",
                "URL ID": 1950
            }, {
                "From URL": "market_research/implementation-of-software-composition-analysis-sca-from-software-scanning-to-software-designing",
                "To URL": "market-research/implementation-of-software-composition-analysis-sca-from-software-scanning-to-software-designing-1952",
                "URL ID": 1952
            }, {
                "From URL": "market_research/role-of-mescbn-in-making-supply-chains-resilient-and-agile",
                "To URL": "market-research/role-of-mescbn-in-making-supply-chains-resilient-and-agile-1954",
                "URL ID": 1954
            }, {
                "From URL": "market_research/metaverse-future-of-digital-commerce",
                "To URL": "market-research/metaverse-future-of-digital-commerce-1998",
                "URL ID": 1998
            }, {
                "From URL": "market_research/evolution-of-voc-feedback-methods-from-traditional-mainstream-to-conversational",
                "To URL": "market-research/evolution-of-voc-feedback-methods-from-traditional/mainstream-to-conversational-2000",
                "URL ID": 2000
            }, {
                "From URL": "market_research/how-task-mining-assists-in-capturing-work-done-on-productivity-applications-to-achieve-a-user-centric-and-holistic-view-of-the-processes",
                "To URL": "market-research/how-task-mining-assists-in-capturing-work-done-on-productivity-applications-to-achieve-a-user-centric-and-holistic-view-of-the-processes-2002",
                "URL ID": 2002
            }, {
                "From URL": "market_research/role-of-conversational-ai-in-improving-agent-performance",
                "To URL": "market-research/role-of-conversational-ai-in-improving-agent-performance-2004",
                "URL ID": 2004
            }, {
                "From URL": "market_research/managing-data-on-the-cloud-with-dataops",
                "To URL": "market-research/managing-data-on-the-cloud-with-dataops-2006",
                "URL ID": 2006
            }, {
                "From URL": "market_research/increasing-adoption-of-advanced-fraud-prevention-measures-to-combat-cross-border-payment-frauds",
                "To URL": "market-research/increasing-adoption-of-advanced-fraud-prevention-measures-to-combat-cross-border-payment-frauds-2008",
                "URL ID": 2008
            }, {
                "From URL": "market_research/in-app-protection-in-the-rising-api-economy",
                "To URL": "market-research/api-economy-driving-the-need-of-in-app-protection-2010",
                "URL ID": 2010
            }, {
                "From URL": "market_research/perfect-store-execution-using-image-recognition",
                "To URL": "market-research/perfect-store-execution-using-image-recognition-2012",
                "URL ID": 2012
            }, {
                "From URL": "market_research/role-of-ai-ml-in-transforming-account-based-marketing-abm-platform-capabilities",
                "To URL": "market-research/role-of-ai/ml-in-transforming-account-based-marketing-abm-platform-capabilities-2014",
                "URL ID": 2014
            }, {
                "From URL": "market_research/pushing-the-limits-to-procurement-value-building-a-category-based-strategy-technology-continuum",
                "To URL": "market-research/pushing-the-limits-to-procurement-value-building-a-category-based-strategy-a€“-technology-continuum-2016",
                "URL ID": 2016
            }, {
                "From URL": "market_research/sophisticated-grc-solutions-helping-financial-institutions-improve-operational-efficiency-and-resiliency",
                "To URL": "market-research/sophisticated-grc-solutions-helping-financial-institutions-improve-operational-efficiency-and-resiliency-2018",
                "URL ID": 2018
            }, {
                "From URL": "market_research/role-of-emerging-technologies-in-automated-insurance-underwriting-and-claims-processing-in-pas-solutions",
                "To URL": "market-research/role-of-emerging-technologies-in-automated-insurance-underwriting-and-claims-processing-in-pas-solutions-2020",
                "URL ID": 2020
            }, {
                "From URL": "market_research/growing-adoption-of-merchant-payment-solutions-and-services-that-offer-flexible-retail-payment-options",
                "To URL": "market-research/growing-adoption-of-merchant-payment-solutions-and-services-that-offer-flexible-retail-payment-options-2022",
                "URL ID": 2022
            }, {
                "From URL": "market_research/leveraging-low-code-composable-architecture-to-promote-effective-digital-transformation",
                "To URL": "market-research/leveraging-low-code-composable-architecture-to-promote-effective-digital-transformation-2024",
                "URL ID": 2024
            }, {
                "From URL": "market_research/fresh-item-forecasting-everyones-need-of-the-hour",
                "To URL": "market-research/fresh-item-forecasting-everyones-need-of-the-hour-2026",
                "URL ID": 2026
            }, {
                "From URL": "market_research/how-machine-learning-in-ddos-solutions-is-reducing-mitigation-time",
                "To URL": "market-research/how-machine-learning-in-ddos-mitigation-solution-is-reducing-mitigation-time-2028",
                "URL ID": 2028
            }, {
                "From URL": "market_research/integration-of-bgp-flowspec-in-ddos-mitigation-solution-for-robust-security",
                "To URL": "market-research/integration-of-bgp-flowspec-in-ddos-mitigation-solution-for-robust-security-2030",
                "URL ID": 2030
            }, {
                "From URL": "market_research/leveraging-digital-twin-and-supply-chain-control-tower-the-unbeatable-combination",
                "To URL": "market-research/leveraging-zero-trust-network-security-in-iam-solutions-for-strengthening--security-infrastructure-of-organization-2048",
                "URL ID": 2048
            }, {
                "From URL": "market_research/leveraging-zero-trust-network-security-in-iam-solutions-for-strengthening-security-infrastructure-of-organization",
                "To URL": "market-research/leveraging-zero-trust-network-security-in-iam-solutions-for-strengthening--security-infrastructure-of-organization-2048",
                "URL ID": 2048
            }, {
                "From URL": "market_research/evolution-of-web-application-firewall-through-machine-learning",
                "To URL": "market-research/evolution-of-web-application-firewall-through-machine-learning-2050",
                "URL ID": 2050
            }, {
                "From URL": "market_research/supply-chain-control-tower-visibility-to-business-value",
                "To URL": "market-research/supply-chain-control-tower-visibility-to-business-value-2052",
                "URL ID": 2052
            }, {
                "From URL": "market_research/growing-emphasis-on-interconnecting-voc-and-voe-programs-to-drive-customer-and-employee",
                "To URL": "market-research/growing-emphasis-on-interconnecting-voc-and-voe-programs-to-drive-customer-and-employee-2088",
                "URL ID": 2088
            }, {
                "From URL": "market_research/growing-need-of-aml-regulations-for-crypto-currency-exchange",
                "To URL": "market-research/growing-need-of-aml-regulations-for-crypto-currency-exchange-2090",
                "URL ID": 2090
            }, {
                "From URL": "market_research/behavioral-analysis-prevention-of-market-abuse-and-misconduct-in-trade-surveillance",
                "To URL": "market-research/prevention-of-market-abuse-and-misconduct-in-trade-surveillance-through-behavioral-analysis-2092",
                "URL ID": 2092
            }, {
                "From URL": "market_research/grc-vendors-leveraging-cognitive-capabilities-for-enhanced-efficiencies",
                "To URL": "market-research/grc-vendors-leveraging-cognitive-capabilities-for-enhanced-efficiencies-2094",
                "URL ID": 2094
            }, {
                "From URL": "market_research/how-technology-leaders-are-offering-infrastructure-support-by-investing-into-the-emerging-technologies-that-will-impact-the-creation-of-metaverse",
                "To URL": "market-research/how-technology-leaders-are-offering-infrastructure-support-by-investing-into-the-emerging-technologies-that-will-impact-the-creation-of-metaverse-2096",
                "URL ID": 2096
            }, {
                "From URL": "market_research/importance-of-value-stream-management-in-lean-budgeting",
                "To URL": "market-research/importance-of-value-stream-management-in-lean-budgeting-2098",
                "URL ID": 2098
            }, {
                "From URL": "market_research/ai-enabled-speech-analytics-for-improving-agents-and-customer-experiences",
                "To URL": "market-research/ai-enabled-speech-analytics-for-improving-agents-and-customer-experiences-2100",
                "URL ID": 2100
            }, {
                "From URL": "market_research/how-an-integrated-source-to-pay-suite-combining-the-s2c-and-p2p-technologies-would-ensure-a-hassle-free-and-unified-user-experience",
                "To URL": "market-research/how-an-integrated-source-to-pays2p-suite-combining-the-s2c-and-p2p-technologies-would-ensure-a-hassle-free-and-unified-user-experience-2102",
                "URL ID": 2102
            }, {
                "From URL": "market_research/amplify-total-shared-experiences-with-digital-twin-of-customers-dtoc",
                "To URL": "market-research/amplify-total-shared-experiences-with-digital-twin-of-customers-dtoc-2104",
                "URL ID": 2104
            }, {
                "From URL": "market_research/digital-twin-of-an-organization-birth-of-an-integrated-technology-solution-in-the-digital-age",
                "To URL": "market-research/digital-twin-of-an-organization-birth-of-an-integrated-technology-solution-in-the-digital-age-2106",
                "URL ID": 2106
            }, {
                "From URL": "market_research/digital-twin-of-an-organization-a-holistic-process-driven-decision-making-solution",
                "To URL": "market-research/digital-twin-of-an-organization-a-holistic-process-driven-decision-making-solution-2108",
                "URL ID": 2108
            }, {
                "From URL": "market_research/the-need-to-move-towards-strategic-portfolio-management-to-promote-effective-planning-and-execution",
                "To URL": "market-research/the-need-to-move-towards-strategic-portfolio-management-to-promote-effective-planning-and-execution-2110",
                "URL ID": 2110
            }, {
                "From URL": "market_research/growing-connection-between-enterprise-architecture-and-project-and-portfolio-management-to-line-up-it-projects-team",
                "To URL": "market-research/growing-connection-between-enterprise-architecture-and-project-and-portfolio-management-to-line-up-it-projects-team-2112",
                "URL ID": 2112
            }, {
                "From URL": "market_research/how-digital-twin-technology-will-play-a-crucial-role-in-metaverse",
                "To URL": "market-research/how-digital-twin-technology-will-play-a-crucial-role-in-metaverse-2118",
                "URL ID": 2118
            }, {
                "From URL": "market_research/how-metaverse-holds-potential-to-revolutionize-global-businesses",
                "To URL": "market-research/how-metaverse-holds-potential-to-revolutionize-global-businesses-2120",
                "URL ID": 2120
            }, {
                "From URL": "market_research/overcoming-ccaas-adoption-challenges",
                "To URL": "market-research/overcoming-ccaas-adoption-challenges-2128",
                "URL ID": 2128
            }, {
                "From URL": "market_research/spark-matrix-zero-trust-network-security-2022",
                "To URL": "market-research/spark-matrix-zero-trust-network-security-2022-2132",
                "URL ID": 2132
            }, {
                "From URL": "market_research/spark-matrix-spend-analytics-q2-2023",
                "To URL": "market-research/market-forecast-spend-analytics-2022-2027-worldwide-2244",
                "URL ID": 2244
            }, {
                "From URL": "market_research/spark-matrix-customer-identity-and-access-management-ciam-q1-2023",
                "To URL": "market-research/market-forecast-customer-identity-and-access-management-ciam-2022-2027-worldwide-2286",
                "URL ID": 2286
            }, {
                "From URL": "market_research/quadrant-research-identifies-happiest-minds-as-an-emerging-iot-star-in-the-retail-market",
                "To URL": "market-research/quadrant-research-identifies-happiest-minds-as-an-emerging-iot-star-in-the-retail-market-2527",
                "URL ID": 2527
            }, {
                "From URL": "market_research/mic-customs-solutions-recognized-technology-leader-global-gtm-market-quadrant-knowledge-solutions",
                "To URL": "market-research/mic-customs-solutions-is-recognized-as-the-technology-leader-in-the-global-gtm-market-by-quadrant-knowledge-solutions-2528",
                "URL ID": 2528
            }, {
                "From URL": "market_research/quadrant-research-identifies-beyondtrust-technology-leader-privileged-access-management-pam-market",
                "To URL": "market-research/quadrant-research-identifies-beyondtrust-as-the-2017-technology-leader-in-the-privileged-access-management-pam-market-2529",
                "URL ID": 2529
            }, {
                "From URL": "market_research/versa-networks-recognized-2016-product-performance-leader-global-sd-wan-market",
                "To URL": "market-research/versa-networks-recognized-as-2016-product-performance-leader-in-the-global-sd-wan-market-by-quadrant-knowledge-solutions-2530",
                "URL ID": 2530
            }, {
                "From URL": "market_research/quadrant-research-recognizes-mushroom-network-2016-company-year-global-sd-wan-market",
                "To URL": "market-research/quadrant-research-recognizes-mushroom-network-as-2016-company-of-the-year-in-the-global-sd-wan-market-2531",
                "URL ID": 2531
            }, {
                "From URL": "market_research/arbor-networks-recognized-2017-market-technology-leader-global-ddos-mitigation-market",
                "To URL": "market-research/arbor-networks-is-recognized-as-the-2017-market-and-technology-leader-in-the-global-ddos-mitigation-market-2532",
                "URL ID": 2532
            }, {
                "From URL": "market_research/mercurygate-recognized-2017-product-performance-leader-global-transportation-management-systems-tms-market",
                "To URL": "market-research/mercurygate-is-recognized-as-2017-product-performance-leader-in-the-global-transportation-management-systems-tms-market-2533",
                "URL ID": 2533
            }, {
                "From URL": "market_research/ptc-is-recognized-as-2017-technology-leader-in-the-iot-platform-market",
                "To URL": "market-research/ptc-is-recognized-as-2017-technology-leader-in-the-iot-platform-market-2534",
                "URL ID": 2534
            }, {
                "From URL": "market_research/rsam-is-positioned-as-2017-technology-leader-in-the-global-grc-platform-market",
                "To URL": "market-research/rsam-is-positioned-as-2017-technology-leader-in-the-global-grc-platform-market-2535",
                "URL ID": 2535
            }, {
                "From URL": "market_research/logicmanager-named-2017-grc-company-of-the-year-in-the-grc-platform-market",
                "To URL": "market-research/logicmanager-named-2017-grc-company-of-the-year-in-the-grc-platform-market-by-quadrant-knowledge-solutions-2536",
                "URL ID": 2536
            }, {
                "From URL": "market_research/kryon-systems-2017-company-year-robotics-process-automation",
                "To URL": "market-research/kryon-systems-recognized-as-2017-company-of-the-year-in-the-robotics-process-automation-market-by-quadrant-knowledge-solutions-2537",
                "URL ID": 2537
            }, {
                "From URL": "market_research/pulse-secure-technology-leader-network-access-control-nac-market",
                "To URL": "market-research/pulse-secure-recognized-as-a-technology-leader-in-the-network-access-control-nac-market-2538",
                "URL ID": 2538
            }, {
                "From URL": "market_research/versa-networks-is-recognized-as-2018-sd-wan-company-of-the-year",
                "To URL": "market-research/versa-networks-is-recognized-as-2018-sd-wan-company-of-the-year-by-quadrant-knowledge-solutions-2539",
                "URL ID": 2539
            }, {
                "From URL": "market_research/ptc-thingworx-2018-technology-leader-iot-platform-market-quadrant-knowledge-solutions",
                "To URL": "market-research/ptc-thingworx-is-positioned-as-2018-technology-leader-in-iot-platform-market-by-quadrant-knowledge-solutions-2540",
                "URL ID": 2540
            }, {
                "From URL": "market_research/2018-emerging-star-iot-security-market-device-identity-management",
                "To URL": "market-research/2018-emerging-star-in-the-iot-security-market-device-identity-management-segment-2541",
                "URL ID": 2541
            }, {
                "From URL": "market_research/securonix-recognized-2018-technology-leader-ueba-market",
                "To URL": "market-research/securonix-is-recognized-as-2018-technology-leader-in-the-ueba-market-2542",
                "URL ID": 2542
            }, {
                "From URL": "market_research/rsam-is-recognized-as-2018-technology-leader-in-the-grc-platforms-market",
                "To URL": "market-research/rsam-is-recognized-as-2018-technology-leader-in-the-grc-platforms-market-2543",
                "URL ID": 2543
            }, {
                "From URL": "market_research/device-authority-2019-technology-leaders-spark-matrix-iot-identity-access-management-iam-market",
                "To URL": "market-research/device-authority-is-positioned-amongst-2019-technology-leaders-in-the-spark-matrix-analysis-of-iot-iam-market-2545",
                "URL ID": 2545
            }, {
                "From URL": "market_research/eurotech-2019-technology-leaders-spark-matrix-analysis-iiot-platforms-market",
                "To URL": "market-research/eurotech-is-positioned-amongst-the-2019-technology-leaders-in-the-spark-matrix-analysis-of-iiot-platforms-market-2546",
                "URL ID": 2546
            }, {
                "From URL": "market_research/entrust-datacard-emerged-as-2019-technology-leader-in-the-spark-matrix-analysis-of-iot-iam-market",
                "To URL": "market-research/entrust-datacard-emerged-as-2019-technology-leader-in-the-spark-matrix-analysis-of-iot-iam-market-2547",
                "URL ID": 2547
            }, {
                "From URL": "market_research/icertis-is-recognized-as-2019-technology-leader-in-the-contract-lifecycle-management-clm-market",
                "To URL": "market-research/icertis-is-recognized-as-2019-technology-leader-in-the-contract-lifecycle-management-clm-market-2548",
                "URL ID": 2548
            }, {
                "From URL": "market_research/brierley-loyaltyondemand-2020-spark-matrix-leader-customer-loyalty-solutions-market",
                "To URL": "market-research/brierley-has-emerged-as-2020-spark-matrix-leader-in-the-customer-loyalty-solutions-market-by-quadrant-knowledge-solutions-2549",
                "URL ID": 2549
            }, {
                "From URL": "market_research/eurotech-is-leader-in-spark-matrix-industrial-iot-iiot-platforms-2020",
                "To URL": "market-research/eurotech-is-leader-in-spark-matrix-industrial-iot-iiot-platforms-2020-2550",
                "URL ID": 2550
            }, {
                "From URL": "market_research/quadrant-solutions-identifies-janrain-technology-leader-customer-identity-access-management-ciam-market",
                "To URL": "market-research/quadrant-solutions-identifies-janrain-as-the-2016-technology-leader-in-the-customer-identity-and-access-management-ciam-market-2551",
                "URL ID": 2551
            }, {
                "From URL": "market_research/gurucul-receives-2017-product-performance-leadership-recognition-ueba-market-quadrant-knowledge-solutions",
                "To URL": "market-research/gurucul-receives-2017-product-performance-leadership-recognition-in-ueba-market-by-quadrant-knowledge-solutions-2552",
                "URL ID": 2552
            }, {
                "From URL": "market_research/softomotive-recognized-product-performance-leader-robotics-process-automation-market-quadrant-knowledge-solutions",
                "To URL": "market-research/softomotive-is-recognized-as-a-product-performance-leader-in-the-robotics-process-automation-market-by-quadrant-knowledge-solutions-2553",
                "URL ID": 2553
            }, {
                "From URL": "market_research/radial-technology-leader-2019-spark-matrix-omnichannel-order-management-systems-market",
                "To URL": "market-research/radial-has-emerged-as-a-leader-in-the-2019-spark-matrix-for-the-omnichannel-order-management-systems-market-2555",
                "URL ID": 2555
            }, {
                "From URL": "market_research/symphony-retailai-2019-technology-leader-spark-matrix-omnichannel-order-management-systems-oms-market",
                "To URL": "market-research/quadrant-knowledge-solutions-names-symphony-retailai-as-a-2019-technology-leader-in-the-omnichannel-order-management-systems-market-2556",
                "URL ID": 2556
            }, {
                "From URL": "market_research/intershop-communications-2017-company-of-the-year-global-digital-commerce-platforms-market",
                "To URL": "market-research/intershop-communications-is-recognized-as-the-2017-company-of-the-year-in-the-global-digital-commerce-platforms-market-2557",
                "URL ID": 2557
            }, {
                "From URL": "market_research/feedzai-is-leader-in-spark-matrix-anti-money-laundering-aml-2022",
                "To URL": "market-research/feedzai-is-leader-in-spark-matrix-anti-money-laundering-aml-2022-2559",
                "URL ID": 2559
            }, {
                "From URL": "market_research/appian-is-leader-in-spark-matrix-robotic-process-automation-rpa-2022",
                "To URL": "market-research/appian-is-leader-in-spark-matrix-robotic-process-automation-rpa-2022-2560",
                "URL ID": 2560
            }, {
                "From URL": "market_research/blue-yonder-is-leader-in-spark-matrix-omnichannel-order-management-systems-oms-2022",
                "To URL": "market-research/blue-yonder-is-leader-in-spark-matrix-omnichannel-order-management-systems-oms-2022-2561",
                "URL ID": 2561
            }, {
                "From URL": "market_research/tecsys-is-leader-in-spark-matrix-omnichannel-order-management-systems-oms-2022",
                "To URL": "market-research/tecsys-is-leader-in-spark-matrix-omnichannel-order-management-systems-oms-2022-2562",
                "URL ID": 2562
            }, {
                "From URL": "market_research/appian-is-leader-in-spark-matrix-low-code-application-development-platforms-for-professional-developers-2022",
                "To URL": "market-research/appian-is-leader-in-spark-matrix-low-code-application-development-platforms-for-professional-developers-2022-2563",
                "URL ID": 2563
            }, {
                "From URL": "market_research/splunk-is-leader-in-spark-matrix-it-infrastructure-monitoring-tools-2022",
                "To URL": "market-research/splunk-is-leader-in-spark-matrix-it-infrastructure-monitoring-tools-2022-2564",
                "URL ID": 2564
            }, {
                "From URL": "market_research/gep-is-leader-in-spark-matrix-procurement-services-2022",
                "To URL": "market-research/gep-is-leader-in-spark-matrix-procurement-services-2022-2565",
                "URL ID": 2565
            }, {
                "From URL": "market_research/datarobot-is-leader-in-spark-matrix-data-science-and-machine-learning-platform-2022",
                "To URL": "market-research/datarobot-is-leader-in-spark-matrix-data-science-and-machine-learning-platform-2022-2566",
                "URL ID": 2566
            }, {
                "From URL": "market_research/igrafx-is-leader-in-spark-matrix-digital-twin-of-an-organization-2022",
                "To URL": "market-research/igrafx-is-leader-in-spark-matrix-digital-twin-of-an-organization-2022-2567",
                "URL ID": 2567
            }, {
                "From URL": "market_research/mavim-is-leader-in-spark-matrix-digital-twin-of-an-organization-2022",
                "To URL": "market-research/mavim-is-leader-in-spark-matrix-digital-twin-of-an-organization-2022-2568",
                "URL ID": 2568
            }, {
                "From URL": "market_research/telia-ace-is-leader-in-spark-matrix-contact-center-as-a-service-2021",
                "To URL": "market-research/telia-ace-is-leader-in-spark-matrix-contact-center-as-a-service-2021-2569",
                "URL ID": 2569
            }, {
                "From URL": "market_research/247-ai-is-leader-in-spark-matrix-virtual-customer-assistants-vca-2022",
                "To URL": "market-research/247ai-is-leader-in-spark-matrix-virtual-customer-assistants-vca-2022-2570",
                "URL ID": 2570
            }, {
                "From URL": "market_research/erwin-by-quest-is-a-leader-in-spark-matrix-metadata-management-2022",
                "To URL": "market-research/erwin-by-quest-is-a-leader-in-spark-matrix-metadata-management-2022-2571",
                "URL ID": 2571
            }, {
                "From URL": "market_research/akumina-is-leader-in-spark-matrix-intranet-platform-providers-2022",
                "To URL": "market-research/akumina-is-leader-in-spark-matrix-intranet-platform-providers-2022-2572",
                "URL ID": 2572
            }, {
                "From URL": "market_research/appspace-is-leader-in-spark-matrix-intranet-platform-providers-2022",
                "To URL": "market-research/appspace-is-leader-in-spark-matrix-intranet-platform-providers-2022-2573",
                "URL ID": 2573
            }, {
                "From URL": "market_research/oracle-is-leader-in-spark-matrix-know-your-customer-kyc-2022",
                "To URL": "market-research/oracle-is-leader-in-spark-matrix-know-your-customer-kyc-2022-2574",
                "URL ID": 2574
            }, {
                "From URL": "market_research/oracle-is-leader-in-spark-matrix-anti-money-laundering-aml-2022",
                "To URL": "market-research/oracle-is-leader-in-spark-matrix-anti-money-laundering-aml-2022-2575",
                "URL ID": 2575
            }, {
                "From URL": "market_research/kount-is-leader-in-spark-matrix-risk-based-authentication-rba-2022",
                "To URL": "market-research/kount-is-leader-in-spark-matrix-risk-based-authentication-rba-2022-2576",
                "URL ID": 2576
            }, {
                "From URL": "market_research/cr2-is-leader-in-spark-matrix-digital-banking-platforms-2022",
                "To URL": "market-research/cr2-is-leader-in-spark-matrix-digital-banking-platforms-2022-2577",
                "URL ID": 2577
            }, {
                "From URL": "market_research/skai-is-leader-in-spark-matrix-ad-tech-platforms-2022",
                "To URL": "market-research/skai-is-leader-in-spark-matrix-ad-tech-platforms-2022-2578",
                "URL ID": 2578
            }, {
                "From URL": "market_research/tech-target-is-leader-in-spark-matrix-account-based-marketing-platforms-2022",
                "To URL": "market-research/tech-target-is-leader-in-spark-matrix-account-based-marketing-platforms-2022-2579",
                "URL ID": 2579
            }, {
                "From URL": "market_research/the-trade-desk-is-the-leader-in-spark-matrix-ad-tech-platforms-2022",
                "To URL": "market-research/the-trade-desk-is-the-leader-in-spark-matrix-ad-tech-platforms-2022-2580",
                "URL ID": 2580
            }, {
                "From URL": "market_research/airtable-is-leader-in-spark-matrix-collaborative-work-management-cwm-2022",
                "To URL": "market-research/airtable-is-leader-in-spark-matrix-collaborative-work-management-cwm-2022-2581",
                "URL ID": 2581
            }, {
                "From URL": "market_research/infocert-is-leader-in-spark-matrix-esignature-software-2022",
                "To URL": "market-research/infocert-is-leader-in-spark-matrix-esignature-software-2022-2582",
                "URL ID": 2582
            }, {
                "From URL": "market_research/syrenis-is-leader-in-spark-matrix-privacy-management-software-2022",
                "To URL": "market-research/syrenis-is-leader-in-spark-matrix-privacy-management-software-2022-2583",
                "URL ID": 2583
            }, {
                "From URL": "market_research/cortical-io-is-leader-in-spark-matrix-text-analytics-platforms-2022",
                "To URL": "market-research/corticalio-is-leader-in-spark-matrix-text-analytics-platforms-2022-2584",
                "URL ID": 2584
            }, {
                "From URL": "market_research/luminoso-is-leader-in-spark-matrix-text-analytics-platforms-2022",
                "To URL": "market-research/luminoso-is-leader-in-spark-matrix-text-analytics-platforms-2022-2585",
                "URL ID": 2585
            }, {
                "From URL": "market_research/concentrix-is-leader-in-spark-matrix-voice-of-the-customer-voc-2022",
                "To URL": "market-research/concentrix-is-leader-in-spark-matrix-voice-of-the-customer-voc-2022-2586",
                "URL ID": 2586
            }, {
                "From URL": "market_research/forsta-is-leader-in-spark-matrix-voice-of-the-customer-voc-2022",
                "To URL": "market-research/forsta-is-leader-in-spark-matrix-voice-of-the-customer-voc-2022-2587",
                "URL ID": 2587
            }, {
                "From URL": "market_research/periscope-by-mckinsey-is-leader-in-spark-matrix-b2b-price-optimization-and-management-application-2022",
                "To URL": "market-research/periscope-by-mckinsey-is-leader-in-spark-matrix-b2b-price-optimization-and-management-application-2022-2588",
                "URL ID": 2588
            }, {
                "From URL": "market_research/247-ai-is-leader-in-spark-matrix-cx-management-services-2022",
                "To URL": "market-research/247ai-is-leader-in-spark-matrix-cx-management-services-2022-2589",
                "URL ID": 2589
            }, {
                "From URL": "market_research/mavim-is-challenger-in-spark-matrix-customer-journey-mapping-2022",
                "To URL": "market-research/mavim-is-challenger-in-spark-matrix-customer-journey-mapping-2022-2590",
                "URL ID": 2590
            }, {
                "From URL": "market_research/suitecx-is-leader-in-spark-matrix-customer-journey-mapping-2022",
                "To URL": "market-research/suitecx-is-leader-in-spark-matrix-customer-journey-mapping-2022-2591",
                "URL ID": 2591
            }, {
                "From URL": "market_research/datamatics-is-leader-in-spark-matrix-cx-management-services-2022",
                "To URL": "market-research/datamatics-is-leader-in-spark-matrix-cx-management-services-2022-2592",
                "URL ID": 2592
            }, {
                "From URL": "market_research/hcl-software-is-leader-in-spark-matrix-b2c-digital-commerce-platform-2022",
                "To URL": "market-research/hcl-software-is-leader-in-spark-matrix-b2c-digital-commerce-platform-2022-2593",
                "URL ID": 2593
            }, {
                "From URL": "market_research/sessionm-is-leader-in-spark-matrix-customer-loyalty-solutions-2022",
                "To URL": "market-research/sessionm-is-leader-in-spark-matrix-customer-loyalty-solutions-2022-2594",
                "URL ID": 2594
            }, {
                "From URL": "market_research/crowdstrike-is-leader-in-spark-matrixdigital-threat-intelligence-management-2022",
                "To URL": "market-research/crowdstrike-is-leader-in-spark-matrix-digital-threat-intelligence-management-2022-2595",
                "URL ID": 2595
            }, {
                "From URL": "market_research/radware-is-leader-in-spark-matrix-ddos-mitigation-solution-2022",
                "To URL": "market-research/radware-is-leader-in-spark-matrix-ddos-mitigation-solution-2022-2596",
                "URL ID": 2596
            }, {
                "From URL": "market_research/bottomline-technologies-is-leader-in-spark-matrix-insider-risk-management-2022",
                "To URL": "market-research/bottomline-technologies-is-leader-in-spark-matrix-insider-risk-management-2022-2597",
                "URL ID": 2597
            }, {
                "From URL": "market_research/tecsys-is-leader-in-spark-matrix-omnichannel-order-management-systems-oms-2022-2",
                "To URL": "market-research/mpo-is-leader-in-spark-matrix-omnichannel-order-management-systems-oms-2022-2599",
                "URL ID": 2599
            }, {
                "From URL": "market_research/hcl-software-is-leader-in-spark-matrix-b2b-digital-commerce-platform-2022",
                "To URL": "market-research/hcl-software-is-leader-in-spark-matrix-b2b-digital-commerce-platform-2022-2600",
                "URL ID": 2600
            }, {
                "From URL": "market_research/radware-is-leader-in-spark-matrix-web-application-firewall-waf-2021",
                "To URL": "market-research/radware-is-leader-in-spark-matrix-web-application-firewall-waf-2021-2601",
                "URL ID": 2601
            }, {
                "From URL": "market_research/critical-start-is-leader-in-spark-matrix-managed-detection-and-response-mdr-2021",
                "To URL": "market-research/critical-start-is-leader-in-spark-matrix-managed-detection-and-response-mdr-2021-2602",
                "URL ID": 2602
            }, {
                "From URL": "market_research/aspire-systems-is-leader-in-spark-matrix-cloud-native-application-development-services-2022",
                "To URL": "market-research/aspire-systems-is-leader-in-spark-matrix-cloud-native-application-development-services-2022-2603",
                "URL ID": 2603
            }, {
                "From URL": "market_research/emburse-is-leader-in-spark-matrix-accounts-payable-automation-2022",
                "To URL": "market-research/emburse-is-leader-in-spark-matrix-accounts-payable-automation-2022-2604",
                "URL ID": 2604
            }, {
                "From URL": "market_research/sopra-steria-is-leader-in-spark-matrix-cloud-native-application-development-services-2022",
                "To URL": "market-research/sopra-steria-is-leader-in-spark-matrix-cloud-native-application-development-services-2022-2605",
                "URL ID": 2605
            }, {
                "From URL": "market_research/analyst-perspective-on-korbers-amr-strategy",
                "To URL": "market-research/koerbers-amr-strategy-an-analyst's-perspective-2606",
                "URL ID": 2606
            }, {
                "From URL": "market_research/ptc-thingworx-2019-technology-leader-spark-matrix-iiot-platforms",
                "To URL": "market-research/ptc-thingworx-emerged-as-2019-technology-leader-in-the-spark-matrix-evaluation-of-iiot-platforms-2610",
                "URL ID": 2610
            }, {
                "From URL": "market_research/hcl-has-emerged-as-2020-spark-matrix-leader-in-the-b2b-digital-commerce-platforms-market",
                "To URL": "market-research/hcl-has-emerged-as-2020-spark-matrix-leader-in-the-b2b-digital-commerce-platforms-market-2612",
                "URL ID": 2612
            }, {
                "From URL": "market_research/hcl-is-recognized-as-2020-spark-matrix-leader-in-the-b2c-digital-commerce-platforms-market",
                "To URL": "market-research/hcl-is-recognized-as-2020-spark-matrix-leader-in-the-b2c-digital-commerce-platforms-market-2615",
                "URL ID": 2615
            }, {
                "From URL": "market_research/quest-software-is-a-leader-in-spark-matrix-data-preparation-tools-2022",
                "To URL": "market-research/quest-software-is-a-leader-in-spark-matrix-data-preparation-tools-2022-2618",
                "URL ID": 2618
            }, {
                "From URL": "market_research/spark-matrix-enterprise-backup-and-recovery-software-solutions-q2-2023",
                "To URL": "market-research/spark-matrix-enterprise-backup-and-recovery-software-solutions-q2-2023-2653",
                "URL ID": 2653
            }, {
                "From URL": "market_research/spark-matrix-global-marketing-agencies-q2-2023",
                "To URL": "market-research/spark-matrix-global-marketing-agencies-q2-2023-2655",
                "URL ID": 2655
            }, {
                "From URL": "market_research/monetizing-apis-a-gateway-to-success-in-the-digital-economy",
                "To URL": "market-research/monetizing-apis-a-gateway-to-success-in-the-digital-economy-2658",
                "URL ID": 2658
            }, {
                "From URL": "market_research/spark-matrix-enterprise-service-management-q2-2023",
                "To URL": "market-research/spark-matrix-enterprise-service-management-q2-2023-2659",
                "URL ID": 2659
            }, {
                "From URL": "market_research/spark-matrix-customer-loyalty-solutions-q2-2023",
                "To URL": "market-research/spark-matrix-customer-loyalty-solutions-q2-2023-2660",
                "URL ID": 2660
            }, {
                "From URL": "market_research/spark-matrix-data-governance-solutions-q2-2023",
                "To URL": "market-research/spark-matrix-data-governance-solutions-q2-2023-2663",
                "URL ID": 2663
            }, {
                "From URL": "market_research/the-way-forward-in-returns-management-part-ii",
                "To URL": "market-research/the-way-forward-in-returns-management--part-ii-2665",
                "URL ID": 2665
            }, {
                "From URL": "market_research/spark-matrix-digital-banking-platform-q2-2023",
                "To URL": "market-research/spark-matrix-digital-banking-platform-q2-2023-2667",
                "URL ID": 2667
            }, {
                "From URL": "market_research/spark-matrix-b2c-digital-commerce-platform-q1-2023",
                "To URL": "market-research/spark-matrix-b2c-digital-commerce-platform-q2-2023-2668",
                "URL ID": 2668
            }, {
                "From URL": "market_research/spark-matrix-deception-technology-q2-2023",
                "To URL": "market-research/spark-matrix-deception-technology-q2-2023-2669",
                "URL ID": 2669
            }, {
                "From URL": "market_research/spark-matrix-it-infrastructure-monitoring-itim-tools-q2-2023",
                "To URL": "market-research/spark-matrix-it-infrastructure-monitoring-itim-tools-q2-2023-2671",
                "URL ID": 2671
            }, {
                "From URL": "market_research/how-speech-analytics-enabled-workforce-engagement-management-wem-benefit-the-contact-center-experience",
                "To URL": "market-research/how-speech-analytics-enabled-workforce-engagement-management-wem-benefit-the-contact-center-experience-2673",
                "URL ID": 2673
            }, {
                "From URL": "market_research/voc-vendors-continue-to-leverage-invest-in-ai-ml-technologies-for-offering-business-agility-and-driving-contextual-and-hyper-personalized-engagements",
                "To URL": "market-research/how-voc-vendors-leverage-ai/ml-for-driving-business-agility-contextual-and-hyperpersonalized-engagements-2674",
                "URL ID": 2674
            }, {
                "From URL": "market_research/adoption-of-low-code-for-development-of-virtual-product-modelling-platform",
                "To URL": "market-research/adoption-of-low-code-for-development-of-virtual-product-modelling-platform-2677",
                "URL ID": 2677
            }, {
                "From URL": "market_research/spark-matrix-in-app-protection-q2-2023",
                "To URL": "market-research/spark-matrix-in-app-protection-q2-2023-2678",
                "URL ID": 2678
            }, {
                "From URL": "market_research/spark-matrix-text-analytics-platforms-q2-2023",
                "To URL": "market-research/spark-matrix-text-analytics-platforms-q2-2023-2679",
                "URL ID": 2679
            }, {
                "From URL": "market_research/spark-matrix-network-firewalls-q2-2023",
                "To URL": "market-research/spark-matrix-network-firewalls-q2-2023-2683",
                "URL ID": 2683
            }, {
                "From URL": "market_research/spark-matrix-digital-asset-management-q2-2022",
                "To URL": "market-research/market-forecast-digital-asset-management-dam-2022-2027-worldwide-2700",
                "URL ID": 2700
            }, {
                "From URL": "market_research/network-access-control-market-research",
                "To URL": "market-research/market-share-network-access-control-2022-2027-worldwide-2770",
                "URL ID": 2770
            }, {
                "From URL": "market_research/network-security-sandbox-market-research",
                "To URL": "market-research/market-share-network-detection-and-response-ndr-2022-2027-worldwide-2814",
                "URL ID": 2814
            }, {
                "From URL": "market_research/maximizing-roi-and-productivity-in-the-digital-age-a-guide-for-enterprises-implementing-dap-solutions",
                "To URL": "market-research/maximizing-roi-and-productivity-in-the-digital-age-a-guide-for-enterprises-implementing-dap-solutions-2834",
                "URL ID": 2834
            }, {
                "From URL": "market_research/the-way-forward-in-returns-management-part-i",
                "To URL": "market-research/the-way-forward-in-returns-management--part-i-2837",
                "URL ID": 2837
            }, {
                "From URL": "market_research/achieving-user-centric-approach-by-leveraging-dap-how-enterprises-are-integrating-dap-for-autonomous-employee-and-customer-experience-q2-2023",
                "To URL": "market-research/how-enterprises-are-integrating-dap-for-autonomous-employee-and-customer-experience-2841",
                "URL ID": 2841
            }, {
                "From URL": "market_research/the-future-of-digital-asset-management-exploring-the-frontier-of-generative-ai",
                "To URL": "market-research/the-future-of-digital-asset-management-exploring-the-frontier-of-generative-ai-2843",
                "URL ID": 2843
            }, {
                "From URL": "market_research/harnessing-the-power-of-data-lineage-to-enable-comprehensive-understanding-and-visibility-of-enterprise-data",
                "To URL": "market-research/harnessing-the-power-of-data-lineage-to-enable-comprehensive-understanding-and-visibility-of-enterprise-data-2845",
                "URL ID": 2845
            }, {
                "From URL": "market_research/need-of-data-catalog-for-the-digitally-transforming-organizations",
                "To URL": "market-research/need-of-data-catalog-for-the-digitally-transforming-organizations-2846",
                "URL ID": 2846
            }, {
                "From URL": "market_research/the-importance-of-a-data-governance-framework-in-establishing-effective-data-governance",
                "To URL": "market-research/the-importance-of-a-data-governance-framework-in-establishing-effective-data-governance-2847",
                "URL ID": 2847
            }, {
                "From URL": "market_research/spark-matrix-vendor-risk-management-vrm-q4-2022",
                "To URL": "market-research/spark-matrix-vendor-risk-management-vrm-q4-2022-2849",
                "URL ID": 2849
            }, {
                "From URL": "market_research/spark-matrix-cx-management-services-q2-2023",
                "To URL": "market-research/spark-matrix-cx-management-services-q2-2023-2853",
                "URL ID": 2853
            }, {
                "From URL": "market_research/spark-matrix-software-defined-wide-area-network-sd-wan-q2-2023",
                "To URL": "market-research/spark-matrix-software-defined-wide-area-network-sd-wan-q2-2023-2857",
                "URL ID": 2857
            }, {
                "From URL": "market_research/spark-matrix-digital-twin-of-an-organization-q2-2023",
                "To URL": "market-research/spark-matrix-digital-twin-of-an-organization-q2-2023-2858",
                "URL ID": 2858
            }, {
                "From URL": "market_research/spark-matrix-metadata-managementq2-2023",
                "To URL": "market-research/spark-matrix-metadata-managementq2-2023-2860",
                "URL ID": 2860
            }, {
                "From URL": "market_research/spark-matrix-accounts-payable-automation-2023",
                "To URL": "market-research/spark-matrix-accounts-payable-automation-2023-2863",
                "URL ID": 2863
            }, {
                "From URL": "market_research/spark-matrix-sales-enablement-platform-q2-2023",
                "To URL": "market-research/spark-matrix-sales-enablement-platform-q2-2023-2864",
                "URL ID": 2864
            }, {
                "From URL": "market_research/spark-matrix-customer-data-platform-cdp-q2-2023",
                "To URL": "market-research/spark-matrix-customer-data-platform-cdp-q2-2023-2866",
                "URL ID": 2866
            }, {
                "From URL": "market_research/spark-matrix-accounts-receivable-applications-q2-2023",
                "To URL": "market-research/spark-matrix-accounts-receivable-applications-q2-2023-2868",
                "URL ID": 2868
            }, {
                "From URL": "market_research/spark-matrix-unified-retail-commerce-platform-q2-2023",
                "To URL": "market-research/spark-matrix-unified-retail-commerce-platform-q2-2023-2869",
                "URL ID": 2869
            }, {
                "From URL": "market_research/spark-matrix-autonomous-mobile-robots-amrq2-2023",
                "To URL": "market-research/spark-matrix-autonomous-mobile-robots-amrq2-2023-2870",
                "URL ID": 2870
            }, {
                "From URL": "market_research/spark-matrix-identity-capture-and-verification-q2-2023",
                "To URL": "market-research/spark-matrix-identity-capture-and-verification-q2-2023-2871",
                "URL ID": 2871
            }, {
                "From URL": "market_research/spark-matrix-customer-journey-mapping-q2-2023",
                "To URL": "market-research/spark-matrix-customer-journey-mapping-q2-2023-2872",
                "URL ID": 2872
            }, {
                "From URL": "market_research/spark-matrix-business-intelligence-and-analytics-platform-q2-2023",
                "To URL": "market-research/spark-matrix-business-intelligence-and-analytics-platform-q2-2023-2873",
                "URL ID": 2873
            }, {
                "From URL": "market_research/spark-matrix-configure-price-quote-cpq-q2-2023",
                "To URL": "market-research/spark-matrix-configure-price-&-quote-cpq-q2-2023-2874",
                "URL ID": 2874
            }, {
                "From URL": "market_research/spark-matrix-bot-management-q3-2023",
                "To URL": "market-research/spark-matrix-bot-management-q3-2023-2875",
                "URL ID": 2875
            }, {
                "From URL": "market_research/spark-matrix-ddos-mitigation-q3-2023",
                "To URL": "market-research/spark-matrix-ddos-mitigation-q3-2023-2876",
                "URL ID": 2876
            }, {
                "From URL": "market_research/spark-matrix-it-risk-management-itrm-q1-2023",
                "To URL": "market-research/spark-matrix-it-risk-management-itrm-q1-2023-2877",
                "URL ID": 2877
            }, 
            {
                "From URL": "market_research/spark-matrix-esignature-software-q2-2023",
                "To URL": "market-research/spark-matrix-esignature-software-q2-2023-2951",
                "URL ID": 2951
            }, 
            {
                "From URL": "market_research/spark-matrix-voice-of-the-customer-voc-q3-2023",
                "To URL": "market-research/spark-matrix-voice-of-the-customer-voc-q3-2023-2879",
                "URL ID": 2879
            }, {
                "From URL": "market_research/spark-matrix-b2b-marketing-automation-platformq2-2023",
                "To URL": "market-research/spark-matrix-b2b-marketing-automation-platformq2-2023-2880",
                "URL ID": 2880
            }, {
                "From URL": "market_research/spark-matrix-b2b-digital-commerce-platform-q2-2023",
                "To URL": "market-research/spark-matrix-b2b-digital-commerce-platform-q2-2023-2881",
                "URL ID": 2881
            }, {
                "From URL": "market_research/spark-matrix-unified-endpoint-management-uem-q3-2023",
                "To URL": "market-research/spark-matrix-unified-endpoint-management-uem-q3-2023-2882",
                "URL ID": 2882
            }, {
                "From URL": "market_research/spark-matrix-security-orchestration-automation-and-response-soar-q2-2023",
                "To URL": "market-research/spark-matrix-security-orchestration-automation-and-response-soar-q2-2023-2883",
                "URL ID": 2883
            }, {
                "From URL": "market_research/spark-matrix-insider-risk-management-2022",
                "To URL": "market-research/spark-matrix-insider-risk-management-2022--1418"
            }, {
                "From URL": "market_research/spark-matrix-intelligent-process-automation-ipa-solutions-and-services-2022",
                "To URL": "market-research/spark-matrix-intelligent-process-automation-ipa-solutions-and-services-2022-1540"
            }, {
                "From URL": "market_research/spark-matrix-security-orchestration-automation-and-response-soar-2022",
                "To URL": "market-research/spark-matrix-security-orchestration-automation-and-response-soar-2022--1352"
            }
            // Add more mappings as needed
        ]
    };

    constructor(private route : ActivatedRoute, private router : Router) {}

    ngOnInit(): void {
        // Get the current full URL, including the domain
        const currentUrl = window.location.pathname.replace(/^\/+/, '');
        let found = false;       
        this.urlMappings.mappings.forEach((element: any) => {
          if (element["From URL"] === currentUrl) {
            // Handle the case where the URL is found
            found = true;
            const newUrl = element["To URL"];
            
            this.router.navigateByUrl(newUrl);
          }
        });
        if (!found) {
          console.log("Current URL not found");
        }
    }
}