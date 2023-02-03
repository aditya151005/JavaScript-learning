//static methods and properties
// static method- no need to call via object .it can be called using class
class Person {
    constructor(fname, lname, age) {
        this.fname = fname
        this.lname = lname
        this.age = age
    }
    static desc='static properties'
    static classInfo(){
        return "This is Person class"
    }
    get fullName() {
        return `${this.fname} ${this.lname}`
    }
    set fullName(fullName) {
        const [fname, lname] = fullName.split(" ") //[Aditya Ranjan]
        this.fname = fname
        this.lname = lname

    }
}
const person1=new Person('Harshit','Raj',45)
console.log(person1.fullName) //Harshit Raj
// person1.classInfo()//error
console.log(Person.classInfo())//This is Person class
console.log(Person.desc)//static properties
console.log(person1.desc)//undefined
