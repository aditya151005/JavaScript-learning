//1.object is a reference data type.
//2.it does have indexes. it has key value pairs.
//3.keys can be string and symbol data type.
//4.keys are not duplicate.
//5.keys are by default string
//6.keys are also called properties.
//7.values are accessed using dot and []
//8..same key value pair are not possible(recent key value pair is 
// considered)
//9.create an object,acess values,add key-value pairs.

// //how to create an object
// // const person={name:'Harshit',age:34};
// // console.log(person,typeof(person))
// // //how to access data from objects
// // console.log(person.name)
// // console.log(person.age)
// const person={
//     name:'Aditya',
//     age:89,
//     hobbies:['cricket','football','Basketball']
// }
// // console.log(person)
// // console.log(person.hobbies)
// //how to add key value pair in objects
// person.gender='male'
// person['salary']=30000
// console.log(person)
// console.log(person['hobbies'])
const person={name:"Aditya"
,age:22,
hobbies:['cricket','sleeping','listening music']}
console.log(person,typeof person)
//how to access data of an object
console.log(person.name)
console.log(person.hobbies)
console.log(person['name'])
//how to add key value in an object
person.gender="male"
console.log(person)
person['salary']=30000
console.log(person)

