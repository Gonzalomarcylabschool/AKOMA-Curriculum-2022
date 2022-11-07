
// // Any variables declared here will have a global scope.
// var  a = "this";// What Scope do you think this variable have?
// if (true){
//     //any variable that is declared here will have a local scope
//     var b = "that"; // What Scope do you think this variable have?
// }
// function {
//     //any variable that is declared here will have a local scope
//     var c = "also this";// What Scope do you think this variable have?
// }
let  string=""
for (let i = 0; i < 7; i++){
    if (i%2 === 0){
        string += "1";
    }else{
        string += "0";
    }
}
console.log(string);