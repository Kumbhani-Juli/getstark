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
