//let role; //undefined print unknown user
let role = 'guest';

switch(role){
    case 'guest' : 
        console.log("Guest user");
        break;

    case 'moderator' : 
        console.log("Moderator user");
        break;

    default :
        console.log("Unknown user");
}

//same example with if and else 
if(role === 'guest'){
    console.log("Guest user");
}
else if(role === 'moderator'){
    console.log("Moderator user");
}
else{
    console.log("Unknow user")
}