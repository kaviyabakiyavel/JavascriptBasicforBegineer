//circle.radius = 2;
//circle.area = 20;
//console.log(circle.area);
const circle ={
    radius : 1,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
}
console.log(circle.area);