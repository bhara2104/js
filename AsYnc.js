async function fun() {
    let obj =  await new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(100)
        },10000)
    })
    return await obj
}

fun().then(
    res => console.log(res)
)