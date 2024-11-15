import React, { useState } from "react";
import "../assets/styles/header.css"; // Ensure the path is correct for your styles
import img from "../assets/images/home/header-logo.jpg"; // Ensure the path is correct for your image

const Header = () => {
	const [showUseCases, setShowUseCases] = useState(false);
	const [showResources, setShowResources] = useState(false);

	return (
		<>
			{/* Full-width background container */}
			<div className="header-background"></div>

			{/* Header container */}
			<header className="header">
				<ul className="header-left">
					<li className="logo">
						<img src={img} alt="Logo" />
					</li>
					<li
						className="dropdown"
						onMouseEnter={() => setShowUseCases(true)}
						onMouseLeave={() => setShowUseCases(false)}
					>
						Use Cases
						<span
							style={{
								fontSize: "12px",
								display: "inline-block",
								lineHeight: "12px",
								marginLeft: "0.5rem",
							}}
						>
							&#9660;
						</span>
						{showUseCases && (
							<div className={`dropdown-content ${showUseCases ? "show" : ""}`}>
								<div className="dropdown-column">
									<li>Designer</li>
									<p>
										create accesiible designs in record time right in Figma &
										Sketch.
									</p>
									<li>Developer</li>
									<p>
										Test and audit your code from early implementation to live
										product.
									</p>
								</div>
								<div className="dropdown-column">
									<li>Product Manager</li>
									<p>
										Manage accesiiblity in real-time across all your products.
									</p>
									<li>Compliance Manager</li>
									<p>
										Monitor,manage and audit your accesiiblityposture in one
										place.
									</p>
								</div>
							</div>
						)}
					</li>
					<li>Pricing</li>
					<li
						className="dropdown"
						onMouseEnter={() => setShowResources(true)}
						onMouseLeave={() => setShowResources(false)}
					>
						Resources
						<span
							style={{
								fontSize: "12px",
								display: "inline-block",
								lineHeight: "12px",
								marginLeft: "0.5rem",
							}}
						>
							&#9660;
						</span>
						{showResources && (
							<div
								className={`dropdown-content ${showResources ? "show" : ""}`}
							>
								<div className="dropdown-column">
									<li>Blog</li>
									<p>
										Read about the latest updates to stark and articles from our
										team.
									</p>
									<li>Library</li>
									<p>
										Learn about all things accesiiblity and inclusive design.
									</p>
								</div>
								<div className="dropdown-column">
									<li>The WCAG Explainer</li>
									<p>Simple explainations of every WCAG criteria.</p>
									<li>Support Community</li>
									<p>
										{" "}
										Find answer to your question plus tips and tricks on how to
										use stark.
									</p>
								</div>
								<div className="dropdown-column">
									<li>Community</li>
									<p>
										Join more than 3,500 accesiiblity folks from around the
										world.{" "}
									</p>
									<li> Stark White Paper</li>
									<p>
										Managing and growing your accesiiblity posture at any scale.
									</p>
								</div>
							</div>
						)}
					</li>
				</ul>
				<div className="header-right">
					<button className="login-button">Log in</button>
					<button className="start-button">Start for Free</button>
				</div>
			</header>
		</>
	);
};

export default Header;
