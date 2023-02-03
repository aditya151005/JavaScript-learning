//call, apply, bind methods
// function hello(){
//     console.log("HelloWorld")
// }
// hello()//helloworld
// hello.call()//helloworld
//ex-1
// const user1={
//     fname:'Aditya',
//     age:90,
//     about:function(hobby,favMusician){
//         console.log(this.fname,this.age,hobby,favMusician)
//     }
// }
// const user2={
//     fname:'Harshit',
//     age:20,
// }
// user1.about()//Aditya 90
// user1.about.call(user2,'listening to music','moazrat')// Harshit 20 listening to music moazrat
//ex-2
// function about(hobby,favMusician){
//     console.log(this.fname,this.age,hobby,favMusician)
// }
// const user1={
//     fname:'Aditya',
//     age:90,
// }
// const user2={
//     fname:'Harshit',
//     age:20,
// }
// about.call(user1,'reading','shaan') //Aditya 90 reading shaan
// about.call(user2,'playing','sekhar')//Harshit 20 playing sekhar
// //apply
// function about(hobby,favMusician){
//     console.log(this.fname,this.age,hobby,favMusician)
// }
// const user1={
//     fname:'Aditya',
//     age:90,
// }
// const user2={
//     fname:'Harshit',
//     age:20,
// }
// about.apply(user1,['guitar','bach']) //Aditya 90 guitar bach
// about.apply(user2,['Sitar','Mach'])//Harshit 20 sitar Mach
//bind- it returns a function
function about(hobby,favMusician){
    console.log(this.fname,this.age,hobby,favMusician)
}
const user1={
    fname:'Aditya',
    age:90,
}
const user2={
    fname:'Harshit',
    age:20,
}
const func1=about.bind(user1,'cricket','Sachin') 
const func2=about.bind(user2,'football','Sehwag') 
func1()//Aditya 90 cricket Sachin
func2()//Harshit 20 football Sehwag





