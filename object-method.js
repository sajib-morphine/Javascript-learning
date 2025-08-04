// Object methods are actions that can be performed on objects.
// A method is a function definition stored as a property value.
const person={ 
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
// document.getElementById("demo").innerHTML=person.fullName();
console.log(person.fullName());
// if property is object call it with ()
// this refers to the person object:
// this.firstName means the firstName property of person.
// this.lastName means the lastName property of person.
// Adding Method to a object
person.name= function(){
    return(this.firstName + " " + this.lastName).toUpperCase();
}
console.log(person.name())