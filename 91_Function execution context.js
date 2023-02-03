//Function execution context
let foo='foo'
console.log(foo)
function getFullName(fname,lname){
    console.log(arguments)//arguments is array like object
    let myvar='var inside func'
    console.log(myvar)
    const fullname=fname+' '+lname
    return fullname
}
const personName=getFullName('Harshit','Raj')
console.log(personName)