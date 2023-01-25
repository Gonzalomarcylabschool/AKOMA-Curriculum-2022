# Big O Notation

## The Why?
In Computer Science there needed to be a way to express the time complexity of an algorithm in a way that is independent of the specific hardware or programming language being used. I just got a Mac mini with an M2 pro CPU, 16 gb of unified memory, and a nvme m.2 SSD with dram. Let's compare that to my laptop from 5 years ago that has a i5 8 generation CPU, and 8 gb of ram with and SSD. It doesn't matter if you know any of this means! In short, my new computer is better, fast... stronger. So if I run an algorithm on my new computer it will be much fast. But is it be cause I used the best Algorithm? 

This is why we need to understand Big O notation. It provides a high-level view of how the running time of an algorithm scales with the size of the data it receives. Before we dive in lets remind ourselves of what an algorithm is. 

## What is an algorithm?

An algorithm is a set of instructions that can be followed to accomplish a specific task or solve a problem. Think of it like a recipe for cooking a meal, where each step outlines what needs to be done in order to achieve the final result. Just as a recipe tells you what ingredients to use and in what order to combine them, an algorithm provides a step-by-step process for solving a problem or completing a task.

Let's think of this in terms that we have talked about before. 

Tell me the directions of how to get to campus from your home.

## How do we measure the efficiency of an algorithm?

There are several ways to measure the efficiency of an algorithm, but we will talk about Big O!

Big O notation is a way to describe the performance of an algorithm in terms of the amount of resources (usually time, and space) it takes to run, as the size of the input data increases. In JavaScript, we typically use Big O notation to describe the time complexity of an algorithm, although it can also be used to describe space complexity.

*Runtime Complexity*: This measures actual amount of time it takes for an algorithm to complete its execution on a specific piece of hardware, using a specific programming language and a specific input

*Time Complexity*: This measures the amount of time an algorithm takes to complete as a function of the size of the input. 

*Space Complexity*: This measures the amount of memory an algorithm uses based the size of the input into the function. 

There are several different types of complexity that can be described using Big O notation, including:

O(1), or constant time: An algorithm that takes the same amount of time to run regardless of the size of the input data.
* O(1) amortized: There is a chance that an algorithm is O(1) unless there is no more space for the operation to happen. 

O(log n), or logarithmic time: An algorithm that takes a logarithmic amount of time to run based on the size of the input data. (This means that as the size of the input data increases, the number of operations performed by the algorithm increases at a slower rate.)

O(n), or linear time: An algorithm that takes a linear amount of time to run based on the size of the input data.

O(n log (n)),  logarithmic linear, is algorithm that takes n log n time to run based on the size of the input data. (you may see it as O(n log n)).

O(n^2), or quadratic time: An algorithm that takes a quadratic amount of time to run based on the size of the input data.

O(2^n) or exponential time: An algorithm that takes an exponential amount of time to run based on the size of the input data.

O(n!) pr Factorial:  This means that as the size of the input data increases, the number of operations performed by the algorithm increases rapidly (they generate all the possible permutations or combinations of a set of data).

It's important to note that the time complexity is not always the only thing that matters when choosing an algorithm, other factors such as memory usage, readability, and maintainability also play an important role.

Here are some examples of how to analyze the time complexity of a few JavaScript functions:

Example 1:

```js
function arrayLength(arr){
  return arr.length;
}
```
This function has a time complexity of O(1) because it will only preform one operation. 

Example 2: 

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
    console.log(middle);
  }
  return -1;
}
```
This function has a time complexity of O(log n) because with each iteration of the while loop, the size of the input data is being divided in half.

Example 4:

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

Example 5:

```js
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
```
This is an example of O(2^n)


It's important to note that these are examples of the worst-case scenarios for each function, and that the most efficient algorithm is not always the best choice, as other factors such as ease of implementation and maintainability should also be considered.

## Why is it important to assess how an algorithm's runtime?

Assessing how an algorithm's runtime grows in relation to the size of its input is important because it allows us to understand the performance of the algorithm and make informed decisions about which algorithm to use for a given problem.

When the size of the input data is small, the difference in performance between different algorithms may not be significant, but as the input size grows, the difference in performance can be huge! It can help identify performance bottlenecks and optimize the algorithm to improve its performance. It can also help to identify and prevent performance issues in large-scale systems.

* What are common algorithm runtime and how do they describe how and which algorithms are associated with them?

[Here are some more Algorithms and Abstract data types and their runtime](https://www.bigocheatsheet.com/)

## Key Terms`
* Big-O Notation
* Runtime Complexity
* Time Complexity
* Space Complexity
* O(1) - constant time
* O(_n_) - linear time
* O(_n_<sup>2</sup>) - quadratic time
* O(log _n_) - log time
* O(_n_ * log _n_) - log linear time
* O(2<sup>_n_</sup>) - exponential time
* O(_n_!) - factorial time