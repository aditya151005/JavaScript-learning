//Important Array methods
////category-A 1.length 2.push 3.pop 4.unshift 5.shift
//category-B 1.forEach() 2.map() 3.filter() 4.reduce() 5.sort()
//6.find() 7.every() 8.some() 9.fill() 10.splice()
//Array methods-
//category-A 1.length 2.push() 3.pop() 4.unshift() 5.shift()
//category-B 1.forEach() 2.map() 3.filter() 4.reduce
//5.sort()=sort the array as per ASCII code
//6.find()=return the first element from the array which satisfies 
//the condition of the fn
//7.every()-it returns True if every elements of array satisfies the 
//condition of the function or else false
//8.some()-it returns True if atleast one elements of array satisfies  
//the condition of the function or else false
//9.fill()-it fills the particular elements of the array
//[elementstobefilled,startIndex,EndIndex]
//10.splice()-it inserts and deletes  elements in between
//of array.[start,delete,insert] 
//forEach()-it takes callback as a parameter
//forEach() calls a function for each elements for the array
// const numbers=[1,2,3,4]
//general method
// function multiplyBy2(number,index){
//     console.log(`${index} : ${number*2}`)
// }
// for(let i=0;i<numbers.length;i++){
//     multiplyBy2(numbers[i],i)

// }
//forEach()- it takes input as a callback function
//method-1
// function multiplyBy2(number,index){
//     console.log(`${index} : ${number*2}`)
// }
// numbers.forEach(multiplyBy2)
//0 : 2
//1 : 4
//2 : 6
//3 : 8
// const numbers=[5,4,3,2]
//method-2
// numbers.forEach(function(number,index){
//     console.log(`${index} : ${number*2}`)
// })
//0 : 10
//1 : 8
//2 : 6
//3 : 4
const users=[
    {fname:"Aditya",age:78},
    {fname:"Ranjan",age:80},
    {fname:"Harshit",age:90},
    {fname:"Sonu",age:100},
    {fname:"Pragati",age:72},
]
// method-1(callbackfunction-Anonymous fn )
// users.forEach(function(user){
//     console.log(user.fname)
// })
// Aditya
//Ranjan
// Harshit
//Sonu
//method-2(callbackfunction-Arrow fn )
users.forEach(user=>{
    console.log(user.fname)
})
// Aditya
//Ranjan
// Harshit
//Sonu
// Pragati