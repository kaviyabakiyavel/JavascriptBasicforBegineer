//Let vs var

// function start(){
//     for(var i = 0 ; i < 5 ; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// start()

//before es6 var is the only way of decelare the varibales 
//let const => blocked-scoped
//var - function-scoped

function start(){
    for(var i = 0 ; i < 5 ; i++){
      if(true){
          var color = 'red'; //when u declare with var you can acces that variable inside function scope 
      }
    }
    console.log(color)
}
start()

//global scope 
// var color = 'red'; // var attached to window object 
// console.log(window.color);
// let age = 30;
// console.log(window.age);

//function 
function sayHi(){
    console.log('Hi');
}
console.log(window.sayHi());//referes to window object 