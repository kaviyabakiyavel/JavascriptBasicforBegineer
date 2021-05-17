//Date()is a constructor function
//without any parameter return current date

const now = new Date()
console.log(now)
const date1 = new Date('May 11 2018 09:00');
console.log(date1)
console.log(now.setFullYear(2017));
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
