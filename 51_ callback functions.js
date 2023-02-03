//callback functions
// function myfunc(a){ //parameter as a function
//     // console.log(a)
    
// }
// // myfunc([1,2,3]) // array is passing
// // myfunc({name1:'Aditya',age:34})//object is passing
// // myfunc('Aditya') //string is passing
//callback function
function myfunc2(name){
    console.log("Inside my func2")
    console.log("my name is",name)
}
function myfunc1(callback){
    console.log("Inside myfunc1")
    callback("Aditya")
}
myfunc1(myfunc2)