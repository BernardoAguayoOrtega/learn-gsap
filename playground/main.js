// TweenMax.to('.circle', 1, { x: 100 });
// TweenMax.to('.square', 1, { x: 100, delay: 1 });
// TweenMax.to('.rectangle', 1, { x: 100, delay: 2 });

let tlAnimation = new TimelineMax();
tlAnimation
	.to('.circle', 1, { x: 100, ease: Power2.easeIn })
	.to('.square', 1, { x: 100, ease: Power2.easeIn })
	.to('.rectangle', 1, { x: 100, ease: Power2.easeIn });

TweenMax.staggerFrom('.triangle', 1, { x: -100, y: -100, opacity: 0 }, 0.2);
