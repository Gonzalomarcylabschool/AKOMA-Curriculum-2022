
## Async/Await Syntax

Async/await is a new syntax in JavaScript that was introduced in ES2017 (ES8) and provides a way to write asynchronous code that is more readable and easier to reason about. Async/await is built on top of Promises and provides a way to write asynchronous code that looks and behaves more like synchronous code.

The async keyword is used to define a function as asynchronous, which means that it will return a Promise that resolves to the function's return value.

```js
function foo() {
  return Promise.resolve(1);
}

// this can be written as

async function foo() {
  return 1;
}
```
Notice how we have abstracted the `Promise` and `resolve`. We no longer need it while using `async`.

Within an async function, the await keyword can be used to wait for a Promise to resolve before continuing execution. This is in place of the `.then` method.

```js
function foo() {
  return Promise.resolve(1).then(() => undefined);
}

// can be written as 

async function foo() {
  await 1;
}
```
Code after each await expression can be thought of as existing in a `.then` callback. In this way a promise chain is progressively constructed with each reentrant step through the function. The return value forms the final link in the chain.


Here's an example of using async/await to make an HTTP request using the Fetch API:

```js
async function fetchData() {
  try {
    const response = await fetch('https://reqres.in/api/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


```

If an error occurs during the request, the try/catch block is used to handle it.

Async/await provides a cleaner and more concise way to write asynchronous code compared to using Promises or callbacks, making it easier to read and maintain. However, it's important to note that async/await is still built on top of Promises, so understanding Promises is still necessary to use async/await effectively.