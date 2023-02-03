//Iterables,array like objects
//iterables-those on which we applies for of loop is called iterables
// string,array are iterables
//array like object-Those who have length property is called array like object
//or Those who are accessed by indexes is called array like object
// string
// const firstname="Harshit"
// for(let char of firstname){
//     console.log(char)
// }
//H
//a
//r
//s
//h
//i
//t
// Array
// const numbers=[1,2,3,4,5]
// for(let number of numbers){
//   console.log(number)
// }
// 1
// 2
// 3
// 4
// 5
// object is not an iterable
// const users={'user1':'Aditya','user2':'Ranjan','user3':'Sonu'}
// for(let user of users){
//     console.log(user) //error
// }
const lname='Ranjan'
console.log(lname.length)//6
console.log(lname[2])//a
