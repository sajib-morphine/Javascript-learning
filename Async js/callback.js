/*A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished */

//function sequence 
function myFirst(){
    console.log("Hello1")
}
function mySecond(){
    console.log("Hello2")
}

myFirst()
mySecond()

//function run according their order

function display(arg){
    console.log(arg)
}
function sum(num1, num2){
    let sum = num1 + num2;
    display(sum);
}
sum(5,5);

// The problem first one is that we have to call two function explicitly
// The second one is that we can not prevent displaying printing.
// A callback is afunction passed as an argument to another function.

function display1(arg){
    console.log(arg);
}
function calCulator(num1,num2,callback){
    let mult = num1 * num2;
    callback(mult);
}
// Invoke function
calCulator(4,5,display1);
// here display1 is callback function