const canvas = document. getElementById('canvas1');
const ct = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas. height = 600;
const playerImage = new Image ();
playerImage.src = 'shadow_ dog.png'
const spriteWidth = 575 ;
const spriteHeight = 523 ;
let frameX = 0;
let frameY = 4;
let gameFrame = 0;
const staggerFrames = 5 ;
const spriteAnimations = [];


function animate(){
ctx.clearRect (0, 0, CANVAS_WIDTH, CANVAS_HEIGHT) ;
let position = Math. floor (gameFrame/staggerFrames) % 11;
frame = spritewidth * position;
ctx.drawImage (playerImage, frame, framer * spriteHeight, spritewidth, spriteHeight, 0, 0, spritewidth, spriteHeight);
gameFrame++;
requestAnimationFrame (animate);
};
animate();