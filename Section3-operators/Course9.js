//BitWise Operators symbol (|)  - OR
//1 =  00000001 //8bits  represent 1byte of information in a computer .
//2 = 00000010 //decimal to binary converter 
// Result = 00000011
// Result = 3

//bitwise operator is similar to logical wise operator , but they work in the individual bits of a number .

console.log(1 | 2); //Bitwise OR - output : 3


//BitWise Operators symbol (&)  - AND
//1 =  00000001 
//2 = 00000010 
//check two bits equvialent position if both as 1 return 1 else 0
// Result = 00000000
// Result = 0
console.log(1 & 2); //Bitwise AND 

//real time eg Access control system 
//user can have these permissions , read ,write,Excute
// 00000100
// 00000010
// 00000001 

const readpermission = 4 ;
const writepermission = 2;
const executepermission = 1;

let mypermission = 0 ;
mypermission = mypermission | readpermission | writepermission
console.log(mypermission)
//00000110 = 6 = mypermission
//00000100  = 4 = readpermission
//o/p = 00000100 = 4 
console.log(mypermission & readpermission)
let message  = (mypermission & readpermission) ? 'yes' : 'no';
console.log(message)
