//Invoke a functio as a function 
function Sum (a,b){
    return a + b ;
}
 
// invoke function
console.log(Sum(2,3));

// The function above does not belong to any object. But in JavaScript there is always a default global object.
// In HTML the default global object is the HTML page itself, so the function above "belongs" to the HTML page.
// In a browser the page object is the browser window. The function above automatically becomes a window function.
console.log(window.Sum(4,2));
// Node.js do not know window object
// function are autometically belongs to a window object
// Here invoke means we call function with the window object.

// In an object method, this refers to the object.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

let x = myFunction();            // x will be the window object

function myFunction() {
  return this;
}
console.log(x);

// Global variables, methods, or functions can easily create name conflicts and bugs in the global object.
// Invoking a function as a global function, causes the value of this to be the global object.
// Using the window object as a variable can easily crash your program.

// Invoking function as a method 
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());
// Here this refer  person object.function belongs to person object.

// Function Constructor 
function Car(name,model,age){
    this.type = name;
    this.model = model;
    this.age = age;
}

const car1 = new Car ("tata","500",25);
console.log(car1.type);

// A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.
// The this keyword in the constructor does not have a value.
// The value of this will be the new object created when the function is invoked.