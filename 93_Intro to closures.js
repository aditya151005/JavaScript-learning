//Intro to closures
//closure=30-40%
//analyze-70-80%
//real Example=100%
//Ex-1
// function outerFunction(){
//     function innerFunction(){
//         console.log('HelloWorld')
//     }
//     return innerFunction
// }
// const ans=outerFunction()
// console.log(ans)
//ex-2
// function printFullName(firstName,lastName){
//     function printName(){
//         console.log(firstName,lastName)
//     }
//     return printName;
// }
// const ans=printFullName('Sonu','Ram')
// ans()//Sonu Ram
//ex-3
// function hello(x){
//     const a='varA'
//     const b='varB'
//     return function(){
//         console.log(a,b,x)
//     }
// }
// const ans=hello('arg')
// ans() //varA varB arg
//ex-4
// function myfunction(power){
//     return function(number){
//         return number ** power
//     }
// }
// const square=myfunction(3)
// const ans1=square(2)
// const cube=myfunction(2)
// const ans2=cube(3)
// console.log(ans1)//8
// console.log(ans2)//9
//ex-5
function func(){
    let counter=0
    return function(){
        if(counter<1){
    console.log('Hi,You called me!!')
    counter++
        }else{
            console.log('mai ek bar already call kr chuka hoo')
        }
    }
}

const myFunc=func()
myFunc()
myFunc()
const myFunc2=func()
myFunc2()
myFunc2()