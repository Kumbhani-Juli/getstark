import React, { useState } from "react";
import ResourceWCAGData from "../../Data/ResourceWCAGData";
import "../../assets/styles/wcage/wcagbottomsection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const WcagBottomSection = () => {
	// Set the first item as the default active one
	const [activewcag, setActiveWcag] = useState(ResourceWCAGData[0]);
	const [title, setTitle] = useState(ResourceWCAGData[0]?.title);
	const [showMenu, setShowMenu] = useState(false);
	const [visibleSubList, setVisibleSubList] = useState(
		ResourceWCAGData.map((_, index) => index)
	);

	// Function to toggle sublist visibility
	const toggleSubList = (index) => {
		setVisibleSubList((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
		);
	};

	return (
		<>
			<div className="row mx-0 wcag-bottom-section-container">
				<div className="col-md-4 wcag-bottom-section-left-content">
					<button
						onClick={() => {
							setShowMenu(!showMenu);
						}}
					>
						{showMenu ? "Close" : "Menu"}
					</button>
					{ResourceWCAGData?.map((resource, resourceIndex) => (
						<div
							key={resourceIndex}
							className={`bottom-section-menu ${showMenu ? "show" : ""}`}
						>
							<p
								onClick={() => {
									setActiveWcag(resource);
									toggleSubList(resourceIndex);
								}}
								style={{
									color: activewcag === resource ? "#4338CA" : "",
									fontWeight: activewcag === resource ? "bold" : "",
									textDecoration: activewcag === resource ? "underline" : "",
								}}
							>
								{resource?.title}
								<FontAwesomeIcon
									icon={
										visibleSubList.includes(resourceIndex)
											? faChevronUp
											: faChevronDown
									}
									style={{ fontSize: "14px" }}
								/>
							</p>
							{/* Show sublist if the current index is in visibleSubList */}
							{visibleSubList.includes(resourceIndex) &&
								resource?.subListData?.map((subList, subListIndex) => (
									<li
										key={subListIndex}
										onClick={() => setActiveWcag(subList)}
										style={{
											cursor: "pointer",
											marginLeft: "1rem",
											color: activewcag === subList ? "#4338CA" : "",
											fontWeight: activewcag === subList ? "bold" : "",
										}}
									>
										{subList?.title}
									</li>
								))}
						</div>
					))}
				</div>

				<div className="col-md-8 wcag-bottom-section-right-content">
					<h1>{activewcag?.title}</h1>
					{activewcag?.contentData?.map((data, index) => (
						<div key={index}>
							<h2>{data?.title}</h2>
							<p>{data?.content}</p>
							{data?.subListData?.map((subList, index) => (
								<li
									key={index}
									style={{
										listStyleType:
											data?.listType === "ordered" ? "decimal" : "disc",
									}}
								>
									{subList?.listContent}
								</li>
							))}
						</div>
					))}
					<div className="bottom-section-right-content-wcag-links">
						<h1>WCAG Links</h1>

						{activewcag?.WCAGLinksData?.map((link, index) => (
							<div
								className="bottom-section-right-content-wcag-links-box"
								key={index}
							>
								<h2>{link?.title}</h2>
								<small>{link?.content}</small>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default WcagBottomSection;
