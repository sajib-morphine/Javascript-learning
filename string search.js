//returns the position of the first ocurrence string
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate",23);
let index1 = text.lastIndexOf("locate");
console.log(index);
console.log(index1);
console.log(text.search('where'));
// search parameter do not take 2nd position parameter
// /whwre/ return positon of a regular expression
//string match it s return a array
let text1 = "The rain in SPAIN stays mainly in the plain";
const arr1 = text1.match(/ain/g);
console.log(arr1);
// to match method use /gi for global and case insensitive
// use match all
console.log(text1.matchAll("ain"));
console.log(text1.includes("rain",5));
console.log(text1.startsWith("The"));
console.log(text1.endsWith("plain"));
// Both include and startswith, endswith have two parameter value and position return true or false 