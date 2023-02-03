//Parameters destructuring used in object
const person={
    fname:'Aditya',
    gender:'male'
}
//method-1
// function printDetails(person){
//     console.log(person.fname) //Aditya
//     console.log(person.gender)//male
// }
// printDetails(person)
const person1={
    fname:'Nidhi',
    gender:'female'
}
function printDetails({fname,gender,age}){
    console.log(fname)//Nidhi
    console.log(gender)//female
    console.log(age)//undefined
}
printDetails(person1)
