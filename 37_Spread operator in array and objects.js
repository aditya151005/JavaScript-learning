//spread operator in array
// const array1=[1,2,3]
// const array2=[5,6,7]
// const myarray=[...array1,...array2,14,90]
// console.log(myarray) // [1, 2, 3, 5, 6, 7, 14, 90]
// const myarray2= [...'12354900']
// console.log(myarray2)//['1', '2', '3', '5', '4', '9', '0', '0']
//spread operator in objects
//keys can't be duplicate
// const obj1={
//     key1:"val1",
//     key2:'val2',
// }
// const obj2={
//     key1:'obj2val1',
//     key3:"val3",
//     key4:'val4',
// }
// const newobj1={...obj1,...obj2,key34:'Ram'}
// console.log(newobj1)//{key1: 'obj2val1', key2: 'val2', key3: 'val3', key4: 'val4', key34: 'Ram'}
// const newobj2={...obj2,...obj1}
// console.log(newobj2)//{key1: 'val1', key3: 'val3', key4: 'val4', key2: 'val2'}
// const newobj3={..."abc"}
// console.log(newobj3)//{0: 'a', 1: 'b', 2: 'c'}
// const newobj4={...['val1','val2']}
// console.log(newobj4)//{0: 'val1', 1: 'val2'}
// const newobjects={..."Aditya"}
// console.log(newobjects)//{0: 'A', 1: 'd', 2: 'i', 3: 't', 4: 'y', 5: 'a'}