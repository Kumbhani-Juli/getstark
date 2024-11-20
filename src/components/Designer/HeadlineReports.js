import React from "react";
import "../../assets/styles/designer/headlinereport.css"; // Ensure you import the corresponding CSS file
import img from "../../assets/images/use-cases/designer/continuous-accessibility-feature-2023.webp"; // Replace with your actual image path
const HeadlineCheck = () => {
	return (
		<section className="headline-report-container">
			<div className="headline-report-image-section">
				<img
					src={img}
					alt="Figma or Sketch files being scanned for accessibility issues"
				/>
			</div>
			<div className="headline-report-content-section">
				<h1>
					<span>Real-time reports and insights </span> to keep your projects on
					track
				</h1>
				<p>
					Real-time accessibility reports and insights of your design files and
					code repos streamline collaboration across departments in one place.
					Managing accessibility at scale without slowing down your team’s
					velocity just got rocket fuel added to it.
				</p>
				<button className="headline-report-get-started-button">
					Get Started for Free
				</button>
			</div>
		</section>
	);
};

export default HeadlineCheck;
