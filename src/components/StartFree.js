import React from "react";
import "../assets/styles/startfree.css"; // Import your CSS file
import sampleImage from "../assets/images/home/header-logo.jpg"; // Replace with your image path

const StartFree = () => {
	return (
		<div className="start-free-component">
			<div className="start-free-container">
				<div className="start-free-left">
					<h2>Step 1 of 3</h2>
					<h1>Let’s start your free trial</h1>
					<p>Get full access to Stark’s Launch Plan for 14 days free. </p>
					<p>Add as many team members as you need.</p>
					<p> We won’t charge your credit card, you can cancel any time.</p>
				</div>
				<div className="start-free-right">
					<img
						src={sampleImage}
						alt="Trial Visual"
						className="start-free-image"
					/>
					<h2>Create a free Stark account or sign in with your credentials.</h2>
					<button className="google-button">Continue with Google</button>
					<hr />
					<div className="email-input-container">
						<label htmlFor="email">Business Email</label>
						<input
							type="email"
							id="email"
							placeholder="Enter your work email"
						/>
						<button className="continue-button">Continue</button>
					</div>
					<p className="terms-text">
						By continuing, you agree to our{" "}
						<a href="#terms">Terms of Service</a> and{" "}
						<a href="#privacy">Privacy Policy</a>.
					</p>
				</div>
			</div>
		</div>
	);
};

export default StartFree;
