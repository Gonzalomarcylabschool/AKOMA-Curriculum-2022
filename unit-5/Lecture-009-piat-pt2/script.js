

const gamePlay = document.querySelector('#start');//new
//make the variable for the block
const block = document.querySelector('#block');

//make the variable for the character
const character = document.querySelector('#character')

// variable for the score
const scoreUpdate = document.querySelector('#score')

//variable for the lives 
const lives = document.querySelector('#livesCount')
//variable for top score

const levelUpDate = document.querySelector('#level');
let level = 1;

const topScoreUpdate = document.querySelector('#bestScore')

let bestScore = 0; // keep track of the top score

//variable to store the ul
const ul = document.querySelector('ul');



let score = 0 //keep track of the score
let multi = 1;// multiplier for the score 
let blockSpeed = 5;// changes the speed of the block
let blockMove; // move the block across the screen
let blockPos = 759; // position of the block and where it starts
let livesCount = 5 // how many lives you have.

//function to move the block ac



let intervalId;
let jumpHeight = 125;
let position = 191;
let isJumping = false;

function jump() {
  isJumping = true;
  let jumpInterval = setInterval(function() {
    if (position > jumpHeight) {
      position -= 1;
      character.style.top = position + "px";
      
    } else {
      clearInterval(jumpInterval);
      let fallInterval = setInterval(function() {
        if (position <= 191) {
          
          position += 1;
          character.style.top = position + "px";
          
        } else {
          clearInterval(fallInterval);
          isJumping = false;
        }
      }, 10);
    }
  }, .001);
}
let modNum = 500
function moveBlock()  { 
  if(blockPos <= 0){
    blockPos = 780; // 
    score += multi;
    scoreUpdate.textContent = score
    block.style.left = blockPos + 'px'
  } else {
    blockPos -= blockSpeed
    score += multi;
    scoreUpdate.textContent = score
    block.style.left = blockPos + 'px'
  }
 
  if( detectCollision(character, block)){
    if (livesCount === 0){
      blockPos = 759;
      block.style.left = blockPos + 'px'
      alert('game over')
      clearInterval(blockMove);
      if(bestScore < score){
        bestScore = score
        topScoreUpdate.textContent = bestScore;
      }
      const li = document.createElement('li');
      li.textContent = score;
      ul.appendChild(li);
    }
    else {
      livesCount-- 
      lives.textContent = livesCount;
      blockPos = 720;
      score += multi;

    }
  }
  
  if(score % 1000 === 0 && modNum >0){
    modNum -=10;
  }
  if (score % modNum === 0){
    multi++
    blockSpeed++
    level++
    levelUpDate.textContent = level;
  }
}
document.addEventListener("keydown", (e) => {
  
  if (e.key === 'ArrowUp' && !isJumping) { // up key
    jump();
  }
});

document.addEventListener('submit',(e) => {
  e.preventDefault();
  clearInterval(blockMove);
  score = 0 //keep track of the score
  multi = 1;// multiplier for the score 
  blockSpeed = 5;// changes the speed of the block
  blockMove = setInterval(moveBlock, 15); // move the block across the screen
  blockPos = 759; // position of the block and where it starts
  livesCount = 5 // how many lives you have.
  jumpHeight = 125;
  position = 191;
  isJumping = false;
  scoreUpdate.textContent = score
  lives.textContent = livesCount;
})

function detectCollision(div1, div2) {
  // Get the positions and dimensions of the two divs
  var div1Rect = div1.getBoundingClientRect();
  var div2Rect = div2.getBoundingClientRect();

  // Check for horizontal overlap
  var horizontalOverlap = 
    div1Rect.left <= div2Rect.right && div1Rect.right >= div2Rect.left;

  // Check for vertical overlap
  var verticalOverlap = 
    div1Rect.top <= div2Rect.bottom && div1Rect.bottom >= div2Rect.top;

  // Return true if there is both horizontal and vertical overlap
  return horizontalOverlap && verticalOverlap;
}

