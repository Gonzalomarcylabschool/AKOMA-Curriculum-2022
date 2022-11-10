//loops

const scores = [22, 54, 101, 92, 43, 33];
//for loops
// for (let i = 0; i < scores.length; i++) {//(counter; end point; by how much)
//     console.log(scores[i]);//what we would like to happen to each element of the array.
// }

//while loops
 let i = 0;//counter

// while (i < scores.length) {//end point
//     console.log(scores[i]); // what we would like to happen 
//     i++;//by how much
// }

// do while loops
// do {
//     console.log(scores[i]);//what we would like to happen
//     i++;//by how much
// } while (i < scores.length);//end point


//for...In loops
// for (i in scores) {// counter end point(but its a bit different)
//     console.log(scores[i]);
// }

//for...Of loops
//these are alittle diffrent 
// for (let par of scores) {//variable to store each element from the array and t
//     console.log(par);
    
// }

//forEach loops
// scores.forEach((par) => {//same concept from for...Of
//     console.log(par);
// });

//or

// scores.forEach((score) => console.log(score));



//************************************************************************************
// spead operator (...)

// const array = ["h","e","y"]
// console.log(...array);


// let nums;
// const numArray = [1, 2, 3, 4, 5, 6, 3, 4, 5, 6, 3, 4, 5, 6, 3, 4, 5, 6, 3, 4, 5, 6]
// nums = [...numArray];
// nums.push(100000);
//  console.log(numArray);
//  console.log(nums);


// let baked_desserts = ['cake', 'cookie', 'donut'];
// let desserts = ['icecream', 'flan', 'frozen yoghurt', ...baked_desserts];
// console.log(desserts);
// //Appending baked_desserts after flan
// let desserts2 = ['icecream', 'flan', ...baked_desserts, 'frozen yoghurt'];
// console.log(desserts2);

// function sum(x, y, z, d) {
//     return x + y + z + d;
//   }
const numbers = [75, 10, 12, 99, 9];

// console.log(sum(75, 10, 12, 99, 9, 10, 123,  15, 20));



//************************************************************************************
//rest Parameter
// function sumAll(...args) { // args is the name for the array
//       let sum = 0;

//       for (let arg of args) sum += arg;
//         console.log(arguments[1]);
//       return sum;
//     }
// console.log(sumAll(1, 2, 3 , 4, ...numbers));

//************************************************************************************

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const alpha = ["a","b", "c", "d", "e"];
// let a = nums[0];
// let b = nums[1];
// const [,,,,...a] = nums;
// const [a, b, c, d] = nums;
// const [a,,,b] = nums; //lets what happens when we change the ammount of commas.
// const [a,, c, ...all] = nums;
// console.log(first);
// console.log(second);

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(all);


 function runners(){
        return ["Sandra", "Ola", "Chi", "jason", "amber", "sodiq", "vin"];
    }

    let [t, g, l] = runners();
    console.log(runners());
    console.log(t); //Output: Sandra
    console.log(g); //Output: Ola
    console.log(l); //Output: Chi
    
    