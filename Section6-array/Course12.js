//Testing the elements of an array
//Every method
// const numbers = [1,-1,2,3,];
// const allPositive = numbers.every(function(value){
//   return value >= 0 ;
// });

// console.log(allPositive);
//as soon as get -1 search will terminate 


//some method run the call back function on every element in this array 
//as soon as it finds an elements that matches this criteria .
//its going to retun true.
//if matches the criteria only the first element returns and stop the search
const numbers = [1,-1,2,3,];
const atleastonePositive = numbers.some(function(value){
  return value >= 0 ;
});

console.log(atleastonePositive);