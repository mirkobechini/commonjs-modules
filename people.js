import {getFullName} from './names.js'
import {getHobbies} from './hobbies.js'

function createPerson(){
    const person = {
        fullname: getFullName("Mirko", "Bechini"),
        hobbies: getHobbies("Calisthenics", "Programming", "Martial Arts")
    }
}



const itsMe = createPerson()

console.log(itsMe);
