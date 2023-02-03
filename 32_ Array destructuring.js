// //array destructing
// const myarray=['value1','value2','value3','value4']
// let myvar1=myarray[0]
// let myvar2=myarray[1]
// console.log(("value of myvar1",myvar1))
// console.log(("value of myvar2",myvar2))
// let [var1,var2,...newarray3]=myarray
// var1='value1 changed'
// let myarray1=myarray.slice(2)
// console.log(("value of myvar1",var1))
// console.log(("value of myvar2",var2))
// console.log(myarray1)
// console.log(newarray3)
//array destructuring
//method-1
const myarray=["value1","value2"]
// let var1=myarray[0]
// let var2=myarray[1]
// console.log("var1..",myarray[0])//value1
// console.log("var2..",myarray[1])//value2
//method-2
const myarray1=["value3","value4"]
// let [var1,var2]=myarray1
// console.log("var1..",var1)//value3
// console.log("var2..",var2)//value4
//ex-2
// const myarray2=['value6']
// const [var1,var2]=myarray2
// console.log(var1)//value6
// console.log(var2)//undefined
// ex-3
const myvar3=['val1','val2','val3']
// let [var1,,var2]=myvar3
// console.log(var1)//val1
// console.log(var2)//val3
//ex-4
const myvar4=['value1','value2','value3','value4']
let [var1,var2,...newarray1]=myvar4
console.log(var1)//value1
console.log(var2)//value2
console.log(newarray1) //['value3','value4']

