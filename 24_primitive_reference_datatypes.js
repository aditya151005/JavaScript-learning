//primitive/reference data type
//primitive type
// let n1=9;
// let n2=n1;
// console.log("value of n1 is: ",n1)//9
// console.log("value of n2 is: ",n2)//9
// n1++;
// console.log("After incrementing n1")
// console.log("value of n1 is: ",n1)//10
// console.log("value of n2 is: ",n2) //9
// reference type
//array
let array1=["item1","item2"];
let array2=array1;
console.log("array1: ",array1)//['item1','item2']
console.log("array2: ",array2)//['item1','item2']
array1.push('item3')
console.log("After pushing element to array 1:")
console.log("array1: ",array1)//['item1','item2','item3']
console.log("array2: ",array2)//['item1','item2','item3']
