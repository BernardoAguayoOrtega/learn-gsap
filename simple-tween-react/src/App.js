import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';
import { TweenMax, Back } from 'gsap/all';

function App() {
	const ref = useRef(null);

	useEffect(() => {
		const element = ref.current;
		TweenMax.to(element.querySelector('.circle'), 2, {
			x: 150,
			y: 150,
			background_: 'blue',
			ease: Back.easeInOut,
		});

		TweenMax.to(element.querySelector('.square'), 2, {
			x: -150,
			y: -150,
			background_: 'yellow',
			scale: 2,
			ease: Back.easeOut,
		});

		TweenMax.from(element.querySelector('#rectangle'), 2, {
			y: 200,
			rotation: 360,
			scale: -1.5,
		});
	}, []);

	return (
		<div className='main' ref={ref}>
			<div className='circle' />
			<div className='square' />
			<div id='rectangle' />
		</div>
	);
}

export default App;
