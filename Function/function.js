/* Functions are fundamental building blocks in all programming.

Functions are reusable block of code designed to perform a particular task.

Functions are executed when they are "called" or "invoked". */

// Create a function add two numbers
function add(num1,num2){
    return num1 + num2 ;
}

// Create another function 
function celciusToFahreheit(celcius){
    return (9/5)*celcius + 32;
};

// Invoke a function
console.log(celciusToFahreheit(35));
console.log(add(5,3));
console.log(add)

// Functions enable better code organization and efficiency.
// With functions you can reuse code.
// You can write code that can be used many times.
// You can use the same code with different arguments, to produce different results.

// When it is invoked (called) from JavaScript code
// When an event occurs (a user clicks a button)
// Automatically (self invoked)

// Note add refer function object
// add() refers to the function result