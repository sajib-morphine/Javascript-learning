// Parameters are the names listed in the function definition.
// Parameters are the names of the values that will be passed.
function greet(name, age) {
  return `Hello ${name}! You are ${age} years old.`;
}
//Here name, age are the parameter

// invoke function
console.log(greet('sajib',25));

// sajib , 25 are the argument

// Default parameter
function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
  return console.log(x,y) ;
};
myFunction(5)

// Default parameter in ES6
function add(num1, num2=10){
    return num1 + num2;
}
console.log(add(20));

// rest operator
function Arr(num1,...arg){
    return console.log(num1,arg)
};
Arr(1,2,3,56)

// JavaScript functions have a built-in object called the arguments object.
// The argument object contains an array of the arguments used when the function was called (invoked).
// This way you can simply use a function to find (for instance) the highest value in a list of numbers:
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
// If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.