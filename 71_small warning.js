//ex-1
const user1={
    fname:'Aditya',
    age:90,
    about:function(){
        console.log(this.fname,this.age)
    }
}
//don't do this
// user1.about() // Aditya 90
const myfunc=user1.about;//reference is stored
myfunc()//undefined undefined
//do this
const myfunc1=user1.about.bind(user1)
myfunc1()//Aditya 90
