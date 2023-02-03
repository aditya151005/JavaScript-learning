//compilation
//code execution
//why compilation
//How js code executes
//What is global execution context?
//what is local execution context?
//closures
// ex-1
// console.log(this) //{w}
// console.log(window)//{w}
// console.log(fname)//undefined
// var fname='Aditya'
// console.log(fname)//Aditya
// ex-2
console.log(this)//{w}
console.log(Window)//w
console.log(myfunc)//myfunc
myfunc()//this is myfunc function
console.log(fullName)//undefined
// function declaration
function myfunc(){
    console.log('this is myfunc function')
}
var fname='Aditya'
var lname='Ranjan'
var fullName=fname+' '+lname
console.log(fullName)//Aditya Ranjan