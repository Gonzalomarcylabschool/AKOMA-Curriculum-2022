const arr = [1, 2, 3, 4, 5, 6]
// how do we get 3?
arr[2];
// how about here?
const arrObj = {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}
arr[2];


const hashMap = new Array(30);

function hash(string){// pseudo random and a pure function.
  let sum = 0
  for(let i = 0; i < string. length; i++){
    sum += string.charCodeAt (i);
  }
  return sum % 30;
}


const fellows = ['Randy', 'Mathew','Koumba', 'Bayzed', 'Mohamemd','Isaac', 'Saida','Jason', 'India', 'Magdalena', 'Ivon', 'Xhes', 'Sodiq', 'Jared M.', 'Jared K.', 'Ashley', 'Amber', 'Ayiaz', 'Oshaun', 'Christian', 'Raven']

fellows.forEach(student => {
  let hashKey = hash(student)
  if(!hashMap[hashKey]){
    hashMap[hashKey] = student;
  } else {
    if(typeof hashMap[hashKey]=== 'string'){
      hashMap[hashKey] = [hashMap[hashKey]]
    }
    hashMap[hashKey].push(student);
  }
});

//as an object

const hashObj = new Map();

// function objHash(string){
//   return string;
// }

fellows.forEach(student =>{
  // let hashKey = student;
  // hashObj[hashKey] = true;
  // or...
  hashObj[student] = true; 
})
