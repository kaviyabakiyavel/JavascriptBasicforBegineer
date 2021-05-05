// functions
// functions one of the fundamental bulding blocks in javascript . 
// A function is basically a set of statements that performs a task or calculates a value .

//function declarations 
//A function receving name is called a parameter 
function greet(name) {
    console.log("hello world " + name);
}

//calling function 
greet('kaviya'); //value passing to function is called arguments 

// difference b/w parameter and arguments 
// https://codeburst.io/parameters-arguments-in-javascript-eb1d8bd0ef04
// Parameter are the names listed in the function definition.
// Arguments are values passed to the function when it is invoked.
// rest parameters (es6 methods)


//function can have muliple parameters 

function person(fname , lname){
    console.log('hello my name is ' + fname + lname)
}
person('Kaviya','Bakiyavel')