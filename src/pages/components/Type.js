import React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					"a Junior Web Developer.",
					"a Front-End Developer.",
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
}