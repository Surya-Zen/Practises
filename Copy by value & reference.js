var user = {name:"Surya", lastname:"Alagesan", age: 22};
var admin = user;
admin.name = "Surya"
admin.age = 22;
console.log("Username is" + user.name);
console.log("lastname" + user.lastname);
console.log("Admin Firstname" + admin.name);
console.log("admin age is" + admin.age);