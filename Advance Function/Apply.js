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
console.log(person.fullName.apply(person1,["Dhaka", "Bangladesh"]));
console.log(person.fullName.apply(person2,["Sylhet", "Bangladesh"]));

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// Find Max
console.log(Math.max(4,16,25));
console.log(Math.max([1,2,3,8,2])) // return NAN not a number
console.log(Math.max.apply(null,[1,2,38,9]));