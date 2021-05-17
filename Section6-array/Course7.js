//combaining and slicing array (prmitive data type)
// const first = [1,2,3];
// const second = [4,5,6];
// const combained = first.concat(second);
// console.log(combained);

//slice array into two part
// const slice1 = combained.slice(2,4);
// console.log(slice1);
// const slice2 = combained.slice(2);
// console.log(slice2);



// reference type
//when using concat object is copied by reference .
const first = [{ id : 1 }];
const second = [4,5,6];
const combained = first.concat(second);
first[0].id = 10;
console.log(combained);
