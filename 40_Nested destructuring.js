// nested destructuring
// const users=[
//     {userId:1,fname:'Aditya',gender:'male'},
//     {userId:2,fname:'Pragati',gender:'female'},
//     {userId:3,fname:'Ram',gender:'male'}
// ]
// const [user1,user2,user3]=users
// console.log(user1)//{userId:1,fname:'Aditya',gender:'male'}
// console.log(user2)//{userId:2,fname:'Pragati',gender:'female'}
// console.log(user3)//{userId:3,fname:'Ram',gender:'male'}
// const [{fname:user1fname},,{gender:gender1}]=users
// console.log(user1fname)
// console.log(gender1)
const student=[
    {name:"Sonu Raj",rollno:5,class:2,section:'A'},
    {name:"Aditya Ranjan",rollno:6,class:3,section:'B'},
    {name:"Shashi Ranjan Singh",rollno:7,class:4,section:'C'}
]
const [s1,s2,s3]=student
console.log(s1)//{name: 'Sonu Raj', rollno: 5, class: 2, section: 'A'}
console.log(s2)//{name: 'Aditya Ranjan', rollno: 6, class: 3, section: 'B'}
console.log(s3)//{name: 'Shashi Ranjan Singh', rollno: 7, class: 4, section: 'C'}
