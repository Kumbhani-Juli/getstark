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
							onClick={() => setShowUseCases(!showUseCases)}
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
											<Link to={`${useCase.slugs}`}>
												<li>{useCase.title}</li>
												<p>{useCase.content}</p>
											</Link>
										))}
									</div>
								</div>
							)}
						</li>
						<li>Pricing</li>{" "}
						<li>
							<Link
								to="/support"
								style={{ color: "#fff", textDecoration: "none" }}
							>
								{" "}
								support
							</Link>{" "}
						</li>{" "}
						<li
							className="dropdown"
							onClick={() => setShowResources(!showResources)}
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
									className={`dropdown-content ${showResources ? "show" : ""}`}
								>
									<div className="dropdown-column">
										<li>Blog</li>
										<p>
											Read about the latest updates to stark and articles from
											our team.
										</p>
										<li>Library</li>
										<p>
											Learn about all things accesiiblity and inclusive design.
										</p>
									</div>
									<div className="dropdown-column">
										<li>The WCAG Explainer</li>
										<p>Simple explainations of every WCAG criteria.</p>
										<li>Support Community</li>
										<p>
											{" "}
											Find answer to your question plus tips and tricks on how
											to use stark.
										</p>
									</div>
									<div className="dropdown-column">
										<li>Community</li>
										<p>
											Join more than 3,500 accesiiblity folks from around the
											world.{" "}
										</p>
										<li> Stark White Paper</li>
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
