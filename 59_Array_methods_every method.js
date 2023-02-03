//Array_methods_every method
//1.every()-take callback as an input
//2.callbackfn - returns true/false
//3.every method- returs true/false
//4.every()-it takes a callback and returns true boolean value
//if all the elements of the callback satisfies the 
// condition otherwise it returns false.
//check if all the elements of an array are even 
// const numbers=[2,4,6,8,10]
// const ans=numbers.every((number)=>number%2===0)
// // console.log(ans)//false  numbers=[2,3,4,6,8,10]
// console.log(ans)//true numbers=[2,4,6,8,10]
const userCart=[
    {productid:1,productName:'Mobile',price:12000},
    {productid:2,productName:'Laptop',price:22000},
    {productid:3,productName:'tv',price:15000}
]
// const ans=userCart.every((useritem)=>useritem.price>3000)
// console.log(ans)//true
const ans1=userCart.every((useritem)=>useritem.price>300000)
console.log(ans1)//false