// multiple of 3 and 5 upto 10
// multiple of 3 is : 3,6,9
// multiple of 5 is : 5,10
//sum : 3+6+9+5+10
function sum(num) {
    var sum = 0
    for (let i = 1; i <= num; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i
    return sum
}
let output = sum(10)
console.log(output)