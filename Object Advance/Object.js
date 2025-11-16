// Using Object.create();
// Object.create() method create an object from an existing object
const person = {
    firstName:"sajib",
    lastName:"ahmed",
    age: 25

};
const man = Object.create(person);
// console.log(man.firstName);
// console.log(man.age);

//Using Object.fromEntries()
// Object.fromEntries() create an object from iterable key value pair(array)
const fruits =  [["Apple",300],["Banana",150],["Orange",400]];
const myObj = Object.fromEntries(fruits);
console.log(myObj.Apple);
console.log(myObj.Banana);

//The Object.assign() method copies properties from one or more source objects to a target object.
// Create a target Object
const perosn1 =  {
    firstName:"sajib",
    lastName:"ahmed",
    age: 25,
    eyeColor: "Blue",

};
// Create Source Object
const person2 = {firstName:"Adam",lastName:"Smith"};
// Assign Source to target
Object.assign(perosn1,person2);


