function showoddeven(num) {
    for (let i = 1; i <= num; i++) {
        // if (i % 2 === 0) {
        //     console.log(i, "EVEN")
        // } else {
        //     console.log(i, "ODD")
        // }
        //instead of two consoles
        const result =  (i % 2 === 0) ? "EVEN" : "ODD" ;
        console.log(i , result)
    }
}
let output = showoddeven(10)
