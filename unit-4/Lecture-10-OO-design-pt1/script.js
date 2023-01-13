/*
1. Create a class `Account`.
2. An instance of `Account` has two data properties, 
`owner` which is a string and `balance` which is a numeric dollar amount.
3. An instance of `Account` has three methods: `checkBalance`, `deposit`, `withdraw`.
4. `checkBalance` takes no parameters and returns a string in 
the format `<owner> has $<balance> in this account.`
5. `deposit` takes a single number parameters and adds it 
to the `balance` property. It should also return a string in the format 
`"$<amount> was deposited to this account."`
6. `withdraw` takes a single number parameters and subtracts it to the 
`balance` property. It should also return a string in the format 
`"$<amount> was withdrawn from this account."`
7. **You should not be allowed to withdraw 
more than what's in the account**, in which case, return 
`"Not enough funds."` and do not update the `balance` property.
*/

// **Bank**
// function makeAccount(owner, balance){
//   return{
//     owner, 
//     balance
//   }
// }
class Account{
  constructor(owner, balance){
    this.owner = owner;
    this.balance = balance;
  };
  checkBalance(){
    return `${this.owner} has $${this.balance} in this account.`
  };
  deposit(depositedAmount){
    this.balance += depositedAmount;
    return `$${depositedAmount} was deposited to this account.`
  };
  withdraw(withdrawnAmount){
    if (this.balance < withdrawnAmount){
      return `Not enough funds.`
    }
    else {
      this.balance -= withdrawnAmount;
      return `$${withdrawnAmount} was withdrawn from this account.`;
    };
  };
};

const myAccount = new Account("Ann", 100);

// **Neopet**
/* 1. Using ES6 Classes. Create a class called `Neopet`
2. The class should have three data properties, `name` 
which is the argument provided, happiness which is initialized 
to `100` and hunger with is initizlied to `50`. There is no min 
nor max value for `happiness` and `hunger`.
3. The Class should have three methods: 
  - play()
  - eatVeggies()
  - eatJunkFood()
4. play() increases their happiness and also makes them more 
hungry. This method adds 4 points to happiness and adds 5 points 
to hunger and returns "Weee!".
5. eatVeggies() decreases their hunger, but no one enjoys eatting 
veggies. This method subtracts 6 points from happiness and subtracts 
8 points from hunger and returns `"Bleh!"`.
6. eatJunkFood() makes neopets happy, but isn't very filling. 
This method adds 3 points to happiness and subtracts 2 points from 
hunger and returns `"Yumm!"`.
*/
class User {
  constructor(name){
    this.name = name;
    this.pets = [];
    this.veggies = 10;
    this.junkFood = 10;
    this.money = 100
  }
  buyNeopet(petName, type){
    
  };
}
class Neopet { //superclass
  constructor(name){
    this.name = name;
    this.happiness = 100;
    this.hunger = 50;
    this.health = 5;
  };
  play(){
    if (this.health > 0){
      this.happiness += 4;
      this.hunger += 5;
      return `Weee!`;
    } else {
      return `Cannot play, need more veggies!`
    }
  };
  eatVeggies(){
    this.happiness -= 6;
    this.hunger -= 8;
    this.health += 1;
    return "Bleh!"; 
  };
  eatJunkFood() {
    this.happiness += 3;
    this.hunger -= 2;
    this.health -= 1;
    return "Yumm!";
  };
};
class FireNeopet extends Neopet{
  constructor(name){
    super(name);
    this.type = 'fire';
  };
};
class WaterNeopet extends Neopet{
  constructor(name){
    super(name);
    this.type = 'water';
  }
}
const gonzalo = new User('gonzalo');
const pet2 = new FireNeopet('cookie', 'dragon');
const pet = new Neopet("Krawk");