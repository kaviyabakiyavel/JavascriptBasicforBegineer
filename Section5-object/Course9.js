//Garbage collection
// in low level langauge like c or c++ we need to allocate memory to it , and 
// when we are done  we need to reallocate memory.
// But in javascript we dont have this concept .
//we can easily create the new object , and the time we initialized this object , memory is automatically allocated to this object , 
//and we can use that . when we are done using , we dont need to deallocate the memory .
//So our javascript engine has what we call a garbage collector.
//The job of this garbage collector is to find the variables or constants that are no longer used and then deallocate the memory. that was allocated to them earlier .

//Javascript developer do not have to worry about this . Memory allocation and deallocation automatically happens behind the scenes .
