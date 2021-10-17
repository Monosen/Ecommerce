import { createContext, useState } from "react";
import { productsList } from "../helpers/productsList";

const ProductsListContext = createContext();

const ProductsListProvider = ({ children }) => {
	const [list] = useState(productsList);

	const data = { list };

	return (
		<ProductsListContext.Provider value={data}>
			{children}
		</ProductsListContext.Provider>
	);
};

export { ProductsListProvider };
export default ProductsListContext;
