import React, { useEffect, useContext, useState } from "react";
import ButtonTop from "../../components/Custom/ButtonTop/ButtonTop";

//Components
import Navbar from "../../components/Custom/Navbar/Navbar";
import NavbarFilter from "../../components/Home/NavbarFilter/NavbarFilter";
import SingleProduct from "../../components/Home/SingleProduct/SingleProduct";
import ButtonsRedSocial from "../../components/Custom/ButtonsRedSocial/ButtonsRedSocial";

//Context
import StoreContext from "../../context/StoreContext";

//Styles
import "./Home.styles.css";

const Home = () => {
	const [nameFilter, setNameFilter] = useState(["all"]);
	const [category, setCategory] = useState("all");
	const { state, dispatch } = useContext(StoreContext);

	useEffect(() => {
		const handleFetchData = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products");
				const result = await response.json();
				dispatch({ type: "ADD_ALL_PRODUCTS", payload: result });

				const res = await fetch("https://fakestoreapi.com/products/categories");
				const resul = await res.json();
				resul.forEach((name) => {
					setNameFilter((prevState) => [...prevState, name]);
				});
			} catch (error) {
				console.log(error);
			}
		};
		handleFetchData();
		return () => {
			setNameFilter([]);
		};
	}, [dispatch]);

	return (
		<>
			<Navbar />

			<div className="flex flex-col-reverse items-center w-10/12 mx-auto background-hero bg-gray justify-evenly lg:flex-row">
				<div className="px-5 lg:w-5/12">
					<h2 className="text-2xl text-black">{state?.list[0]?.title}.</h2>
					<p className="mt-3 text-sm text-gray">
						{state?.list[0]?.description}
					</p>
				</div>
				<div className="lg:w-5/12">
					<img
						className="w-4/12 mx-auto mt-9 sm:mt-10 md:mt-20"
						src={state?.list[0]?.image}
						alt={state?.list[0]?.title}
					/>
				</div>
			</div>

			<div className="container mx-auto mb-4 mt-7">
				{nameFilter?.map((category, index) => (
					<NavbarFilter key={index} name={category} setCategory={setCategory} />
				))}

				<div className="grid grid-cols-1 pt-10 mx-auto box-products md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-7 justify-items-center">
					{state?.list?.length > 0 &&
						state.list.map((product) =>
							category === "all" || category === product.category ? (
								<SingleProduct
									key={product.id}
									img={product.image}
									name={product.title}
									code={product.id}
									category={product.category}
								/>
							) : null
						)}
				</div>
			</div>

			<ButtonsRedSocial />

			<ButtonTop />
		</>
	);
};

export default Home;
