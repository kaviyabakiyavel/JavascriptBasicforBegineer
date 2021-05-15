const marks = [80, 80, 50];
//Average = 70
//1-59 : F
//60-69:D
//70-79:C
//80-89:j   
//90-100:A
function calculateAverage(marks) {
    let sum = 0;
    for (let mark of marks)
        sum += mark;
    return sum / marks.length;
}
function calculateGrade(average) {
    //  if(average >= 0 && average <= 59){
    //      return 'F'
    //  }
    //  else if(average >= 60 && average <= 69){
    //      return 'D'
    //  }
    //  else if(average >= 70 && average <= 79){
    //     return 'C'
    //  }
    //  else if(average >= 80 && average <= 89){
    //      return 'J'
    //  }
    //  else if(average >= 90 && average <= 100){
    //      return 'A'
    //  }
    //  else{
    //      console.log("")
    //  }
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}
let average = calculateAverage(marks)
let grade = calculateGrade(average)
console.log("grade",grade)