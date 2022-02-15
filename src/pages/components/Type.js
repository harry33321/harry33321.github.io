import React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					"Welcome to my portfolio",
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
}