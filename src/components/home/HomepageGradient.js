import React from "react";
import "../../assets/styles/home/homepagegradiant.css"; // Make sure the path is correct
import img from "../../assets/images/home/gradient-bg.webp"; // Make sure the path is correct
import homepageheader from "../../assets/images/home/homepage-header.webp"; // Make sure the path is correct
const HomepageGradient = () => {
	return (
		<div className="homepage-gradient-container">
			<div className="image-wrapper">
				<img
					className="foreground-image"
					src={homepageheader} // Replace with your second image URL
					alt="Foreground"
				/>
			</div>
			<div className="content-container">
				<h1>Supercharge Accessibility</h1>
				<p>
					The world’s best companies – from startups to the Fortune 100 – trust
					Stark to accelerate time to digital accessibility compliance.
				</p>
				<button className="signup-button">Sign up for free</button>
			</div>
		</div>
	);
};

export default HomepageGradient;
