//LOcal vs Global

//let and const can accsess inside a block scope 
// function start() {
//     const message = 'hi';
//     if (true) {
//         const another = 'bye';
//     }
//     console.log(another)
//     let message1 = 'hello';
//     //loop
//     for (let i = 0; i < 5; i++) {
//         console.log(i) //i can access only inside the block
//     }
// }
// console.log(message) // message is not defined 
// console.log(message1)
// start()

const color = 'red';
function start() {
    const message = 'hi';
    const color = 'blue';
    console.log(color);
}
function stop() {
    const message = 'bye';
}
start();