import React from 'react';
import Type from './components/Type';

export default function Home() {

	return (
		<div>
			<h1 className='App-header'>
				<span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
				<Type />
			</h1>
		</div>
	)
}