//What is prototype 
//In js, function is a function as well as object
//property name gives the name of the fn
function hello(){
    console.log("helloworld")
}
// console.log(hello.name)//hello
//create our properties in fn
// hello.myOwnProperty='very unique value'
// console.log(hello.myOwnProperty)//very unique value
//function provides very useful properties
//whenever we create function, function provides free space and this free space is an object which is called prototype
// console.log(hello.prototype)//{constructor: ƒ}
// constructor
// : 
// ƒ hello()
// [[Prototype]]
// : 
// Object
//only function provides prototype property
// if(hello.prototype){
//     console.log('Prototype is present')//Prototype is present
// }
// else {
//     console.log('Prototype is not  present')
// }
// const obj={fname:'Aditya',lname:'Ranjan'}
// if(obj.prototype){
//     console.log('Prototype is present')
// }
// else {
//     console.log('Prototype is not  present') //Prototype is not present
// }
// const numbers=[1,2,3,5,78]
// if(numbers.prototype){
//     console.log('Prototype is present')
// }
// else {
//     console.log('Prototype is not  present') //Prototype is not present
// }
function Hello(){
    console.log("HelloWorld")
}
// console.log(Hello.prototype)
Hello.prototype.abc='abc'
Hello.prototype.xyz='xyz'
Hello.prototype.sing=function(){
    return 'la la la'
}
console.log(Hello.prototype)//{abc: 'abc', xyz: 'xyz', sing: ƒ, constructor: ƒ}
console.log(Hello.prototype.sing())//la la la