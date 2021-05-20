const numbers = [1, 8, 9, 2, 12, 3, 4, 11];
function getMax(numbers) {
    if (numbers.length === 0) return undefined;
    // let max = numbers[0];
    // for (let element of numbers) {
    //     if (element > max) {
    //         max = element
    //     }
    // }
    // return max

    //achieve this problem by using reduce method
    const output = numbers.reduce((accumulator, current) => {
        console.log(accumulator, current)
        return (current > accumulator) ? current : accumulator
    })
    return output
}
const max = getMax(numbers);
console.log(max)