//call,apply
//in javascript function ae objects 

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
Circle.call({},1); 
//first argument refer to empty object .
//second argument explicty pass n of arguments 1,2,3....
Circle.apply({},[1,2,3])
//first argument refer to empty object .
//second argument explicty pass array [1,2,3]
const another = new Circle(1);