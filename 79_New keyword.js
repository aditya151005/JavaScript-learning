//new keyword
// 1.empty object creation  (this={})
// 2.return this
// 3.provides prototype and links to prototype method(no need of Object.create()- to set proto)
// function createuser(fname,age){
//     this.fname=fname
//     this.age=age
// }
// createuser.prototype.about=function(){
//     console.log(this.fname,this.age)
// }
// const user1=new createuser("Aditya",56)
// console.log(user1)
// //createuser {fname: 'Aditya', age: 56}
// // age: 56
// // fname:"Aditya"
// // [[Prototype]]: Object
// user1.about() // Aditya 56
// ex-2
//constructor fn
function Createuser(fname, lname, email, age, address) {
    this.fname = fname
    this.lname = lname
    this.email = email
    this .age = age
    this.address = address
}
// console.log(createuser.prototype) //{constructor: ƒ}
Createuser.prototype.about = function () {
    return `${this.fname} is ${this.age} years old`
}
Createuser.prototype.is18 = function () {
    return this.age >= 18
}
Createuser.prototype.sing = function () {
    return "toon na na na la la"
}
const user1 = new Createuser('Aditya', 'Ranjan', 'aditya12@gmail.com', 100, 'myaddress')
const user2 = new Createuser('Asutosh', 'Ranjan', 'aditya12@gmail.com', 90, 'myaddress')
const user3 = new Createuser('Suryansh', 'Ranjan', 'aditya12@gmail.com', 50, 'myaddress')
console.log(user1)
console.log(user1.sing())//toon na na na la la


