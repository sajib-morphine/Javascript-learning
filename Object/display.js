// Crate a object
const car = {
    name:"Audi",
    model:"500",
    price: "200k"
};
// display by name 
let text = car.name;
let display = document.getElementById("demo");

// display using loop
let data = "";
for ( let x  in car){
    data += car[x]+" ";
};

 // display by Object.values()
 let arr = Object.values(car);
 //return a array 
 // Now loop over an array

 let text1 = ""
 for(let x of arr){
    text1 += x + " ";
 }
 display.innerText = arr.toString();

 // display Using Object.entries();
 let text2 = "";
 const fruits = {banana:300,mango:500,appel:200};
 for (let [fruit,value] of Object.entries(fruits)){
    text2 += `${fruit} : ${value} <br/>`
 };
 display.innerHTML = text2;
