//clone using Object.assign
//memory
const obj1={
    key1:"value1",
    key2:'Value2'
}
// const obj2=obj1
// console.log(obj1)//{key1: 'value1', key2: 'Value2'}
// console.log(obj2)//{key1: 'value1', key2: 'Value2'}
// obj1.key3='value3'
// console.log(obj1)//{key1: 'value1', key2: 'Value2',key3: 'Value3'}
// console.log(obj2)//{key1: 'value1', key2: 'Value2',key3: 'Value3'}
// In cloning,new object is created
//mtehod-1 spread operator()
// const obj2={...obj1}
// obj1.key3='value3'
// console.log(obj1)//{key1: 'value1', key2: 'Value2',key3: 'Value3'}
// console.log(obj2)//{key1: 'value1', key2: 'Value2',}
//method-2(cloning)
// const obj2=Object.assign({},obj1)
// obj1.key3='value3'
// console.log(obj1)//{key1: 'value1', key2: 'Value2',key3: 'Value3'}
// console.log(obj2)//{key1: 'value1', key2: 'Value2',}