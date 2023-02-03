//Array_methods_ reduce method
////1.It takes a callback fn.
//2.it's callback takes two parameters accumulator and 
// current value
//3.it returns a single accumulated result.
//Aim-sum of elements of the array
const numbers=[1,2,3,4,5,10]
const sum=numbers.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue

})
console.log(sum)
//accumulator currentvalue   return
//1             2             3
//3             3             6
//6             4             10
//10            5             15
//15            10            25
const userCart=[
    {productid:1,productName:'Mobile',price:12000},
    {productid:2,productName:'Laptop',price:22000},
    {productid:3,productName:'tv',price:15000}
]
const totalAmount=userCart.reduce((totalprice,currentproduct)=>{
    return totalprice+currentproduct.price

},0)
console.log("Total Price: ",totalAmount)
// totalprice   currentvalue   return
// 0             {objet}          12000 
// 12000             22000          34000
// 34000              15000          49000

