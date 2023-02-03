//arrays(typeof reference Datatype is an object)
//arrays is an ordered collection of elements
// array can contain different types of elments
//array values can be changed(mutable)
////array is ordered collections of different datatypes elements.
//it is mutable and it is a reference data type.
// let fruits=['apple','mango','Guava','Grapes'];
// // console.log(fruits);
// // console.log(fruits[0]);
// let n=[1,2,3,7]
// // console.log(n)
// let mixed=[10,20,'Aditya',null,undefined]
// // console.log(mixed)
// fruits[1]="strawberry"
// // console.log(fruits)//mutable
// console.log(typeof fruits)
// console.log(Array.isArray(fruits))
// let obj={}//object literal
// console.log("object literal type: ",typeof obj)
let person=["Aditya","Sonu","Pragati","Nidhi"]
// console.log(person,typeof person) // ['Aditya','Sonu','Pragati','Nidhi'] object
// console.log(person[1]) //sonu
// person[1]="Chaurasiya"
// console.log(person) // ['Aditya','Chaurasiya','Pragati','Nidhi'] 
// let numbers=[1,2,35,90]
// console.log(numbers) //[1,2,35,90]
// let mixed=["Aditya",23,7.8,true,false,null,undefined,6n]
// console.log(mixed)//=['Aditya',23,7.8,true,false,null,undefined,6n]
//To check the Array
console.log(Array.isArray(person)) //true
//object literal
let obj={}
console.log(Array.isArray(obj)) //false