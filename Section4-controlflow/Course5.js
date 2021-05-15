//do-while loop
//difference b/ while and dowhile 
//do while always excute once 


//difference b/w and do while examples 


//while example wont excute bcz condition is wrong .
// let i = 9;
// while(i <= 5){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//     i++
// }
//output no


//do-while
let i = 9;
do {
    //9 is odd number dislay on console
    if (i % 2 !== 0) {
        console.log(i);
    }
    //next incfement 1 by one . so 10
    i++;
    //next while condition validated ofcourse it false 
} while (i <= 5);
//output 9