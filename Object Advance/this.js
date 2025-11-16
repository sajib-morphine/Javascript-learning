// In javascript this refer to an object
// Alone this refer to a global object
//In function this refer to a global object
//in strict mode this refer a in function undefined 
//In Object method this refer to the object
//in event this refer to the element that recieve event\

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Above example this refer person Object
console.log(person.fullName());

// Create another person object
const person2 = {
  firstName  : "John",
  lastName   : "Doe",
  id     : 5566,
  myFunction : function() {
    return this;
  }
};
// console.log(person2.myFunction())

//call function
const person3 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const person4 = {
  firstName:"John",
  lastName: "Doe",
};
// The example below calls person3.fullName with person4 as an argument, this refers to person4, even if fullName is a method of person3:

// Return "John Doe":
person3.fullName.call(person4);

// In function Object1.call(object2), Object1.bind(object2) this refer object of function call(),and bind() declaration.

