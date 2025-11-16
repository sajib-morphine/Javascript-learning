function Person(first,last,age,eye){ 
//It is good practice to define constructor function name with capital letter.
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function(){return this.firstName + ' ' + this.lastName};
};

// Creates new Object
const myMother = new Person("Hasna","Begum",45,"green");
const myFather = new Person ("Malek","Mia",60,"blue");

// Add method to created object
myFather.changeName = function(name){this.firstName = name};
myFather.changeName("mahmud")

console.log(myFather.firstName);
console.log(myMother.fullName());

// You can not add a method to a object constructor function. it produces a type error.
// But add to constructor function prototype.
Person.prototype.changeName = function(name){
    this.firstName = name
};
console.dir(Person);
