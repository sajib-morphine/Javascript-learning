let car="Fiat";
// Variable are containers for data vlaues
const car1={
type: "Fiat",
Model: "500",
color: "white",

};
//Object is also like variable contain many values.
// Define object using literals. It also known as object initializer.
// name:value pair or property : value pair. separated by comma
const person = {
    firstName: "Sajib",
    lastName:"Mia",
    age: 50,
    eye_color: "black",

};
//Accessing in the object
// console.log(person.firstName)
document.getElementById("demo1").innerHTML= person.firstName;
document.getElementById("demo2").innerHTML= person["eye_color"];
// Create empty object
const person1={};
// Add properties
person1.firstName = "Hasan";
person1.lastName = "Mahmud";
person1. age = 30;
person1.eye_color = "blue";

// different object can have the same property.
// Declare obhect with new keywords.
const person3 = new Object();
person1.firstName = "Hasan";
person1.lastName = "Mahmud";
person1. age = 30;
person1.eye_color = "blue";
 // in common practice declare object with const.
 