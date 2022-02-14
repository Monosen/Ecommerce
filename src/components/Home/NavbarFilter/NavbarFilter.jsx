import React from "react";

const NavbarFilter = ({ name, setCategory }) => {
	const handlerCategory = () => {
		setCategory(name);
	};

	return (
		<button
			className="mr-5 text-sm uppercase text-gray"
			onClick={handlerCategory}
		>
			{name}
		</button>
	);
};

export default NavbarFilter;
