export class someClass {
    #name; // In this way we can declare private fields in our class

    static returnNumber() {
        return 13;
    }

    constructor(name) {
        this.#name = name;
    }

    sayMyName() {
        console.log(`Hello, ${this.#name}!`);
    }

    // These are used to invoke during class initialization
    static {
        let value = 20
        console.log(`Hello, ${value}`);
    }
}


const mySomeClass = new someClass('bharath');
mySomeClass.sayMyName();
console.log(mySomeClass);
console.log(someClass.returnNumber())
console.log(someClass.value)
let a = Number.parseInt("nan")
console.log(a);
// static functions and fields are declared using static key word