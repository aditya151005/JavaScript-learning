// functions to create multiple objects
// const user={
//     fname:'Aditya',
//     lname:'Ranjan',
//     email:'aditya123@gmail.com',
//     age: 2,
//     address:'HouseNo,Colony,pincode,state',
//     about:function(){
//         return `${this.fname} is ${this.age} years old`
//     },
//     is18:function(){
//         return this.age>= 18;
//     }
// }
// const aboutuser=user.about()
// console.log(aboutuser)//Aditya is 2 years old
//1.function( function that creates objects)
// 2.add key value pairs
//3.return object 
function createuser(fname, lname, email, age, address) {
    const user = {}
    user.fname = fname
    user.lname = lname
    user.email = email
    user.age = age
    user.address = address
    user.about = function () {
        return `${this.fname} is ${this.age} years old`
    }
    user.is18 = function () {
        return this.age >= 18;
    }
    return user
}
const user1=createuser('Aditya','Ranjan','aditya12@gmail.com',50,'myaddress')
console.log(user1) //{fname: 'Aditya', lname: 'Ranjan', email: 'aditya12@gmail.com', age: 50, address: 'myaddress', …}
const is18=user1.is18()
console.log(is18)//true
const aboutme=user1.about()
console.log(aboutme)//Aditya is 50 years old