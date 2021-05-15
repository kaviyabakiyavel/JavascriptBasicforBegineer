
//prime number (whose factors are only 1 and itself , it cannot be divided evenly into another number)

//eg : 12 = 1,2,3,4,6,12
//when u divide by using this number by 12 reminder will be 0.
//so 12 can be divided evenly by its factors. 

//factors of 11 = 1,11
//factors of 13 = 1,13
function showPrimeNumber(limit) {
    for (let number = 2; number <= limit; number++) {
        console.log("number",number)
        let isPrime = true;
        //inner loop finding factors
        //every number can divided by 1 and itself , do factor=2 and factor < number
        for (let factor = 2; factor < number; factor++) {
            console.log("factor",factor)
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) console.log(number);
    }
}
let output = showPrimeNumber(20)
console.log(output)

// prime num from 1 to 20 -> answer : 2,3,5,7,11,13,17,19
