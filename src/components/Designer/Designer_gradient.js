import React from "react";
import "../../assets/styles/designer/designergradient.css"; // Import CSS file for styling
import exampleImage from "../../assets/images/use-cases/designer/for-designers.webp"; // Replace with your actual image path

const DesignerGradient = () => {
	return (
		<div className="designer-gradient-container">
			<div className="content-section">
				<div className="content-inner-section">
					<span className="for-designers">For Designers</span>
					<h1>Accessible, by design</h1>
					<p>
						Stark helps eliminate up to 100% of the accessibility issues
						originating in design. Our AI-powered Sidekick experience combined
						with our best-in-class manual tools helps every designer find and
						fix accessibility issues within seconds. And hand over fully
						annotated designs to developers.
					</p>
					<div className="button-group">
						<button className="sign-up-button">Sign up for free</button>
						<button className="trial-button">Start a free trial</button>
					</div>
				</div>
			</div>
			<div className="image-section">
				<img src={exampleImage} alt="Design illustration" />
			</div>
		</div>
	);
};

export default DesignerGradient;
