//using spread operator u can combain two arrays in es6 
const first = [1,2,3];
const second = [4,5,6];
// const combained = [...first, ...second];
// console.log(combained)
//adding element in between and last 
const combained = [...first,'a', ...second,'b'];
console.log(combained)


//puting into new aray 
const copy = [...combained];
console.log(copy) //returned with new array with all the values
