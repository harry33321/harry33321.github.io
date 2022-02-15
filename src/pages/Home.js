import React from 'react';
import Type from './components/Type';

export default function Home() {

	return (
		<div>
			<h1 className='homeHeader'>
				<Type /><br/>
			</h1>
			<h2 className='homeContent'>
				<p><span className="wave">👋🏻</span><br />I'm Harry, <br />a Front End Developer.</p>
			</h2>
		</div>
	)
}