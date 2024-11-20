import React from "react";
import "../../assets/styles/designer/headlinemagic.css"; // Import the CSS file for styling
import img from "../../assets/images/use-cases/designer/for-designers-magic.webp"; // Main image

// Import or reference paths for all 19 icon images
import icon1 from "../../assets/images/use-cases/designer/label1.svg";
import icon2 from "../../assets/images/use-cases/designer/label2.svg";
import icon3 from "../../assets/images/use-cases/designer/label3.svg";
import icon4 from "../../assets/images/use-cases/designer/label4.svg";
import icon5 from "../../assets/images/use-cases/designer/label5.svg";
import icon6 from "../../assets/images/use-cases/designer/label6.svg";
import icon7 from "../../assets/images/use-cases/designer/label7.svg";
import icon8 from "../../assets/images/use-cases/designer/label8.svg";
import icon9 from "../../assets/images/use-cases/designer/label9.svg";
import icon10 from "../../assets/images/use-cases/designer/label10.svg";
import icon11 from "../../assets/images/use-cases/designer/label11.svg";
// import icon12 from "../../assets/images/use-cases/designer/label12.svg";
import icon13 from "../../assets/images/use-cases/designer/label13.svg";
import icon14 from "../../assets/images/use-cases/designer/label14.svg";
import icon15 from "../../assets/images/use-cases/designer/label15.svg";
import icon16 from "../../assets/images/use-cases/designer/label16.svg";
import icon17 from "../../assets/images/use-cases/designer/label17.svg";
import icon18 from "../../assets/images/use-cases/designer/label18.svg";
import icon19 from "../../assets/images/use-cases/designer/label19.svg";

const HeadlineMagic = () => {
	const icons = [
		icon1,
		icon2,
		icon3,
		icon4,
		icon5,
		icon6,
		icon7,
		icon8,
		icon9,
		icon10,
		icon11,
		// icon12,
		icon13,
		icon14,
		icon15,
		icon16,
		icon17,
		icon18,
		icon19,
	];

	const features = [
		"Sidekick AI accessibility assistant",
		"Browser Extension",
		"Contrast Checker with AI suggestions",
		"Web Dev Tools with code highlighting",
		"Typography Checker",
		"WCAG Audit & Report",
		"Touch Targets Checker",
		"Figma Dev Mode Hand-off",
		"Alt-Text Annotations with AI suggestions",
		"GitHub Integrations with code scanning",
		"Landmarks Annotations",
		"Projects with real-time Reports & Insights",
		"Focus Order Annotations",
		"Compliance Center",
		"ARIA & Notes Annotations",
		"Ticketing and PM system Integrations",
		"Headings Annotations",
		"And so much more ...",
	];

	return (
		<div className="headline-magic-component">
			<div className="headline-magic">
				<img src={img} alt="Feature Image" className="headline-magic__image" />
				<h1 className="headline-magic__title">
					Come for the features, <span>stay for the magic</span>
				</h1>
				<div className="headline-magic__features">
					{features.map((feature, index) => (
						<div key={index} className="headline-magic__feature-item">
							<img
								src={icons[index]}
								alt="Icon"
								className="headline-magic__icon"
							/>
							<span className="headline-magic__text">{feature}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HeadlineMagic;
