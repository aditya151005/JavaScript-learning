//getters and setters
class Person{
    constructor(fname,lname,age){
        this.fname=fname
        this.lname=lname
        this.age=age
    }
   get fullName(){//getters
    return `${this.fname} ${this.lname}`
   }
//    setName(fname,lname){//setters
//     this.fname=fname
//     this.lname=lname
//    }
 set fullName(fullName){
     const [fname,lname]=fullName.split(" ") //[Aditya Ranjan]
     this.fname=fname
     this.lname=lname
   
 }
}
const person1=new Person('Aditya','Ranjan',34)
// console.log(person1)//Person {fname: 'Aditya', lname: 'Ranjan', age: 34}
// console.log(person1.fname)//Aditya
// console.log(person1.lname)//Ranjan
// // console.log(person1.fullName())//Aditya Ranjan
// //fullname as a property
// console.log(person1.fullName)//Aditya Ranjan
// person1.setName("Harshit","Raj")
// console.log(person1.fname)//Harshit
// console.log(person1.lname)//Raj
// person1.fname='Sonu'
// person1.lname='Ram'
// console.log(person1.fname)//Sonu
// console.log(person1.lname)//Ram
person1.fullName="Suryansh Sharma"
console.log(person1) //Person {fname: 'Suryansh', lname: 'Sharma', age: 34}