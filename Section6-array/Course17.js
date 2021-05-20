const numbers = [1, 2, 3, 4, 5, 6]
// console.log(numbers.includes(1)) //if given element is exist or not if return true else return false

function includes(arr,searchelement) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === searchelement) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    for(let number of numbers){
       return number === searchelement ? true : false
    }
}
const output = includes(numbers,1)
console.log(output)