const car = {
    type:"toyata",
    model:"500",
    color: "blue",
    state: function(){
        return this.name + " is running now";
    }
};

// The order of property does not matter
let {type,color} = car;
console.log(type,color)

// The destructuring assignment syntax unpack object properties into variables
// let {firstName, lastName} = person;

// It can also unpack arrays and any other iterables:
// let [firstName, lastName] = person;

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// for potentially missing vlue we can set a value
// Destructuring
let {lastName,firstName,country = "US"} = person;
console.log(firstName,lastName,country);

// Object property alias
let {firstName:name} = person;
console.log(name);

// Destructuring iterable
//string
let txt = "sajib";
let [a1,a2,a3,a4,a5] = txt;
console.log(a1,a2,a3,a4,a5);

// Array
const fruits = ["Apple","Banana","Oranges","grapes"];
// let [fruit1,fruit2] = fruits;
// console.log(fruit1,fruit2);
let [fruit1,,fruit2] = fruits;
console.log(fruit1,fruit2);

// Create an Array
// Pick values from specific index location
//const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// Destructuring
//let {[0]:fruit1 ,[1]:fruit2} = fruits;

const numbers = [10, 20, 30, 40, 50, 60, 70];
const [a,b, ...rest] = numbers;
console.log(rest);

// Variable swaping
let fName = "John";
let lName = "Doe";

// Destructuring
[fName, lName] = [lName, fName];

let age = 20;
let nam = "sajib";

const man = {age,nam};
console.log(man)



