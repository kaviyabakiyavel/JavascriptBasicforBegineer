//this keyword in javascript 
//The object that is executing the current function 
//function is part of an object we call that functio a method

//1) if function is a method in an object , this references that object (method =>this ref=> obj)
//2) otherwise if that function is a regular function . (function =>this ref => globalobject / window object in browser , gloabl in node)

//1 rule
// const video = {
//     title: 'a',
//     play() {
//         console.log(this); //this refer to video object 
//     }
// }
// video.stop = function () { //stop is a method in video object so this refers to video
//     console.log(this);
// }
// video.stop();


//2 rule
// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// }
//constructor functio start wiht capital letter
// function Video(title){
//     this.title  = title;
//     console.log(this)//refers to window object
// }
// Video();

//3
// function Video(title) {
//     this.title = title;
//     console.log(this)//refers to window object
// }
// const v = new Video('b'); //new creates an empty object {} , so this pointing to empty object 

//4
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            //when accessing title is undefined ,
            // this refer to window object
            // because we ar inside callback function -  its similar to regular function
            //how can we slove this problem and reder title.
            //foreach as two parameter (callback,thisArgs)
            console.log(this.title, tag);
        },this) //this refers to video object inside callback now you will get the title 
    }
}
console.log(video.showTags());
