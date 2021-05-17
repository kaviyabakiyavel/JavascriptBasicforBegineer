//sorting array

const numbers = [2,3,1];
const sorted = numbers.sort();
console.log(sorted)

const reverse = numbers.reverse();
console.log(reverse);

//object sort 
// const courses  = [
//     {id:1,name:'Node'},
//     {id:2,name:'Javascript'}, //change lowercase j //output node,javascript based on Ascii
// ];
// courses.sort(function(a,b){
//     //a < b = -1
//     //a > b = 1
//     //a === b = 0
//     if(a.name < b.name) return -1;
//     if(a.name > b.name) return 1;
//     return 0;
// });
// console.log(courses); //output javascript , node

const courses  = [
    {id:1,name:'Node'},
    {id:2,name:'javascript'}, //change lowercase j //output node,javascript based on Ascii
];
courses.sort(function(a,b){
    //a < b = -1
    //a > b = 1
    //a === b = 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});
console.log(courses); //output javascript , node

//shortcut ctrl d 