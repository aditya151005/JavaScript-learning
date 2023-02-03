// Array methods_map method
//1.map()-it takes a callback function
//2.it creates a new array by applying callback on each element
//and results of callback is present in the resultant array
//3.callback does not apply on empty array
//4.if we don't return anything ,it returns array of undefined
//Ex-1
// const numbers=[1,2,3,4,5]
// const sqr=function(number){
//     return number*number
// }
// const squareNumber=numbers.map(sqr)
// console.log(squareNumber)//[1, 4, 9, 16, 25]
//ex-2
//if we don't return anything it reurns undefined
// const numbers=[1,2,3,4,5]
// const sqr=function(number){
//    console.log("HelloWorld")
// }
// const squareNumber=numbers.map(sqr)
// console.log(squareNumber)//[undefined, undefined, undefined, undefined, undefined]
//ex-3
//method-1
// const n=[10,20,30,40]
// const squareno=n.map(function(number){
//     return number*number

// } )
// console.log(squareno) //[100, 400, 900, 1600]
//method-2
// const n=[5,6,7,8]
// const squareno=n.map(number=>number*number)
// console.log(squareno) //[25, 36, 49, 64]
//ex-4
// const n=[2,4,6,10]
// const squareno=n.map((number,index)=>{
//  console.log(`${index} : ${number*number}`)
// })
// // 0 : 4
// // 1 : 16
// // 2 : 36
// // 3 : 100
// /ex-4
// method-2
// const n=[2,4,6,10]
// const squareno=n.map((number,index)=>{
//  return `${index} : ${number*number}`
// })
// console.log(squareno)
// ['0 : 4', '1 : 16', '2 : 36', '3 : 100']
//map(number,index)-order number,index should be there.
// const n=[2,4,6,10]
// const squareno=n.map((index,number)=>{
// console.log(`${index} : ${number*number}`)
// })
//ex-5
const user=[
    {fname:"Aditya",age:89},
    {fname:"Sonu",age:90},
    {fname:"Monu",age:92},
    {fname:"Molu",age:95},

]
const username=user.map(user=>user.fname)
console.log(username) //['Aditya', 'Sonu', 'Monu', 'Molu']
