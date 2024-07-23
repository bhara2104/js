// function LiveAPi(){
//     new Promise((resolve) =>{
//         console.log("Live API")
//         setTimeout(()=>{
//             LiveAPi()
//         }, 1000)
//     })
// }
// LiveAPi()
// Implementing this way will never resolve the promise and will call an deep recursive loop
// How to implement properly
function LivePolling() {
    new Promise((resolve) => {
        resolve("success")
    }).then(
        console.log
    ).finally(
        setTimeout(
            LivePolling, 3000
        )
    )
}


async function usingSetInt() {
    await new Promise((resolve) => {
        resolve("success");
    }).then(console.log);
}

function startPolling() {
    setInterval(async () => {
        await usingSetInt();
    }, 3000);
}

function stopPolling() {
    new Promise((resolve, reject) => {
        resolve("success");
    })
}

startPolling();

// LivePolling()
// This way the promise gets resolved and also supports live polling of API's

// Same using Async await
// This way we can implement live polling of the API using async await in js
async function livePoll() {
    try {
        let response = await new Promise(resolve => {
            resolve("success")
        })
        await console.log(response)
    } catch (error) {
        console.log(error)
    } finally {
        setTimeout(livePoll, 3000)
    }
}

// livePoll()