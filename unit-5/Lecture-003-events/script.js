// debugger;
// console.log(document.querySelector('body'));

// document.addEventListener('DOMContentLoaded', () => {//will listen to when the DOM is loaded
//   // debugger
//   console.log(document.querySelector('body'));
// })
// callBack(print);

// function callBack(func){
//   debugger;
//   func();
// }

// function print(){
//   console.log('test')
// }
document.addEventListener('DOMContentLoaded', () => {//will listen to when the DOM is loaded
  //   // debugger
  //   console.log(document.querySelector('body'));
  const friendsList = ['Laura', 'Ben', 'Itzel', 'Ann', 'Maya', 'Ruben']


  friendsList.forEach(f => addFriend(f))


  // function addFriend(friendName){
  //   console.log(friendName);
  //   let li = document.createElement("li");
  //   li.textContent = friendName;
  //   document.querySelector('#list').appendChild(li);
  // }

  // let countOne = 0;
  // const clickCount1 = document.getElementById('counterOne');
  // document.getElementById("myBtn1").addEventListener("click", buttonClick);

  // function buttonClick(){
  //   countOne++
  //   clickCount1.innerText = countOne;
  // }
})






//debugger;



document.addEventListener('DOMContentLoaded', (event) => {

  let countOne = 0;
  let countTwo = 0;
  let countThree = 0;
  const clickCount1 = document.getElementById('counterOne');
  const clickCount2 = document.getElementById('counterTwo');
  const clickCount3 = document.getElementById('counterThree');
  document.getElementById("myBtn1").addEventListener("click", function(){buttonClick(clickCount1)});
  document.getElementById("myBtn2").addEventListener("click", function(){buttonClick(clickCount2)});
  document.getElementById("myBtn3").addEventListener("click", function(){buttonClick(clickCount3)});
  
  function buttonClick(button){
    let count = 0;
    if(button === clickCount1){
      countOne++
      count = countOne;
    } else if(button === clickCount2) {
      countTwo++
      count = countTwo;
    } else {
      countThree++
      count = countThree;
    }
    button.textContent = count
  }
  
  
  // document.getElementById('submit').addEventListener('click', comment);
  document.getElementById('submit').onclick = comment();

  function comment(e){
    e.preventDefault();
    const input = document.querySelector('#pageComment');
    const p = document.createElement("p");
    p.textContent = input.value
    document.getElementById('comment').appendChild(p);
    input.value = ''

  }

  let colorCount = 0;
  const colors = ['blue', 'green', 'coral', 'red', 'pink']
  document.getElementById('pageComment').oninput = function(){
    // debugger;
    colorCount++
    document.getElementById('submit').style.backgroundColor = colors[colorCount % 5]
  }
});


