import React from "react";

//Styles
import "./Loader.styles.css";

const Loader = () => {
	return (
		<div className="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loader;
