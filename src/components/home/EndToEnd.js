import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/home/endtoend.css"; // Custom CSS file for additional styling
import img from "../../assets/images/home/headline-plugins-integrations-illo-2023.webp"; // Image 1
import img2 from "../../assets/images/home/headline-projects-reports-insights-illo-2023.webp"; // Image 2
import img3 from "../../assets/images/home/headline-ai-powered-automation-illo-2023.webp"; // Image 3
import img4 from "../../assets/images/home/headline-compliance-center-illo-2023.webp"; // Image 4
const EndToEndComponent = () => {
	const columnsContent = [
		{
			imgSrc: img,
			spanText: "Speed up design & Dev",
			heading: "Plug-ins & Integrations",
			paragraph:
				"Meet your team where they work, from Figma and Sketch to GitHub and their browser of choice. An accessibility workflow built right into the tools they love. No need for them to switch or relearn.",
		},
		{
			imgSrc: img2,
			spanText: "Improve collaboration",
			heading: "Projects, Reports & Insights",
			paragraph:
				"Manage your team’s accessibility workflow in the Stark Web app. Monitor and manage progress with real-time reports and insights across all your projects from design to code.",
		},
		{
			imgSrc: img3,
			spanText: "Accelerate workflows",
			heading: "AI-powered Automation",
			paragraph:
				"Automated continuous scanning of design files and code repositories combined with AI-powered suggestions accelerates finding and fixing of accessibility issues in record time.",
		},
		{
			imgSrc: img4,
			spanText: "Manage at Scale",
			heading: "Compliance Center",
			paragraph:
				"Manage your company’s accessibility posture in one central hub. Assign and document individual controls based on the regulatory frameworks. Access evidence for easy auditing.",
		},
	];

	return (
		<div className="end-to-end-component">
			<div className="end-to-end-container text-center">
				<span className="explore-span">Explore the Stark platform</span>
				<h1>
					The only<span className="end-to-end"> end-to-end solution</span> from
					design and code to live product
				</h1>

				<div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
					{columnsContent.map((item, index) => (
						<div className="col" key={index}>
							<img
								src={item.imgSrc}
								alt={item.heading}
								className="img-fluid mb-3"
							/>
							<span className="column-span">{item.spanText}</span>
							<h3>{item.heading}</h3>
							<p>{item.paragraph}</p>
						</div>
					))}
				</div>
				<button className="end-to-end-get-started">Get Started For Free</button>
			</div>
		</div>
	);
};

export default EndToEndComponent;
