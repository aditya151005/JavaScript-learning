//class keyword(2015/ES6)
//class are fake in js
class Createuser {
    constructor(fname, lname, email, age, address) {
        console.log('Constructor called')
        this.fname = fname
        this.lname = lname
        this.email = email
        this.age = age
        this.address = address
    }
    about() {
        return `${this.fname} is ${this.age} years old`
    }
    is18() {
        return this.age >= 18
    }
    sing() {
        return "toon na na na la la"
    }
    func(a){
        console.log(a)
    }
}
const user1 = new Createuser('Aditya', 'Ranjan', 'aditya12@gmail.com', 100, 'myaddress')//Constructor called
const user2 = new Createuser('Asutosh', 'Ranjan', 'aditya12@gmail.com', 90, 'myaddress')//Constructor called
const user3 = new Createuser('Suryansh', 'Ranjan', 'aditya12@gmail.com', 50, 'myaddress')//Constructor called
console.log(user1.about())//Aditya is 100 years old
// console.log(Object.getPrototypeOf(user1))
user1.func('Aditya')//Aditya

