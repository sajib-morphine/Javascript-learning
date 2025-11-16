//Annoymus function
let multiply = function(a,b){return a*b };
console.log(multiply(3,5))
// Arrow function 
let mult = (a,b) => a*b;
// for single line statement dont need to declare return statement
console.log(mult(4,5));

let hello = function() {
  return "Hello World!";
};

// single parameter don't need to use paranthesis
let greet = name => "hi "+name;
console.log(greet("Sajib"))