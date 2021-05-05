let interestRate = 0.3;
interestRate = 1 ;
console.log(interestRate);
//output : 1 // value is changed 

//in real world we dont want the value of a variable to change 
//because otherwise its going to create all kinds of bugs in our application .
//in those situations we use constant . 
//The value of variable cannot change once its declare by using const

const interestRate = 0.3;
interestRate = 1 ;
console.log(interestRate);
//error uncaught typeError Assignment to constant variable.


