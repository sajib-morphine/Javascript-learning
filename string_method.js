// Extracty string character
// at, charAt, charCodeAt & Using [] method. 
let text = "Hello World";
let char = text.charAt();
let char1 = text.codePointAt(7);
let char2= text.at(4);
console.log(char2);
console.log(char1);
console.log(char);
console.log(text[8]);
// String concat
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(' ',text2);
let text4 = "Hello" + " " + "World";
console.log(text3);
console.log(text4);
// Extracting string part
//Using slice 
let text5 = "javascript,python,Java";
let part = text5.slice(-4);
console.log(part);
let text6 =  "Apple, Banana, Kiwi";
let part1 = text6.substring(7);
console.log(part1);
// Converting string to uppr and lower case 
console.log( text6.toUpperCase());
console.log(text6.toLowerCase());
let result = text6.isWellFormed();
console.log(result);
// Trim method remove white space from both side 
let text7 = "  Hello World  !     ";
console.log(text7);
console.log(text7.trim());
console.log(text7.trimStart());
console.log(text7.trimEnd());
// replace method 
// replace method repalace only the first match;
// replace method case sensitive
// to use case insensitive use regular expression /MICROSOFT/i
let text8 =  "Please, visit. 'Microsoft' and Microsoft!";
let new_text = text8.replace(/[, . '']/g, " ");
console.log(new_text);
// To replace all message use the global flag /Microsoft/g
// replace All  if the parameter is reg expression use /g
let text9 = "a,b,c,d,e,f";
const myArray1 = text9.split(",");
console.log(myArray1);

