import React from "react"; // Import CSS file for styling
import DesignerGradient from "./Designer_gradient";
import HeadlineCheck from "./HeadlineCheck";
import HeadlineSmoothest from "./HeadlineSmoothest";
import HeadlineReport from "./HeadlineReports";
import HeadlineMagic from "./HeadlineMagic";
import BestROI from "../home/BestROI";
const Desinger = () => {
	return (
		<>
			{" "}
			<DesignerGradient />
			<HeadlineCheck />
			<HeadlineSmoothest />
			<HeadlineReport />
			<HeadlineMagic />
			<BestROI />
		</>
	);
};

export default Desinger;
