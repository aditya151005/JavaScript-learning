// data types(primitive type)(7)
// 1.string, 
// 2.number(1,2,4.5),
// 3.booleans,
// 4.undefined,
// 5.null,
// 6.BigInt,
// 7.symbol
//typeof- it gives data type of a variable.
let age=90
let fname="Aditya"
// console.log(typeof age)//number
// console.log(typeof fname)//string
// 1.convert number to string
// age=age+''
// console.log(typeof age) //string
// 2.convert  string to number
// let mystr=+'67'
// console.log(typeof mystr) //number
//method-2(string to number and viceversa)
// let n=18
// n=String(n)
// console.log(typeof n) //string
// let n1="Aditya"
// n1=Number(n1)
// console.log(typeof n1) //number
//to concatenate the strings
// let s1="Aditya"
// let s2="Ranjan"
// let fullname=s1+' '+s2
// console.log(fullname) //Aditya Ranjan
//concatenate 2 strings
let r1='70'
let r2='90'
let r=r1+r2
console.log(r)//7090
//concatenate string after converting into a number
let s1=+'70'
let s2=+'90'
let s=s1+s2
console.log(s)//160