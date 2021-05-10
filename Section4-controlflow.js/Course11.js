//Landscape of portrait
//in this example no need to put true and false 

//written function by using if else condition
// function isLandscape(width,height){
//   if (width > height) return true;
//   return false
// }
// let output = isLandscape(400,200)
// console.log(output)

//write function by using ternary operator
// function isLandscape(width,height){
//     return(width > height) ? true : false
// }
// let output = isLandscape(400,100)
// console.log(output)

// without wrtting ternary operator 
function isLandscape(width,height){
    return(width > height) 
}
let output = isLandscape(400,100)
console.log(output)