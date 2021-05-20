const numbers = [1, 2, 3, 4, 1];
function countOccurences(array, searchElement) {
    // let count = 0;
    // for (let element of array) {
    //     if (element === searchElement) {
    //         count++;
    //     }
    // }
    // return count;

    //achieving same thing by using reduce method

    const output = array.reduce((accumulator, current) => {
        const count = (current === searchElement) ? 1  : 0
        console.log(accumulator,current,searchElement)
        return accumulator + count;
    },0)
    return output
}
const count = countOccurences(numbers, 1);
console.log(count)


