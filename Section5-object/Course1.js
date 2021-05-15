//objects is collection of key and vakue pairs 
//value of key might be anything in javascript 
//it can be object , array ,function ,string ,number, boolean, null,undefined.
//so no need of independent variable function . Everything can write inside an object .


// let radius = 1;
// let x = 1 ;
// let y = 1;

const circle = {
    radius : 1 ,
    location :{
        x : 1,
        y : 1
    },
    isVisible : true,
    draw:function(){
        console.log('draw your image')
    }
};

// function draw(){}
// function move(){}

circle.draw()

//object oriented programming also abbreviated as oop . 
//object oriented programming basically a style of programming.
//where we can see the programming as collection of object that talk to each other to perform some functionality .
//in object oriented programming terms if a function is part of an object , we call the function a method. 
// eg we are calling the draw method of the circle object .

//difference b/w function and method 
//if function is part of an object is called methods 



