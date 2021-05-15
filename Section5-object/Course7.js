// for in loop 

const circle = {
    radius : 1 ,
    draw(){
        console.log('draw')
    }
}
for(let key in circle){
    console.log(key , circle[key])
}

//throw an error for-of used for iterating array and maps not object 
// for(let key of circle){
// }


for(let key of Object.keys(circle)){
    console.log(key,circle[key])
}

//Object is a inbuilt constructor function 

//The Object.entries() method returns an array of a given object's
for(let entry of Object.entries(circle)){
    console.log(entry);
}

//simplest way to enumerate the properties of an object is using for in loop.
//along with object.keys and object entries and finally to see if a given property or method exit in an object.