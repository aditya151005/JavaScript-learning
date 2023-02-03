//Rest parameters
//ex-1
// function myfunc(a,b,c,...d){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
//     console.log(`d is ${d}`)
//     console.log("d is",d)
//     console.log(`d is an array? ${Array.isArray(d)}`)
// }
// myfunc(23,89,100,1,2,3,4)
//ex-2
// function addall(...numbers){
//     console.log(numbers)
//     let total=0
//     for(let number of numbers){
//         total=total+number
//     }
//     return total
// }
// console.log("Sum: ",addall(1,2,3,4,5))