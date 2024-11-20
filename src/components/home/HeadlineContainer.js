import React from "react";
import "../../assets/styles/home/headlinecontainer.css"; // Create this CSS file for styling
import img from "../../assets/images/home/headline-container-continuous-accessibility-feature-2023.webp"; // Image
const HeadlineContainer = () => {
	return (
		<div className="headline-component">
			<div className="headline-container">
				<img
					src={img}
					alt="Accessibility Illustration"
					className="headline-image"
				/>
				<h1>
					<span className="headline-span">Continuous Accessibility</span>
					for your entire team
				</h1>
				<p>
					Get real-time reports that help manage accessibility at scale without
					slowing down the velocity of your team. Stark gives your up-to-date
					insights into the accessibility of all your design files, code
					repositories, and live sites or applications, all in one central place
					for efficient collaboration across departments.
				</p>
				<button className="start-trail">Start for free</button>
			</div>
		</div>
	);
};

export default HeadlineContainer;
