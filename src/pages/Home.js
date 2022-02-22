import React, { useEffect } from 'react';
import Type from './components/Type';
import homeLogo from '../Assets/HomeLogo.svg';
import { Container } from 'react-bootstrap';


export default function Home() {

	useEffect(() => {
        const textEl = document.querySelector(".rubber-band");
        if (textEl) {
            const text = textEl.textContent;
            const swap = text.replace(/\s/g, " ");
            const letters = swap.split("");
            const makeSpan = (letter) =>
                `<span class="rubber-span">${letter}</span>`;
            let html = "";
            letters.forEach((letter) => (html += makeSpan(letter)));
            textEl.innerHTML = html;
        }
        const spans = document.querySelectorAll(".rubber-span");
        spans.forEach((span) => {
            span.addEventListener("mouseover", () =>
                span.classList.add("animated", "rubberBand")
            );
        });
        spans.forEach((span) =>
            span.addEventListener("mouseout", () =>
                setTimeout(() => {
                    span.classList.remove("animated", "rubberBand");
                }, 1000)
            )
        );
    }, []);

	useEffect(() => {
		const reveals = document.querySelectorAll(".revealRotate");
		reveals.forEach(reveal => {
			reveal.classList.add("reveal-active");
		});
	}, []);

	return (
		<div>
			<h1 className='homeHeader rubber-band'>
				<p>Welcome to my portfolio!</p>
			</h1>
			<Container className='homeContent'>
				<div className="homeLeft">
					<h2>
						<p>Hello<span className="wave">👋🏻</span><br />I'm Harry, <br /><Type /></p>
					</h2>
				</div>
				<img src={homeLogo} className="revealRotate" alt="homeLogo" />
			</Container>
		</div>
	)
}