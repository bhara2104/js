function argList(){
    const arr = Array.from(arguments);
    console.log(typeof arguments)
    return arr.reduce((a, b) => a + b, 10); // The second argument is the initial value of the function which we are calling

}

let a = argList(1,2,3,4,5,4);
// This how we can pass varargs in js
console.log(a);

