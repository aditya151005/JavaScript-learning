//callbacks in general
//ex-1
// function myfunc(callback){
//     console.log("function is doing task1")
//     callback()
// }
// function myfunc2(){
//     console.log("function is doing task2")
// }
// myfunc(myfunc2)
//ex-2
// function myfunc(callback){
//     console.log("function is doing task 1")
//     callback()
// }
// myfunc(function myfunc2(){
//     console.log("function is doing task 2")
// })

// function getTwoNumbersAndadd(number1,number2,callback){
//     console.log(number1,number2)
//     callback(number1,number2)
// }
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
// getTwoNumbersAndadd(4,5,addTwoNumbers)

// function getTwoNumbersAndadd(number1,number2,callback){
//     if(typeof number1==='number' && typeof number2==='number'){    
//     callback(number1,number2)
//     }else{
//         console.log('Wrong data types')
//     }
// }
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
// getTwoNumbersAndadd('4','5',addTwoNumbers)

function getTwoNumbersAndadd(number1,number2,onSuccess,onFailure){
    if(typeof number1==='number' && typeof number2==='number'){    
    onSuccess(number1,number2)
    }else{
        onFailure()
    }
}
getTwoNumbersAndadd(40,'50',(num1,num2)=>{
    console.log(num1+num2)
},()=>{
    console.log('wrong data types')
    console.log('Enter the numbers only')
})
