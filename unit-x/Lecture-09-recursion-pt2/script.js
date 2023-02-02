// function countDown(n){
//   debugger;
//   if (n === 0){
//       return;
//   }
//   console.log(n)
//   return countDown(n - 1);
// }

function countDown(n){
  debugger;
  if (n === 1){
    console.log(n)
      return;
  }
  console.log(n)
  countDown(n - 1);
  
}

function countUp(n) {
  debugger;
if (n === 1) {
  console.log(n);
  return;
}
countUp(n - 1);
console.log(n);
}

const reverse = (string) => {
  debugger;
  if ( string.length === 1 ) {
    return string;
  }
  return string[string.length - 1] + reverse(string.slice(0, string.length-1));
  // base case: if the length of the string is 1
    // return the string
  // last character + the next last character
};

