//constructor function
//job of the function is constructor or create an object.

//camel notation  : oneTwoThreeFour
//pascal notation : OneTwoThreeFour

//when naming constructor function we should use  pascal notation 

//Constructor function
//this is the reference to the object that is executing the piece od code .
//. dot notation we can read a property or set a property 
function Cirlce(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}
const circle = new Cirlce(1);
//three things it will happen when u have new keyword.
//new operator create an empty javascript object.
//this will point to an object.
//return an object from the function.


//difference b/w factory function vs constructor function.
