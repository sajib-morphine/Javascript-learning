// Function declaration
function multiply(a,b){
    return a*b;
}
// Function declaration are not execute imediately .
//it execute when function invoke
console.log(multiply(3,4));

// Function expression
const mult = function(a,b){return a*b}
// Function expression are stored in variable variable act as function.above function is a annonymus function
console.log(mult(4,5));

// Function constructor 
const myFunction1 = new Function ("a","b","return a * b");
let x = myFunction1(4,7);
console.log(x);

// Most of the time avoid to use new keyword in javascript

// Function hoisting 
greet();

function greet(){
    console.log("Hi, Sajib");
}

// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
// Hoisting applies to variable declarations and to function declarations.

// Self invoking function
(function Helo(){
    console.log("Hello Sajib");
})()

// A self-invoking expression is invoked (started) automatically, without being called.

function myFunction2(a, b) {
  return a * b;
}

let y = myFunction2(4, 3) * 2;
 // function can be used as expression

 // Function is also a object 
 function myFunction3(a, b) {
  return console.log(arguments[0]);
}
myFunction3(2,3,4);

let z =  myFunction3.toString();
console.log(z);

// A function defined as the property of an object, is called a method to the object.
// A function designed to create new objects, is called an object constructor.