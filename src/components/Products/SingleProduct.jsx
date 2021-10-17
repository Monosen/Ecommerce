import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ img, name, code }) => {
	return (
		<div className="w-11/12 duration-300 shadow hover:shadow-lg">
			<Link to={`/products/${code}`}>
				<img src={img} alt={name} />
				<div className="py-0.5 px-4">
					<h4>
						<b>{name}</b>
					</h4>
					<p>Architect & Engineer</p>
				</div>
			</Link>
		</div>
	);
};

export default SingleProduct;
