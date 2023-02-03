//callbacks, callback hell, the pyramid of doom
//callback hell(nested callback-readability and looking bad)
const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")
// setTimeout(()=>{
//     heading1.textContent='one'
//     heading1.style.color='violet'
//     setTimeout(()=>{
//         heading2.textContent='two'
//         heading2.style.color='purple'  
//         setTimeout(()=>{
//             heading3.textContent='three'
//             heading3.style.color='red'  
//             setTimeout(()=>{
//                 heading4.textContent='four'
//                 heading4.style.color='pink'   
//                 setTimeout(()=>{
//                     heading5.textContent='five'
//                     heading5.style.color='green' 
//                     setTimeout(()=>{
//                         heading6.textContent='six'
//                         heading6.style.color='blue'
//                         setTimeout(()=>{
//                             heading7.textContent='seven'
//                             heading7.style.color='brown'       
//                     },1000)       
//                 },3000)       
//             },2000)    
//         },1000)     
//     },2000)        
// },2000)
// },1000)

// function changeText(element, text, color, time,onsuccessCallback) {
//     setTimeout(() => {
//         if (element) {
//             element.textContent = text
//             element.style.color = color
//             if(onsuccessCallback){
//                 onsuccessCallback()
//             }
//         } else {
//             console.log("your element does not exist")
//         }
//     }, time)
// }
// changeText(heading1, 'one', 'violet', 2000,()=>{
//     changeText(heading2, 'two', 'green', 1000)
// })


function changeText(element, text, color, time, onsuccessCallback, onFailurecallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text
            element.style.color = color
            if (onsuccessCallback) {
                onsuccessCallback()
            }
        } else {
            if (onFailurecallback) {
                onFailurecallback()
            }
        }
    }, time)
}
changeText(heading1, 'one', 'red', 2000, () => {
    changeText(heading2, 'two', 'green', 2000, () => {
        changeText(heading3, 'three', 'violet', 10000, () => {
            changeText(heading4, 'four', 'red', 2000, () => {
                changeText(heading5, 'five', 'pink', 2000, () => {
                    changeText(heading6, 'six', 'blue', 2000, () => {
                        changeText(heading7, 'seven', 'brown', 2000, () => {

                        }, () => { console.log('heading1 does not exits') },)
                    }, () => { console.log('heading6 does not exits') },)
                }, () => { console.log('heading5 does not exits') },)
            }, () => { console.log('heading4 does not exits') },)
        }, () => { console.log('heading3 does not exits') },)
    }, () => { console.log('heading2 does not exits') },)
}, () => { console.log('heading1 does not exits') },)