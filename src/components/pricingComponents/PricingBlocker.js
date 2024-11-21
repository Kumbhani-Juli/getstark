import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../assets/styles/pricingComponentsCSS/pricingBlocker.css";

const PricingBlocker = ({ sectionData }) => {
	return (
		<>
			<div className="pricing-blocker-section-container">
				{sectionData?.map((data, index) => (
					<div
						className="pricing-blocker-section-box"
						key={index}
						style={{ backgroundColor: data.backgroundColor }}
					>
						<h4>{data?.title}</h4>
						<p className="mb-5">{data?.content}</p>

						{data?.price !== "Free" && <p>From</p>}

						<h1>{data?.price}</h1>
						<p>{data?.spanContent}</p>
						<button>{data?.buttonContent}</button>
						<div className="pricing-blocker-section-box-features">
							{data?.listData?.map((list, index) => (
								<li key={index}>
									<FontAwesomeIcon
										icon={faCheckCircle}
										style={{ color: "#381fd1" }}
									/>{" "}
									{list?.content}
								</li>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default PricingBlocker;
