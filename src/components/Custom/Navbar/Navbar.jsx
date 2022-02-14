import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

//context
import StoreContext from "../../../context/StoreContext";

//components
import SingleProductCard from "../../ProductDetails/SingleProductCard";

//icons
import { HiMenuAlt1 } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

//Styles
import "./Navbar.styles.css";

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
		<nav className="fixed top-0 z-50 w-full bg-white">
			<div className="container mx-auto">
				<div className="flex justify-between items-center my-3.5 uppercase">
					<div className="inline-flex">
						<button onClick={clickHamburger}>
							<HiMenuAlt1 className="h-7 w-7" />
						</button>
						<span className="pl-1 font-semibold">Menu</span>
					</div>

					<div
						className={`absolute top-0 left-0 flex w-full h-screen  transition-all duration-500 ease-in-out z-50 ${
							Hamburger ? "left-0" : "-left-full"
						}`}
					>
						<div className="relative w-8/12 p-5 text-white bg-black">
							<ul className="">
								<li>
									<Link className="py-3 pl-0" to="/">
										Home
									</Link>
								</li>
							</ul>
							<button
								className="absolute right-5 top-5"
								onClick={clickHamburger}
							>
								<CgClose className="text-3xl" />
							</button>
						</div>
						<button className="w-4/12" onClick={clickHamburger}></button>
					</div>

					<Link className="text-4xl" to="/">
						Logo
					</Link>

					<div className="inline-flex">
						<button className="relative" onClick={clickCart}>
							<BsCart3 className="h-7 w-7" />
							<div className="absolute flex items-center justify-center w-5 h-5 rounded-full bg-blue -bottom-2 -right-1">
								{state.count}
							</div>
						</button>
						<span className="pl-1 font-semibold">Cart</span>
					</div>
				</div>

				<section
					className={`absolute top-0 right-0 flex w-full h-screen transition-all duration-500 ease-in-out  z-50 ${
						Cart ? "right-0" : "-right-full"
					}`}
				>
					<button className="w-4/12 h-screen" onClick={clickCart}></button>
					<div className="w-8/12 text-black bg-white border-l">
						<div className="flex flex-col justify-between h-full">
							<div className="px-5 py-6 overflow-auto">
								<table className="w-full text-left">
									<thead>
										<tr className="border-b">
											<th className="pb-3">#</th>
											<th className="pb-3 text-center">Img</th>
											<th className="pb-3">Name</th>
											<th className="pb-3">Price</th>
											<th className="pb-3 text-center">Delete</th>
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
							<div className="px-5 py-6 pt-4 mt-3 bg-gray">
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
									className="w-full py-4 text-2xl font-extrabold text-white uppercase rounded bg-grayTwo hover:bg-grayThree"
								>
									Continue shopping
								</button>
							</div>
						</div>
					</div>
				</section>
			</div>
		</nav>
	);
};

export default Nabar;
