// Accessing property of the object
const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};

// document.getElementById("demo").innerHTML = person.firstname + " is " + person.age + " years old.";
// document.getElementById("demo").innerHTML = person['firstname'] + " is " + person["age"] + " years old.";
let x = "firstname";
let y = "lastname";
// document.getElementById("demo").innerHTML = person[x] + " is " + person[y] + " years old.";
//Adding a new propeerty
person.nationality="English";
// document.getElementById("demo").innerHTML = person.firstname + " is " + person.nationality + ".";
// delete property
delete person.age;
//document.getElementById("demo").innerHTML = person.firstname + " is " + person.age+ ".";
