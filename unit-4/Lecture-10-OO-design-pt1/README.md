# Object-Oriented Design

This is one of the first lectures where we are focusing on a skill that will most likely be asked of you in an interview.

Object-Oriented Design Interviews are essential if you want to succeed as a software engineer, but many engineers dread OOD interview questions (including myself when I was interviewing!). There are a few main reasons for this:

* They can get very abstract very quickly. OOD problems require the ability to “zoom out” of a problem and think about the parts on a high level (but not too abstract).
* There isn’t usually just one correct answer to a given question. Problems can be thought about or solved in a multitude of different ways.
* Many beginner developers haven’t yet had a chance to design a complex system from scratch.

## The approach

In Object Oriented Design questions, interviewers are looking for your understanding of the nuances of complex problems and your ability to transform the requirements into comprehensible Classes.

Interviewers are looking for one main thing: finding the right balance between a solution that works immediately and is adaptable to future change.

To simplify things, you can take the following approach for any OOD question you encounter:

* Clarify the requirements.
    * Understand the expectations.
        * If possible, ask clarifying questions.
    * 
* Figure out the primary use cases.
    * Think and talk though, what the Object(s) is/are supposed to do. 
* Identify key Objects.
    * How many Objects do you need? What are they? 
* Identify behaviors of the Objects.
    * What are the Objects supposed to do?
* Identify behaviors between Objects.
    * How do the Objects interact with each other, if they do?

Let's take this approach and implement it on a Class that is like the one we just did in assigment 4.4!

## Simple OO Bank Account

1. Create a class `Account`.
2. An instance of `Account` has two data properties, `owner` which is a string and `balance` which is a numeric dollar amount.
3. An instance of `Account` has three methods: `checkBalance`, `deposit`, `withdraw`.
4. `checkBalance` takes no parameters and returns a string in the format `<owner> has $<balance> in this account.`
5. `deposit` takes a single number parameters and adds it to the `balance` property. It should also return a string in the format `"$<amount> was deposited to this account."`
6. `withdraw` takes a single number parameters and subtracts it to the `balance` property. It should also return a string in the format `"$<amount> was withdrawn from this account."`
7. **You should not be allowed to withdraw more than what's in the account**, in which case, return `"Not enough funds."` and do not update the `balance` property.

```js
const myAccount = new Account("Ann", 100);
myAccount.owner;          // "Ann"
myAccount.balance;        // 100
myAccount.checkBalance(); // "Ann has $100 in this account."
myAccount.deposit(50);    // "$50 was deposited to this account."
myAccount.checkBalance(); // "Ann has $150 in this account."
myAccount.withdraw(30);   // "$30 was withdrawn from this account."
myAccount.checkBalance(); // "Ann has $120 in this account."
myAccount.withdraw(150);  // "Not enough funds."
myAccount.checkBalance(); // "Ann has $120 in this account."
```

## If there is time...

Simple OO [Neopets](https://preview.redd.it/fkzfbleimvxy.jpg?auto=webp&s=dc6f78936511596f643c7f68d3a887c8d099bba3)

Neopets are virtual pets that you can play and interact with. The better you take care of them, the happier and healthy they will be!

1. Using ES6 Classes. Create a class called `Neopet`
2. The class should have three data properties, `name` which is the argument provided, happiness which is initialized to `100` and hunger with is initizlied to `50`. There is no min nor max value for `happiness` and `hunger`.
3. The Class should have three methods: `play()`, `eatVeggies()` and `eatJunkFood()`.
4. `play()` increases their happiness and also makes them more hungry. This method adds 4 points to happiness and adds 5 points to hunger and returns `"Weee!"`.
5. `eatVeggies()` decreases their hunger, but no one enjoys eatting veggies. This method subtracts 6 points from happiness and subtracts 8 points from hunger and returns `"Bleh!"`.
6. `eatJunkFood()` makes neopets happy, but isn't very filling. This method adds 3 points to happiness and subtracts 2 points from hunger and returns `"Yumm!"`.

```js
const pet = new Neopet("Krawk");
pet.name;          // "Krawk"
pet.happiness;     // 100
pet.hunger;        // 50
pet.play();        // "Weee!"
pet.happiness;     // 104
pet.hunger;        // 55
pet.eatVeggies();  // "Bleh!"
pet.happiness;     // 98
pet.hunger;        // 47
pet.eatJunkFood(); // "Yumm!"
pet.happiness;     // 101
pet.hunger;        // 45
```