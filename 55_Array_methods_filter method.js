//Array_methods_filter method
//1.filter() takes callback as an input.
//2.it creates a new array of elements which passes
//the condition of callback fn
//3.it does apply for empty element
//4.does not original array
//5.filter's callback always returns boolean values(true,false)
const numbers=[1,2,3,4,5]
const iseven=function(number){
    return number%2===0
}
const evenNo=numbers.filter(iseven)
console.log(evenNo) //[2, 4]
const isodd=function(number){
    return number%2!==0
}
const OddNo=numbers.filter(isodd)
console.log(OddNo)// [1, 3, 5]