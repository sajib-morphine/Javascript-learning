/* Object methods are actions that can be performed on objects. 
A method is a function definition stored as a property value. */

// Create an object 
const person = {
    firstName : "Sajib",
    lastName: "Ahmed",
    // Add Built in function to method
    fullName: function(){return (this.firstName + ' ' + this.lastName).toUpperCase()}
}
// access an object Method Object.method()
console.log(person.fullName());

// Here this refer person Object.
// Add method in the object.
 person.adress = function(){
    return this.firstName + ' ' + "Lives in Bangladesh ";
 };
 console.log(person.adress());
