import React, { useContext } from "react";
import { useParams } from "react-router";

//Components
import Nabar from "../../components/Nabar";
import SingleProductDetails from "../../components/ProductDetails/SingleProductDetails";

//Context
import ProductsListContext from "../../context/ProductsListContext";

const ProductDetails = () => {
	const { list } = useContext(ProductsListContext);
	const { code } = useParams();
	return (
		<div>
			<Nabar />
			{list &&
				list.length > 0 &&
				list.map(
					(product) =>
						product.id === parseInt(code) && (
							<SingleProductDetails
								key={product.id}
								img={product.img}
								name={product.name}
								costo={product.costo}
								id={product.id}
								state={product.state}
							/>
						)
				)}
		</div>
	);
};

export default ProductDetails;
