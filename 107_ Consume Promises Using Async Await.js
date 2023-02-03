// fetch(URL)
//    .then(res=>res.json())
//    .then(data=>{
//     console.log(data)
//    })
//Consume Promises Using Async Await
console.log("Script Start")
const URL="https://jsonplaceholder.typicode.com/posts"
async function getPosts(){//const getPosts=async()=>{}//arrow function
   const response=await fetch(URL)
   if(!response.ok){
      throw new Error("Something went wrong")
   }
   const data= await response.json()
   return data
}
// const returned=getPosts()
// console.log(returned)
getPosts()
      .then(mydata=>{
        console.log(mydata)
      })
      .catch(error=>{
        console.log("catch block")
        console.log(error)
      })
console.log("Script End")
