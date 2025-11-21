/*"I will finish later!"

Functions running in parallel with other functions are called asynchronous

A good example is JavaScript setTimeout() */

// function myFunction(){
//     console.log("Hello computer");
// }
// // callback instances
// setTimeout(myFunction,3000);

const paymentSuccess = true;
const marks = 90;
function enroll(callback){
    console.log("Course enrollment is running");
    setTimeout(function(){
        if(paymentSuccess){
            callback();
    }else{
        console.log("payment failed")
    }
    },2000);
   
}
function progress(callback){
    console.log("Course on progress...");
    setTimeout(function(){
        if (marks >= 80){
            callback()
        }else{
            console.log("You are failed")
        }
    },3000)
}
function getCertificate(){
    console.log("preparing your certificate");
    setTimeout(function(){
        console.log("Congrats! you got the certificate")
    },1000)
}
//enroll accept a function progress & progress also accept a parameter as functiion
enroll(function(){
    progress(getCertificate);
    //Get certificate does not need parameter
});

