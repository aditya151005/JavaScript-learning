//Use prototype
// const userMethods = {
//     about: function () {
//         return `${this.fname} is ${this.age} years old`
//     },
//     is18: function () {
//         return this.age >= 18;
//     },
//     sing: function () {
//         return "toon na na na la la"
//     }
// }
function createuser(fname, lname, email, age, address) {
    const user = Object.create(createuser.prototype)
    user.fname = fname
    user.lname = lname
    user.email = email
    user.age = age
    user.address = address
    return user
}
// console.log(createuser.prototype) //{constructor: ƒ}
createuser.prototype.about = function () {
    return `${this.fname} is ${this.age} years old`
}
createuser.prototype.is18 = function () {
    return this.age >= 18
}
createuser.prototype.sing = function () {
    return "toon na na na la la"
}
const user1 = createuser('Aditya', 'Ranjan', 'aditya12@gmail.com', 100, 'myaddress')
const user2 = createuser('Asutosh', 'Ranjan', 'aditya12@gmail.com', 90, 'myaddress')
const user3 = createuser('Suryansh', 'Ranjan', 'aditya12@gmail.com', 50, 'myaddress')
console.log(user1)
console.log(user1.sing())//toon na na na la la