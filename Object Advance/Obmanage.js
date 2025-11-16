// Object.defineProperty() used
// Adding a new property to an object
// Changing property values
// Changing property metadata
// Changing object getters and setters

// Object.defineProperty(object, property, descriptor)

// Create a new object 
const person = {
    fName:"sajib",
    lName:"ahmed",
    country:"BN"
}
// Add a property
Object.defineProperty(person,"year",{value:"2000"});
//change prperty
Object.defineProperty(person,"country",{value:"EN"});
console.log(person.year);
console.log(person.country);

// Changing meta data
// writable : true      // Property value can be changed
// enumerable : true    // Property can be enumerated
// configurable : true  // Property can be reconfigured
Object.defineProperty(person,"fName",{writable:true});// just toggle true or false
Object.defineProperty(person,"fName",{enumerable:false});
console.log(Object.keys(person));
for (let key in person){
    console.log(key);
}
// assign()
// Object.getOwnPropertyNames() will also list properties that is not enumerable:
