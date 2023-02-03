//arrow function
// const add=function(){ //function expression
//     return a+b
// }
//ex-1
// const add=(a,b)=>{
//     return a+b
//   }
// console.log(add(12,15))///27
// //ex-2
// const add1=(a,b,c)=>{
//     return a+b+c
// }
// console.log(add1(1,2,3))//6
//ex-3(method-1)
// const iseven=(n)=>{
//     return n%2===0
// }
// method-2
// const iseven=n=>{
//     return n%2===0
// }
//method-3
const iseven=n=>n%2===0
console.log(iseven(45))//true
console.log(iseven(50))//false
// //ex-4
// const findchar=(s)=>{
//     return s[0]
// }
// console.log(findchar("Aditya"))//A
// console.log(findchar("Sonu"))//S
// //ex-5
// const findTarget=(array,target)=>{
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//              return i
//         }
//     }
//     return -1
// }
// console.log(findTarget([1,2,3,5,6],6))//4
// console.log(findTarget([1,2,3,5,6],8))//-1