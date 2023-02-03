//objects inside an array
//very useful for a realworld applications
// const users=[
//     {userId:1,fname:'Aditya',gender:'male'},
//     {userId:2,fname:'Pragati',gender:'female'},
//     {userId:3,fname:'Ram',gender:'male'}
// ]
// // console.log(users)
// for(let user of users){
//     console.log(user)
//     console.log(user.userId)
// }
//objects inside array
const students = [
    { name: "Aditya", rollno: 1, class: 5, section: 'A' },
    { name: "Sonu", rollno: 2, class: 6, section: 'B' },
    { name: "Shyam", rollno: 3, class: 7, section: 'C' },
    { name: "Ram", rollno: 4, class: 8, section: 'D' }
]
console.log(students)
for(let item of students){
    console.log(item)
    console.log(item.name)
}
