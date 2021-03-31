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
			background: 'blue',
			ease: Back.easeInOut,
		});

		TweenMax.to(element.querySelector('.square'), 2, {
			x: -150,
			y: -150,
			background: 'yellow',
			scale: 2,
			ease: Back.easeOut,
		});

		TweenMax.from(element.querySelector('#rectangle'), 2, {
			y: 200,
			rotation: 360,
			scale: -1.5,
		});

		TweenMax.from(element.querySelector('ul'), 2, {
			x: 200,
			rotation: 180,
			scale: -1.1,
		});

		TweenMax.to(element.querySelector('li:nth-child(2)'), 2, {
			color: 'red',
		});
	}, []);

	return (
		<div className='main' ref={ref}>
			<div className='circle' />
			<div className='square' />
			<div id='rectangle' />
			<ul>
				<li>random2</li>
				<li>random3</li>
			</ul>
		</div>
	);
}

export default App;
