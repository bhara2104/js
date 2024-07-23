const aRray = ["array", 6, 4, "anotherValue"]
// In JS arrays can hold any type in it
console.log(aRray)

console.log(aRray[1])

aRray[1] = "SomeValues"

console.log(aRray[1])

// Index of method is used to get the index of an element in array

console.log(aRray.indexOf("array"))

aRray.push("Pushed Value", "other Pushed Value")

console.log(aRray)

// pop is used to remove the last element
console.log(aRray.pop())
// shift is used to remove the first element from the array
console.log(aRray.shift())

// splice is used to remove an element with index it takes two arguments and another value which is used to number of values

aRray.splice(1,2)
// The second value delete count deletes the specified number of counts

for(const a of aRray){
    console.log(a)
}
// of is used to iterate with the values
// in will be used to iterate with the index

const newRay = aRray.map(convertValue)

console.log(newRay)

function convertValue(value){
    return value.toUpperCase()
}

// Split will be used to convert a string into array
// Join will be used to join the array into string
// Another utility method called toString is used to join the array into string
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

