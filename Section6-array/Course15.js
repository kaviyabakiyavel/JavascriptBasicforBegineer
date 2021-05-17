//Reducing an array
 const numbers = [1,-1,2,3];
// let sum = 0 ;
// for(let n of numbers){
//     sum += n;
// }
// console.log(sum)

//es6 reduce method and gives output single element
//reduce method as two argument callback function and initial value for the accumulator
// a = 0 , c = 1 => a = 1
// a = 1 , c = -1 => a = 0
// a = 0 , c = 2 => a = 2
//a = 2  , c = 3 => a = 5
const sum  = numbers.reduce((accumulator , currentValue) => {
    return accumulator + currentValue;
},0)
console.log(sum)

// if a is not initalized with 0 
// a = 1 , c = -1 => a = 0
// a = 0 , c = 2 => a = 2
// a = 2 , c = 3 => a = 5
const sum1  = numbers.reduce((accumulator , currentValue) => accumulator + currentValue)
console.log(sum1)