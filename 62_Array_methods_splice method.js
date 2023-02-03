//Array_methods_splice method.js
//splice()-it inserts/deletes array elements in between
//start ,delete,insert
const myarray=['item1','item2','item3']
//delete
// console.log9 (myarray.splice(1,1))//['item2']
// console.log(myarray) //['item1',item3']
//insert
// myarray.splice(1,0,'Aditya','Ranjan')
// console.log(myarray)//['item1', 'Aditya', 'Ranjan', 'item2', 'item3']
//insert and delete together
console.log(myarray.splice(1,2,'Aditya','Ranjan'))//['item1','item2']
console.log(myarray)// ['item1', 'Aditya', 'Ranjan']