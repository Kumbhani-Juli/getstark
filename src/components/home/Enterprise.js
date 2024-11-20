import React from "react";
import "../../assets/styles/home/Enterprise.css"; // Create this CSS file for styling
import img from "../../assets/images/home/enterprise-grade-platform-feature-2023.webp"; // Image
const HeadlineIntegrated = () => {
	return (
		<div className="Enterprise-component">
			<div className="headline-Enterprise">
				<img
					src={img}
					alt="Accessibility Illustration"
					className="headline-image-Enterprise"
				/>
				<h1>
					<span className="headline-span-Enterprise">
						An enterprise-grade platform
					</span>
					you can trust
				</h1>
				<p>
					The entire Stark platform and all our integrations are built with
					enterprise-grade security. From SSO and our fully GDPR /
					SOC2-certified platform to our zero-trust policy that underpins all
					our tool integrations, we ensure maximum security and privacy for our
					customers’ data and IP.
				</p>
				<button className="start-trail-Enterprise">Start for free</button>
			</div>
		</div>
	);
};

export default HeadlineIntegrated;
