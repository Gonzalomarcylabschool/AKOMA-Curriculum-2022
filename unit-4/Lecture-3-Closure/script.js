// let _counter = 0// becuase we use the "_" infront of the variable name we what would this be considerd?
// function increment(){
//     _counter++
//     return `the value of the counter is ${_counter}`;
// }
// function makeCounter(){
//     let counter = 0;
// }
// makeCounter();
// console.log(counter)

// function makeCoutner() {
    
//     let counter = 0; 
//     return () => {
//         counter++; 
//         console.log(`the value of the counter is ${counter}`);
//     }
// }

// let increment = makeCoutner();
// debugger;
// increment();
// increment();
// increment();
// increment();



function myFunction() {
  let count = 0;
  return () => {
    count++
    console.log(count);
  }
  
}

let x = myFunction();