//arrow functions and this
//arrow function does not have this of its own and it takes from surrounding
//arrow function this is window.
//this of arrow function can't be changed
const user1={
    fname:'Aditya',
    age:20,
    about:()=>{
        // console.log(this)//window object(global object)
        console.log(this.fname,this.age)
    }
}
user1.about()//undefined undefined
user1.about(user1)//undefined undefined