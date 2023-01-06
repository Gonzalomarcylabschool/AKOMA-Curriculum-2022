#ES6 Classes

## Instance Method VS Class Method

So far, we have only been creating and using Instance methods in our Objects. We have used Class Method before. 

```js
  let arr = [1, 2, 3];
  arr.push(4);//this is the instance method because we are doing on an instance of an array.
  Array.isArray(arr)//this is a Class method
  
```
To create a class method you need to use the `static` keyword in your method. This makes a method that can only be used with the class and not instences.  
```js
class Person {
  constructor(name, age, occupation){
      this.name = name;
      this.age = age;
      this.occupation = occupation;
      this.friends = []
  }
  
  hello() { //this is the instance method
    return `Hello, I'm ${this.name}, at ${this.age} ${occupation}` 
  }
  
  static onlyPerson() {//this is the class method
    return `this only prints out here`
  }
}
//
const gonzalo = new person("Gonzalo", 34, "Teacher")

//going back to the array example

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
```

