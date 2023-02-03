// cloning(means copy of an array) an array
let array1=["Aditya","Ranjan","Sonu"]
// let array2=array1
// console.log(array1===array2)//true
//method-1(not used)
// let array3=["Aditya","Ranjan","Sonu"] 
// array1.push("Pragati")
// console.log(array1===array3) //false
// console.log(array1)//['Aditya','Ranjan','Sonu','pragati']
// console.log(array3) //['Aditya','Ranjan','Sonu']
//method-2(slicing)
// let array4=array1.slice(0) 
// array1.unshift("Nidhi") 
// console.log(array1) //['Nidhi','Aditya','Ranjan','Sonu','pragati']
// console.log(array4)//['Aditya','Ranjan','Sonu','pragati']
// // method-3(concatenating)
// let array5=[].concat(array1)
// array1.unshift('Paro')
// console.log(array1) //['Paro', 'Aditya', 'Ranjan', 'Sonu']
// console.log(array5)//['Aditya', 'Ranjan', 'Sonu']
//spread operator method-4
let array6=[...array1]
array1.push("Chaurasiya")
console.log(array1===array6)//false
// console.log(array1)
// console.log(array3)
// console.log(array1==array3)//false

