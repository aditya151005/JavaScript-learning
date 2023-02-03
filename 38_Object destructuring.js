//objects destructuring
const Employee={
   name:'Aditya Ranjan',
   age:100,
   eid:172861,
   salary:100000
}
// const name1=Employee.name
// const age2=Employee.age
// console.log(Employee)
// console.log(name1,age2)
// const {name,age}=Employee
// console.log(name,age)
// const {name:name1,age:age1}=Employee
// console.log(name1,age1)
// const {name:name1,age:age1,...restpos}=Employee
// console.log(name1,age1,restpos)
//Object destructuring
const employee={
   name:"Pragati Chaudhary",
   age:100,
   eid:1234,
   salary:20000000
}
// console.log(employee) //{name: 'Pragati Chaudhary', age: 100, eid: 1234, salary: 20000000}
// console.log(employee.name,employee.age) //Pragati Chaudhary 100//destructuring method-1
// const {name,age}=employee
// console.log(name)//Pragati Chaudhary
// console.log(age)//100
// const {name:name1,age:age1}=employee
// console.log(name1)//Pragati Chaudhary
// console.log(age1)//100
const {name:name2,age:age2,...restpos}=employee
console.log(name2)//Pragati Chaudhary
console.log(age2)//100
console.log(restpos)//{eid: 1234, salary: 20000000}
