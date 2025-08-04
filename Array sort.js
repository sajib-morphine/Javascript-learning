// Array short Method sort alphabetically
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
console.log(fruits.reverse());
// Tosorted function return a new sorted array without altering original array
const fruisort = fruits.toSorted();
console.log(fruisort);
// saame as toReversed method 
// For numeric sort use compare sort
// ascending order 
const num = [3,4,5,2,6,10,9,12];
// let nunsort = num.sort(function(a,b){
//     return a-b;
// });

//console.log(nunsort);
num.sort(function(a,b){
return b-a;
})
console.log(num);

// Sorting in random order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
console.log(points);