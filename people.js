import {getFullName} from './names.js'
import {getHobbies} from './hobbies.js'

function createPerson(){
    const person = {
        fullname: getFullName("Mirko", "Bechini"),
        hobbies: getHobbies("Calisthenics", "Programming", "Martial Arts")
    }
    return person
}



const itsMe = createPerson()
console.log(`My name is ${itsMe.fullname.firstName} and my hobbies are ${itsMe.hobbies}`);
