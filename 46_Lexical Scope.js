//lexical scope
const myvar1='vaue2'
function myapp(){
    // const myvar='value1'
    function myfunc(){
        // const myvar='value123'
        // console.log("inside myfunc",myvar)//inside myfunc value123
        //comment first line of this function
        // console.log("inside myfunc",myvar) //inside myfunc value123
        console.log("inside myfunc",myvar1) //inside myfunc value2
    }
    const myfunc2=function(){}
    const myfunc3=()=>{}
    // console.log(myvar) //value1
    console.log(myvar1)// value2
    myfunc()
}
myapp()