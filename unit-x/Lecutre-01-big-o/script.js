//O(1)

function arrayLength(arr){
  return arr.length;
}

// O(log n)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    console.log(middle);
  }
  return -1;
}
// O(n^2)
  function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        console.log(i, j);
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
// console.log(permute(input2.split(""), 0, input2.length - 1));
const input3 = 'abcd'
// console.log(permute(input3.split(""), 0, input3.length - 1));