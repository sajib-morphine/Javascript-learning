//An Array is an object type designed for storing data collections.
// Array indexing start from 0 .
const person = ["John", "Doe", 46];
console.log(person);
// Creating an empty array
const car = [];
// insert array element
car[0]='volvo';
car[1] = 'Audi';
car[2] = 'Tata';
console.log(car);
// Using javascrpt keywords
const fruits = new Array ('Apple','Banana','Lichi');
console.log(fruits);
// Accessing array element
console.log (car[0]);
car[0]='tesla';
console.log(car);

// Array Method 
console.log(person.toString());
// return length
// length is not a function it's property
console.log(person.length);
// at method
console.log(car.at(2));
// pop removes the last item from array
console.log(fruits.pop());
// pop method return the value that was popped out
console.log(fruits);
// Push add an element to an array at the end
fruits.push('mango');
console.log(fruits);
// join Method act like a string but can specify separator
console.log(person.join('/'));
// Remove element from first position
console.log(person.shift());
console.log(person);
person.unshift('john');
console.log(person);
// add element last
person[person.length]= "sajib";
console.log(person);
// concate array
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
// Concate Three arrays
// This Method return a new array
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren2 = arr1.concat(arr2, arr3);
console.log(myChildren2);
// flat Method
// flat Method return a array
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);
// Flat map method
const myArr1 = [1, 2, 3, 4, 5, 6];
const newArr1= myArr1.flatMap(x => [x, x * 10]);
console.log(newArr1);
// he first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits1);
// remove element without creating undefined hole
//fruits1.splice(0,2);
console.log(fruits1);
const subfruits = fruits1.toSpliced(0,2);
console.log(subfruits);
// slice Method create or return a new array
//slice start array element 1
const fr = fruits1.slice(1);
console.log(fr);
console.log(fruits1);
