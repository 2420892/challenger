// # to make it private , inside class we have methods (walk etc.)
class Person {
    #firstName = ''
    constructor(firstName) {
        this.#firstName = firstName
    }
    walk(){
        console.log(`${this.#firstName} is walking`);
    }
    dance() {
        console.log(`${this.#firstName} is dancing`);
    }
}
const person1 = new Person("Keeno");
const person2 = new Person("Codi");
// console.log(person1.#firstName);     This is an error
person1.walk();
person2.dance();