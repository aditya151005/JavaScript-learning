//solution using object.create
const userMethods = {
    about: function () {
        return `${this.fname} is ${this.age} years old`
    },
    is18: function () {
        return this.age >= 18;
    },
    sing: function () {
        return "toon na na na la la"
    }
}
function createuser(fname, lname, email, age, address) {
    const user = Object.create(userMethods)
    user.fname = fname
    user.lname = lname
    user.email = email
    user.age = age
    user.address = address
    return user
}
const user1 = createuser('Sonu', 'Ranjan', 'aditya12@gmail.com', 10, 'myaddress')
const user2 = createuser('Monu', 'Ranjan', 'aditya12@gmail.com', 5, 'myaddress')
const user3 = createuser('Bhola', 'Ranjan', 'aditya12@gmail.com', 2, 'myaddress')
console.log(user1.about())//Sonu is 10 years old
console.log(user2.about())//Monu is 5 years old
console.log(user3.about())//Bhola is 2 years old
// //extra
// const obj1={
//     key1:'val1',
//     key2:'val2'
// }
// // const obj2={
// //     key3:'val3'
// // }
// //empty object(method-1)
// // const obj2={}
// // obj2.key3='val3'
// // console.log(obj2.key1)//undefined
// //empty object(method-2)
// const obj2=Object.create(obj1)
// console.log(obj2)//{}
// obj2.key3='val3'
// console.log(obj2.key3)//val3
// console.log(obj2.key2)//val2
// obj2.key2='uniqueval2'
// console.log(obj2.key2)//uniqueval2
// //__proto__==[[prototype]]---prototype chain
// console.log(obj2.__proto__)//{key1: 'val1', key2: 'val2'}
// ///////////////////////////////////
