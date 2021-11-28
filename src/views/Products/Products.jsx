import React, { useEffect, useContext } from "react";

//Components
import Nabar from "../../components/Custom/Nabar/Nabar";
import SingleProduct from "../../components/Products/SingleProduct";

//Context
import StoreContext from "../../context/StoreContext";

//Styles
import "./Products.styles.css";

const Products = () => {
	const { state, dispatch } = useContext(StoreContext);

	useEffect(() => {
		const handleFetchData = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products");
				const result = await response.json();
				dispatch({ type: "ADD_ALL_PRODUCTS", payload: result });
			} catch (error) {
				console.log(error);
			}
		};
		handleFetchData();
	}, [dispatch]);

	return (
		<>
			<Nabar />
			<div className="box-products pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-7 justify-items-center mx-auto">
				{state?.list?.length > 0 &&
					state.list.map((product) => (
						<SingleProduct
							key={product.id}
							img={product.image}
							name={product.title}
							code={product.id}
							category={product.category}
						/>
					))}
			</div>
		</>
	);
};

export default Products;
