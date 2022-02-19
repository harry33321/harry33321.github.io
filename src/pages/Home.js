import React from 'react';
import Type from './components/Type';
import { Bounce, Fade, Flip, Zoom } from 'react-reveal';
import homeLogo from '../Assets/HomeLogo.svg';
import { Col, Container, Row } from 'react-bootstrap';


export default function Home() {

	return (
		<div>
			<h1 className='homeHeader'>
				<Type /><br />
			</h1>
			<Container className='homeContent'>
				<Bounce bottom cascade >
					<div className="homeLeft">
						<h2>
							<p>Hello<span className="wave">👋🏻</span><br />I'm Harry, <br />a Junior Web Developer.</p>
						</h2>
					</div>
				</Bounce>
				<Flip right>
					<img src={homeLogo} alt="homeLogo" />
				</Flip>
			</Container >
		</div >
	)
}