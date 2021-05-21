//Function declarations vs expressions 

//function declaration
function walk(){
    console.log('walk');
}

// Named function expression 
let run = function walk(){
    console.log('run');
};

//Anonymous function expression
let run = function(){
    console.log('run');
};
let move = run; //both share the same reference 
run();
move();