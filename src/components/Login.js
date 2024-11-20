import React from "react";
import "../assets/styles/login.css"; // Import CSS file for styling
import logo from "../assets/images/home/header-logo.jpg"; // Replace with your actual logo image path
import bgImage from "../assets/images/use-cases/designer/header-gradient.webp"; // Replace with your actual background image path

const Login = () => {
	return (
		<div
			className="login-component"
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<div className="login-container">
				<img src={logo} alt="Logo" className="login-logo" />
				<h1 className="login-title">
					Create a free Stark account or sign in with your credentials.
				</h1>
				<button className="login-btn google-btn">Continue with Google</button>
				<button className="login-btn sso-btn">Continue with SSO</button>
				<div className="login-divider">
					<hr />
				</div>
				<div className="login-form">
					<label htmlFor="email" className="login-label">
						Business Email
					</label>
					<input
						type="email"
						id="email"
						className="login-input"
						placeholder="Enter your work email"
					/>
					<button className="login-btn continue-btn">Continue</button>
				</div>
				<p className="login-terms">
					By continuing, you agree to our{" "}
					<a href="/terms" className="terms-link">
						Terms of Service
					</a>{" "}
					and{" "}
					<a href="/privacy" className="privacy-link">
						Privacy Policy
					</a>
					.
				</p>
			</div>
		</div>
	);
};

export default Login;
