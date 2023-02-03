//nested if else
// winning number 19
//19 your guess is right
//17 too low
//20 too high
// let winningNumber=19;
// let userguess=+prompt('guess a number')
// if(userguess===winningNumber){
//     console.log("your guess is right")
// }else{
//     if(userguess<winningNumber){
//         console.log("too low")
//     }else{
//         console.log("too high") 
//     }
// }
let winningNumber=19
let userguess=+prompt("Guess a number")
if(userguess===winningNumber){
 console.log("Your guess is right")
}else{
    if(userguess>winningNumber){
        console.log("too high")
    }else{
        console.log("too low")
    }
}