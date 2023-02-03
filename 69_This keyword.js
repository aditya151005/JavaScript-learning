// This keyword
// console.log(this)//window object(global object)
// console.log(window)
// console.log(this===window)//true
// function myfunc1(){
//     console.log("HelloWorld")
// }
// myfunc()
// function myfunc(){
//     console.log(this)
// }
// myfunc()//window object(global object)
// window.myfunc1()//Helloworld
"use strict"
function myfunc1(){
    console.log(this)
}
myfunc1()//undefined

