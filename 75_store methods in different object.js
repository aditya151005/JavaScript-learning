//store methods in different object
const userMethods={
    about: function () {
        return `${this.fname} is ${this.age} years old`
    },
    is18 : function () {
        return this.age >= 18;
    }
}
function createuser(fname, lname, email, age, address) {
    const user = {}
    user.fname = fname
    user.lname = lname
    user.email = email
    user.age = age
    user.address = address
    user.about=userMethods.about//reference of the method(about) is there
    user.is18=userMethods.is18//reference of the method(is18) is there
   
    return user
}
const user1=createuser('Aditya','Ranjan','aditya12@gmail.com',100,'myaddress')
const user2=createuser('Asutosh','Ranjan','aditya12@gmail.com',90,'myaddress')
const user3=createuser('Suryansh','Ranjan','aditya12@gmail.com',50,'myaddress')
console.log(user1.about())//Aditya is 100 years old
console.log(user3.about())//Suryansh is 50 years old


