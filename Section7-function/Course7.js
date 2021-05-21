//Error Handling in javascript

const person = {
    firstName: 'kaviya',
    lastName: 'bakiyavel',
    set fullName(value) {
        // if (typeof value !== 'string') return; //this line wont throw any error 
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');

        const part = value.split(' ');
        if (part.length !== 2)
            throw new Error('Enter a first and last name.');

        this.firstName = part[0];
        this.lastName = part[1];
    }
}
try {
    // person.fullName = true; //value give in boolean 
    person.fullName = '';
} catch (e) {
    console.log(e);
}

console.log(person)
console.log(person.fullName)