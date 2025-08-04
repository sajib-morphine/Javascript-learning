// Create an Object
//display as string
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
document.getElementById('demo').innerHTML= person.name + ' live in ' + person.city+'.';
// display as looop
// Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
};

// Display the Text by object.values
document.getElementById("demo1").innerHTML = text;
const myArray = Object.values(person);
document.getElementById('demo2').innerHTML = myArray;
// display text by object.entries
const fruits = {
    Banana:200,
    Apple:500,
    Orange:300

};
let text1 = " ";
for(let [fruit,value] of Object.entries(fruits)){
    text1 += fruit+': '+value+"</br>";
};
document.getElementById('demo3').innerHTML = text1;
//view element by json.stringify()
let text2 = JSON.stringify(person);
document.getElementById('demo4').innerHTML = text2;
