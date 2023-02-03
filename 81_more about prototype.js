// more about prototype
let numbers=[1,2,3,4]//let numbers=new Array(1,2,3)
console.log(numbers)
console.log(Array.prototype)//[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(Object.getPrototypeOf(numbers))//[constructor: ƒ, at: ƒ, concat: ƒ, 
// copyWithin: ƒ, fill: ƒ, …]
//In js, Array is also object
function hello(){
    console.log('hello')
}
console.log(hello.prototype) //{constructor: ƒ}
hello.prototype=[]
console.log(hello.prototype)//[]
hello.prototype.push('Aditya')
console.log(hello.prototype)//['Aditya']
