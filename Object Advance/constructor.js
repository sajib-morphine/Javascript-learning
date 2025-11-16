//Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// Object Constructor this is the default property.

function Person(first,last,age,eye){ 
//It is good practice to define constructor function name with capital letter.
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
};

// In constructor function has no value.The value of this will become new object when it's created
// Create  many Object of new Person
const myFather = new Person("Malek","Mia",58,"blue");
const myMother = new Person("Hasina","Begum",45,"green");
// console.log(myFather.age,myFather.firstName);

// Adding property to the new object
myFather.nationality = "Bangladeshi";
console.log(myFather.nationality);
//console.log(myMother.nationality); it's return undefined.

// we can not add property like Person.nationality  to the constructor.
// But we can add property to the constructor function prototype.
Person.prototype.nationality = "Bangladeshi"
console.log(myMother.nationality);

