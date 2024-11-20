import React, { useState } from "react";
import "../../assets/styles/support/supportwrapper.css"; // Import CSS for styling

const SupportWrapper = () => {
	const [selectedSection, setSelectedSection] = useState("Getting Started");

	const sections = [
		"Getting Started",
		"Accounts",
		"Subscriptions and billing",
		"Teams",
		"Privacy",
		"Contact Us",
	];

	const sectionContent = {
		"Getting Started": (
			<>
				<div>
					<h2>Getting Started</h2>
					<p>Learn how to install and use Stark’s features.</p>
				</div>{" "}
				<div>
					<h2>Getting Started</h2>
					<p>Learn how to install and use Stark’s features.</p>
				</div>
			</>
		),
		// Accounts: (
		// 	<div>
		// 		<h2>Accounts</h2>
		// 		<p>
		// 			Learn about your account and how to manage your passwords and emails.
		// 		</p>
		// 		<ul>
		// 			<li>Verifying your account</li>
		// 			<li>Using SSO with Stark</li>
		// 			<li>Using Google Sign-in with Stark</li>
		// 			<li>Setting up your account</li>
		// 			<li>Resetting your password</li>
		// 		</ul>
		// 	</div>
		// ),
		// "Subscriptions and billing": (
		// 	<div>
		// 		<h2>Subscriptions and billing</h2>
		// 		<ul>
		// 			<li>Updating your Premium subscription</li>
		// 			<li>Managing your Premium Pack subscription</li>
		// 			<li>Cancelling your subscription</li>
		// 		</ul>
		// 	</div>
		// ),
		// Teams: (
		// 	<div>
		// 		<h2>Teams</h2>
		// 		<ul>
		// 			<li>Getting your team configured on Stark</li>
		// 			<li>Managing your team</li>
		// 			<li>Advanced team auth</li>
		// 			<li>Connecting your ticketing system</li>
		// 			<li>Viewing quotas and billing</li>
		// 		</ul>
		// 	</div>
		// ),
		// Privacy: (
		// 	<div>
		// 		<h2>Privacy</h2>
		// 		<p>
		// 			We take your privacy seriously here at Stark. Check out the links
		// 			below to learn more.
		// 		</p>
		// 		<ul>
		// 			<li>Privacy Policy</li>
		// 			<li>Cookie Policy</li>
		// 			<li>Terms of Service</li>
		// 			<li>Code of Conduct</li>
		// 		</ul>
		// 	</div>
		// ),
		// "Contact Us": (
		// 	<div>
		// 		<h2>Contact Us</h2>
		// 		<p>Need help with something that you didn’t find? Reach out to us!</p>
		// 		<ul>
		// 			<li>Support: Send a message to support@getstark.co</li>
		// 			<li>Sales: Connect with our Sales team to learn more</li>
		// 			<li>
		// 				Community: Join us on Slack and Twitter for discussions and support
		// 			</li>
		// 		</ul>
		// 	</div>
		// ),
	};

	return (
		<div className="support-wrapper">
			<div className="support-wrapper-sidebar">
				{sections.map((section) => (
					<button
						key={section}
						className={`support-wrapper-button ${
							selectedSection === section ? "active" : ""
						}`}
						onClick={() => setSelectedSection(section)}
					>
						{section}
					</button>
				))}
			</div>
			<div className="support-wrapper-content">
				{sectionContent[selectedSection]}
			</div>
		</div>
	);
};

export default SupportWrapper;
