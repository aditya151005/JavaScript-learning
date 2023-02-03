//hoisting-Hoisting in JavaScript is a behavior in which a function 
// or a variable can be used before declaration.
hello()//Hello World
function hello(){
    console.log('Hello World') 
}

// hello1() //error in the case of function expression
const hello1=function (){
    console.log('Hello World') 
}
console.log(a) //undefined
var a=90
console.log(a) //90
// console.log(b) //error
let b=100
console.log(b) //100
// console.log(c) //error
const c=200
console.log(c) //100