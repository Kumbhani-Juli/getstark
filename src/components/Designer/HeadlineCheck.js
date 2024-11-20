import React from "react";
import "../../assets/styles/designer/headlinecheck.css"; // Ensure you import the corresponding CSS file
import img from "../../assets/images/use-cases/designer/for-designers-checkfixannotate.webp"; // Replace with your actual image path
const HeadlineCheck = () => {
	return (
		<section className="headline-check-container">
			<div className="headline-check-image-section">
				<img
					src={img}
					alt="Figma or Sketch files being scanned for accessibility issues"
				/>
			</div>
			<div className="headline-check-content-section">
				<h1>
					<span>Find and fix accessibility issues</span> in designs 10x faster
					with AI
				</h1>
				<p>
					57% of accessibility issues originate in the design phase. Sidekick in
					Stark automatically scans Figma or Sketch files and, within seconds,
					makes suggestions for how to fix the accessibility issues – no prior
					knowledge needed.
				</p>
				<button className="headline-check-get-started-button">
					Get Started for Free
				</button>
			</div>
		</section>
	);
};

export default HeadlineCheck;
