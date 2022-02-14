import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ img, name, code, category }) => {
	return (
		<div className="w-11/12 duration-300 shadow hover:shadow-lg flex flex-col justify-between">
			<img className="object-contain h-72" src={img} alt={name} />
			<div className="py-0.5 px-4">
				<h4>
					<b>{name}</b>
				</h4>
				<p>
					category: <span>{category}</span>
				</p>
				<div className="text-center">
					<Link
						className="my-2 py-3 px-3 bg-blue inline-block text-white rounded hover:text-blue hover:bg-white hover:border-blue border"
						to={`/products/${code}`}
					>
						More Information
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
