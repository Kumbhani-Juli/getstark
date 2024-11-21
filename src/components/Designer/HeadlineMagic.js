import React from "react";
import "../../assets/styles/designer/headlinemagic.css"; // Import the CSS file for styling

const HeadlineMagic = ({ sectionData }) => {

	return (
		<div className="headline-magic-component">
			<div className="headline-magic">
				<img src={sectionData?.sectionImg} alt="Feature Image" className="headline-magic__image" />
				<h1 className="headline-magic__title">
					{sectionData?.title} <span>{sectionData?.spanTitle}</span>
				</h1>
				<div className="headline-magic__features">
					{sectionData?.listData?.map((feature, index) => (
						<div key={index} className="headline-magic__feature-item">
							<img
								src={feature?.sectionIcon}
								alt="Icon"
								className="headline-magic__icon"
							/>
							<span className="headline-magic__text">{feature?.title}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HeadlineMagic;
