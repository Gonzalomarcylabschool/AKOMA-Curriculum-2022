const hashMap = new Array(30);

function hash(string){// pseudo random and a pure function.
  let sum = 0
  for(let i = 0; i < string. length; i++){
    sum += string.charCodeAt (i);
  }
  return sum % 30;
}


const gonzaloComputers = ['Macbook Pro M2', 'Mac Mini M2 pro', 'Ubuntu Laptop', 'Main PC Desktop', 'backup PC desktop']

gonzaloComputers.forEach(computer => {
  let hashKey = hash(computer)
  if(!hashMap[hashKey]){
    hashMap[hashKey] = computer;
  } else {
    if(typeof hashMap[hashKey]=== 'string'){
      hashMap[hashKey] = [hashMap[hashKey]]
    }
    hashMap[hashKey].push(computer);
  }
});

const compMap = {};

gonzaloComputers.forEach(computer => {
  compMap[computer] = true;
})

const computerMap = new Map();

gonzaloComputers.forEach(computer => {
  computerMap[computer] = true;
})




const artistsByGenre = {
  jazz: ["Miles Davis", "John Coltrane"],
  rock: {
    classic: ["Bob Seger", "The Eagles"], 
    hair: ["Def Leppard", "Whitesnake", "Poison"],
    alt: {
      classic: ["Pearl Jam", "The Killers"], 
      current: ["Joywave", "Sir Sly"]
    }
  },
  other: {
    new: ["Caamp", "Neil Young"], 
    classic: ["Seal", "Morcheeba", "Chris Stapleton"]
  }
}

const getArtistNames = (dataObj, arr = []) => {
  Object. keys (dataObj) .forEach (key => {
    if (Array.isArray (dataObj [key])) {
      return dataObj[key].forEach(artist => {
      arr.push (artist);
      });
    }
    getArtistNames (dataObj[key], arr);
  });
  return arr;
  }
  console. log(getArtistNames (artistsByGenre)) ;