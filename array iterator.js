// forEach function takes function as parameter
// Function take parameter value index and array
const nam = ['Sajib','Sabbir','Ajoy','Bazlu'];
let text = ' '
nam.forEach(myFunction);
function myFunction(value,index,array){
    text+='\n'+nam[index];
};
console.log(text);
// Map Method does not change original array.
const num1 = [1,2,6,12,45,5,3];
const num2 = num1.map(myFunction2);
function myFunction2(value,index,array){
    return value**2;
};
console.log(num2);
// Flat map 
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr);
// filter a array
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
};

 console.log(over18);
// const numbers1 = [45, 4, 9, 16, 25];
// let sum = numbers1.reduce(myFunction);

// function myFunction(total, value, index, array) {
//   return total;
// }
// console.log(sum);
// The total (the initial value / previously returned value)
// The item value
// The item index
// The array itself
const numbers1 = [45, 4, 9, 16, 25];
let sum = numbers1.reduce(myFunction,100);

function myFunction(total, value) {
  return total + value;
};
console.log(sum)
console.log(numbers1);
// Reduce Light work from Right to left