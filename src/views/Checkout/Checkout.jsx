import React, { useContext } from "react";

//Context
import StoreContext from "../../context/StoreContext";

//Components
import Navbar from "../../components/Custom/Navbar/Navbar";
import SingleProductCard from "../../components/ProductDetails/SingleProductCard";

//Styles
import "./Checkout.styles.css";

const Checkout = () => {
	const { state } = useContext(StoreContext);
	return (
		<>
			<Navbar />
			<h1 className="text-4xl font-semibold text-center mt-40 mb-7">
				Checkout
			</h1>
			<form className="box--ckeckout flex justify-center flex-col items-center px-3.5  md:flex-row md:items-start mx-auto">
				<div className="w-full md:w-6/12 md:mr-5 lg:mr-8">
					<div className="sm:grid sm:grid-cols-2 sm:gap-x-2.5">
						<input
							className="border-black px-2 py-2.5 border rounded w-full mb-2.5"
							type="text"
							placeholder="Name"
							required
						/>
						<input
							className="border-black px-2 py-2.5 border rounded w-full mb-2.5"
							type="text"
							placeholder="Last Name"
							required
						/>
					</div>
					<div className="sm:grid sm:grid-cols-2 sm:gap-x-2.5">
						<input
							className="border-black px-2 py-2.5 border rounded w-full mb-2.5"
							type="text"
							placeholder="Email"
							required
						/>
						<input
							className="border-black px-2 py-2.5 border rounded w-full mb-2.5"
							type="text"
							placeholder="Telephone"
							required
						/>
					</div>
					<input
						className="border-black px-2 py-2.5 border rounded block w-full mb-2.5"
						type="text"
						placeholder="Address"
						required
					/>
					<input
						className="border-black px-2 py-2.5 border rounded block w-full mb-2.5"
						type="text"
						placeholder="Reference"
						required
					/>
					<textarea
						className="border-black border w-full mb-3.5 px-2 py-2.5"
						name=""
						id=""
						cols="30"
						rows="10"
						placeholder="Additional Information..."
					></textarea>
				</div>
				<div className="md:w-5/12">
					<div className="overflow-auto box-products">
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
					<div className="mt-7 text-center sm:grid sm:grid-cols-2 sm:gap-x-3 sm:items-center">
						<p className="font-semibold text-xl sm:text-left">
							Total to pay: ${state?.total}
						</p>
						<input
							type="submit"
							className="my-3 py-3 px-3 bg-blue inline-block text-white rounded hover:text-blue hover:bg-white hover:border-blue border"
							value="Go to Pay"
						/>
					</div>
				</div>
			</form>
		</>
	);
};

export default Checkout;
