import React from "react";
import "../../assets/styles/home/bestroi.css";
import img from "../../assets/images/home/g2-best-roi-fall-2024.png";
import img1 from "../../assets/images/home/g2-high-performer-fall-2024.png";
import img2 from "../../assets/images/home/g2-users-love-us.webp";

function BestROI() {
	return (
		<div className="bestroi-component">
			<div className="best-roi-component">
				<div className="best-roi-images">
					<img src={img} alt="Image 1" className="roi-image" />
					<img src={img1} alt="Image 2" className="roi-image" />
					<img src={img2} alt="Image 3" className="roi-image" />
				</div>
				<h1>
					Built to{" "}
					<span className="best-roi-span">deliver business value,</span> loved
					by the community.
				</h1>
				<p>
					Stark is the only Continuous Accessibility platform that accelerates
					time-to-compliance from design and code to QA and PM, and helps
					companies of all sizes deliver highest quality experiences for all
					users.
				</p>
				<button className="start-button">Start for free</button>
			</div>
		</div>
	);
}

export default BestROI;
