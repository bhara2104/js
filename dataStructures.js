// Map , WeakMap , Set, WeakSet
// Keyed Collections which are stored based on the keys not with the indexes
// Those are known as keyed collections

// weak map can't store any keys other than objects no primitive types other then symbol can be added a key to week map

const weakMp = new WeakMap()
o1 = {some: 1}
o2 = {some: 2}
weakMp.set(o1,2)
weakMp.set(o2,4)

console.log(weakMp.get(o1))

console.log(weakMp.get(o1))