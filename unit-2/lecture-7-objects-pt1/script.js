//Array Review
// const array = ["jason", "ashley", "xhes"]
// 	console.log(array[0]);
// 	console.log(array[1]);
// 	console.log(array[2]);

// //building on object	
// const computer = { //declare where we are going to store the object
// 	powerSupply: "500 watts", // property (made up of the key-value pair)
// 	cpu: "intel", // another property
// 	capacity : "128gb", // another property
// 	ram: "16gb" // the last property
// }


// //What can of values can we store in a property?
// const computer2 = { //declare where we are going to store the object
// 	isApple: true,// boolean
// 	isPC: false,// boolean
// 	powerSupply: 500 , // number
// 	cpu: "intel", // string
// 	capacity : ["1TB", "500GB", "500GB"], // array
// 	ram: 16, // number
// 	graphicsCard: {gpu1: "3090", gpu2:"3070ti"},//more objects
// 	hello: function(){console.log("hello")},//function
// 	hello2: (name) => {console.log(`hello ${name}again!`)}//funciton
// }


// computer2.greet();
// // using dot notation
// console.log(computer.cpu);
// console.log(computer.ram);
// console.log(computer.capacity);

// // using bracket notation with dot notation
// console.log(computer2.capacity[0]); //what will print out here? what about the next line.
// console.log(computer2.capacity[1]);

// // accessing objects inside on object?
// console.log(computer2.graphicsCard.gpu1);

// const character = {
// 	name: "Gonzalo",
// 	age: 34,
// 	isParent: true,
// 	siblings: ["angie"],
// 	pets: {dogs: ["viva", "olive"], fish: ["gary", "tau"]},
// 	children: ["clark", "coming soon"]
// }

// // console.log(character);
// const programmer = {
// 	   firstname: "Phil",
// 	   age: 21,
// 	   backendDeveloper: true,
// 	   languages: ["Python", "JavaScript", "Java", "C++"],
// 	   "current project name": "The Amazing App",
// 	  a1: true
// 	};
// 	let x = "age";
// 	if ( x in programmer){
// 		console.log("you are young")
// 	}
	// let y = Object.keys(programmer);
	// for (let i = 0; i < y.length;i++){
	// 	let key = y[i]
	// 	console.log(y[i]);
	// 	console.log(programmer[key]);
	// }
	
	// for (let a in programmer){
	// 	console.log(`the key is ${a}`);//
	// 	console.log(`the value is ${programmer[a]}`);
	// }
	
	// const shoppingCart = {
 //      1: "apple",
 //      2: "oranges"
 //   };
 
 let array = ["Vincent", "Oshawn", "Koumba"];
array[0];
array[1];
array[2];
const object = {
	0: "Vincent", 
	1: "Oshawn", 
	2: "Koumba"
	
}