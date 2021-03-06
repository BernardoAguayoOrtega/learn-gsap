import './App.css';
import { useEffect, useRef } from 'react';
import { TimelineMax, Power4, TweenMax, Back } from 'gsap/all';

function App() {
	const ref = useRef(null);
	const tl = new TimelineMax({ repeat: -1, repeatDelay: 2, yoyo: true });
	const tl2 = new TimelineMax({ repeat: -1, yoyo: true });

	useEffect(() => {
		const element = ref.current;

		tl2.to(element.querySelector('.oval'), 1, { x: 100 });

		tl.to(
			element.querySelector('.circle'),
			1,
			{ x: 100, ease: Power4.easeOut },
			'circleRectangle',
		)
			.to(element.querySelector('.square'), 1, { x: 100, ease: Power4.easeOut })
			.to(
				element.querySelector('.rectangle'),
				1,
				{
					x: 100,
					ease: Power4.easeOut,
				},
				'circleRectangle',
			);

		TweenMax.to(element.querySelectorAll('.triangle'), 10, {
			borderBottom: '25px solid red',
		});

		TweenMax.staggerFrom(
			element.querySelectorAll('.triangle'),
			1,
			{
				x: -100,
				y: -100,
				opacity: 0,
				ease: Back.easeInOut,
				repeat: -1,
				yoyo: true,
			},
			0.2,
		);
	}, []);

	return (
		<div className='App' ref={ref}>
			<div className='row row1'>
				<div className='column col1'>
					<p>Panel 1 (.circle)</p>
					<div className='circle shape'></div>
				</div>
				<div className='column col2'>
					<p>Panel 2 (.square)</p>
					<div className='square shape'></div>
				</div>
				<div className='column col3'>
					<p>Panel 3 (.rectangle)</p>
					<div className='rectangle shape'></div>
				</div>
			</div>

			<div className='row row2'>
				<div className='column col4'>
					<p>Panel 4 (.triangle)</p>
					<div className='triangleContainer'>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
						<div className='triangle shape'></div>
					</div>
				</div>
				<div className='column col5'>
					<p>Panel 5 (.oval)</p>
					<div className='oval shape'></div>
				</div>
				<div className='column col6'>
					<p>Panel 6 (.pacman)</p>
					<div className='pacman shape'></div>
					<div className='pacman shape'></div>
					<div className='pacman shape'></div>
					<div className='pacman shape'></div>
					<div className='pacman shape'></div>
					<div className='pacman shape'></div>
					<div className='pacman shape'></div>
					<div className='pacman shape'></div>
				</div>
			</div>

			<div className='playback_controls_row'>
				<a href='#0' className='playbackButton playButton'>
					Play
				</a>
				<a href='#0' className='playbackButton pauseButton'>
					Pause
				</a>
				<a href='#0' className='playbackButton resumeButton'>
					Resume
				</a>
				<a href='#0' className='playbackButton reverseButton'>
					Reverse
				</a>
				<a href='#0' className='playbackButton slowButton'>
					Slow
				</a>
				<a href='#0' className='playbackButton fastButton'>
					Fast
				</a>
				<a href='#0' className='playbackButton seekButton'>
					Seek
				</a>
				<a href='#0' className='playbackButton progressButton'>
					Progress
				</a>
			</div>
		</div>
	);
}

export default App;
