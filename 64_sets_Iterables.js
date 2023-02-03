//1.set is an iterable.{}
//2.set does not have duplicate values.
//3.set's elements are not acccessed using indexes.
//4.order of elements are not guaranteed.
// const numbers=new Set([1,2,3,2,3]);
// console.log(numbers)//{1, 2, 3}
// console.log(numbers[1])//undefined
// const string=new Set('Aditya')
// console.log(string)//{'A', 'd', 'i', 't', 'y', 'a'}
const items=['item1','item2']
const numbers=new Set()
numbers.add(10)
numbers.add(20)
numbers.add(30)
numbers.add(40)
numbers.add('Aditya')
// numbers.add([1,2,3])
// numbers.add([1,2,3])
// console.log(numbers)//{10, 20, 'Aditya', Array(3), Array(3)}
numbers.add(items)
numbers.add(items)
// console.log(numbers)//{10, 20, 'Aditya', Array(2)}
// console.log(numbers.has(1))//false
// console.log(numbers.has(10))//true
for(let number of numbers){
    console.log(number)
}
// 10
// 20
// 30
// 40
// 'Aditya'
// ['item1', 'item2']
const myarray=[1,2,3,1,2,3,1,2,3]
const uniqueelements=new Set(myarray)
console.log(uniqueelements)//{1, 2, 3}
console.log(myarray)//[1,2,3,1,2,3,1,2,3]
let length=0
for(let element of uniqueelements){
    length++
}
console.log("Length of uniqueelements set: ",length)//Length of uniqueelements set:  3