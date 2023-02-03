//break keyword
//continue keyword
//1.break
// for(let i=1;i<10;i++){
//     if(i==4){
//         break
//     }
//     console.log(i)
// }
// console.log("Hello there")
//2.continue
// for(let i=1;i<10;i++){
//     if(i==4){
//         continue
//     }
//     console.log(i)
// }
// console.log("Hello there")
//1.break keyword(ex-2)
for(let i=1;i<=10;i++){
    if(i==6){
        console.log("print number till 5")
        break
    }
  console.log(i)
}
//2.continue keyword(ex-2)
for(let i=1;i<=10;i++){
    if(i==5){
        console.log("number 5 is not printed")
        continue
    }
    console.log(i)
}