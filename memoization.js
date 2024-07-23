// Instead of rerunning the function once again we can use memoized values and return the outputs

let arr = [1]

function calculateFact(n){
    if(arr[n] !== undefined){
        return arr[n]
    }else{
        arr[n] = n * calculateFact(n-1);
        return arr[n];
    }
}
arr[Symbol.iterator]() // This property will return an iterator which is used to iterate through the elements
arr.sort() // This returns in place sorted array the original array will be modified in it
// arr.toSorted() Returns a copy of an array in a sorted order

// So here instead of running calc function everytime we can cache the necessary values

console.log(calculateFact(5));

// Event bubbling is the practice of adding a event listener to the parent and it will be propagated till the child
