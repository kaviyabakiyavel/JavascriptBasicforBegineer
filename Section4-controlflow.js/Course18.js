const marks = [80, 80, 50];
//Average = 70
//1-59 : F
//60-69:D
//70-79:C
//80-89:B
//90-100:A
function calculateGrade(marks) {
    let sum = 0;
    for(let mark of marks)
    sum = sum + mark;
    

}
let output = calculateGrade(marks)
console.log(output)