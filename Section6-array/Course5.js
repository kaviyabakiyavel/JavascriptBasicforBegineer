//Arrow function 
//instead of predicate methods es6 we can use arrow function 

const courses = [
    { id: 1, name: 'a' },
    { id: 1, name: 'b' },
]
const course = courses.find(course => course.name === 'a')
console.log(course);

const numbers = [1,2,3,4]
//end
numbers.push() //add
numbers.pop() //remove

//beginning
numbers.unshift()//add
numbers.shift()//remove

//Middle
numbers.splice()//add middle
//2 - position(3) 1 - how many number as to delete
numbers.splice(2,1)//remove element in middle
console.log(numbers) //output [1,2,4]