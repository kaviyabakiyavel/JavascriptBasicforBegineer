//Logical operator with non booleans value
//truthy and flasy basically it wont print true or false instead 
// if its true value it will print 
// if its false value it will print 

// Falsy values 
// 1) undefined
// 2) null
// 3) 0
// 3) false
// 4) ''
// 5) NaN

//Anything that is not Falsy ->Truthy 
//evaluation start from left to right 
//first finds truthy value it wont move further eg 4
console.log(false  || true) //true //so first value is false move to next is true so output return true.
console.log(false || 'Mosh') //Mosh //so first value is false move to next is 'mosh' its not a falsy value so return 'mosh.
console.log(false || 1) //1 //so first value is false move to next is 1 its not a falsy value so return 1.
console.log(false || 1 || 2) //otuput 1 first finds truthy value it wont move further.
 
// let userColor = 'red';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor ;
// console.log(currentColor);

//falsy value
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor ;
console.log(currentColor)