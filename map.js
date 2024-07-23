let mp = new Map

mp.set(1, "hello")
mp.set(2, "world")
mp.set(3, "world")

mp.forEach((value, key) => {
    console.log(key , value)
})

const itr = mp[Symbol.iterator]()

const itr2 = mp.keys()

const itr3 = mp.values()
console.log(itr , itr2 , itr3)

for(const i of itr3){
    console.log(i)
}
console.log(mp.has(1))

console.log(mp.size) // This function is used to retrieve the size of the map which we created