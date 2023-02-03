//short syntax
// const user1={
//     fname:'Aditya',
//     age:90,
//     about:function(){
//         console.log(this.fname,this.age)
//     }
// }
//alternate for the above
const user1={
    fname:'Aditya',
    age:90,
    about(){
        console.log(this.fname,this.age)
    }
}
user1.about()//Aditya 90