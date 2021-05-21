//Arguments;

//Javascript is a dynamic langugae 
let x = 1;
x = 'a'
console.log(x)
//same concept arguments of function

function sum1(a,b){
    return a+b; //1 + 2 //result = 3
}
console.log(sum1(1,2))

function sum2(a,b){
    return a+b; // 1 + undefined //result = NAN
}
console.log(sum2(1));

function sum3(a,b){
    return a+b; // undefined + undefined //result = NAN
}
console.log(sum3());

function sum4(a,b){
    return a+b; // 1 + 2 //result = 3
}
console.log(sum4(1,2,3,4,5));



//Every function in javascript has special object called arguments.
function sum5(){
    let total = 0 ;
    for(let value of arguments){
        total += value
    }
    console.log(arguments)
    return total
}
console.log(sum5(1,2,3,4,5,6));
