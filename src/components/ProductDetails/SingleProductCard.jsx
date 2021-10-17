import React from "react";

const SingleProductCard = ({ img, name, costo }) => {
	return (
		<div>
			<img src={img} alt={name} />
			<h4>{name}</h4>
			<p>{costo}</p>
		</div>
	);
};

export default SingleProductCard;
