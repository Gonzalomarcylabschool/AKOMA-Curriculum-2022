# PEDAC

**[00:00 - 00:05]**- | Introduction | The why |

**[00:05 - 00:15]**- | Vocabulary | 

**[00:15 - 00:30]**- | Structured Approach | PEDAC |

**[00:30 - 00:60]**- | Pratice PEDAC | 

## The Why

You have been solving a lot of coding questions with data structures and algorithms but do you understand the importance of it. Students and Developers have this opinion that data structure and algorithms only help in interviews and after that, there is no use of all those complicated stuff in daily jobs. 

You might be happy with learning a new language or framework and building some applications with that, but once you will enter the industry, you will realize that your job is not just writing the code and make things work. The real job will be to write the right amount of good code, which means it should be efficient and robust and here comes the role of data structures and algorithms. Data Structures and Algorithms not only help in getting the logic for your program but also helps in writing the efficient code for your software. 

This is why we need to take a structured approach to solving complex problems.

## Vocabulary

* Data Structure
* Algorithm
* Edge Case
* PEDAC

### Data Structure

A data structure is a data organization, management, and storage format that is usually chosen for efficient access to data. There are several types of data structures in JavaScript. We know about objects and arrays which are built into JavaScript, but here are 8 other data structure you should know about that you can build yourself: 

* Stack
* Queue
* Priority Queue
* Linked List
* Set
* Hash Table
* Tree
* Trie

[click here to learn more about these](https://www.simplilearn.com/common-data-structures-in-javascript-article)

### Algorithm

What is an agorithm?

A procedure used for solving a problem or performing a computation; a finite swquence of well-defined instructions.

What are some examples of algorithms?
* Directions to go somewhere.
* A recipe to cook Something.
* Getting ready to leave you house. 

### Edge Case

An edge case is a problem or situation that occurs only at an extreme (maximum or minimum) operating parameter. For example, a stereo speaker might noticeably distort audio when played at maximum volume, even in the absence of any other extreme setting or condition.

An edge case can be expected or unexpected. In engineering, the process of planning for and gracefully addressing edge cases can be a significant task, and yet this task may be overlooked or underestimated.

Non-trivial edge cases can result in the failure of an object that is being engineered. They may not have been foreseen during the design phase, and they may not have been thought possible during normal use of the object. For this reason, attempts to formalize good engineering standards often include information about edge cases.

## Structured Approach
What is the benefit of taking a structured approach to solving complex problems?

There are many was of solving coding problems but a proven method of doing so is taking a sturctred approach.
When you are trying to solve a problem you should be thinking of these questions:

1. Did you understand the problem fully?
2. Would you be able to explain this question to someone else?
3. What and how many inputs are required?
4. What would be the output for those inputs
5. Do you need to separate out some modules or parts from the problem?
6. Do you have enough information to solve that question? 

What is PEDAC and what does it stand for?

[Understand the] Problem, Examples / Test Cases, Data Structure, Algorithm, and Code.” PEDAC has two primary objectives: process the problem (PEDA) and code with intent (C). an article on [PEDAC](https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f).

### Lets solve a problem using PEDAC:
As we break down our problem, how do we test at each step of the way? 

Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.
The rules are as follows:
* If the phone number is less than 10 digits, assume that it is a bad number.
* If the phone number is 10 digits, assume that it is good.
* If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
* If the phone number is 11 digits and the first number is not 1, then it is a bad number.
* If the phone number is is more than 11 digits, assume that it is a bad number.
* For bad numbers, just a return a string of 10 0s.