function myFuction0(x) {
	myFuction1(x);
}

function myFuction1(y) {
	myFuction2(y + 1)
}

function myFuction2(z) {
	console.log(z * 2)
}


const person = {
	name: 'Gonzalo',
	age: 34,
	sayHello: function() {
		console.log(`Hello `)
	}
}

function sayHello(name = 'friend') {
	console.log(`Hello ${name}.`)
}

sayHello('Saida') // outputs: 'Hello Saida'
let word = 'park'
let newWord = word.replace('p', 'd') // returns 'dark'

// const person = {
// 	name: 'Gonzalo',
// 	age: 34,
// 	sayHello: function(name = 'friend') {
// 		console.log(`Hello ${name}.`)
// 	}
// }

const shoppingCart = {
	amountOfItems: 5,//this is state
	cost: 1.99,// this is also state
	total() {
		return this.amountOfItems * this.cost;
	}
}