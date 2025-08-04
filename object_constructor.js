// Sometimes we need so many object of the same type
function person(first, last,age, eye){
    this.firstname=first;
    this.lastname= last;
    this.age= age;
    this.eyeColor=eye;
    this.fullName= function(){
        return this.firstname + ' ' + this.lastname;
    }
};
const person1 = new person("Sajib",25, "blue");
console.log(person1);
// Adding a new property to a constructor 
person1.City = "newyork";
console.log(person1);
// Adding property on constructor is not allowed
//  person.city="Sylhet";
// To add new property on constructor
person.prototype.Country= "America";
console.log(person1.Country);
const person2 = new person('Sajib',"Mahmud",30,'black');
// Add method on object person2
// person2.changeName = function (name) {
//   return this.lastname = name;
// };
// console.log(person2.fullName());
//console.log(person2.changeName('sajib'))
// Add Method on constructor
person.prototype.greeting = function(){
    return 'Hi '+ this.fullName();
};
console.log(person2.greeting())


