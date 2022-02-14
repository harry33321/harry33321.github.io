import Particles from "react-tsparticles";

export default function Particle() {
	// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	// const particlesInit = main => console.log(main);
	// const particlesLoaded = container => console.log(container);

	return (
		<Particles
			id="tsparticles"
			// init={particlesInit}
			// loaded={particlesLoaded}
			options={{
				background: {
					color: {
						value: "#181a27",
					},
				},
				fpsLimit: 60,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: "push",
						},
						// onHover: {
						//   enable: true,
						//   mode: "repulse",
						// },
						// resize: true,
					},
					modes: {
						bubble: {
							distance: 400,
							duration: 2,
							opacity: 0.8,
							size: 40,
						},
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: "#ffffff",
					},
					// links: {
					//   color: "#ffffff",
					//   distance: 150,
					//   enable: true,
					//   opacity: 0.5,
					//   width: 1,
					// },
					collisions: {
						enable: true,
					},
					move: {
						direction: "none",
						enable: true,
						outMode: "bounce",
						random: true,
						speed: 0.05,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 1000,
						},
						value: 100,
					},
					opacity: {
						animation: {
							enable: true,
							minimumValue: 0.05,
							speed: 1,
							sync: false
						},
						random: {
							enable: true,
							minimumValue: 0.05
						},
						value: 1
					},
					shape: {
						type: "circle",
					},
					size: {
						random: true,
						value: 2,
					},
				},
				detectRetina: true,
			}}
		/>
	);
}
