import React from "react";
import "../../assets/styles/home/arealabel.css"; // Importing external CSS for styling
import img from "../../assets/images/home/speed-up-your-accessibility-feature.png"; // Importing image for the AreaLabel component

const AreaLabel = () => {
	return (
		<div className="area-label">
			<div className="area-label-container">
				<div className="area-label-image-wrapper">
					<img
						src={img}
						alt="Accessibility Workflow"
						className="area-label-image"
					/>
				</div>
				<div className="area-label-text-wrapper">
					<h1 className="area-label-heading">
						Speed up your accessibility workflow{" "}
						<span>from months to minutes</span>
					</h1>
					<p className="area-label-paragraph">
						Designers, developers, product managers, and accessibility experts
						at 30,000+ companies use Stark’s suite of integrated accessibility
						tools in their daily product development cycle. Join them today!
					</p>
				</div>
			</div>
		</div>
	);
};

export default AreaLabel;
