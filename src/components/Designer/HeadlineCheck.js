import React from "react";
import "../../assets/styles/designer/headlinecheck.css"; // Ensure you import the corresponding CSS file
import img from "../../assets/images/use-cases/designer/for-designers-checkfixannotate.webp"; // Replace with your actual image path
const HeadlineCheck = ({ sectionData }) => {
	return (
		<>
			{
				sectionData?.map((data, index) => (
					<section className="headline-check-container" key={index}>
						<div className="headline-check-image-section">
							<img
								src={data?.sectionImg}
								alt="Figma or Sketch files being scanned for accessibility issues"
							/>
						</div>
						<div className="headline-check-content-section">
							<h1>
								<span>{data?.spanTitle}</span> {data?.title}
							</h1>
							<p>
								{data?.content}
							</p>
							<button className="headline-check-get-started-button">
								Get Started for Free
							</button>
						</div>
					</section>
				))
			}
		</>
	);
};

export default HeadlineCheck;
