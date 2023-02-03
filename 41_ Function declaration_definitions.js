//function decalaration
// function singHappyBirthday(){
//     console.log("Happy Birthday to you!!")
// }
// singHappyBirthday()
// function add(){
//     console.log("sum1:",8+9)
//     return 10+30
// }
// console.log("sum2: ",add())
// function addCustom(a,b){ //parameters
//     console.log(undefined+undefined)//NaN
//     console.log(2+6+undefined)//NaN
//     return a+b
// }
// console.log("sum3: ",addCustom(90,10))//arguments//100

// //check even - odd no
// //method-1
// // function iseven(n){
// //     if(n%2===0){
// //         return true
// //     }
// //     else{
// //         return false
// //     }
// // }
// // if(iseven(7)){
// //     console.log("even number")
// // }else{
// //     console.log("odd number")//odd number
// // }
// //method=2
// // function checkeven(n){
// //     return n%2===0;
// // }
// // if(checkeven(10)){
// //     console.log("even number") //even number
// // }else{
// //     console.log("odd number")
// // }
// function firstChar(s){
//     return s[0]
// }
// console.log('First character:',firstChar('Aditya')) //A
//array=[1,2,3,9,10,20],target=matched return it else -1
function findTarget(array,target){
    for(let i=0;i<array.length;i++){
        if(target===array[i]){
            return i

        }
    }
    return -1
}
const myarray=[12,18,19,34,78,90]
const target =78
if(findTarget(myarray,target)===-1){
    console.log("Element is not present")
}else{
    console.log(`Element is present at index ${findTarget(myarray,target)}`)
}