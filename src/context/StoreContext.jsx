import React, { createContext, useReducer } from "react";

//Creamos el contexto
const StoreContext = createContext();

//Reducer
const initialState = {
	list: [],
	cart: [],
	count: 0,
	total: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_CART":
			return {
				...state,
				cart: [
					...state.cart,
					{
						id: action.payload.id,
						title: action.payload.title,
						image: action.payload.image,
						price: action.payload.price,
						count: 1,
					},
				],
				count: state.count + 1,
				total: state.total + action.payload.price,
			};

		case "REMOVE_CART":
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
				count: state.count - 1,
				total: state.total - action.payload.price,
			};
		case "ADD_ALL_PRODUCTS":
			return {
				...state,
				list: action.payload,
			};
		default:
			return state;
	}
};

const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	//funciones
	const handleAddCart = (type, product) => {
		const result = state?.cart?.some((item) => item.id === product.id);
		if (result) {
			state.cart.forEach((item) => {
				if (item.id === product.id) {
					item.count += 1;
					state.total += product.price;
				}
			});
		} else {
			dispatch({ type: type, payload: product });
		}
	};

	const data = {
		state,
		dispatch,
		handleAddCart,
	};

	return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export default StoreContext;
export { StoreProvider };
