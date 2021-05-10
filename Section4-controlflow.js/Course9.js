//break and continue 
//interview question 

let i = 0 ;
while (i <= 10){
    // if(i === 5){
    //     break;
    // }

    //when ever even number if condition true and it will continue the loop.
    //with jump key word move to next iteration.
    if( i % 2 === 0){
        i++;
        continue;
    }
    console.log(i);
    i++
}