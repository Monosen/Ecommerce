import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";

//Components
import Navbar from "../../components/Custom/Navbar/Navbar";
import Loader from "../../components/Custom/Loader/Loader";

//Context
import StoreContext from "../../context/StoreContext";

//Styles
import "./ProductDetails.styles.css";

const ProductDetails = () => {
	const [loader, setLoader] = useState(false);
	const { code } = useParams();

	const [product, setProduct] = useState(0);

	const { handleAddCart } = useContext(StoreContext);

	useEffect(() => {
		const handleFetchData = async () => {
			setLoader(true);
			try {
				const response = await fetch(
					`https://fakestoreapi.com/products/${code}`
				);
				const result = await response.json();
				setLoader(false);
				setProduct(result);
			} catch (error) {
				console.log(error);
			}
		};
		handleFetchData();
	}, [code]);

	return (
		<>
			<Navbar />
			{product?.id ? (
				<div className="md:flex pt-40 container max-w-max mx-auto">
					<div>
						{product && (
							<img
								className="w-72 mx-auto mb-3.5 md:pr-3.5"
								src={product.image}
								alt={product.title}
							/>
						)}
					</div>
					<div className="pl-5">
						<h1 className="text-3xl capitalize font-semibold mb-3">
							{product?.title && product.title}
						</h1>
						<p className="mb-3">
							<strong>Color: </strong> <span>black</span>
						</p>
						<div className="mb-8">
							<div className="bg-black w-5 h-5 rounded-full"></div>
						</div>
						<div className="flex items-center mb-3">
							<p className="font-semibold">Fit</p>
							<div
								id="gender"
								className="flex text-center ml-7 w-full text-blue"
							>
								<label className="m-1 px-2 py-5 border border-grayTwo cursor-pointer w-6/12 relative rounded">
									<input className="hidden" type="radio" name="genero" />
									<span className="absolute inset-0 flex justify-center items-center">
										Male Fit
									</span>
								</label>
								<label className="m-1 px-2 py-2 border border-grayTwo cursor-pointer w-6/12 relative rounded">
									<input className="hidden" type="radio" name="genero" />
									<span className="absolute inset-0 flex justify-center items-center">
										Female Fit
									</span>
								</label>
							</div>
						</div>
						<div className="flex items-center mb-10 ">
							<p className="font-semibold">Size</p>
							<div
								id="size"
								className="grid grid-cols-4 text-center ml-5 gap-2 w-full text-blue"
							>
								<label className="m-1 px-4 py-4 border border-grayTwo cursor-pointer rounded relative z-0">
									<input className="hidden" type="radio" name="size" />
									<span className="absolute inset-0 flex justify-center items-center">
										S
									</span>
								</label>
								<label className="m-1 px-4 py-4 border border-grayTwo cursor-pointer rounded relative z-0">
									<input className="hidden" type="radio" name="size" />
									<span className="absolute inset-0 flex justify-center items-center">
										M
									</span>
								</label>
								<label className="m-1 px-4 py-4 border border-grayTwo cursor-pointer rounded relative z-0 ">
									<input className="hidden" type="radio" name="size" />
									<span className="absolute inset-0 flex justify-center items-center">
										L
									</span>
								</label>
								<label className="m-1 px-4 py-4 border border-grayTwo cursor-pointer rounded relative z-0">
									<input className="hidden" type="radio" name="size" />
									<span className="absolute inset-0 flex justify-center items-center">
										XL
									</span>
								</label>
								<label className="m-1 px-4 py-4 border border-grayTwo cursor-pointer rounded relative z-0">
									<input className="hidden" type="radio" name="size" />
									<span className="absolute inset-0 flex justify-center items-center">
										2XL
									</span>
								</label>
								<label className="m-1 px-4 py-4 border border-grayTwo cursor-pointer rounded relative z-0">
									<input className="hidden" type="radio" name="size" />
									<span className="absolute inset-0 flex justify-center items-center">
										3XL
									</span>
								</label>
								<label className="m-1 px-4 py-4 border border-grayTwo cursor-pointer rounded relative z-0">
									<input className="hidden" type="radio" name="size" />
									<span className="absolute inset-0 flex justify-center items-center">
										4XL
									</span>
								</label>
								<label className="m-1 px-4 py-4 border border-grayTwo cursor-pointer rounded relative z-0">
									<input className="hidden" type="radio" name="size" />
									<span className="absolute inset-0 flex justify-center items-center">
										5XL
									</span>
								</label>
							</div>
						</div>
						<div className="mb-3 text-green">
							{product && (
								<span className="text-3xl block">${product.price}</span>
							)}
							<small>incl. VAT</small>
						</div>
						<button
							onClick={() => handleAddCart("ADD_CART", product)}
							className="uppercase w-full h-16 hover:bg-greenTwo rounded bg-green text-white text-2xl font-bold mb-4"
						>
							add to cart
						</button>
					</div>
				</div>
			) : (
				product === null && (
					<div className="w-screen h-screen flex justify-center items-center flex-col">
						<h1 className="text-9xl mb-2">404</h1>
						<h2 className="text-4xl">Not Found</h2>
					</div>
				)
			)}
			{loader && (
				<div className="w-screen h-screen flex justify-center items-center">
					<Loader />
				</div>
			)}
		</>
	);
};

export default ProductDetails;
