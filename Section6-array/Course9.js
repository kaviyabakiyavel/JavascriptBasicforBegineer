//Iterating an array 
//1) for-of loop
let numbers = [1, 2, 3, 4, 5, 6]
// for (let number of numbers) {
//     console.log(number)
// }


//2) for each method
// numbers.forEach(function (number) {
//    console.log(number)
// })
//or arrow function
// numbers.forEach(number => console.log(number))

//second parameter 
numbers.forEach((number,index) => console.log(index,number))

//we wont get index in for-of loop . if you need that use for in loop 
 