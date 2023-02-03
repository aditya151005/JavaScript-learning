//fetch API
//fetch always returns a promise and it rejects when network related error comes.
//get-to read the data from server
//post-to create the data to server
// const URL="https://jsonplaceholder.typicode.com/postss"
// // const whatisthis=fetch(URL)
// // console.log(whatisthis)//returns promise
// fetch(URL)
   //   .then(response=>{
   //    if(response.ok){
   //       return response.json()
   //    }else{
   //       throw new Error("Something Went Wrong!!!")
   //    }
   //      return response.json()//returns promise
   //   })
   //   .then((data)=>{
   //    console.log(data)//get request data
   //   })
   //   .catch((error)=>{
   //    console.log("inside the catch block")
   //    console.log(error)
   //   })
//post-to create the data to server.
const URL="https://jsonplaceholder.typicode.com/postsss"
fetch(URL, {
  method: 'POST',
  body: JSON.stringify({ //JSON.stringnify-converts data into json format
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',//content-type kya h
  },
})
.then(response=>{
   if(response.ok){
      return response.json()
   }else{
      throw new Error("Something Went Wrong!!!")
   }
  })
  .then((data)=>{
   console.log(data)//get request data
  })
  .catch((error)=>{
   console.log("inside the catch block")
   console.log(error)
  })
