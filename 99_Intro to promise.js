//1.promise is a future value.
//2.promise has some status-
//a.fullfilled-when promise is completed successfully.
//b.pending-when promise is  Incompleted.
//c.rejected-when promise is rejected.
//3.A function defines in a promise constructor is called executing function
//4.Executor function has a resolve and reject functions.
//5.resolve function is called when promise is fullfilled.
//6.reject function is called when promise is rejected.
//7.promise and setTimeout is a browser features.it runs in asynchronous way.
//8.promise is consumed by .then() methods..then() also returns a promise object which 
// forms chaining of promise.
//9.promise passes through a microtask q and setTimeout passes through a callback q.
//10.Priority of a microtask q is greater than a call back q.
// ex-1(How to produce promise)
// const bucket=['tea','coffee','vegetables','salt','rice']
// const FriedRice=new Promise((resolve,reject)=>{
//     if(bucket.includes('salt')&&bucket.includes('rice')&&bucket.includes('vegetables')){
//         resolve('fried rice')
//     }else{
//         reject('something wrong happened')
//     }
// })
//How to consume promise
//case1-when resolve and reject related value fn are define in then method
// FriedRice.then(
//     //when promise is fullfilled
//     (value)=>{
//         console.log('lets eat',value)
//     }, 
//     //when promise is rejected 
//     (error)=>{
//            console.log(error)
//     })
//How to consume promise
//case-2(when .catch() is used for rejected promise)
// FriedRice.then(
        //when promise is fullfilled
//     (value)=>{
//         console.log(value)
//     })
       //when promise is rejected 
//     .catch((error)=>{
//        console.log(error)
//     })
//Ex-2
// when both promise and setTimeout functions are present .
// console.log('Script Start')
// const bucket=['tea','coffee','vegetables','salt','rice']
// const FriedRice=new Promise((resolve,reject)=>{
//     if(bucket.includes('salt')&&bucket.includes('rices')&&bucket.includes('vegetables')){
//         resolve('fried rice is prepared')
//     }else{
//         reject('something wrong happened.plz add some more items')
//     }
// })
// FriedRice.then((value)=>{console.log(value)})
//          .catch((error)=>{console.log(error)})
// setTimeout(()=>{
//     console.log('setTimeout fn is executed')
// },2000)
// for(i=1;i<=10;i++){
//     console.log(i)
// }
// console.log('Script End')
