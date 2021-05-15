//factory functions 
//if key and value both are same , simply can write only key 

function createCircle(radius){
    return {
        //radius : radius,
        radius,
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1)
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);