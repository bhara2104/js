import {someClass} from "./klass.js";
// This way we can easily import class from other files in js
function parent(){
    function child(){
        console.log("I am child")
    }
    child()
}
parent()

// We can return the closures in javascript

function returnMe(){
    function returner(){
        console.log("I am returned")
    }
    return returner
}

const returned = returnMe()
console.log(returned)
returned()

function clos(a){
    return function anotherOf(b){
        return a+b ;
    }
}

let imp = new someClass()

console.log(imp)

let newFunc = clos(10)

console.log(newFunc(20))
// In this way we can pass arguments separately this process is know as currying in js named after Haskell Curry
console.log(clos(10)(50))
// Type of return the type of the objects we are calling
console.log(typeof clos(10))

// There are two ways to use modules in js one is by adding type in package.json as modules and another is adding type as module in the html file
// or saving them as mjs will do the work cjs will make it as common js

