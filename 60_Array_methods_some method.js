//Array_methods_some method
//1.some()-takes callback as an input
//2.some()-it takes a callback and returns true boolean value
//if atleast one element of the callback satisfies the 
//condition otherwise it returns false.
//check any no in array is even
// const numbers=[3,5,7,9]
// const ans=numbers.some((number)=>number%2===0)
// // console.log(ans)//true numbers=[3,5,8,9]
// console.log(ans)//false numbers=[3,5,7,9]
const userCart=[
    {productid:1,productName:'Mobile',price:12000},
    {productid:2,productName:'Laptop',price:22000},
    {productid:3,productName:'tv',price:15000}
]
const ans1=userCart.some((cartitem)=>cartitem.price>30000)
console.log(ans1)//false
const ans2=userCart.some((cartitem)=>cartitem.price>15000)
console.log(ans2)//true