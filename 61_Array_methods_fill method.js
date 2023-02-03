//Array_methods_fill method
//1.fill()-it fills elements in the array
//2.it fills the particular element in the existing array
//3.fill(valueTobeFilled,startIndex,EndIndex)
//4.EndIndex element is  not included
//5.it changes the old  array//1.fill()-it fills elements in the array
//2.it fills the particular element in the existing array
//3.fill(valueTobeFilled,startIndex,EndIndex)
//4.EndIndex element is  not included
//5.it changes the old  array
//value,start,end
//[-1,-1,-1,-1]
// const myarray1=new Array(10).fill(-1)
// console.log(myarray1) //[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
// const myarray2=new Array(10).fill(0)
// console.log(myarray2)//[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const myarray=[1,2,3,4,5,8,9]
myarray.fill(0,2,5)
console.log(myarray)// [1, 2, 0, 0, 0, 8, 9]
