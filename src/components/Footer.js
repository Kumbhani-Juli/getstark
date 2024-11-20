import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faYoutube,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../assets/styles/footer.css"; // Import the CSS file for styling

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				{/* First row with 4 columns */}
				<div className="footer-row">
					<div className="footer-column">
						<h3>Use Cases</h3>
						<ul>
							<li>For Designers</li>
							<li>For Developers</li>
							<li>For Product Managers</li>
							<li>For Compliance Managers</li>
						</ul>
					</div>
					<div className="footer-column">
						<h3>Resources</h3>
						<ul>
							<li>Blog</li>
							<li>Library</li>
							<li>Release Notes</li>
							<li>Slack Community</li>
							<li>WCAG Compliance</li>
							<li>Section 508 Compliance</li>
							<li>European Accessibility Act (EAA) Compliance</li>
						</ul>
					</div>
					<div className="footer-column">
						<h3>Help</h3>
						<ul>
							<li>My Account</li>
							<li>Support Docs</li>
							<li>Contact Us</li>
							<li>Feature Requests</li>
						</ul>
					</div>
					<div className="footer-column">
						<h3>Company</h3>
						<ul>
							<li>Stark Framework</li>
							<li>Privacy Policy</li>
							<li>Terms of Service</li>
							<li>Code of Conduct</li>
							<li>Security</li>
							<li>Security Overview</li>
							<li>Cookie Policy</li>
							<li>GDPR</li>
							<li>Status</li>
						</ul>
					</div>
				</div>

				{/* Second row with 3 columns */}
				<div className="footer-row">
					<div className="footer-column">
						<h3>Security</h3>
						<ul>
							<li>Security Overviwe</li>
							<li>Cookie Policy</li>
							<li>GDPR</li>
							<li>Status</li>
						</ul>
					</div>
					<div className="footer-column">
						<h3>Design Integrations</h3>
						<ul>
							<li>Stark for Figma</li>
							<li>Stark for FigJam</li>
							<li>Stark for Sketch</li>
							<li>Stark for Adobe XD</li>
						</ul>
					</div>
					<div className="footer-column">
						<h3>Developer Integrations</h3>
						<ul>
							<li>Stark for Chrome</li>
							<li>Stark for Firefox</li>
							<li>Stark for Edge</li>
							<li>Stark for Safari</li>
							<li>Stark for Arc</li>
							<li>Stark for Brave</li>
						</ul>
					</div>
					<div className="footer-column">
						<h3>Social</h3>
						<div className="social-icons">
							<FontAwesomeIcon icon={faTwitter} size="2x" />
							<FontAwesomeIcon icon={faYoutube} size="2x" />
							<FontAwesomeIcon icon={faLinkedin} size="2x" />
							<FontAwesomeIcon icon={faInstagram} size="2x" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
