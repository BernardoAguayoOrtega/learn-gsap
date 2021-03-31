import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<div class='row row1'>
				<div class='column col1'>
					<p>Panel 1 (.circle)</p>
					<div class='circle shape'></div>
				</div>
				<div class='column col2'>
					<p>Panel 2 (.square)</p>
					<div class='square shape'></div>
				</div>
				<div class='column col3'>
					<p>Panel 3 (.rectangle)</p>
					<div class='rectangle shape'></div>
				</div>
			</div>

			<div class='row row2'>
				<div class='column col4'>
					<p>Panel 4 (.triangle)</p>
					<div class='triangleContainer'>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
						<div class='triangle shape'></div>
					</div>
				</div>
				<div class='column col5'>
					<p>Panel 5 (.oval)</p>
					<div class='oval shape'></div>
				</div>
				<div class='column col6'>
					<p>Panel 6 (.pacman)</p>
					<div class='pacman shape'></div>
					<div class='pacman shape'></div>
					<div class='pacman shape'></div>
					<div class='pacman shape'></div>
					<div class='pacman shape'></div>
					<div class='pacman shape'></div>
					<div class='pacman shape'></div>
					<div class='pacman shape'></div>
				</div>
			</div>

			<div class='playback_controls_row'>
				<a href='#0' class='playbackButton playButton'>
					Play
				</a>
				<a href='#0' class='playbackButton pauseButton'>
					Pause
				</a>
				<a href='#0' class='playbackButton resumeButton'>
					Resume
				</a>
				<a href='#0' class='playbackButton reverseButton'>
					Reverse
				</a>
				<a href='#0' class='playbackButton slowButton'>
					Slow
				</a>
				<a href='#0' class='playbackButton fastButton'>
					Fast
				</a>
				<a href='#0' class='playbackButton seekButton'>
					Seek
				</a>
				<a href='#0' class='playbackButton progressButton'>
					Progress
				</a>
			</div>
		</div>
	);
}

export default App;
