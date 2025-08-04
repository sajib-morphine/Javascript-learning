const fruits = ["Apple", "Orange", "Apple", "Mango"];
// array.indexOf('item',start);
//let position = fruits.indexOf("Apple") + 1;
let position = fruits.lastIndexOf("Apple") + 1;
console.log(position);
const newLocal = 'Mango';
// includes
console.log(fruits.includes('Mango'))
// Find accept a function as it parameter
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// };
//console.log(first);
/* Function argument have three part value index
array. Above function returns the first match of greater than 
18
*/
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);

// Find last Using the ternary operator 
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 28);
console.log(pos)
// Count first match from end of the array