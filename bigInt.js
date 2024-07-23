const a = BigInt(-100000004453433434345023)

console.log(a)
// This is for signed
console.log(BigInt.asIntN(64, a))

// Unsigned

console.log(BigInt.asUintN(64, a))