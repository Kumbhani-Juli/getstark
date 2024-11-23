import React, { useState } from "react";
import "../assets/styles/header.css"; // Ensure the path is correct for your styles
import img from "../assets/images/home/header-logo.jpg"; // Ensure the path is correct for your image
import { Link } from "react-router-dom";
import UseCaseData from "../Data/UseCaseData";

const Header = ({ bgcolor, color }) => {
	const [showUseCases, setShowUseCases] = useState(false);
	const [showResources, setShowResources] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			{/* Header container */}
			<header
				className="header"
				style={{ backgroundColor: bgcolor, color: color }}
			>
				<ul className="header-left">
					<li className="logo">
						<Link to="/">
							<img src={img} alt="Logo" />
						</Link>
					</li>

					<div
						className={`header-page-section-menu-content ${
							menuOpen ? "open" : ""
						}`}
					>
						<li
							className="dropdown"
							onClick={() => {
								setShowResources(false);
								setShowUseCases(!showUseCases);
							}}
						>
							Use Cases
							<span
								style={{
									fontSize: "12px",
									display: "inline-block",
									lineHeight: "12px",
									marginLeft: "0.5rem",
								}}
							>
								&#9660;
							</span>
							{showUseCases && (
								<div
									className={`dropdown-content ${showUseCases ? "show" : ""}`}
								>
									<div className="dropdown-column">
										{UseCaseData.map((useCase) => (
											<Link
												to={`/${useCase.slugs}`}
												style={{ textDecoration: "none" }}
											>
												<li>{useCase.title}</li>
												<p>{useCase.content}</p>
											</Link>
										))}
									</div>
								</div>
							)}
						</li>
						<Link
							to="/pricing"
							style={{ color: color, textDecoration: "none" }}
							onClick={() => {
								setMenuOpen(false);
								setShowResources(false);
								setShowUseCases(false);
							}}
						>
							<li>Pricing</li>{" "}
						</Link>
						<li>
							<Link
								to="/support"
								style={{ color: color, textDecoration: "none" }}
								onClick={() => {
									setMenuOpen(false);
									setShowResources(false);
									setShowUseCases(false);
								}}
							>
								{" "}
								support
							</Link>{" "}
						</li>{" "}
						<li
							className="dropdown"
							onClick={() => {
								setShowResources(!showResources);
								setShowUseCases(false);
							}}
						>
							Resources
							<span
								style={{
									fontSize: "12px",
									display: "inline-block",
									lineHeight: "12px",
									marginLeft: "0.5rem",
								}}
							>
								&#9660;
							</span>
							{showResources && (
								<div
									className={`dropdown-resource-content ${
										showResources ? "show" : ""
									}`}
								>
									<div className="dropdown-resource-colum">
										<Link
											to="/blog"
											style={{ color: color, textDecoration: "none" }}
											onClick={() => {
												setMenuOpen(false);
												setShowResources(false);
												setShowUseCases(false);
											}}
										>
											{" "}
											<li>Blog</li>
										</Link>
										<p>
											Read about the latest updates to stark and articles from
											our team.
										</p>{" "}
									</div>
									<div className="dropdown-resource-colum">
										<Link
											to="/library"
											style={{ color: color, textDecoration: "none" }}
											onClick={() => {
												setMenuOpen(false);
												setShowResources(false);
												setShowUseCases(false);
											}}
										>
											<li>Library</li>
										</Link>
										<p>
											Learn about all things accesiiblity and inclusive design.
										</p>
									</div>
									<div className="dropdown-resource-colum">
										<Link
											to="/wcag"
											style={{ color: color, textDecoration: "none" }}
											onClick={() => {
												setMenuOpen(false);
												setShowResources(false);
												setShowUseCases(false);
											}}
										>
											{" "}
											<li>The WCAG Explainer</li>
										</Link>
										<p>Simple explainations of every WCAG criteria.</p>
									</div>{" "}
									<div className="dropdown-resource-colum">
										<Link
											to="/support-community"
											style={{ color: color, textDecoration: "none" }}
											onClick={() => {
												setMenuOpen(false);
												setShowResources(false);
												setShowUseCases(false);
											}}
										>
											{" "}
											<li>Support Community</li>
										</Link>
										<p>
											{" "}
											Find answer to your question plus tips and tricks on how
											to use stark.
										</p>
									</div>
									<div className="dropdown-resource-colum">
										<Link
											to="/community"
											style={{ color: color, textDecoration: "none" }}
											onClick={() => {
												setMenuOpen(false);
												setShowResources(false);
												setShowUseCases(false);
											}}
										>
											<li>Community</li>
										</Link>
										<p>
											Join more than 3,500 accesiiblity folks from around the
											world.{" "}
										</p>
									</div>{" "}
									<div className="dropdown-resource-colum">
										<Link
											to="/stark-white-paper"
											style={{ color: color, textDecoration: "none" }}
											onClick={() => {
												setMenuOpen(false);
												setShowResources(false);
												setShowUseCases(false);
											}}
										>
											<li> Stark White Paper</li>
										</Link>
										<p>
											Managing and growing your accesiiblity posture at any
											scale.
										</p>
									</div>
								</div>
							)}
						</li>
						<div className="header-right-mobile">
							<Link to="/login">
								<button className="login-button-mobile">Log in</button>
							</Link>{" "}
							<Link to="/start-for-free">
								<button className="start-button-mobile">Start for Free</button>
							</Link>
						</div>
					</div>
				</ul>
				<button className="menu-toggle-button" onClick={toggleMenu}>
					{menuOpen ? "✕" : "☰"} {/* Close icon or Hamburger icon */}
				</button>
				<div className="header-right">
					{" "}
					<Link to="/login">
						<button className="login-button">Log in</button>
					</Link>
					<Link to="/start-for-free">
						<button className="header-start-button">Start for Free</button>
					</Link>
				</div>
			</header>
		</>
	);
};

export default Header;
