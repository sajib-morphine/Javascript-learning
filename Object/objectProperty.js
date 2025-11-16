/* An Object is an Unordered Collection of Properties Properties are the most important part of JavaScript objects.Properties can be changed, added, deleted, and some are read only.*/

const person = {
    name:'sajib',
    age: 20
}
// Added a new property in object
person.nationality = "Bangladeshi";
person["hobby"] = "Cricket"

//accessed AND stored in variable
let country = person.nationality;

//dyanmic access

let x = "name";
let y = "age";
console.log(person[x]);
console.log(person[y]);

// Note don't use person.x, it will return undefined.

//Update existing property
person.name = 'Sadia';
person["age"] = 18;


// Delete person hobby
delete person['hobby'];
console.log(person);

// Nested Object
const myObject = {
    name:"john",
    age:30,
    myCars:{
        car1 : "Fod",
        car2: "BMW",
        car3: "Fiat"
    }
};
 //Access Neste object propety
 console.log(myObject.myCars.car2);
 console.log(myObject.myCars["car1"]);
 console.log(myObject["myCars"]["car3"])



