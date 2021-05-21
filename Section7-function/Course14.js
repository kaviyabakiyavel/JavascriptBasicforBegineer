

try {
    const numbers = [1, 2, 3, 4, 1, 1];
    const count = countOccurrences(true, 1);
    console.log(count);
} catch (e) {
    console.log(e.message)
}
function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('This argument is not an array');
    return array.reduce((accumulator, current) => {
        const count = (current === searchElement) ? 1 : 0;
        return accumulator + count;
    })
}
