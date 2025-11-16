// Local variable
// A local variable is a "private" variable defined inside a function.
// A function can access all variables in the local scope.
function myFunction() {
  let a = 4;
  return a * a;
}
console.log(myFunction());
// we can not access local variable outside the function
// Global variable
// A global variable is a "public" variable defined outside a function.
// A function can access all variables in the global scope:
// let a = 4;
// function myFunction() {
//   return a * a;
// }
// but we access global inside the function
// a undeclared variable always in global scope

// Variable lifetime
// Global variables live until the page is discarded
//Local variable create when function invoke and deleted when the function deleted

// counter dilemma

// Initiate counter
//let counter = 0;

// Function to increment counter
/*function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();*/
// There is a problem with the solution above: Any code on the page can change the counter, without calling add().
// counter = 4;

// lets try another 
/*function add(){
    let counter = 0;
    counter+=1;
}
// add three times
add();
add();
add();
console.log(counter);
Again zero Here use set global variable zero instead of increase*/

//try to return counter
function add(){
    let counter = 0;
    counter+=1;
    return counter;
}
// add three times
let x = 0
x=add();
x=add();
x=add();
console.log(x);

//Again failed eset the local counter every time we call the function.
// javascript nested function
/*function add() {
  let counter = 0;
  function plus() {counter += 1;}
  plus();   
  return counter;
}*/
//This could read the function if we access plus() outside the function
// Global variables can be made local (private) with closures.
// Closures makes it possible for a function to have "private" variables.
function myFunction2() {
  let counter = 0;
  return function() {
    counter = counter + 1;  
  } 
  
}
const add1 = myFunction2();
console.dir(add1);
add1();
add1();
add1();

