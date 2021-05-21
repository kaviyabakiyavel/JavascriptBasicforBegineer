//rest operator
function sum(...args) {
    console.log(args) //return array [1,2,3,4,5,6]
    return args.reduce((accumulator, current) => accumulator + current);
}
console.log(sum(1, 2, 3, 4, 5, 6));

function shopping(discount,...prices){
    const total=  prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(shopping(0.1,20,30))

//throw error rest parameter must be last formal parameter .
//0 or more parameter before this 
// function shopping(discount,...prices,somevalue){
//     const total=  prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }
// console.log(shopping(0.1,20,30,1))