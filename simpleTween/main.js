// to values
TweenMax.to('.circle', 2, { x: 150, y: 150, background: 'blue', ease: Back.easeInOut });
TweenMax.to('.square', 2, { x: -150, y: -150, background: 'yellow', scale: 2, ease: Back.easeOut });

// from
TweenMax.from('#rectangle', 2, { y:200, rotation: 360, scale: -1.5 })
