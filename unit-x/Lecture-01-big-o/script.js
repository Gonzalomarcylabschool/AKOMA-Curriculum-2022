//O(1)

function arrayLength(arr){
  console.log(`arrayLength`)
  let counter = 0
  counter++
  console.log(counter)
  return `${arr.length}`;
}

const arrlength = [1, 2, 3, 4]
const arrlength1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const arrlength2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

arrayLength(arrlength);
arrayLength(arrlength1);


// O(log n)
function binarySearch(arr, target) {
  console.log(`array length is ${arr.length}`)
  console.log(`binarySearch`)
  let left = 0;
  let right = arr.length - 1;
  opCounter = 0
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    opCounter++
    console.log(opCounter);
  }
  return -1;
}
const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 12, 44, 5544, 234, 23 , 34, 22, 4, 44, 5544, 234, 23 , 34, 22, 4]

binarySearch(arr);
binarySearch(arr2);
binarySearch(arrlength2);
//O(n)

function addUpTo(n) {
  console.log(`addUpTo`)
  let total = 0;
  let counter = 0
  for (let i = 1; i <= n; i++) {
    total += i;
    counter++
    console.log(counter);
  }
  return total;
};
addUpTo(1);
addUpTo(2);
addUpTo(3);

//O(n log n)
const arrays = [[1,2,3,4], [1, 3, 5, 7, 8], [8, 6, 3, 2]] 
function findInArrays(arr, target){
  console.log(`findInArrays`)
  let counter = 0; 
  for (let i = 0; i< arr.length; i++ ){
    counter++
    console.log(counter);
    binarySearch(arr[i], target);
  }
}
findInArrays(arrays, 2);

// O(n^2)
  function printAllPairs(n) {
    let counter = 0
    for (let i = 0; i < n; i++) {
      counter++
      console.log(counter)
      for (let j = 0; j < n; j++) {
        console.log(i, j);
        counter++
        console.log(counter)
      }
    }
  }



  // O(2^n)
function permute(str, l, r) {
  if (l == r) {
        console.log(str);
  } else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      permute(str, l + 1, r);
      str = swap(str, l, i);
    }
  }
}
function swap(str, i, j) {
  let temp = str[i];
  str[i] = str[j];
  str[j] = temp;
  return str;
}

const input = 'a'
// console.log(permute(input.split(""), 0, input.length - 1));
const input1 = 'ab';
// console.log(permute(input1.split(""), 0, input1.length - 1));
const input2 = 'abc';
//  console.log(permute(input2.split(""), 0, input2.length - 1));
const input3 = 'abcd'
 console.log(permute(input3.split(""), 0, input3.length - 1));

const fibonacci = (n) => (
  n <= 2 ? 1 
  : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(11));
//fibonacci(10 - 1(9))+ fibonacci(10 - 2(8))
//fibonacci(9 - 1(8)) +fibonacci(9 - 2(7))|fibonacci(8 - 1(7))+fibonacci(8 - 2(6))

//rules for simplification
//product rule 

//You can remove any constants
// O(5 * n) = O(n)
// O( n * n * 15) = O( n^2 )

// O (n / 3) = O(1/3 * n)= O(n)

//sum rule
// We keep the largest value
// O(5 + n^2) =  O(n^2)

//O(n^2 + n)= O(n^2)

// O(n + 500 n^3 + n^2) = O(n^3)
// O(n^ + log())