//optional chaining
// const user={
//     fname:'Aditya',
//     address:{HouseNumber:'1234'}
// }
// console.log(user.fname) //Aditya
// console.log(user.address)//{HouseNumber:'1234'}
// console.log(user.address.HouseNumber)//1234
const user={
    fname:'Aditya',
    // address:{HouseNumber:'1234'}
}
console.log(user.fname) //Aditya
console.log(user.address)//undefined
// console.log(user.address.HouseNumber)//Cannot read properties of undefined (reading 'HouseNumber')
console.log(user?.address?.HouseNumber)//undefined