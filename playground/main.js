// TweenMax.to('.circle', 1, { x: 100 });
// TweenMax.to('.square', 1, { x: 100, delay: 1 });
// TweenMax.to('.rectangle', 1, { x: 100, delay: 2 });

let tlAnimation = new TimelineMax();
tlAnimation
	.to('.circle', 1.5, { x: 100 })
	.to('.square', 1, { x: 100 })
	.to('.rectangle', 0.7, { x: 100 });
