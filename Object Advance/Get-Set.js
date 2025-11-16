const person = {
    firstName : "Sajib",
    lastName : "Mia",
    age:20,
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    },
    // change(name){
    //     this.firstName = name;
    // }
     set change(name){
        this.firstName = name;
   
    }
}
console.dir(person);
//  console.log(person.fullName);
//  person.change = 'Hasan';
 
//  console.log(person.firstName);

//  person.change("Mahmud") 
//  console.log(person.firstName)