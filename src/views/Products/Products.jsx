import React, { useContext } from "react";

//Components
import Nabar from "../../components/Nabar";
import SingleProduct from "../../components/Products/SingleProduct";

//Context
import ProductsListContext from "../../context/ProductsListContext";

const Products = () => {
	const { list } = useContext(ProductsListContext);

	return (
		<div>
			<Nabar />
			<div className="pt-40 grid grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
				{list &&
					list.length > 0 &&
					list.map((product) => (
						<SingleProduct
							key={product.id}
							img={product.img}
							name={product.name}
							code={product.id}
						/>
					))}
			</div>
		</div>
	);
};

export default Products;
