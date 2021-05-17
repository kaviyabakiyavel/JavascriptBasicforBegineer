//two type of string in javascript
//1. String Primitive
const message = ' This is my first message ';
console.log(typeof(message))
//when type message. -> javascript engine it means string object
console.log(message.length) //24
console.log(message[0]) //T
console.log(message[1]) //h
console.log(message.includes('my'))//true
console.log(message.includes('not'))//false
console.log(message.startsWith('This'))//true
console.log(message.startsWith('this'))//false
console.log(message.endsWith('e')) //true
console.log(message.indexOf('my')) //8
console.log(message.replace('first','second'))
console.log(message.toLocaleLowerCase())
console.log(message.toUpperCase())
console.log(message.trim())//trim white space before and after
console.log(message.trimLeft())//remove space on left side
console.log(message.trimRight())//remove space on right side
console.log(message.split(' '))//returns array


//2. String Object
//String() is the constructor function 
//Inbulit it has lot of methods and property in it .
//creating by using new keyword.
const another = new String('hi');
console.log(typeof(another))