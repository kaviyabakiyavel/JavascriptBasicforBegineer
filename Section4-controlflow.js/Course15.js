//Falsy
//undefined
//null
//''
//false
//0
//NAN
const array = [0, null, undefined, '', 1, 2, 3];
function countTruthy(arr) {
    let count = 0
    for (let val of array) {
        if (val)
            count++
    }
    return count
}
let output = countTruthy(array)
console.log(output)