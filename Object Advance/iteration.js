// Create an Object
const person = {
    firstName:"Sajib",
    lastName:"Ahmed",
    age:50

};

// Iterate by for in loop
for (let key in person){
    console.log(person[key]);
}

// Object.entries() make object iterable it retuens key pair value array
let text = Object.entries(person);
//console.log(text);
for (let [key,value] of text){
    console.log(key,value);
};

// Object.entries() also use make object to map
let map = new Map(Object.entries(person));
console.log(map);

// Object.values() Make one dimensional array of values iterate over it 
let data = Object.values(person);
for (let value of data){
    console.log(value);
};

// Create an Array
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// group by a callback function it does not change original array
function myCallback({quantity}){
    return quantity>200 ? "ok" : "low";
};
const result = Object.groupBy(fruits, myCallback);

console.log("These are ok");
for(let[key,value] of result.ok.entries()){
    console.log(key,value);
};
console.log("these value are low")
for(let [key,value] of result.low.entries()){
    console.log(key,value);
}

