//Template Literals
// Object {}
// Boolean true , false
// String '' , ""

const message = 
'This is my\n'+
'\'first\' message';
console.log(message)

// Template Literals  ``
const another = `This is my
'first' message`;

console.log(another)

//easier way to write email template by using template literal
const email = 
`Hi Kavya,

Thank you for joining my mailing list.

Regards,
B.kaviya` ; 

console.log(email)

//when writing dynamic name 
//string literals
 const name = 'Kaviya';
// const message = 'Hi' + name + ',\n';

// its so ugly way of wrting the code 
// we can overcome this problem by using Template literals,

//By using template literal
const output = 
`Hi ${name},

 Thanks for the update.

Regards,
B.Kaviya`;

console.log(output)