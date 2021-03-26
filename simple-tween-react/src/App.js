import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function App() {
	const ref = useRef(null);

	useEffect(() => {
		const element = ref.current;
		gsap.core.Tween.to(element.querySelector('.circle'), 2, {
			x: 150,
			y: 150,
			background: 'blue',
			ease: 'easeInOut',
		});
	}, []);

	return (
		<div className='main' ref={ref}>
			<div className='circle' />
		</div>
	);
}

export default App;
