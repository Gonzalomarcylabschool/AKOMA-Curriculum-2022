// function add(number){
//   print(number);
//   return ++number
// }

// function print(value){
//   console.log(value);
// }
let num = 1000;
// console.log(num);
// console.log(add(num));

// function printRec(value){ 
//   debugger;
//   console.log(value);
//   printRec(value);
// }

// printRec(num);

function printRec(value){ 
  if(value === 0){//base case
    return;
  }
  // console.log(value);
  value--;
  printRec(value);// recursion
}

// printRec(num);

// function fact(n) {
//   return n * factorial(n - 1);
// }

// function factorial(n) {
//   debugger;
//   if (n === 1) {
    // return 1;
//   }
//   return n * factorial(n - 1);
// }

function printLoop(value){
  while (value >= 0){
    // console.log(value);
    value--;
  }
}
console.time();
printRec(num)
console.timeLog()
printLoop(num)
console.timeLog()

