// With call(), an object can use a method belonging to another object.
const person = {
  fullName: function(city,country) {
    return this.firstName + " " + this.lastName+ " " + city + " " + country;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
console.log(person.fullName.call(person1,"Dhaka", "Bangladesh"));
console.log(person.fullName.call(person2,"Sylhet", "Bangladesh"));

// Call() refer what should be this object.
// Call() can accept argument individually