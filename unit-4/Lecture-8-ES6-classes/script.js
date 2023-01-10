// write a class

class Car{
  constructor(make, model, year, color, mileage){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;
  }
  drive(milesDriven){
    if(typeof milesDriven != 'number'){
      return `Invalid`
    }else{
      this.mileage += milesDriven;
      return `The car is in motion.`
    }
    
  }
  turnLightsOn(){
    return `The lights are now on!`
  }
}

class CarType extends Car{
  constructor(make, model, year, color, mileage, engineType){
    super(make, model, year, color, mileage);
    this.engineType = engineType;
  }
  turnLightsOn(){
    return `Lights are On`
  }
}

const gonzalosCar = new Car('Hyundai', 'Elantra', 2020, 'Silver', 19000)
const car2 = new Car('Nissan', 'Altima', 2020, 'Grey', 9000)

const car3 = new CarType('Hyundai', 'Elantra', 2024, 'Silver', 5, 'Electric')


// instance vs class methods
class Person {
  constructor(name, age, occupation){
      this.name = name;
      this.age = age;
      this.occupation = occupation;
      this.friends = [];
  }
  
  hello() { //this is the instance method
    return `Hello, I'm ${this.name}, at ${this.age} ${this.occupation}` 
  }
  
  static onlyPerson() {//this is the class method
    return `this only prints out here`
  }
}
//
const gonzalo = new Person("Gonzalo", 34, "Teacher")
// What would it look like for us to make a new instance?
const koumba = new Person('Koumba', 19, 'Fellow')
// How do we invoke hello method?
gonzalo.hello()
koumba.hello()
// Does it matter which instance I invoke the hello method on?4, 5, 
// What about the onlyPerson method?

// Going back to the array example, this is what the array class under the hood would look like. 

class Array{
  constructor(){
    this.length = 0;
  }
  push(newElemet){
    //code
  }
  pop() {
    //code
  }
  map(func) {
    //code
  }
  static isArray(arr){
    //code
  }
}
const arr = [] 
const arr1 = [1, 2, 3, 4];
// What would it look like for us to make a new instance?
const arr2 = [4, 5, 5];
// How do we invoke push method?
arr2.push(6);
// Does it matter which instance I invoke the push method on?

// What about the isArray method?