const circle = {
    radius : 1,
    draw(){
        console.log('draw');
    }
};
//1)olser way to copy an object
// const another = {};
// for(let key in circle){
//     another[key] = circle[key];
// }
// console.log(another);

//2)objectassign method we can use for clone an object (or) combain a multiple object into single object
// const another = Object.assign({},circle);
// console.log(another)

//add property to an object and access or copy the cirlce object by using object.assign
// const another = Object.assign({
// color : 'yellow'
// },circle);
// console.log(another);

//3) by using spread operator - we can copy the object
const another = {...circle};
console.log(another);

