//Array

let selectedColors = ['red','blue'];
console.log('selectedColors',selectedColors) //gives  position of the element 

//if u want to access the lement in an array we use index 
console.log(selectedColors[0])

//javascript is a dynamic language -  you can change the variables at run time 
//same princples apply to or arrays . 
// the length of the array or object we have in an array are dynamic , they can change.


selectedColors[2] = 'green'
console.log(selectedColors) //length is dynamic 

selectedColors[3] = 1;
console.log(selectedColors) //type of the element inside also dynamic

//typeof array is an object 
console.log(typeof(selectedColors)) //object

//length properties return number of items or element in an array
console.log(selectedColors.length)

