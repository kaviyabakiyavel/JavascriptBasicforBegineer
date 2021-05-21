//Getters and setters 

// const person = {
//     firstName: 'kaviya',
//     lastName: 'bakiyavel',
//     //fullName : function(){},
//     fullName() {
//         return `${person.firstName} ${person.lastName}`
//     }
// }
//console.log(person.firstName + ' ' + person.lastName)
//template literal.
//console.log(`${person.firstName} ${person.lastName}`);
//console.log(person.fullName())

//1) problem 1 you can read only cannot set the fullname outside
//2) Getter access the properties of an object 
//3 ) setter change(mutate) them



//function can access like property by using getter eg:person.fullName() / person.fullName
//get 
const person1 = {
    firstName: 'kaviya',
    lastName: 'bakiyavel',
    //fullName : function(){},
    get fullName() {
        return `${person1.firstName} ${person1.lastName}`
    },
}
console.log(person1.fullName)

//set
const person = {
    firstName: 'kaviya',
    lastName: 'bakiyavel',
    set fullName(value){
      const part = value.split(' ');
      this.firstName = part[0];
      this.lastName = part[1];
    }
}
person.fullName = 'jayanthi bakiyavel'
console.log(person)
console.log(person.fullName)