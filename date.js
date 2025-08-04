//const d = new Date('2025-08-5');
let d = new Date();
//console.log(d);
//d = new Date(2018, 11, 24, 10, 33, 30, 0);
//console.log(d);
// Jvascript month count from 0 t0 11.
// seven number define year, month ,day,hour,minute,second,milisecond
// if give one perameter give return milisecond.
//d = new Date(9, 11, 24);
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toUTCString());
console.log(d.toISOString());
// Date Method
console.log(d.toDateString(d.getDay));
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = new Date("2025-08-05");
let month = months[date.getMonth()];
console.log(month);
const d1 = new Date("January 01, 2025");
d1.setFullYear(2020, 11, 3);
console.log(d1);