"use client";

import Lottie, { Options } from "react-lottie";

import flyingMoney from "../../public/lottie/thumbsUp.json";

export default function Animation() {
	const defaultOptions: Options = {
		animationData: flyingMoney,
		autoplay: true,
		loop: true,
	};
	return (
		<div>
			<Lottie
				options={defaultOptions}
				width={150}
				height={150}
			/>
		</div>
	);
}
