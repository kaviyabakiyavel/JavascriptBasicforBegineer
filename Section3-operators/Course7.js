//Logical Operator && , || , !


//1) Logical AND (&&)
//Returns TRUE if both operands are TRUE 
// console.log(true && true); //true
// console.log(false && true); //false

//realtime example
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan)

//2) Logical OR (||)
//Returns True if one of the operands are True
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan)

//3) NOT (!)
let applicationRefused = !eligibleForLoan
console.log(applicationRefused)