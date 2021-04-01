// TweenMax.to('.circle', 1, { x: 100 });
// TweenMax.to('.square', 1, { x: 100, delay: 1 });
// TweenMax.to('.rectangle', 1, { x: 100, delay: 2 });

const tlAnimation = new TimelineMax();
tlAnimation
	.to('.circle', 1, { x: 100, ease: Power2.easeIn }, 'circleRectangle')
	.to('.square', 1, { x: 100, ease: Power2.easeIn })
	.to('.rectangle', 1, { x: 100, ease: Power2.easeIn }, 'circleRectangle');

TweenMax.staggerFrom('.triangle', 1, { x: -100, y: -100, opacity: 0 }, 0.2);

TweenMax.staggerFrom('.pacman', 1, { x: 100, y: 100, opacity: 0 }, 0.2);

const secondTlAnimation = new TimelineMax({
	repeat: -1,
	repeatDelay: 2,
	yoyo: true,
});

secondTlAnimation.to('.oval', 1, { x: 100 }).to('.oval', 1, { x: -100 });

const tlShapes = new TimelineMax();

tlShapes.staggerFrom('.shape', 0.5, { x: 50, y: 50, opacity: 0 }), 0.2;
