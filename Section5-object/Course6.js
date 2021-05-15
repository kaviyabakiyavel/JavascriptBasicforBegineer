//value types vs reference type 
//value types
// 1) Number
// 2) String
// 3) Boolean
// 4) Symbol
// 5) undefined
// 6) null

//Reference types
// 1) Object
// 2) Function
// 3) Array


//primitive type
let x = 10;
let y = x;
x = 20;

console.log(x); //20
console.log(y); //10

//reference type 
// a = (memory location - 1234) = 1234 -{value : 10}
//copy a into b means 
//both a(1234) and b(1234) pointing to same address  1234-{value:10}
let a = { value: 10 };
let b = x;
a.value = 20;
console.log("a",a) //20

// conculsion :
// primitives are copied by their value.
// objects are copied by their reference.


//primitives both r independent 
let number = 10;
function increase(number) {
    number++;
    //console.log(number) //output 11 but once comes out of te scope it will be vansihed 
}
increase(number);
console.log(number);//output 10


//reference type
//obj pointing to same reference 
//so it will get increment 
let obj = { value: 10 };
function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj);



