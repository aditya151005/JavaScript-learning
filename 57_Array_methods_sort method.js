//sort method - changes the original array
// //1.sort()-it sorts the array as per ASCII Code or string 
// value
//2.it changes the original array
// sort()- sorts according to string or as per ASCII Code
//0,    1,    2,  3,   4,   5,  6,  7,  8,  9
//48,   49,   50, 51,  52,  53, 54, 55, 56, 57
//A-B-65-90
// a-b=97-122
//5,9,1200,400,3000
//53,57,48,52,51
//48,51,52,53,57
//1200,3000,400,5,9
// const numbers=[5,9,1200,400,3000]
// numbers.sort()
// console.log(numbers) //[1200, 3000, 400, 5, 9]
// const usernames=['ABC','abc','Harshit','Aditya']
// usernames.sort()
// console.log(usernames)//['ABC', 'Aditya', 'Harshit', 'abc']
//How to sort numbers as per digit
//take sort callback
// const numbers = [10, 7, 9, 1, 34, 3]
// numbers.sort((a, b) => a - b)
// console.log("sorted numbers", numbers) //[1, 3, 7, 9, 10, 34]//ascending order
// numbers.sort((a, b) => b - a)
// console.log('Sorted Numbers', numbers)//[34, 10, 9, 7, 3, 1]//descending order
//1200,410
//a-b=+(greater than 0)
//return b
//5,9
//a-b=-(lesser than 0)
//return a
//price low to high
const products = [
    { productid: 1, productName: 'p1', price: 12000 },
    { productid: 2, productName: 'p2', price: 22000 },
    { productid: 3, productName: 'p3', price: 15000 },
    { productid: 4, productName: 'p4', price: 10000 }
]
//price low to high
lowtohigh=products.slice(0).sort((a, b) => {
    return a.price - b.price
})
console.log(products)
console.log(lowtohigh)
//price  high to low 
hightolow=products.slice(0).sort((a, b) => {
    return b.price-a.price 
})
console.log(products)
console.log(hightolow)