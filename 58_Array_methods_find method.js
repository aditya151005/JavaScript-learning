// find()-it takes a callback and returns the first element
//of the array which passes the condition of fn
// const myarray=["Hello","cat","dog","Lion"]
// function islength(s){
//    return s.length===3
// }
// console.log(islength('dog')) true
// console.log(islength('Aditya')) false
//find()-takes callback as an input
//find() returns first array elements when condition matched.
// const myarray=["Hello","cat","dog","Lion"]
// const ans=myarray.find((s)=>s.length===3)
// console.log(ans)//cat
//find the username whose userid=3
const users=[
    {userid:1,userName:'Aditya'},
    {userid:2,userName:'Sonu'},
    {userid:3,userName:'Ram'},
    {userid:4,userName:'Shyam'},
    {userid:5,userName:'Harshit'},
    {userid:6,userName:'Rahul'}    
]
const myuser=users.find((user)=>user.userid===3)
console.log(myuser)//Ram