//method is a function inside an object
//1.In an object method, this refers to the object.
//2.Alone, this refers to the global object.
//3.In a function, this refers to the global object.
//4.In a function, in strict mode, this is undefined.
//5.In an event, this refers to the element that received the event.
//6.Methods like call(), apply(), and bind() can refer this to any object.
//Ex-1
// const person={
//     fname:'Aditya',
//     age:20,
//     about:function(){
//         console.log("person name is Aditya and age is 20")
//     }
// }
// person.about() //person name is Aditya and age is 20
// Ex-2
// const person={
//     fname:'Aditya',
//     age:20,
//     about:function(){
//         console.log(`person name is ${fname} and age is ${age}`)
//     }
// }
// person.about() //error
//ex-3
//this is an object.
// const person={
//     fname:'Shyam',
//     age:25,
//     about:function(){
//         console.log(`person name is ${this.fname} and age is ${this.age}`)
//     }
// }
// person.about() //person name is Shyam and age is 25
// ex-4
// const person={
//     fname:'Shyam',
//     age:25,
//     about:function(){
//         console.log(this)
//     }
// }
// person.about()//fname: 'Shyam', age: 25, about: ƒ}
//ex-5
function personInfo(){
    console.log(`person name is ${this.fname} and age is ${this.age} `)
}
const person1={
    fname:'Shyam',
    age:25,
    about:personInfo
}
const person2={
    fname:'Ram',
    age:20,
    about:personInfo
}
const person3={
    fname:'Sita',
    age:15,
    about:personInfo
}
// personInfo() //person name is undefined and age is undefined 
person1.about()//person name is Shyam and age is 25
person2.about()//person name is Ram and age is 20 
person3.about()//person name is Sita and age is 15  
