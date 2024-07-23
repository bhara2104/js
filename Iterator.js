let arr = [1,3,4,5,6,7,8,9];

console.log(arr);
// The objects arr , string and sets are considered as iterables since they conform iterator protocol

const iterator = arr[Symbol.iterator]();
// This will return the iterator of the arr object

console.log(iterator.next())

console.log(iterator.next().value)

// the next contains two values one is value and other is done value holds the actual value and done contains whether it is completed or not

for (const i of iterator) {
    console.log(i)
}