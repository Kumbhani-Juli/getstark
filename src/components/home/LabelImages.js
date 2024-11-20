import React from "react";
import "../../assets/styles/home/labelimages.css";
import label11 from "../../assets/images/home/homelabel_images/label11.svg";
import label12 from "../../assets/images/home/homelabel_images/label13.svg";
import label from "../../assets/images/home/homelabel_images/label.svg";
import label3 from "../../assets/images/home/homelabel_images//label3.svg";
import label4 from "../../assets/images/home/homelabel_images/label4.svg";
import label5 from "../../assets/images/home/homelabel_images/label5.svg";
import label6 from "../../assets/images/home/homelabel_images/label6.svg";
import label7 from "../../assets/images/home/homelabel_images/label7.svg";
import label8 from "../../assets/images/home/homelabel_images/label8.svg";
import label9 from "../../assets/images/home/homelabel_images/label9.svg";
import label10 from "../../assets/images/home/homelabel_images/label10.svg";
const LabelImages = () => {
	// Array of image objects
	const images = [
		{ id: 1, src: label, alt: "Image 1" },
		{ id: 3, src: label3, alt: "Image 3" },
		{ id: 4, src: label4, alt: "Image 4" },
		{ id: 5, src: label5, alt: "Image 5" },
		{ id: 6, src: label6, alt: "Image 6" },
		{ id: 7, src: label7, alt: "Image 7" },
		{ id: 8, src: label8, alt: "Image 8" },
		{ id: 9, src: label9, alt: "Image 9" },
		{ id: 10, src: label10, alt: "Image 10" },
		{ id: 11, src: label11, alt: "Image 11" },
		{ id: 12, src: label12, alt: "Image 12" },
	];

	return (
		<div className="label-component">
			<div className="label-images-container">
				<marquee behavior="scroll" direction="left">
					<div className="label-image-wrapper">
						{images.map((image) => (
							<img
								key={image.id}
								src={image.src}
								alt={image.alt}
								className="marquee-image"
							/>
						))}
					</div>
				</marquee>
			</div>
		</div>
	);
};

export default LabelImages;
