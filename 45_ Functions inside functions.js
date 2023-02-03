//functions inside functions
const app=()=>{
    const myfunc=()=>{
        console.log("hello from my func")
    }
    const add=(a,b)=>a+b
    const mul=(x,y)=>x*y
    console.log("Inside app")
    myfunc() //2.hello from my func
    console.log("Add:",add(5,6))//3.11
    console.log("Multiply:",mul(3,4))//4.12
}
app()//1.Inside app