import React from "react";
import "../../assets/styles/home/headlinebuilder.css"; // Import the CSS for styling
import img from "../../assets/images/home/increase-velocity-illo-2023.webp"; // Image
import img1 from "../../assets/images/home/accelerate-compliance-illo-2023.webp"; // Image
import img2 from "../../assets/images/home/reduce-cost-illo-2023.webp"; // Image
import img3 from "../../assets/images/home/mitigate-risk-illo-2023.webp"; // Image

// Content data stored in an array of objects
const contentData = [
	{
		imgSrc: img,
		title: "Increase Velocity",
		description:
			"Stark is the only end-to-end platform that helps your team find and fix accessibility issues from design and code to the live product. All this, while being up to 10x faster than any other tool in the market.",
	},
	{
		imgSrc: img1,
		title: "Accelerate Compliance",
		description:
			"Reports and Insights are available in real-time for every project in Stark. Plus, time-stamped historic reports are available at any time for up-to-date compliance reporting across departments.",
	},
	{
		imgSrc: img2,
		title: "Reduce Cost",
		description:
			"Stark’s fully integrated solution enables fixing of accessibility issues as early as first design drafts, reducing 56% of issues that typically make it into code where remediation costs can be up 100x higher.",
	},
	{
		imgSrc: img3,
		title: "Mitigate Risk",
		description:
			"The entire Stark platform and all our integrations are built with enterprise-grade security. From SSO and our fully SOC2-certified platform stack to our zero-trust policy that underpins all our tool .",
	},
];

const HeadlineBuilder = () => {
	return (
		<div className="headline_builder_component">
			<div className="headline-builder">
				<h1>Why Stark?</h1>
				<p className="subheading">
					Build and ship inclusive software, accelerate time-to-compliance.
				</p>
				<div className="grid-container">
					{contentData.map((item, index) => (
						<div className="grid-item" key={index}>
							<img src={item.imgSrc} alt={`Description ${index + 1}`} />
							<h2>{item.title}</h2>
							<p>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HeadlineBuilder;
