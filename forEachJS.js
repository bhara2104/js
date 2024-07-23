const a = 10
let c = 20
c = 30
d = 50
d =100
console.log(a , c , d)
// Are you wondering how it works yeah java scripts has hoisting means it will declare all the var at top
// But initialization are not taken place in the top only declarations will take place
var d ;

let f = [1,2,3,4,5,6,7,8,9,10]
// While using forEach You have to pass a call back function which will be used to perform some actions
f.forEach((val) =>  console.log(val))
console.log(`${f} This String`)
for (let g of f){
    console.log(g)
}
// For of is used to get the values present in the array
// Where as for in is used when you are fetching index
for (let i in f){
    console.log(f[i])
}
var ans = 0
k = f.map((val) => ans+=val)
console.log(k)