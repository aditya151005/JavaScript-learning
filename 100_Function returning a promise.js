//function returning a prmise
const names=['Aditya','Ranjan','Sonu','Chaudhary']
function mypromise(){
    return new Promise((resolve,reject)=>{
        if(names.includes('Aditya')){
            resolve('yes Aditya is present in the list')
        }else{
            reject('something went wrong')
        }
    })
}
mypromise().then(
    //when promise is fullfilled
    (value)=>{console.log(value)})
    .catch(
    //when promise is rejected
    (error)=>{console.log(error)
    })