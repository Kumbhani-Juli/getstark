import React from "react";
import "../../assets/styles/designer/designergradient.css"; // Import CSS file for styling

const DesignerGradient = ({ sectionData, title }) => {
	return (
		<div className="designer-gradient-container">
			<div className="content-section">
				<div className="content-inner-section">
					<span className="for-designers">For {title}</span>
					<h1>{sectionData?.title}</h1>
					<p>
						{sectionData?.content}
					</p>
					<div className="button-group">
						<button className="sign-up-button">Sign up for free</button>
						<button className="trial-button">Start a free trial</button>
					</div>
				</div>
			</div>
			<div className="image-section">
				<img src={sectionData?.sectionImg} alt="Design illustration" />
			</div>
		</div>
	);
};

export default DesignerGradient;
