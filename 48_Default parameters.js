//default parameters
// function addTwoNumbers(a,b){
//     if(typeof b === 'undefined'){
//         b=0
//     }
//     return a+b
// }
// const ans1=addTwoNumbers(5,8)
// console.log(ans1)//13
// const ans2=addTwoNumbers(5)
// console.log(ans2)//5
//default paramter after ecs2015
function addTwoNumbers(a,b=0){
    return a+b
}
const ans1=addTwoNumbers(10,20)
console.log(ans1)//30
const ans2=addTwoNumbers(10)
console.log(ans2)//10
