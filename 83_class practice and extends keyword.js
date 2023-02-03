//class practice and extends keyword
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        return `${this.name} is eating`
    }
    isSuperCute() {
        return this.age <= 1
    }
    isCute() {
        return true
    }
}
// const animal1=new Animal("tom",3)
// console.log(animal1)//Animal {name: 'tom', age: 3}
// console.log(animal1.eat())//tom is eating
// console.log(animal1.isSuperCute())//false
// class Dog{
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     eat() {
//         return `${this.name} is eating`
//     }
//     isSuperCute() {
//         return this.age <= 1
//     }
//     isCute() {
//         return true
//     }
// }
// const tommy=new Dog('tommy',34)
// console.log(tommy)//Dog {name: 'tommy', age: 34}
class Dog extends Animal{
    
}
const tommy=new Dog('Moti',5)
console.log(tommy)//Dog {name: 'Moti', age: 5}
console.log(tommy.eat())//Moti is eating
console.log(tommy.isSuperCute())//false

