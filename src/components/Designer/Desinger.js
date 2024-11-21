import React from "react"; // Import CSS file for styling
import DesignerGradient from "./Designer_gradient";
import HeadlineCheck from "./HeadlineCheck";
import HeadlineMagic from "./HeadlineMagic";
import BestROI from "../home/BestROI";
import { useParams } from "react-router-dom";
import UseCaseData from "../../Data/UseCaseData";
import HeadlineBuilder from "../home/HeadlineBuilder";
import EndToEndComponent from "../home/EndToEnd";
const Desinger = () => {
	const { slugs } = useParams();
	const data = UseCaseData?.find((index) => index?.slugs === slugs);
	return (
		<>
			{" "}
			<DesignerGradient
				sectionData={data?.gradientSectionData}
				title={data?.title}
			/>
			<HeadlineCheck sectionData={data?.headlineCheckSectionData} />
			<HeadlineMagic sectionData={data?.headlineMagicSectionData} />
			<BestROI />
			<HeadlineBuilder />
			<EndToEndComponent />
		</>
	);
};

export default Desinger;
