import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//Views
import Home from "./views/Home/Home";
import Page404 from "./views/404/Page404";
import Products from "./views/Products/Products";
import ProductDetails from "./views/ProductDetails/ProductDetails";
import Checkout from "./views/Checkout/Checkout";

//Context
import { StoreProvider } from "./context/StoreContext";

function App() {
	return (
		<StoreProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/products/:code" element={<ProductDetails />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</Router>
		</StoreProvider>
	);
}

export default App;
