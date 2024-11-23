import React, { useState } from "react";
import img from "../assets/images/recources/library/library_collection_Collection_Boundless_Disability_Employment_c297d236d9.png";
import "../assets/styles/library.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import LibraryData from "../Data/LibraryData";

const Library = () => {
	const [activeLibrary, setActiveLibrary] = useState(LibraryData[0]);
	const [showCategories, setShowCategories] = useState(false);
	const [showFilterData, setShowFilterData] = useState(false);
	const [FilterTitle, setFilterTitle] = useState(null);
	const filterNestedContentData = (filterTitle) => {
		return LibraryData.flatMap(
			(data) =>
				data.NewLibraryData?.ContentData.filter(
					(item) => item.title === filterTitle
				) || []
		);
	};

	const FilterData = filterNestedContentData(FilterTitle);
	const categories = [
		{ title: "Blogs & Articles" },
		{ title: "Resources" },
		{ title: "Checklists" },
		{ title: "Colors" },
		{ title: "Community" },
	];

	const toggleDropdown = () => {
		setShowCategories(!showCategories);
	};

	return (
		<>
			<div className="row mx-0 library-container">
				<div className="col-md-3 library-left">
					<span>Search Library</span>
					<div className="search-box">
						<FontAwesomeIcon icon={faSearch} className="search-icon" />
						<input type="text" placeholder="Search" />
					</div>
					{/* Categories Dropdown */}
					{/* Library Data */}
					{LibraryData.map((data, index) => (
						<ul key={index}>
							<li
								style={{
									color: activeLibrary === data ? "#381fd1" : "",
									fontWeight: activeLibrary === data ? "700" : "",
								}}
								onClick={() => {
									setActiveLibrary(LibraryData[index]);
									setShowFilterData(false);
								}}
							>
								{data?.title}
							</li>
						</ul>
					))}{" "}
					<div className="categories-dropdown">
						<div
							className="dropdown-header"
							onClick={toggleDropdown}
							style={{
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
							}}
						>
							<span>Categories</span>
							<FontAwesomeIcon
								icon={showCategories ? faChevronUp : faChevronDown}
								className="dropdown-arrow"
								style={{ marginLeft: "auto" }}
							/>
						</div>
						{showCategories && (
							<ul className="categories-list">
								{categories.map((category, index) => (
									<li
										key={index}
										onClick={() => {
											setFilterTitle(category?.title);
											setShowFilterData(true);
										}}
									>
										{category?.title}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>

				<div className="col-md-9 library-right">
					{!showFilterData && (
						<>
							{" "}
							{activeLibrary?.NewLibraryData && (
								<>
									<h1>New in the Library</h1>
									<p>
										Newly added accessibility resources, guides, and more.
									</p>{" "}
								</>
							)}
							<div className="library-body">
								{activeLibrary?.NewLibraryData?.ContentData?.slice(0, 6)?.map(
									(data, index) => (
										<div className="library-box" key={index}>
											<img src={data?.img} alt="Library" />
											<span>{data?.title}</span>
											<h3>{data?.content}</h3>
										</div>
									)
								)}
							</div>
							<div className="feature-collection-section">
								<h1>Featured Collections</h1>
								<p>Handpicked and curated collections around accessibility.</p>
								<div className="feature-collections-body">
									{activeLibrary?.NewLibraryFeatureData?.ContentFeatureData?.map(
										(data, index) => (
											<div className="feature-collections-box" key={index}>
												<img src={data?.img} alt="Featured" />
												<h3>{data?.content}</h3>
											</div>
										)
									)}
								</div>{" "}
							</div>
						</>
					)}

					{/* Filtering data */}
					{showFilterData && (
						<>
							<h1>{FilterTitle}</h1>

							<div className="library-body">
								{FilterData?.map((data, index) => (
									<div className="library-box" key={index}>
										<img src={data?.img} alt="Library" />
										<span>{data?.title}</span>
										<h3>{data?.content}</h3>
									</div>
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Library;
