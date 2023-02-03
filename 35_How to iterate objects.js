//how to iterate object
//1.for in loop
//2.Object.keys
// const person={
//     name:'Aditya',
//     age:89,
//     "person hobbies":['cricket','football','Basketball']
// }
// //for in loop
// //object.keys
// for(let key in person){
//     console.log(`${key} : ${person[key]}`)//template string
// }
// console.log(Object.keys(person))
// console.log(Array.isArray(Object.keys(person)))
// for(let key of Object.keys(person)){
//     console.log(person[key])
// }
//1.for in loop
const person={
    name:"Aditya Ranjan",
    age:56,
    'person hobbies':["cricket","music","volleyball"]
}
for(let key in person){
    // console.log(key) 
    //name
    //age
    //person hobbies
    //console.log(person[key])
    //Aditya Ranjan
    //56
    //['cricket', 'music', 'volleyball']
    // console.log(`${key} : ${person[key]}`)
    // name : Aditya Ranjan
    // age : 56
    // person hobbies : cricket,music,volleyball
}
//method-2 Object.keys()
console.log(Object.keys(person)) //['name', 'age', 'person hobbies']
console.log(Array.isArray(Object.keys(person)))//true
for(let key of Object.keys(person)){
    console.log(person[key])
}
//Aditya Ranjan
//56
//['cricket','music','volleyball']



