function MarcyStaff(name = "test", jobTitle = 'test', age = 0, cohort = 'test', ) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.age = age;
    this.cohort = cohort;
}
let name1 = 'gonzalo'
// function marcyStaff(name = "test", jobTitle = 'test', age = 0, cohort = 'test', ) {
//     return{
//     name,
//     jobTitle,
//     age,
//     cohort,
//     }
// }
//with constuctor 
//variable => consturctorName {}
// consturctorName.prototype.method
//without:
// variable => {}
// ?.prototype.method
let gonzalo = new MarcyStaff(name1, 'lead instructor', 34, 'Akoma');
let laura = new MarcyStaff('Laura', 'program manager', 27, 'Akoma')
// let test = new marcyStaff();
//create a function declaration that take in a parameter
//use `this` with the parameter

// make a new variable and assign use the new keyword, then the constuctor name
//add the data in the argument

MarcyStaff.prototype.drinkCoffee = function() {
    return `${this.name} is drinking coffee`
}

MarcyStaff.prototype.playPingPong = function() {
    return `${this.name} is playing ping ping.` 
}

const obj = {}