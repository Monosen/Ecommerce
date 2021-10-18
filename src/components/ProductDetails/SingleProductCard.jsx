import React, { useContext } from "react";

//iconst
import { IoMdClose } from "react-icons/io";

//context
import ShoppingCartContext from "../../context/ShoppingCartContext";

const SingleProductCard = ({ img, name, costo, unidad, id, max }) => {
	const { handleRemoveCartItem } = useContext(ShoppingCartContext);

	return (
		<div className="flex mb-4 justify-between">
			<div className="inline-flex">
				<img className="w-1/5" src={img} alt={name} />
				<div>
					<h4>{name}</h4>
					<p>{costo}</p>
					<p>Quantity: {unidad}</p>
					<p>{max}</p>
				</div>
			</div>
			<button onClick={() => handleRemoveCartItem(id)}>
				<IoMdClose className="w-7 h-7 fill-current text-blue" />
			</button>
		</div>
	);
};

export default SingleProductCard;
