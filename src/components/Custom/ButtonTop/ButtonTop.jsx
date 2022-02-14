import React from "react";

import { BsArrowUp } from "react-icons/bs";

const ButtonTop = () => {
	const handlerButtonTop = () => {
		console.log(window.scrollTo({ top: 0, behavior: "smooth" }));
	};

	return (
		<button
			className="fixed flex items-center justify-center w-10 h-10 overflow-hidden text-white bg-black rounded-sm right-7 bottom-7"
			onClick={handlerButtonTop}
		>
			<div className="hover:translate-y-5">
				<BsArrowUp />
			</div>
		</button>
	);
};

export default ButtonTop;
