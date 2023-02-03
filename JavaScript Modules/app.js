import{fname} from './utils/fname.js'
import{age} from './utils/age.js'
// import{Person} from './utils/person.js'
//default export - no need of {}
//any name can serve the purpose
import P from './utils/person.js'
console.log(fname,age)
const person=new P("Molu","Raj",34)
console.log(person)
person.info()
