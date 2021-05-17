const courses = [
    { id: 1, name: 'a' },
    { id: 1, name: 'b' },
]
console.log(courses.includes({ id: 1, name: 'a' }))
//return false because both not sharing the same address.
//both have different address and different memory location.


//find method returns the value of the first element in the provided array that statisfies the provided testing function 
//if no values statisfy the testing function , undefined is returned.
//return the first element that matches the criteria.
//function which is writing inside find is a predicate or callback function.

const course = courses.find(function (course) {
    return course.name === 'a'
})
console.log(course);

const course1 = courses.find(function (course) {
    return course.name === 'xyz'
})
console.log(course1);


//findIndex it will return index
//if not matches return -1 
const course2 = courses.findIndex(function (course) {
    return course.name === 'xyz'
})
console.log(course2);

const course3 = courses.findIndex(function (course) {
    return course.name === 'b'
})
console.log(course3);