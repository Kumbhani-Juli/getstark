import React from "react";
import HomePageGradiant from "./home/HomepageGradient";
import AreaLabel from "./home/AreaLabel";
import LabelImages from "./home/LabelImages";
import EndToEndComponent from "./home/EndToEnd";
import HeadlineContainer from "./home/HeadlineContainer";
import HeadlineIntegrated from "./home/Integrated";
import EnterpriseComponent from "./home/Enterprise";
import BestROI from "./home/BestROI";
import HeadlineBuilder from "./home/HeadlineBuilder";
import HeadlineScale from "./home/HeadlineScale";
const Home = () => {
	return (
		<>
			<HomePageGradiant />
			<AreaLabel />
			<LabelImages />
			<EndToEndComponent />
			<HeadlineContainer />
			<HeadlineIntegrated />
			<EnterpriseComponent />
			<BestROI />
			<HeadlineBuilder />
			<HeadlineScale />
		</>
	);
};

export default Home;
