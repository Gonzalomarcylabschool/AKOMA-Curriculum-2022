The Fetch API can also be used to make other types of requests, such as POST requests or requests with custom headers, by passing in additional options to the fetch() method.

```js
fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json'
  }, 
  body: JSON.stringify({
    name: 'User 1'
  })
}).then(res => {
    return res.json ( )
  })
  .then (data => console. log (data))

```

## What is JSON

JSON stands for JavaScript Object Notation
JSON is a lightweight data-interchange format
JSON is plain text written in JavaScript object notation
JSON is used to send data between computers
JSON is language independent *