import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Desinger from "./components/Designer/Desinger";
import Login from "./components/Login";
import StartFree from "./components/StartFree";
import Support from "./components/support/Support";
import Pricing from "./components/Pricing";
import Blog from "./components/Recources/Blog";
import Library from "./components/Library";
import Wcage from "./components/WCAG/Wcage";
import Community from "./components/Community";
import StarkWhitePaper from "./components/StarkWhitePaper";
function App() {
	return (
		<BrowserRouter>
			{" "}
			<Routes>
				{" "}
				<Route
					path="/"
					element={
						<>
							<Header color="#fff" />
							<Home /> <Footer />
						</>
					}
				/>
				<Route
					path="/:slugs"
					element={
						<>
							<Header color="#381fd1" />
							<Desinger />
							<Footer />
						</>
					}
				/>{" "}
				<Route
					path="/support"
					element={
						<>
							<Header color="#fff" />
							<Support />
							<Footer />
						</>
					}
				/>{" "}
				<Route
					path="/blog"
					element={
						<>
							<Header color="#fff" />
							<Blog />
							<Footer />
						</>
					}
				/>
				<Route
					path="/support-community"
					element={
						<>
							<Header color="#fff" />
							<Support />
							<Footer />
						</>
					}
				/>{" "}
				<Route
					path="/library"
					element={
						<>
							<Header color="#381fd1" />
							<Library />
							<Footer />
						</>
					}
				/>{" "}
				<Route
					path="/community"
					element={
						<>
							<Header color="#381fd1" />
							<Community />
							<Footer />
						</>
					}
				/>{" "}
				<Route
					path="/stark-white-paper"
					element={
						<>
							<Header color="#381fd1" />
							<StarkWhitePaper />
							<Footer />
						</>
					}
				/>{" "}
				<Route
					path="/wcag"
					element={
						<>
							<Header color="#fff" />
							<Wcage />
							<Footer />
						</>
					}
				/>{" "}
				<Route
					path="/pricing"
					element={
						<>
							<Header color="#381fd1" />
							<Pricing />
							<Footer />
						</>
					}
				/>{" "}
				<Route
					path="/login"
					element={
						<>
							<Login />
						</>
					}
				/>
				<Route
					path="/start-for-free"
					element={
						<>
							<StartFree />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
