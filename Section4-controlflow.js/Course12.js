//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by 3 and 5 => FizzBuzz
//Not divisble by 3 or 5 => inout 
//not a number => 'Not a number'

// function fizzBuzz(num) {
//     let x = (num % 3 == 0)
//     let y = (num % 5 == 0)
//     if (typeof (num) !== 'number') {
//         return 'Not a Number'
//     }
//     if (x) {
//         return 'fizz'
//     }
//     if (y) {
//         return 'buzz'
//     }
//     if (x && y) {
//         return 'fizzbuzz'
//     }
//     else {
//         return num
//     }
// }
// let output = fizzBuzz(100)
// console.log(output)

//loop of 100
function fizzBuzz(num) {
    var s = ''
    for (let i = 1; i <= num; i++) {
        let x = (i % 3 == 0)
        let y = (i % 5 == 0)
        if (x && y) {
            s = 'fizzbuzz'
        }
        else if (x) {
            s = 'fizz'
        }
        else if (y) {
            s = 'buzz'
        }else{
            s = 'Not multiple'
        }
        console.log(i, s)
    }
}
let output = fizzBuzz(100)
console.log(output)

// function fizzBuzz(num) {
//     var arr = []
//     for (let i = 1; i <= num; i++) {
//         let obj = {}
//         let x = (i % 3 == 0)
//         let y = (i % 5 == 0)
//         if (x && y) {
//             obj[i] = 'fizzbuzz'
//         }
//         else if (x) {
//             obj[i] = 'fizz'
//         }
//         else if (y) {
//             obj[i] = 'buzz'
//         }
//         else {
//             obj[i] = 'Not multiple'
//         }
//         arr.push(obj)
//     }
//     return arr
// }
// let output = fizzBuzz(100)
// console.log(output)