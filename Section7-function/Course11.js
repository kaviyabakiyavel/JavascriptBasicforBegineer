//Changing this 
//Suppose foreach method doesnt have a second parameter 
//assign this to self and access 
//this is not preferred approach 
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         const self = this; //or that = this
//         this.tags.forEach(function (tag) {
//             console.log(self.title, tag);
//         })
//     }
// }
//console.log(video.showTags());

//playVideo is an object can access properties and methods by using dot 
function playVideo() {
    console.log(this);
}
playVideo();//output window object 

playVideo.call({ name: 'kaviya' }, 1, 2); // output {name : 'kaviya'}
playVideo.apply({ name: 'kaviya' }, [1, 2]); // output {name : 'kaviya'}
//difference bewteen call and apply only passing an arguments
//call can apply multiple arguments 
//apply we can pass the arguments in array 

const fn = playVideo.bind({name:'kaviya'}) //bind always point to new funtion so store in variable and access that function
fn();

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function (tag) {
//             console.log(this.title, tag);
//         }.bind(this))
//     }
// }
// console.log(video.showTags());

//newer solution using ECMAscript6 using using arraow function 
// arrow function can access this value
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        })
    }
}
console.log(video.showTags());