import React, { useContext } from "react";

//Context
import ShoppingCartContext from "../../context/ShoppingCartContext";

//Styles
import "./SingleProductDetails.css";

const SingleProductDetails = ({ img, name, costo, id, state }) => {
	const { handleAddCartList } = useContext(ShoppingCartContext);
	return (
		<div className="md:flex pt-40 container max-w-max mx-auto">
			<div className="">
				<img src={img} alt={name} />
			</div>
			<div className="pl-5">
				<h1 className="text-3xl capitalize font-semibold mb-3">{name}</h1>
				<p className="mb-3">
					<strong>Color: </strong> <span>black</span>
				</p>
				<div className="mb-8">
					<div className="bg-black w-5 h-5 rounded-full"></div>
				</div>
				<div className="flex items-center mb-3">
					<p className="font-semibold">Fit</p>
					<div id="gender" className="flex text-center ml-7 w-full text-blue">
						<label className="m-1 px-2 py-5 border border-black cursor-pointer w-6/12 relative rounded">
							<input className="hidden" type="radio" name="genero" />
							<span className="absolute inset-0 flex justify-center items-center">
								Male Fit
							</span>
						</label>
						<label className="m-1 px-2 py-2 border border-black-500 cursor-pointer w-6/12 relative rounded">
							<input className="hidden" type="radio" name="genero" />
							<span className="absolute inset-0 flex justify-center items-center">
								Female Fit
							</span>
						</label>
					</div>
				</div>
				<div className="flex items-center mb-10">
					<p className="font-semibold">Size</p>
					<div className="grid grid-cols-4 text-center ml-5 gap-2 w-full">
						<label className="m-1 px-4 py-2 border border-black-500 cursor-pointer">
							<input className="hidden" type="radio" name="size" />
							<span>S</span>
						</label>
						<label className="m-1 px-4 py-2 border border-black-500 cursor-pointer">
							<input className="hidden" type="radio" name="size" />
							<span>M</span>
						</label>
						<label className="m-1 px-4 py-2 border border-black-500 cursor-pointer ">
							<input className="hidden" type="radio" name="size" />
							<span>L</span>
						</label>
						<label className="m-1 px-4 py-2 border border-black-500 cursor-pointer">
							<input className="hidden" type="radio" name="size" />
							<span>XL</span>
						</label>
						<label className="m-1 px-4 py-2 border border-black-500 cursor-pointer">
							<input className="hidden" type="radio" name="size" />
							<span>2XL</span>
						</label>
						<label className="m-1 px-4 py-2 border border-black-500 cursor-pointer">
							<input className="hidden" type="radio" name="size" />
							<span>3XL</span>
						</label>
						<label className="m-1 px-4 py-2 border border-black-500 cursor-pointer">
							<input className="hidden" type="radio" name="size" />
							<span>4XL</span>
						</label>
						<label className="m-1 px-4 py-2 border border-black-500 cursor-pointer">
							<input className="hidden" type="radio" name="size" />
							<span>5XL</span>
						</label>
					</div>
				</div>
				<div className="mb-3 text-green">
					<span className="text-3xl block">{costo}</span>
					<small>incl. VAT</small>
				</div>
				<button
					onClick={() => handleAddCartList(id, name, img, costo, state)}
					className="uppercase w-full h-16 hover:bg-greenTwo rounded bg-green text-white text-2xl font-bold mb-4"
				>
					add to cart
				</button>
			</div>
		</div>
	);
};

export default SingleProductDetails;
