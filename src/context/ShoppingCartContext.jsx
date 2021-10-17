import React, { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const cart = [];

const ShoppingCartProvider = ({ children }) => {
	const [cartList, setCartList] = useState(cart);
	const handleAddCartList = (id, name, img, costo, state) => {
		const result = cartList.some((product) => product.id === id);
		if (result) {
			repiteItem(id);
		} else {
			setCartList([
				...cartList,
				{ id: id, name: name, img: img, costo: costo, state: state, unidad: 1 },
			]);
		}
	};

	const repiteItem = (id) => {
		setCartList(
			cartList.map((items) => {
				items.id === id && items.unidad++;
				return items;
			})
		);
	};

	const handleRemoveCartItem = (id) => {
		alert(id);
	};

	const cartData = { cartList, handleAddCartList, handleRemoveCartItem };

	console.log(cartList);
	return (
		<ShoppingCartContext.Provider value={cartData}>
			{children}
		</ShoppingCartContext.Provider>
	);
};

export { ShoppingCartProvider };
export default ShoppingCartContext;
