import React, { useState } from "react";
import BlogData from "../../../Data/BlogData";
import "../../../assets/styles/recorces/blog/blogbottom.css";
import img from "../../../assets/images/recources/blog/large_New_pricing_2024_feb5f9734e.webp";
import Blog from "../Blog";
const BlogBottom = () => {
	const [activeBlog, setActiveBlog] = useState(BlogData[0]);
	return (
		<>
			<div className="row mx-0 blog-bottom-container">
				<div className="col-md-4 blog-bottom-left">
					{BlogData.map((data, index) => (
						<button
							key={index}
							style={{
								border: activeBlog === data ? "2px solid #4338CA" : "",
								color: activeBlog === data ? "#4338CA" : "",
								fontWeight: activeBlog === data ? "bold" : "",
							}}
							onClick={() => setActiveBlog(BlogData[index])}
						>
							{data?.title}
						</button>
					))}
				</div>
				<div className="col-md-8 blog-bottom-right">
					{activeBlog?.RightSideData.map((data, index) => (
						<div className="blog-bottom-right-box" key={index}>
							<img src={data?.img} className="img-fluid" />
							<div className="blog-bottom-right-box-body">
								<h2>{data?.title}</h2>
								<p>{data?.content}</p>
								<a href="#">Read more</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default BlogBottom;
