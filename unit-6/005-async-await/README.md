
## Async/Await Syntax

Async/await is a new syntax in JavaScript that was introduced in ES2017 (ES8) and provides a way to write asynchronous code that is more readable and easier to reason about. Async/await is built on top of Promises and provides a way to write asynchronous code that looks and behaves more like synchronous code.

This means that we don't need to use fetch

![no more fetch](https://media0.giphy.com/media/XBEoaajXTXaALzawSn/giphy.gif?cid=6c09b952f3mjj9elvsowusqqbmgixc5go6ubkn5zcdgu5t3o&rid=giphy.gif&ct=g)

The async keyword is used to define a function as asynchronous, which means that it will return a Promise that resolves to the function's return value. Within an async function, the await keyword can be used to wait for a Promise to resolve before continuing execution.

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