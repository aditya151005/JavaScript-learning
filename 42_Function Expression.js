//functions in js
//function-1
// function singHappyBirthday(){
//     console.log("Happy Birthday to u.......")
// }
// singHappyBirthday()
// singHappyBirthday()
// singHappyBirthday()
// function sum(){
//     console.log("value inside the function:",6+7)
//     return 8+9
// }
// const re=sum()
// console.log("returned value:",re)
// function sum(n1,n2){
//     return n1+n2
// }
// let re=sum(4,5)
// console.log("returned value:",re)
// console.log(undefined+undefined) //NaN
// function sumThreeNumbers(n1,n2,n3){
//     return n1+n2+n3
// }
// let re=sumThreeNumbers(4,5,10)
// console.log("returned value:",re)
//function expression
const singHappyBirthday=function(){//anonymous function
    console.log("Happy Birthday to you.....")
}
singHappyBirthday()
const sum=function(){
    return 5+9
}
console.log(sum())
const sub=function(){
    return 10-5
}
console.log(sub())
//Ex-1
// const add=function(a,b){//anonymous function
//     return a+b
// }
// console.log("Sum1: ",add(3,4))
//ex-2
const multiply=function (a,b){//anonymous function
    return a*b
}
console.log("multiply: ",multiply(3,4))