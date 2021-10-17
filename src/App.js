import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//Views
import Home from "./views/Home/Home";
import Page404 from "./views/404/Page404";
import Products from "./views/Products/Products";
import ProductDetails from "./views/ProductDetails/ProductDetails";

//Context
import { ProductsListProvider } from "./context/ProductsListContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
	return (
		<ShoppingCartProvider>
			<ProductsListProvider>
				<Router>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/products" exact>
							<Products />
						</Route>
						<Route path="/products/:code" exact>
							<ProductDetails />
						</Route>
						<Route path="*">
							<Page404 />
						</Route>
					</Switch>
				</Router>
			</ProductsListProvider>
		</ShoppingCartProvider>
	);
}

export default App;
