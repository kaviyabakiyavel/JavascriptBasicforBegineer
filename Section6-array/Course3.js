//finding elements 
const numbers = [1,2,3,4];
console.log(numbers.indexOf('a')) //return -1
console.log(numbers.indexOf(1)); //return position 0
console.log(numbers.indexOf('1')) //return -1
console.log(numbers.lastIndexOf(1)); //from the lastindex 1 position value is 3 , so return output 3


console.log(numbers.indexOf(1) !== -1) //return true because this condition finding 1 is exist in the array

//new method in javascript acheiving same thing
console.log(numbers.includes(1));

//second parameter 
//it will search number 1 and 2 means it ommit the number before 2 and
//start searching after that
console.log(numbers.indexOf(1,2))