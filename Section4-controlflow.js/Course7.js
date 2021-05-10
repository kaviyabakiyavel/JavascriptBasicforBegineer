//for
//while
//do-while ...this loop repeated an action number of times.

//Two kinds of loop we have in javascript ES6
//for..in 
//for..of
//bascically iternate over the properties if an object or element in an array .


//for...in
const person = {
    name: 'Kaviya',
    age: 30
};
//key will hold the property of an objects.
//in each iteration value of key might be different
// that senario we have to use bracket notation to access dynamic key and value in an object.
for (let key in person) {
    //console.log(key);
    //wrong way to access the dynamic key bcz in person object there is no key property it will throw undefined
    //console.log(person.key)
    console.log(key, person[key])
}

//access the value of the porperties two way we can do 
//dot notation
//console.log(person.name)
//square bracket or bracket notation
//console.log(person["name"])



const colors = ['red','green','blue'];
for(let index in colors){
    console.log(index , colors[index])
}