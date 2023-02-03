// High order function- function taking function as an input or function
// returning function or both
// Function returning functions
//function returning string
// function myFunc(){
//     return 'a'
// }
// const ans=myFunc()
// console.log(ans) //a
//function returning array
// function myFunc(){
//     return [1,2,3]
// }
// const ans=myFunc()
// console.log(ans)//[1, 2, 3]
// function returning object
// function myFunc(){
//     return {name1:"Aditya Ranjan",age:25,salary:200000}
// }
// const ans=myFunc()
// console.log(ans)//{name1:"Aditya Ranjan",age:25,salary:200000}
// function returning function 
// function myFunc(){
//     function hello(){
//         console.log("HelloWorld")
//     }
//     return hello
// }
// const ans=myFunc()
// ans()//HelloWorld
//method-2
// function myFunc(){
//     function hello(){
//         return "Hello World"
//     }
//     return hello
// }
// const ans=myFunc()
// console.log(ans()) //Hello World