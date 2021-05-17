//Excise finding key and value pair from an object
//street
//city
//zipCode
// function called showAddess(address)

const address = {
    street: 'thathanavalasai',
    city: 'vellore',
    zipCode: 635601,
}
function showAddess(address) {
    for (let key in address) {
      console.log(key,address[key])
    }
}
showAddess(address)