import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Tween } from 'react-gsap';

function App() {
	useEffect(() => {}, []);

	return (
		<Tween to={{ x: 150, y: 150, background: 'blue' }} duration={2} ease='back.out(1.7)'>
			<div className='circle' />
		</Tween>
	);
}

export default App;
