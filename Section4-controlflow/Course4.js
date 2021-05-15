//while loop
//print odd & event number
//key difference b/w while loop and for loop 
//In for loop loop variable in part of loop itself .
//But in while loop we have to declare the variable externally eg:i


//In forloop i is decalred inside forloop and can able to access only inside particular block
for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) { console.log(i) }
}
console.log("***************")

let i = 0; //declaration , condition , stateemnt , end of the while block increment the variable 
while (i <= 5) {
    if (i % 2 !== 0) { console.log(i) };
    i++;
}


//time complexity 
