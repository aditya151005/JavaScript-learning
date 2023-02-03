//hasOwnProperty
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
// console.log(user1)
// console.log(user1.sing())//toon na na na la la
// for(let key in user1 ){
//     console.log(key)
// }
for(let key in user1 ){
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
}