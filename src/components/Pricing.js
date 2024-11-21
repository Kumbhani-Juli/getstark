import React, { useState } from "react";
import "../assets/styles/pricing.css";
import PricingBlocker from "./pricingComponents/PricingBlocker";
import PricingTable from "./pricingComponents/PricingTable";

const Pricing = () => {
	const tabData = [
		{
			title: "Teams / Organizations",
			pricingBlockerData: [
				{
					title: "Starter",
					content:
						"For teams with an early program in need of basic accessibility checks.",
					price: "Free",
					spanContent: "Forever",
					buttonContent: "Create a free account",
					listData: [
						{ content: "Limited roles and permissions" },
						{ content: "Shared team projects" },
						{ content: "Manual scans and reports" },
						{ content: "Supported assets: Figma, code repos, public URLs" },
						{ content: "Monitor up to 5 pages" },
						{ content: "14-day report data storage" },
						{ content: "Limited access to tooling in Figma and browser" },
					],
				},
				{
					title: "Launch",
					content:
						"For smaller teams getting started with accessibility collaboration.",
					price: "$2,500",
					spanContent: "per year",
					buttonContent: "Start free trial",
					listData: [
						{ content: "3 editors included" },
						{ content: "25 viewers included" },
						{ content: "Shared team projects" },
						{ content: "Weekly automated scans and reports" },
						{ content: "Supported assets: Figma, code repos, public URLs" },
						{ content: "Monitor up to 100 pages" },
						{ content: "30-day report data storage" },
						{ content: "Consolidated billing" },
						{
							content:
								"Full access to automated detection and remediation tooling in design and code",
						},
					],
				},
				{
					title: "Grow",
					backgroundColor: "#fff",
					content:
						"For larger teams needing to comply with confidence end-to-end.",
					price: "$6,000",
					spanContent: "per year",
					buttonContent: "Talk to sales",
					listData: [
						{ content: "10 editors included" },
						{ content: "50 viewers included" },
						{ content: "Unlimited team projects" },
						{ content: "Daily scans and insight reports" },
						{
							content:
								"Supported assets: Figma, code repos, CI/CD, public and private URLs",
						},
						{ content: "Monitor up to 1000 pages" },
						{ content: "180-day report data storage" },
						{ content: "Ticketing system integration" },
						{
							content: "Compliance Center to manage accessibility posture",
						},
						{ content: "Centralized team admin with SSO" },
						{ content: "Consolidated billing" },
						{
							content:
								"Full access to automated detection and remediation tooling in design and code",
						},
					],
				},
				{
					title: "Scale",
					content:
						"For organizations with custom accessibility and compliance needs.",
					price: "$15,000",
					spanContent: "per year",
					buttonContent: "Talk to sales",
					listData: [
						{ content: "20 editors included" },
						{ content: "Unlimited viewers" },
						{ content: "Unlimited team projects" },
						{ content: "Real-time scans and insights reports" },
						{
							content:
								"Supported assets: Figma, code repos, CI/CD, public and private URLs",
						},
						{ content: "Monitor up to 7500 pages" },
						{ content: "365-day report data storage" },
						{ content: "Ticketing system integration" },
						{
							content: "Compliance Center to manage accessibility posture",
						},
						{ content: "Multi-team support" },
						{ content: "Centralized team admin with SSO and SCIM" },
						{ content: "Customizable terms and security reviews" },
						{ content: "Priority support and dedicated account manager" },
						{ content: "Enterprise-grade security, SOC2 and GDPR certified" },
					],
				},
			],
		},
		{
			title: "Individuals",
			pricingBlockerData: [
				{
					title: "Starter",
					content: "For individuals getting started with accessibility.",
					price: "Free",
					spanContent: "Forever",
					buttonContent: "Create a free account",
					listData: [
						{ content: "Access Stark’s manual design and browser tools" },
						{ content: "WCAG Checklist widget in Figma" },
						{ content: "Access to Slack Community" },
					],
				},
				{
					title: "Premium",
					backgroundColor: "#fff",
					content:
						"For individuals looking to automate and accelerate accessibility.",
					price: "$21",
					spanContent: "per month (or $210 paid annually)",
					buttonContent: "Purchase",
					listData: [
						{ content: "Everything in Starter, plus..." },
						{
							content:
								"Auto-remediate design issues with AI suggestions in Figma",
						},
						{ content: "Automatic WCAG scans and reports in browser" },
						{ content: "Live code highlighting in browser web dev console" },
						{ content: "Manual scans and reports" },
						{ content: "Supported assets: Figma, code repos, public URLs" },
						{ content: "Monitor up to 10 pages" },
						{ content: "14-day report data storage" },
					],
				},
				{
					title: "Buy a Premium Pack",
					content:
						"Buy multiple Premium accounts with one central billing account.",
					price: "$198",
					spanContent: "per user / year (min. 3 seats)",
					buttonContent: "Purchase",
					listData: [
						{ content: "Everything in Premium for up to 25 accounts" },
						{ content: "Consolidated billing" },
					],
				},
			],
		},
	];
	const [activeTab, setActiveTab] = useState(tabData[0]);
	return (
		<>
			<div className="pricing-page-top-section-container">
				<div className="pricing-page-top-section-title">
					<h1>Pricing plan</h1>
					<p>
						Whether you’re a small but mighty team, or 100,000 strong, we’ve got
						a plan to support what you need. Sign up and get started today.
					</p>
				</div>
				<div className="pricing-page-top-section-tab">
					{tabData?.map((data, index) => (
						<div
							key={index}
							style={{
								color: activeTab?.title === data?.title ? "#381fd1" : "#000",
								border:
									activeTab?.title === data?.title
										? "2px solid #381fd1"
										: "none",
							}}
							onClick={() => setActiveTab(tabData[index])}
						>
							{data?.title}
						</div>
					))}
				</div>
			</div>
			<PricingBlocker sectionData={activeTab?.pricingBlockerData} />
			<PricingTable />
		</>
	);
};

export default Pricing;
