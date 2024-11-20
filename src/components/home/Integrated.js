import React from "react";
import "../../assets/styles/home/integrated.css"; // Create this CSS file for styling
import img from "../../assets/images/home/headline-integrated-into-the-tools-feature-2023.webp"; // Image
const HeadlineIntegrated = () => {
	return (
		<div className="Integrated-component">
			<div className="headline-Integrated">
				<img
					src={img}
					alt="Accessibility Illustration"
					className="headline-image-Integrated"
				/>
				<h1>
					<span className="headline-span-Integrated">
						Integrated into the tools
					</span>
					you already use
				</h1>
				<p>
					Whether it's Figma or Sketch, your favorite web browser, or even
					GitHub and beyond, Stark integrates into the tools your team already
					uses for maximum efficiency and no learning curve. Our AI-powered
					integrations help your teammates find and fix accessibility issues as
					early as the first designs and all across the development cycle.
				</p>
				<button className="start-trail-Integrated">Start for free</button>
			</div>
		</div>
	);
};

export default HeadlineIntegrated;
