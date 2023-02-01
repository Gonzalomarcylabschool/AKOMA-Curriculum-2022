function add(number){
  print(number);
  return ++number
}

function print(value){
  console.log(value);
}
let num = 5;
// console.log(num);
// console.log(add(num));

// function printRec(value){ 
//   debugger;
//   console.log(value);
//   printRec(value);
// }

// console.log(printRec(num));

function printRec(value){ 
  console.log(value);
  if(value === 0){
    return done;
  }
  value--;
  printRec(value);
}

 console.log(printRec(num));

function fact(n) {
  return n * factorial(n - 1);
}




function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}


