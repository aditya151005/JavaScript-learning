//lexical environment scope chain
const lastName='Ranjan'
const printName=function(){
    const fname='Aditya'
    function myFunction(){
    console.log(fname) //Aditya
    console.log(lastName)//Ranjan
    }
    myFunction()
}
printName()