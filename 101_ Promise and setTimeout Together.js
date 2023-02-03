//Promise and setTimeout Together
//Aim to resolve /reject promise after cerain time
function myPromise(){
    return new Promise((resolve,reject)=>{
         const value=false
        setTimeout(()=>{
            if(value){
                resolve()
            }else{
                reject()
            }

        },5000)
    })
}
myPromise().then(()=>{console.log("resolved")})
           .catch(()=>{console.log("rejected")})