//one thing need to understand object in javascript.
//that they are dynamic.
//once you created always add new properties or methods or remove existig ones .

//when using const you can't reassgin the const . 
//but always can change the circle object by adding or removing properties.

const circle = {
    radius : 1
};
circle.color = 'yellow';
circle.draw = function(){}
delete circle.color ;
delete circle.draw;
console.log(circle);