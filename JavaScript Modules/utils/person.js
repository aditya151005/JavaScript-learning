class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
    }
    info(){
        console.log(this.firstname,this.lastname,this.age)
    }
}
//default export - no need of {}
//only one default export for a file.
//2 types of export-1.named export 2.default export
export default 
    Person
