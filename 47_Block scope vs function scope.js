//Block scope vs function scope
//var has a global scope
//let and const haave block scope
//block-1(let and const variables are accessed inside the block only not outside)
// {
// // let fname="Aditya"
// // const lname="Ranjan"
// // console.log(fname,lname)
// }
// // console.log(fname)//error
// // console.log(lname)//error
////block-2(var variable can be accessed outside the block because it has a 
// function block)
// {
//     var fname='Nidhi'
//     console.log(fname)
// }
// fname='sonu'
// console.log(fname)
//block-3
// if(true){
//     let name1='Harshit'
//     console.log(name1) //Harshit
// }
// // console.log(name1)//error
// if(true){
//     var name1='Rohit'
//     console.log(name1)//Rohit
// }
// console.log(name1)//Rohit
//block-4
function myapp(){
    if(true){
        let fname='Mohit'
        console.log(fname)
    }
    console.log(fname) //error
}
myapp()