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
				{
					id: id,
					name: name,
					img: img,
					costo: costo,
					state: state,
					unidad: 1,
					max: 0,
				},
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

	const handleValueMax = (id) => {
		setCartList(
			cartList.map((items) => {
				if (items.id === id) {
					items.max = Number(items.costo.replace("$", "")) * items.unidad;
				}
				return items;
			})
		);
	};

	const handleTotal = () => {
		let result = 0;
		cartList.forEach((value) => {
			result += value.max;
		});
		return result;
	};

	const handleRemoveCartItem = (id) => {
		setCartList(cartList.filter((value) => value.id !== id));
	};

	const cartData = {
		cartList,
		handleAddCartList,
		handleRemoveCartItem,
		handleValueMax,
		handleTotal,
	};

	console.log(cartList);
	return (
		<ShoppingCartContext.Provider value={cartData}>
			{children}
		</ShoppingCartContext.Provider>
	);
};

export { ShoppingCartProvider };
export default ShoppingCartContext;
