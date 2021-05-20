//Array from range 

function arrayfromRange(min, max) {
    var output = []
    for (let i = min; i <= max; i++) {
         output.push(i)
    }
    return output
}
const numbers = arrayfromRange(1, 4);
//const numbers = arrayfromRange(-5, 4);
//const numbers = arrayfromRange(10, -4);
console.log(numbers);