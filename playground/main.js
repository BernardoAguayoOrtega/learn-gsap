// TweenMax.to('.circle', 1, { x: 100 });
// TweenMax.to('.square', 1, { x: 100, delay: 1 });
// TweenMax.to('.rectangle', 1, { x: 100, delay: 2 });

const tlAnimation = new TimelineMax();
tlAnimation
	.to('.circle', 1, { x: 100, ease: Power2.easeIn })
	.to('.square', 1, { x: 100, ease: Power2.easeIn })
	.to('.rectangle', 1, { x: 100, ease: Power2.easeIn });

TweenMax.staggerFrom('.triangle', 1, { x: -100, y: -100, opacity: 0 }, 0.2);

const secondTlAnimation = new TimelineMax();

secondTlAnimation.to('.oval', 1, { x: 100 }).to('.oval', 1, { x: -100 });
