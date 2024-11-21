import React from "react";
import "../../assets/styles/pricingComponentsCSS/pricingTable.css"; // For styling

const PricingTable = () => {
	const data = [
		{
			feature: "Editors",
			Starter: "—",
			Launch: "3 included",
			Grow: "10 included",
			Scale: "20 included",
		},
		{
			feature: "*Price per additional editor",
			Starter: "—",
			Launch: "$198",
			Grow: "variable",
			Scale: "variable",
		},
		{
			feature: "Viewers",
			Starter: "limited",
			Launch: "25 included",
			Grow: "50 included",
			Scale: "unlimited",
		},
		{
			feature: "Scan & Reports Intervals",
			Starter: "manual",
			Launch: "weekly",
			Grow: "daily",
			Scale: "real-time",
		},
		{
			feature: "Page limit",
			Starter: "5",
			Launch: "100",
			Grow: "1,000",
			Scale: "7,500",
		},
		{
			feature: "Report storage limit",
			Starter: "14 days",
			Launch: "30 days",
			Grow: "180 days",
			Scale: "365 days",
		},
		{
			feature: "Access to automated design & dev tools for editors",
			Starter: "—",
			Launch: "✔",
			Grow: "✔",
			Scale: "✔",
		},
		{
			feature: "Ticketing system integration",
			Starter: "—",
			Launch: "✔",
			Grow: "✔",
			Scale: "✔",
		},
		{
			feature: "Compliance Center",
			Starter: "—",
			Launch: "✔",
			Grow: "✔",
			Scale: "✔",
		},
	];

	return (
		<>
			<div className="pricing-table-section-container">
				<div className="pricing-table-section-title">
					<h1>Compare Plans</h1>
					<p>
						Check out all the features by plan to determine what fits your
						team’s needs.
					</p>
				</div>
				<div className="pricing-table">
					<div className="header-row">
						<div
							className="header-cell"
							style={{ fontSize: "24px", color: "#4338ca" }}
						>
							Plan
						</div>
						<div className="header-cell">Starter</div>
						<div className="header-cell">Launch</div>
						<div className="header-cell">Grow</div>
						<div className="header-cell">Scale</div>
					</div>
					<div className="button-row">
						<div className="button-cell"></div>
						<div className="button-cell">
							<button className="cta-button talk-button">
								Create free account
							</button>
						</div>
						<div className="button-cell">
							<button className="cta-button select-button">Select</button>
						</div>
						<div className="button-cell">
							<button className="cta-button talk-button">Talk to Sales</button>
						</div>
						<div className="button-cell">
							<button className="cta-button talk-button">Talk to Sales</button>
						</div>
					</div>
					{data.map((row, index) => (
						<div key={index} className="data-row">
							<div
								className="feature-cell"
								style={{ color: "#10284b", fontWeight: "bold" }}
							>
								{row.feature}
							</div>
							{["Starter", "Launch", "Grow", "Scale"].map((plan) => (
								<div className="data-cell" key={plan}>
									{Array.isArray(row[plan]) ? (
										<div className="icon-list">
											{row[plan].map((item, i) => (
												<span key={i} className="icon">
													{item === "✔" ? "✔" : item}
												</span>
											))}
										</div>
									) : (
										row[plan]
									)}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default PricingTable;
