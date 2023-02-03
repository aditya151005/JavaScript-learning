//while loop
//0 to 9
//DRY principle (don't repeat yourself)
//Ex-1
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }
// console.log(`current value of i ${i}`)
// Ex-2
// let i=1,num=11;
// let sum=0;
// while(i<=num){
//     sum+=i;
//     i++;    
// }
// console.log("sum: ",sum)
//Ex-3
// let n=10;
// let total=(n*(n+1))/2
// console.log("total: ",total)//fast
//Ex-4
//1 to 20 print
// let i=1;
// while(i<=20){
//     console.log(i)
//     i++
// }
// console.log(`outside i value is ${i}`)
//Ex-5
//sum of n numbers(method-1)
// let n=10;
// let sum=0;
// let i=1;
// while(i<=n){
//     sum=sum+i
//     i++
// }
// console.log(`Sum of ${n} natural numbers is ${sum}`) 
//sum of n numbers(method-2)//fast
let n=4;
let total=(n*(n+1))/2
console.log(total)