console.log(Math.random());
// Math Random return number less than 1
// Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 11));
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)+1 ) + min;
}
let x = getRndInteger(1,10);
console.log(x);
