//function body keyword name (parameter)
function toCelssius(farenheit) {
  return (5/9)*(farenheit-32);
}
// function do not execute anything after return statement
// the value that passes through the parameter known as argument
let result = toCelssius(95); //This is call or invoke the funxtion
//use function as variable
//if we not mention parenthesis then function return to whole body
let text="The temperature is "+result;
console.log(text);



