//Alone this refer to window object
// let x = this;
// console.log(x);
// In strict this refer window object
// "use strict"
// let y = this;
// console.log(y);

// In function 
// function myFunction(){
//     return this;
// }
// console.log(myFunction());

"use strict";
console.log(func());
function func() {
    return this;
}
// In arrow function this represent  ownwer of the function