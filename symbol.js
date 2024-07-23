let a = Symbol("Hello")
let b = Symbol("Hello")
// Even thought both contains same description each symbol is considered as unique
console.log(a === b)

console.log(a,b)
// This will be true since the description value matches
console.log(a.description === b.description)
// Symbols can be used as an key for the objects

let someObj = {
    alpha: 'a'
}

let sym = Symbol("id")

someObj[sym] = 1
console.log(someObj[sym])