async function fun() {
    let obj =  await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100)
        }, 10000)
    })
    console.log(obj)
}
// When you did not use await while assigning a promise to a var it will assign the promise instance rather than the fulfilled promise
// So whenever you are assigning a promise to var just make sure adding a await keyword so it will wait till the promise gets fulfilled
// The async function itself return an promise with fulfilled value
// The returning promise is of type undefined
let func = fun()
console.log(func)
func.then(
    console.log
)
// Here you can ensure that the async function will always returns a promise
async function some(){
    return 10 ;
}
let another = some()
console.log(another)
// What async does is even though the returning type is not a promise it will wrap that with an promise and resolve it with that value
// Output : Promise { 10 }