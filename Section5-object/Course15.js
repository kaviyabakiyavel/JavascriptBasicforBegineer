//Exercise for factory function and constructor function

//Factory function
const address = showAddess('thathanavalasai','vellore',635653)
console.log(address)
function showAddess(street,city,zipCode){
  return{
      street ,
      city ,
      zipCode
  };
}

//Constructor function
//instead of returing object . we are going to use this keyword to initialize this new object .
function Address(street , city,zipCode){
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
//to create new address object using this constructor function.
const constructorfunctionaddress = new Address('thathanavalasai','vellore',635653)
console.log(constructorfunctionaddress)