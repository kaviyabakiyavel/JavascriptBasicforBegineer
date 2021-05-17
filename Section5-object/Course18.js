//Constructor function

let post = new Post('a','b','c')
console.log(post);

function Post(title, body, author) {
    this.title = title
    this.body = body
    this.author = author
    this.view = 0;
    this.comments = [];
    this.isLive = false;
}