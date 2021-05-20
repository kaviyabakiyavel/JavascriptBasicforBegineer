const numbers = [1, 2, 3, 4, 1, 1];
//program 1 by using includes 
// function except(arr, exculded) {
//     const result = [];
//     for (let element of arr) {
//         if (!exculded.includes(element)) {
//             result.push(element)
//         }
//     }
//     return result
// }

//program 2
function includes(arr, searchelement) {
    for (let element of arr) {
        if (element !== searchelement) {
            return searchelement
        }
    }
}
function except(arr, exculded) {
    let result = []
    for (let element of arr) {
        let val = includes(exculded, element)
        if(val !== undefined){result.push(val)}
    }
    return result
}
const output1 = except(numbers, [1]); //output : [2,3,4]
console.log(output1);
const output2 = except(numbers, [1, 2]); //output : [3,4]
console.log(output2);