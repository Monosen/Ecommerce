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
				<div className="container pt-40 mx-auto md:flex max-w-max">
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
						<h1 className="mb-3 text-3xl font-semibold capitalize">
							{product?.title && product.title}
						</h1>
						<p className="mb-3">
							<strong>Color: </strong> <span>black</span>
						</p>
						<div className="mb-8">
							<div className="w-5 h-5 bg-black rounded-full"></div>
						</div>
						{!product.category.includes("electronics") && (
							<div className="flex items-center mb-3">
								<p className="font-semibold">Fit</p>
								<div
									id="gender"
									className="flex w-full text-center ml-7 text-blue"
								>
									<label className="relative w-6/12 px-2 py-5 m-1 border rounded cursor-pointer border-grayTwo">
										<input className="hidden" type="radio" name="genero" />
										<span className="absolute inset-0 flex items-center justify-center">
											Male Fit
										</span>
									</label>
									<label className="relative w-6/12 px-2 py-2 m-1 border rounded cursor-pointer border-grayTwo">
										<input className="hidden" type="radio" name="genero" />
										<span className="absolute inset-0 flex items-center justify-center">
											Female Fit
										</span>
									</label>
								</div>
							</div>
						)}
						{product.category.includes("men") && (
							<div className="flex items-center mb-10 ">
								<p className="font-semibold">Size</p>
								<div
									id="size"
									className="grid w-full grid-cols-4 gap-2 ml-5 text-center text-blue"
								>
									<label className="relative z-0 px-4 py-4 m-1 border rounded cursor-pointer border-grayTwo">
										<input className="hidden" type="radio" name="size" />
										<span className="absolute inset-0 flex items-center justify-center">
											S
										</span>
									</label>
									<label className="relative z-0 px-4 py-4 m-1 border rounded cursor-pointer border-grayTwo">
										<input className="hidden" type="radio" name="size" />
										<span className="absolute inset-0 flex items-center justify-center">
											M
										</span>
									</label>
									<label className="relative z-0 px-4 py-4 m-1 border rounded cursor-pointer border-grayTwo ">
										<input className="hidden" type="radio" name="size" />
										<span className="absolute inset-0 flex items-center justify-center">
											L
										</span>
									</label>
									<label className="relative z-0 px-4 py-4 m-1 border rounded cursor-pointer border-grayTwo">
										<input className="hidden" type="radio" name="size" />
										<span className="absolute inset-0 flex items-center justify-center">
											XL
										</span>
									</label>
									<label className="relative z-0 px-4 py-4 m-1 border rounded cursor-pointer border-grayTwo">
										<input className="hidden" type="radio" name="size" />
										<span className="absolute inset-0 flex items-center justify-center">
											2XL
										</span>
									</label>
									<label className="relative z-0 px-4 py-4 m-1 border rounded cursor-pointer border-grayTwo">
										<input className="hidden" type="radio" name="size" />
										<span className="absolute inset-0 flex items-center justify-center">
											3XL
										</span>
									</label>
									<label className="relative z-0 px-4 py-4 m-1 border rounded cursor-pointer border-grayTwo">
										<input className="hidden" type="radio" name="size" />
										<span className="absolute inset-0 flex items-center justify-center">
											4XL
										</span>
									</label>
									<label className="relative z-0 px-4 py-4 m-1 border rounded cursor-pointer border-grayTwo">
										<input className="hidden" type="radio" name="size" />
										<span className="absolute inset-0 flex items-center justify-center">
											5XL
										</span>
									</label>
								</div>
							</div>
						)}
						<div className="mb-3 text-green">
							{product && (
								<span className="block text-3xl">${product.price}</span>
							)}
							<small>incl. VAT</small>
						</div>
						<button
							onClick={() => handleAddCart("ADD_CART", product)}
							className="w-full h-16 mb-4 text-2xl font-bold text-white uppercase rounded hover:bg-greenTwo bg-green"
						>
							add to cart
						</button>
					</div>
				</div>
			) : (
				product === null && (
					<div className="flex flex-col items-center justify-center w-screen h-screen">
						<h1 className="mb-2 text-9xl">404</h1>
						<h2 className="text-4xl">Not Found</h2>
					</div>
				)
			)}
			{loader && (
				<div className="flex items-center justify-center w-screen h-screen">
					<Loader />
				</div>
			)}
		</>
	);
};

export default ProductDetails;
