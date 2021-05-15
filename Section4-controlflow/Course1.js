//Conditional statement 
//if..else
//switch..case

//if-else 

//Hour
//If hour is between 6am and 12pm : Good morning!
//If it is betweeen 12pm and 6pm : Good afternoon!
//Otherwise : good evening!

// if(condition){
//     statement 
// }
// else if(anothercondition){
//     statement 
// }
// else if(yeanothercondition){
//     statement
// }
// else{
//     statement
// }

let hour = 10 ;
if(hour >= 6 && hour < 12){
  console.log("Good morning");
}
else if(hour >= 12 && hour < 18){
  console.log("Good afternoon");
}
else{
    console.log("Good night");
}