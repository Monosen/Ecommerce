import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

//context
import ShoppingCartContext from "../context/ShoppingCartContext";

//components
import SingleProductCard from "./ProductDetails/SingleProductCard";

//icons
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Nabar = () => {
	const [Hamburger, setHamburger] = useState(false);
	const [Cart, setCart] = useState(false);

	const { cartList, handleValueMax, handleTotal } =
		useContext(ShoppingCartContext);

	const clickHamburger = () => {
		setHamburger(!Hamburger);
	};

	const clickCart = () => {
		setCart(!Cart);
		if (Cart === false) {
			handleValueMax();
		}
	};

	return (
		<nav className="w-full fixed bg-black text-white">
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
					<div className="justify-center items-center hidden lg:flex ">
						<input
							className="text-black px-40 py-3 rounded-l-md border-t-2 border-l-2 border-b-2 border-blue"
							type="text"
						/>
						<button className="px-4 py-4 rounded-r-md border-t-2 border-r-2 border-b-2 border-blue">
							<BsSearch className="h-4 w-4 text-blue-500" />
						</button>
					</div>
					<div className="inline-flex">
						<button onClick={clickCart}>
							<RiShoppingCart2Fill className="h-7 w-7 text-blue" />
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
							className="absolute z-30 top-0 left-0 w-1/5 h-screen bg-black bg-opacity-25 cursor-default"
							onClick={clickCart}
						></button>
						<div className="text-black h-screen w-4/5 right-0 top-0 bottom-0 absolute z-20 flex flex-col bg-white">
							<div className="px-5 py-6">
								{cartList.map((product) => (
									<SingleProductCard
										key={product.id}
										img={product.img}
										name={product.name}
										costo={product.costo}
										unidad={product.unidad}
										id={product.id}
										max={product.max}
									/>
								))}
							</div>
							<p>valor Total: ${handleTotal()}</p>
						</div>
					</>
				)}
			</div>
		</nav>
	);
};

export default Nabar;
