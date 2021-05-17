//1)Emptying an array
// let numbers = [1,2,3,4];
// numbers = [];
// console.log(numbers); 

//2)very important this method it fill fail if it has multiple references 
// let numbers = [1,2,3,4];
// let another = numbers;
// numbers = [];
// console.log(another); //another is pointing to the old object
// console.log(numbers); // number is pointing to the new object

//3)delete array by using length = 0
// let numbers = [1,2,3,4];
// let another = numbers;
// numbers.length=0;
// console.log(another); 
// console.log(numbers);

//4)splice method 
// let numbers = [1,2,3,4];
// let another = numbers;
// //o start from the first element and remove all the element by using number.length
// numbers.splice(0,numbers.length)
// console.log(another); 
// console.log(numbers);


//5)pop method - delete the last element in the array 
//its length > 0 untill loop will excute and delete the last element in the array
//this method is not recommended to use because if its as large sets of arrays keep on excute = (performance issue)
let numbers = [1,2,3,4];
let another = numbers;
while(numbers.length > 0){
    numbers.pop()
}
console.log(another); 
console.log(numbers);
