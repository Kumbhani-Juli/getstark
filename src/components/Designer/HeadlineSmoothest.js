import React from "react";
import "../../assets/styles/designer/headlinesmoothest.css"; // Ensure you import the corresponding CSS file
import img from "../../assets/images/use-cases/designer/for-designers-smoothesthandoff.webp"; // Replace with your actual image path
const HeadlineCheck = () => {
	return (
		<section className="headline-smoothest-container">
			<div className="headline-smoothest-image-section">
				<img
					src={img}
					alt="Figma or Sketch files being scanned for accessibility issues"
				/>
			</div>
			<div className="headline-smoothest-content-section">
				<h1>
					<span>Smoothest design to developer </span> hand-off in the business
				</h1>
				<p>
					Whether you design in Figma, Sketch, or Adobe XD, Stark takes the
					guesswork out of accessibility annotations. And in Figma’s Dev Mode,
					annotations translate directly into code snippets for developers to
					take over. Specs never seemed so spectacular.
				</p>
				<button className="headline-smoothest-get-started-button">
					Get Started for Free
				</button>
			</div>
		</section>
	);
};

export default HeadlineCheck;
