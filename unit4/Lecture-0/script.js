const person = {
	name: 'Gonzalo',
	age: 34,
	sayHello: function() {
		console.log(`Hello`)
	}
}

function sayHello(name = 'friend'){
	console.log(`Hello ${name}.`)
}

sayHello('Saida')// outputs: 'Hello Saida'
let word = 'park'
let newWord = word.replace('p','d')// returns 'dark'

// const person = {
// 	name: 'Gonzalo',
// 	age: 34,
// 	sayHello: function(name = 'friend') {
// 		console.log(`Hello ${name}.`)
// 	}
// }
