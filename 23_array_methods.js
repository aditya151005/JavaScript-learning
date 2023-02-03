//array methods
//1.push()(Insert an element at the end of the array)
//2.pop()(remove element at the end of the array)
//3.shift()(insert an element at the starting of the array)
//4.unshift()(remove an element at the start of the array)
// let fruits=["mango","Banana","Grapes"]
// console.log(fruits)
// //push(last element insertion)
// fruits.push("strawberry")
// console.log(fruits)
// //pop(last element removal)
// let poppedfruit=fruits.pop()
// console.log("popped fruit is: ",poppedfruit)
// console.log(fruits)
// unshift(insert at starting)
// fruits.unshift('cherry')
// console.log(fruits)
// //shift(deletion at starting)
// let removedfruit=fruits.shift()
// console.log("removed element:",removedfruit)
// console.log(fruits)
// push/pop is faster than unshift/shift
let array1=[1,10,2,9,3]
console.log(array1) //[1,10,2,9,3]
array1.push(8)
console.log(array1) //[1,10,2,9,3,8]
console.log(array1.pop()) //8
console.log(array1) //[1,10,2,9,3]
array1.unshift(0)
console.log(array1) //[0,1,10,2,9,3]
console.log(array1.shift()) //0
console.log(array1) //[1,10,2,9,3]
