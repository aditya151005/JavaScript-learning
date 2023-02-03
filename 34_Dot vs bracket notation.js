//difference between dot and bracket notation
// const key='email'
// const person={
//     name:'Aditya',
//     age:89,
//     "person hobbies":['cricket','football','Basketball']
// }
// // console.log(person['person hobbies'])
// // person['key']='aditya@gmail.com'
// // console.log(person)
// // person[key]='aditya@gmail.com'
// // console.log(person)
///////////////////////////////////
const key='email'
const person={
    name:'Aditya',
    age:89,
    "person hobbies":['cricket','football','Basketball']
}
// console.log(person.person hobbies)//error
console.log(person['person hobbies'])//['cricket','football','Basketball']
person.key='abc@gmail.com'
console.log(person) //{name: 'Aditya', age: 89, person hobbies: Array(3), key: 'abc@gmail.com'}
person['key']='ram@gmail.com'
console.log(person)//{name: 'Aditya', age: 89, person hobbies: Array(3), key: 'ram@gmail.com'}
person[key]='xyz@gmail.com'
console.log(person) //{name: 'Aditya', age: 89, person hobbies: Array(3), key: 'ram@gmail.com', email: 'xyz@gmail.com'}

