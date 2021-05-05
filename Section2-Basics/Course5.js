//Reference Type 
// Object 
// array 
// Function 

//Course about object 
// An Object in Javascript . Aperson has name ,age ,address and so on.
//These all the properties of person .

// let name = 'kaviya';
// let age = 30 ;
//key are called properties of an object 
//
// let person = {
//     name: 'kaviya',
//     age: 30,
// };
//dot notation
//changing the person name 
// person.name = 'John'
//Bracket notation 
// person['name'] = 'marry';
// console.log(person);


//Which approach is better dot or bracket notation 
// https://dmitripavlutin.com/access-object-properties-javascript/
// 3 ways to access object properties in javascript 
// 1) Dot property accesor : object.property 
// 2) square brackets property access :  object['property']
// 3) object destructuring :  const {property} = object 

// 1) dot notation
// const hero = {
//     name: 'Batman'
// };
// Dot property accessor
//console.log(hero.name); // => 'Batman'

//"Choose the dot property accessor when the property name is known ahead of time.

// Dot property accessor requies identifiers
// An identifer in javascript containes unicode letters $ , _ and digits 0 to 9
// Cannot start with digit 
// Valid identifiers eg : name ,address , street , createdby.

//some properties are not valid identifiers 
const weirdObject = {
    'prop-3': 'three',
    '3': 'three'
};

console.log("dotnotation : ", weirdObject.prop - 3); // => NaN
//console.log(weirdObject.3); //syntax error


//same problem slove with square bracket 
//the square brakets syntax accesses without problems the properties that have special names :

weirdObject['prop-3']; // => 'three'
weirdObject[3];        // => 'three' 


//2)square bracket property accesor
const property = 'name';
const hero = {
    name: 'Batman'
};

// Square brackets property accessor:
console.log(hero['name']);   // => 'Batman'
console.log(hero[property]); // => 'Batman
//Choose the square brackets property accessor when the property name is dynamic, i.e. determined at runtime.

// Object destructuring: Destruction is a javascript expression that allows us to extract 
// data from arrays, object , map and set them into new distinct variables .
// Destructing allows us to extract multiple properties or items from an array at a time .

//created object 
// const person = {
//     name : 'kaviya',
//     age : 21 ,
//     gender : 'Female',
// }
// //declare the value of the property inside an object 
// let {name , age , gender = 'unknown'} = person ; 
// console.log(name);
// console.log(age);
// console.log(gender);
// // when u uncomment gender inside object inital value ill be overridden 


//object destructing in function
//Extracting name and age properties from an object
//and setting into the variable inside the function
const person = {
    name : 'Kaviya',
    age : 23,
    gender : 'Female'
};
function printDetails ({name , age}){
    console.log("function" , name)
    console.log("function" , age)
}
printDetails(person)


// why we r using object destructing ?
// The object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables. 
// What's better, object destructuring can extract multiple properties in one statement, can access properties from nested objects, 

//https://dmitripavlutin.com/javascript-object-destructuring/#:~:text=The%20object%20destructuring%20is%20a,the%20property%20doesn't%20exist.