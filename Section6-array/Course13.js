
//filter an array
//excute call back method for each element in this array .
//if element matches this criteria, it will add this element into new array .
//finally get the new array 

// const numbers = [1,-1,2,3];
// const filtered = numbers.filter(function(value){
//     return value >= 0;
// })
// console.log(filtered);

// or arrow function
const numbers = [1,-1,2,3];
const filtered = numbers.filter(value => value >= 0 );
console.log(filtered);