// react Declarative code
// ReactDOM.render(
// <h1>Hello, React!</h1>
// , document.getElementById('root')
// );

// diffrence between JS DOM and React

//JS
const h1 = document.createElement("h1")
h1.textContent = "This is not JSX"
h1.className = "header"
console.log(h1)
document.getElementById("root").append(h1)


// JSX
// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

// ReactDOM.render(element, document.getElementById("root"))