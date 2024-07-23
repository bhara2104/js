// Array Buffer is also know as the byte array

let arrayBuffer = new ArrayBuffer(8, { maxByteLength: 16 })
// When we set an object input with maxByteLength the arrayBuffer will be resizable
console.log(arrayBuffer , arrayBuffer.byteLength);

let anotherIntArr = new Int8Array(arrayBuffer)

console.log(ArrayBuffer.isView(anotherIntArr))

console.log(arrayBuffer.resizable)
// we can transfer an array buffer into another buffer but after transferring it will be detached and can't be transferred again

const anotherAbf = arrayBuffer.transfer()

console.log(anotherAbf)

console.log(arrayBuffer)
// Typed array's can't be used without an array buffer