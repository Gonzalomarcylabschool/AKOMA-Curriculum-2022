//make the variable for the block
const block = document.querySelector('#block');

//make the variable for the character
const character = document.querySelector('#character')

// variable for the score
const scoreUpdate = document.querySelector('#score')

//variable for the lives 
const lives = document.querySelector('#livesCount')


let score = 0 //keep track of the score
let blockMove = setInterval(moveBlock, 15); // move the block across the screen
let blockPos = 759; // position of the block and where it starts
let livesCount = 5 // how many lives you have.

//function to move the block ac
function moveBlock()  { 
  if(blockPos <= 0){
    blockPos = 780; // 
    score++
    scoreUpdate.textContent = score
    block.style.left = blockPos + 'px'
  } else {
    blockPos -= 5
    score++
    scoreUpdate.textContent = score
    block.style.left = blockPos + 'px'
  }
 
  if( detectCollision(character, block)){
    if (livesCount === 0){
      blockPos = 780;
      alert('game over')
      clearInterval(blockMove);
    }
    else {
      livesCount-- 
      lives.textContent = livesCount;
      blockPos = 720;
      score++

    }
  }
}


let intervalId;
let jumpHeight = 130;
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
  }, 1);
}

document.addEventListener("keydown", (e) => {
  if (e.key === 'ArrowUp' && !isJumping) { // spacebar key
    jump();
  }
});

document.addEventListener('submit',(e) => {})

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
