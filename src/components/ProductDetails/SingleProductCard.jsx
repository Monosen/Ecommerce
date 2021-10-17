import React, { useContext } from "react";

//context
import ShoppingCartContext from "../../context/ShoppingCartContext";

const SingleProductCard = ({ img, name, costo, unidad, id, max }) => {
	const { handleRemoveCartItem } = useContext(ShoppingCartContext);

	return (
		<div className="flex mb-4">
			<img className="w-1/5" src={img} alt={name} />
			<div>
				<h4>{name}</h4>
				<p>{costo}</p>
				<p>Quantity: {unidad}</p>
				<p>{max}</p>
				<button onClick={() => handleRemoveCartItem(id)}>Remove</button>
			</div>
		</div>
	);
};

export default SingleProductCard;
