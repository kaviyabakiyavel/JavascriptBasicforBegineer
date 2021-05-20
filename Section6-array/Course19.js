//Moving an element 
//index means position 
//offset which position as to shift
const numbers = [1, 2, 3, 4];

function move(array, index, offset) {
    const position = index + offset;
    if(position >= array.length){
        console.error('Invalid offset');
        return ; //return it wont excute the code no need of else block 
    }
    const copyarray = [...array];
    //copyarray.splice(index,1) return an array [0] access that element 
    const element = copyarray.splice(index,1)[0];
    copyarray.splice(position,0,element);
    return copyarray
}
const output1 = move(numbers, 0, 0); //output : [1,2,3,4]
console.log("output1", output1)
const output2 = move(numbers, 0, 1); //output : [2,1,3,4]
console.log("output2", output2)
const output3 = move(numbers, 0, 2); //output : [2,3,1,4]
console.log("output3", output3)
const output4 = move(numbers, 0, 3); //output : [2,3,4,1]
console.log("output4", output4)
const output5 = move(numbers, 0, 4); // throw error invalid
console.log("output5", output5)

