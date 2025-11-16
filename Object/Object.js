/*An Object is a variable that can hold many variables.
Objects are collections of key-value pairs, where each key (known as property names) has a value.
Objects can describe anything like houses, cars, people, animals, or any other subjects.*/
// Create an object
const car = {
    type: "fiat",
    model : '500',
    color:"white"
};
//1. Create Multiple object(Object literals)
const person = {fname:"sajib",lname:"Ahmed",age:30};

//2. Create Object using {}
const dress = {};

// Create a new property
dress.type = "shirt";
dress.color = "blue";
dress.state = "clean";

// Create an object Using new Object()
const song = new Object({lyric:"sajib",composer:"Rasel",singer:"karim"});

/* 
Above example we define object with propert. Now we access Our property
There are two ways access object property.
1) objectName.propertyName
2) objectName["propertyName"]
*/
// Example
console.log(car.type);
console.log(car["model"]);
