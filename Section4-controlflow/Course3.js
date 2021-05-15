// repeated the code at five Time 
// by using console.log
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');

// its ugly there is a better way to achieve the same result by using loops 

//Loops - Basically repeate an actions number of times.

// 1) For 
// 2) while
// 3) Do...while
// 4) For...in
// 5) For...of


//for(initialExpression ; condition ; incrementexpression)
for(let i = 0 ; i<5 ; i++){
    //statement
    console.log("hello world",i);
}
console.log('*************')
for(let i = 1 ; i<=5 ; i++){
    //statement
    console.log("hello world",i);
}

//print odd and even number 
for(let i = 1 ; i <=5 ; i++){
    if(i % 2 == 0){
        console.log("even number" ,i);
    }
    else{
        console.log("odd number", i)
    }
}

//reverse from 5 to 1 
for(let i = 5 ; i>= 1 ; i--){
  console.log("i",i)
}
