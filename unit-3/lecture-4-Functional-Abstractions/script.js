// const functionName = (parameter) => {
//     console.log(parameter);    
// };

// const add = function(x, y) {
//     return x + y;
// }
// console.log(add(1, 2))

// functionName('this is a function')//invoking the function

// function teacher(){
//     return "Teacher";
// }
  
// function student(){
//     return "Student";
// }
  
function greet(user){
    console.log("Welcome", user());    
}
function number(){
    return 1234;
}
    
// // Prints "Welcome Teacher"
// const message0 = greet(number)

// const message = greet(teacher);
  
// // Prints "Welcome Student" 
// const message2 = greet(student);

const greet = salutation => {
    return firstName => {
        return symbol => {
            return `${salutation} ${firstName}${symbol}`
        }
    }
}
const howdy = greet('Howdy');
const greetAmberSymbol = howdy('Amber');



console.log(greetAmberSymbol('!'));
console.log(greetAmberSymbol('?'));
console.log(greetAmberSymbol('.'));