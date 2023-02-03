//1.map is an iterable
//2.It has a key value pairs but does not have indexes
//3.duplicate keys are not allowed
//4.keys may be all data types like number,string,array...
//5.set() to add values
//6.get()-to access the values of map
//7.keys()-it returns all keys of the map DS
//8.{'fname' => 'Aditya', 'lname' => 
// 'Ranjan', 'age' => 90, 1 => 'one'}
//object/object literal
//key-string/symbol
// const person={
//     fname:'Aditya',
//     age:90,
//     1:'one'
// }
// console.log(person.fname)//
// console.log(person.age)
// for(let key in person){
//     console.log(typeof key)//3 times string
// }
//map
//stores key value pairs
// const person=new Map()
// person.set('fname','Aditya')
// person.set('lname','Ranjan')
// person.set('age',90)
// person.set(1,'one')
// // console.log(person)//{'fname' => 'Aditya', 'lname' => 'Ranjan', 'age' => 90,1 => 'one'}
//accessing the value of a map 
// console.log(person.fname) //undefined
// console.log(person['fname'])//undefined
// console.log(person.get('fname'))//Aditya
// console.log(person.get(1))//one
// console.log(person.keys()) //{'fname', 'lname', 'age', 1}
// for(let key of person.keys()){
//     console.log(key,typeof key)
// }
// fname string
// lname string
// age string 
// 1 'number'
// for(let value of person){
//     console.log(value,Array.isArray(value))
// }
// ['fname', 'Aditya'] true
// ['lname', 'Ranjan'] true
// ['age', 90] true
// [1, 'one'] true
//destructuring map elements i,e array elements 
// for(let [key,value] of person){
//     console.log(key,value)
// }
//fname Aditya
//lname Ranjan
//age 90
//1 'one'
// const person=new Map([['lname','Ranjan'],['age',10]])
// console.log(person) // {'lname' => 'Ranjan', 'age' => 10}
const person1={
    id:2,
    fname:'Aditya'
}
const person2={
    id:3,
    fname:'Sonu'
}
const userInfo=new Map();
userInfo.set(person1,{age:8,gender:'male'})
userInfo.set(person2,{age:9,gender:'female'})

// console.log(userInfo)
console.log(person1.id)//2
console.log(userInfo.get(person1))// {age: 8, gender: 'male'}
console.log(userInfo.get(person1).gender)//male
console.log(person2.id)//9
console.log(userInfo.get(person2))// {age: 9, gender: 'female'}
console.log(userInfo.get(person2).gender)//female

 