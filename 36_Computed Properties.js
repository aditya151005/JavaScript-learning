// computed properties
// const key1='objkey1'
// const key2='objkey2'
// const value1='myvalue1'
// const value2='myvalue2'
// // const obj={
// //     objkey1:'myvalue1',
// //     objkey2:'myvalue2'
// // }
// // const obj={
// //     [key1]:value1,
// //     [key2]:value2
// // }
// // console.log(obj)
// const obj={}
// obj[key1]=value1
// obj[key2]=value2
// console.log(obj)

const key1="objkey1"
const key2="objkey2"
const value1='objvalue1'
const value2='objvalue2'
// aim to build an object-
// {objkey1:'objvalue1',objkey2:'objvalue2'}
const obj={
    key1:'objvalue1',
    key2:'objvalue2'
}
console.log(obj) //{key1: 'objvalue1', key2: 'objvalue2'} //not required output
//method-1(required output)
const obj1={
    [key1]:'objvalue1',
    [key2]:'objvalue2'
}
console.log(obj1)// {objkey1: 'objvalue1', objkey2: 'objvalue2'}
//method-2(required output)
const obj2={}
obj2[key1]="value1"
obj2[key2]="value2"
console.log(obj2) //{objkey1: 'value1', objkey2: 'value2'}
