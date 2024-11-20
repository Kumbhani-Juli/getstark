import React, { useState } from "react";
import "../../assets/styles/home/headlinescale.css";
import designersImage from "../../assets/images/home/workflow-designer.webp";
import developersImage from "../../assets/images/home/workflow-developer.webp";
import productManagersImage from "../../assets/images/home/workflow-pm-2.webp";
import complianceManagersImage from "../../assets/images/home/workflow-compliance.webp";
const sections = [
	{
		title: "Designers",
		description:
			"Create accessible designs in record time right in Figma, Sketch, and Adobe XD.",
		imageUrl: designersImage,
	},
	{
		title: "Developers",
		description:
			"Test and audit your code from early implementation to live product.",
		imageUrl: developersImage,
	},
	{
		title: "Product Managers",
		description: "Manage accessibility in real-time across all your projects.",
		imageUrl: productManagersImage,
	},
	{
		title: "Compliance Managers",
		description:
			"Monitor, manage, and audit your accessibility posture in one place.",
		imageUrl: complianceManagersImage,
	},
];

const HeadlineScale = () => {
	const [activeImage, setActiveImage] = useState(sections[0].imageUrl);

	return (
		<div className="headline-scale">
			<div className="left-side">
				<img src={activeImage} alt="Active" className="active-image" />
			</div>
			<div className="righ-side-bgimg">
				<div className="right-side">
					{sections.map((section, index) => (
						<div
							key={index}
							className="section"
							onMouseEnter={() => setActiveImage(section.imageUrl)}
						>
							<h2>{section.title}</h2>
							<p>{section.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HeadlineScale;
