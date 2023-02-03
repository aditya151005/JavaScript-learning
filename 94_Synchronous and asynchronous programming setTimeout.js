//Synchronous and asynchronous programming
//Synchronous programming
// console.log('script start')
// for(let i=1;i<=10;i++){
//     console.log('Inside for loop')
// }
// console.log('script end')
// asynchronous programming
//setTimeout()
//ex-1
// console.log('script start')
// function hello(){
//     console.log("Hello World")
// }
// setTimeout(hello,1000)
// setTimeout(()=>{
//     console.log("Inside setTimeout function")
// },2000)
// console.log('script end')
//ex-2
// console.log('script start')
// const id=setTimeout(()=>{
//     console.log("Inside setTimeout function")
// },0)
// for(let i=1;i<=100;i++){
//         console.log('......')
//     }
// console.log("SetTimeout id is",id)
// console.log('script end')
// ex-3
console.log('script start')
const id=setTimeout(()=>{
    console.log("Inside setTimeout function")
},0)
for(let i=1;i<=100;i++){
        console.log('......')
    }
console.log("SetTimeout id is",id)
console.log("Clearing set timeout")
clearTimeout(id)
console.log('script end')

