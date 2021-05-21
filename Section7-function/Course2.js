//Hoisting 
//in function declaration you can call the function before it decleare 
//but in function expression you cant call the function before

//Function Declaration 
walk();
function walk() {
    console.log('walk');
}
//why function declaration is not throwing error.
// in javascript engine executes this code, it moves all the function decalation to the top .
//so cour code will look like this at run time .
// function walk() {
//     console.log('walk');
// }
// walk();


//function expression 
//run(); it will throw error reference error:  run is not defined 
const run = function () {
    console.log('run');
}
run();