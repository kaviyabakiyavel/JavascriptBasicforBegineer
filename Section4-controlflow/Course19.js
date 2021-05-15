function showStars(rows) {
    for (let row = 1 ; row <= rows ; row++) {
       let pattern = '';
       for(let i = 0 ; i < row ; i++){
        pattern = pattern + '*';
       }
       console.log(pattern)
    }
}
showStars(5)
console.log('--------------------------')
function reverseshowStars(rows) {
    for (let row = rows ; row >= 1 ; row--) {
       let pattern = '';
       for(let i = 0 ; i < row ; i++){
        pattern = pattern + '*';
       }
       console.log(pattern)
    }
}
reverseshowStars(5)