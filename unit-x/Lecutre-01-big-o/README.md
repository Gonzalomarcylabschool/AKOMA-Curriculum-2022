#Big O Notation


## What is an algorithm?

An algorithm is a set of instructions that can be followed to accomplish a specific task or solve a problem. Think of it like a recipe for cooking a meal, where each step outlines what needs to be done in order to achieve the final result. Just as a recipe tells you what ingredients to use and in what order to combine them, an algorithm provides a step-by-step process for solving a problem or completing a task.

Let's think of this in terms that we have talked about before. 

Tell me the directions of how to get to campus from your home.

## How do we measure the efficiency of an algorithm?

There are several ways to measure the efficiency of an algorithm, but we will talk about Big O!

Big O notation is a way to describe the performance of an algorithm in terms of the amount of resources (usually time, and space) it takes to run, as the size of the input data increases. In JavaScript, we typically use Big O notation to describe the time complexity of an algorithm, although it can also be used to describe space complexity.

*Time Complexity*: This measures the amount of time an algorithm takes to complete as a function of the size of the input. 

*Space Complexity*: This measures the amount of memory an algorithm uses based the size of the input into the function. 

There are several different types of time complexity that can be described using Big O notation, including:

O(1), or constant time: An algorithm that takes the same amount of time to run regardless of the size of the input data.

O(log n), or logarithmic time: An algorithm that takes a logarithmic amount of time to run based on the size of the input data.

O(n), or linear time: An algorithm that takes a linear amount of time to run based on the size of the input data.

O(n log n): An algorithm that takes n log n time to run based on the size of the input data.

O(n^2), or quadratic time: An algorithm that takes a quadratic amount of time to run based on the size of the input data.

O(2^n) or exponential time: An algorithm that takes an exponential amount of time to run based on the size of the input data.

It's important to note that the time complexity is not always the only thing that matters when choosing an algorithm, other factors such as memory usage, readability, and maintainability also play an important role.

Here are some examples of how to analyze the time complexity of a few JavaScript functions:

Example 1:

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
    console.log(total);
  }
  return total;
};
```
This function has a time complexity of O(n) because the amount of operations being performed is directly proportional to the input size.

Example 2:

```js
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```
This function has a time complexity of O(n^2) because for each element in the input size, it performs n operations.

Example 3:
```js
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
  }
  return -1;
}
```
This function has a time complexity of O(log n) because with each iteration of the while loop, the size of the input data is being divided in half.

It's important to note that these are examples of the worst-case scenarios for each function. The





Number of operations: The number of operations an algorithm performs to solve a problem is another way of measuring its efficiency. For example, a sorting algorithm that uses a simple comparison operation to sort a list is more efficient than one that uses multiple comparison operations.

Approximate/experimental measurements: It could be done by running the algorithm on different inputs of various sizes and measure the execution time.

It's important to note that the most efficient algorithm is not always the best choice, as other factors such as ease of implementation and maintainability should also be considered.
* Why is it important to assess how an algorithm's runtime grows in relation to the size of its input?
* What are common algorithm runtime and how do they describe how and which algorithms are associated with them?

## Key Terms`
* Big-O Notation
* Runtime Complexity
* Space Complexity
* O(1) - constant time
* O(_n_) - linear time
* O(_n_<sup>2</sup>) - quadratic time
* O(log _n_) - log time
* O(_n_ * log _n_) - log linear time
* O(2<sup>_n_</sup>) - exponential time
* O(_n_!) - factorial time