import React, { useContext } from "react";

//iconst
import { IoMdClose } from "react-icons/io";

//context
import StoreContext from "../../context/StoreContext";

const SingleProductCard = ({ img, name, price, unidad, id, max }) => {
	const { dispatch } = useContext(StoreContext);
	return (
		<tr className="border-b border-grayTwo">
			<td className="py-3">{unidad}</td>
			<td className="py-3 px-2">
				<img className="w-20 h-28 mx-auto" src={img} alt={name} />
			</td>
			<td className="py-3">{name}</td>
			<td className="py-3">${price}</td>
			<td className="py-3 text-center">
				<button onClick={() => dispatch({ type: "REMOVE_CART", payload: id })}>
					<IoMdClose className="w-7 h-7 hover:text-red" />
				</button>
			</td>
		</tr>
	);
};

export default SingleProductCard;
