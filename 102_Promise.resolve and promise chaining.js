//1-Promise.resolve and promise chaining
//2-Promise.resolve() returns promise object
//3-.then()-it returns a promise object.it forms a promise chaining.
// const mypromise=Promise.resolve(5)
// mypromise.then((value)=>{
//     console.log(value)
// })
//then()= always returns promise object(it makes promise chaining)
function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo")
    })
}
myPromise()
    .then((value)=>
    {
        console.log(value)//foo
        value+="bar"
        return value //bydefault it returns 'undefined'
    })
    .then((value)=>
    {
        console.log(value)//foobar
        value+='baaj'
        return value
    })
    .then((value)=>
    {
        console.log(value)//foobarbaaj
    })