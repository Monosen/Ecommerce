import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

//context
import StoreContext from "../../../context/StoreContext";

//components
import SingleProductCard from "../../ProductDetails/SingleProductCard";

//icons
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { RiShoppingCart2Fill } from "react-icons/ri";

//Styles
import "./Navar.styles.css";

const Nabar = () => {
	const [Hamburger, setHamburger] = useState(false);
	const [Cart, setCart] = useState(false);

	const { state } = useContext(StoreContext);

	const clickHamburger = () => {
		setHamburger(!Hamburger);
	};

	const clickCart = () => {
		setCart(!Cart);
	};

	return (
		<nav className="w-full fixed bg-black text-white z-50 top-0">
			<div className="container mx-auto">
				<div className="flex justify-between items-center my-3.5">
					<div className="inline-flex lg:hidden">
						<button onClick={clickHamburger}>
							<GiHamburgerMenu className="h-7 w-7 text-blue" />
						</button>
						<span className="font-semibold pl-1">Menu</span>
					</div>
					<Link className="text-4xl" to="/">
						Logo
					</Link>
					<div className="search--animate justify-center items-center hidden lg:flex relative">
						<input
							className="search-width text-black p-3 rounded-l-md border-t-2 border-l-2 border-b-2 border-blue"
							type="text"
							onChange={({ target }) => console.log(target.value)}
						/>
						<button className="p-4 rounded-r-md border-t-2 border-r-2 border-b-2 border-blue">
							<BsSearch className="h-4 w-4 text-blue-500" />
						</button>
					</div>
					<div className="inline-flex">
						<button className="relative" onClick={clickCart}>
							<RiShoppingCart2Fill className="h-7 w-7 text-blue" />
							<div className="w-5 h-5 bg-red rounded-full absolute -bottom-2 -right-1 flex items-center justify-center">
								{state.count}
							</div>
						</button>
						<span className="font-semibold pl-1">Cart</span>
					</div>
				</div>
				<div className="flex justify-center items-center mb-3 lg:hidden">
					<input
						className="text-black px-4 py-2 w-11/12 rounded-l-md border-t-2 border-l-2 border-b-2 border-blue"
						type="text"
					/>
					<button className="px-4 py-3 rounded-r-md border-t-2 border-r-2 border-b-2 border-blue">
						<BsSearch className="h-4 w-4 text-blue-500" />
					</button>
				</div>
				<ul className="lg:flex my-5 hidden">
					<li>
						<Link className="text-white pl-0 py-3" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="text-white ml-2 pl-3 py-3" to="/products">
							Products
						</Link>
					</li>
				</ul>
				{Hamburger && (
					<>
						<div className="text-black h-screen w-4/5 inset-0  absolute z-20 flex flex-col bg-white">
							<ul className="px-5 py-6">
								<li>
									<Link className="text-blue-500 pl-2 px-3" to="/">
										Home
									</Link>
								</li>
								<li>
									<Link className="text-blue-500 pl-2 px-3" to="/products">
										Products
									</Link>
								</li>
							</ul>
						</div>
						<button
							className="absolute z-30 top-0 right-0 w-1/5 h-screen bg-black bg-opacity-25 cursor-default"
							onClick={clickHamburger}
						></button>
					</>
				)}
				{Cart && (
					<>
						<button
							className="absolute z-50 top-0 left-0 w-1/5 md:w-6/12 xl:w-8/12 h-screen bg-black bg-opacity-25 cursor-default"
							onClick={clickCart}
						></button>
						<div className="text-black h-screen w-4/5 md:w-6/12 xl:w-4/12 right-0 top-0 bottom-0 absolute z-50 flex flex-col bg-white">
							<div className="flex flex-col h-full justify-between">
								<div className="overflow-auto px-5 py-6">
									<table className="w-full text-left">
										<thead>
											<tr className="border-b">
												<th className="pb-3">#</th>
												<th className="text-center pb-3">Img</th>
												<th className="pb-3">Name</th>
												<th className="pb-3">Price</th>
												<th className="text-center pb-3">Delete</th>
											</tr>
										</thead>
										<tbody>
											{state?.cart?.map((product, index) => (
												<SingleProductCard
													key={index}
													img={product.image}
													name={product.title}
													price={product.price}
													unidad={product.count}
													id={product.id}
													// max={product.max}
												/>
											))}
										</tbody>
									</table>
								</div>
								<div className="pt-4 mt-3 bg-gray px-5 py-6">
									<div className="flex justify-between">
										<p className="font-semibold">TOTAL</p>
										<span className="font-semibold">${state.total}</span>
									</div>
									<Link
										to={"/checkout"}
										className="block text-center bg-green w-full text-white py-4 rounded text-2xl font-extrabold uppercase mb-1.5 hover:bg-greenTwo"
									>
										Checkout
									</Link>
									<button
										onClick={clickCart}
										className="bg-grayTwo w-full text-white py-4 rounded text-2xl font-extrabold uppercase hover:bg-grayThree"
									>
										Continue shopping
									</button>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</nav>
	);
};

export default Nabar;
