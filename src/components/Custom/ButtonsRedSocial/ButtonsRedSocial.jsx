import React from "react";

import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

const ButtonsRedSocial = () => {
	return (
		<section className="fixed left-0 flex flex-col items-start justify-center w-10 bottom-1/2 h-28">
			<a
				className="flex items-center justify-center w-10 h-10 bg-white border"
				href="https://www.facebook.com/"
			>
				<BsFacebook />
			</a>
			<a
				className="flex items-center justify-center w-10 h-10 bg-white border"
				href="https://www.instagram.com/"
			>
				<BsInstagram />
			</a>
			<a
				className="flex items-center justify-center w-10 h-10 bg-white border"
				href="https://twitter.com/"
			>
				<BsTwitter />
			</a>
		</section>
	);
};

export default ButtonsRedSocial;
