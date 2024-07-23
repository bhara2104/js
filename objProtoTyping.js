const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
    __proto__: {
        name: "Bharat", // This is to set prototype for this class btw it is deprecated right now
        get getName() {
            return this.name
        }
    }
}

console.log(myObject)
console.log(Object.getPrototypeOf(myObject));
// Here there is no prototype for my object but we can set that
console.log(myObject.name);
console.log(myObject.getName);
const proto = Object.create(myObject);
console.log(proto)
proto.greet()
console.log(proto.getName)
let anotherObject = {
    city: "MY CITY",
    name: "Bharat kumar"
}
const another = Object.assign(proto, anotherObject);
proto.greet()
// This assigns the prototype anotherObject to the proto
console.log(Object.getPrototypeOf(proto));
console.log(Object.getPrototypeOf(proto.getName));
console.log(Object.getPrototypeOf(anotherObject));
console.log(Object.getPrototypeOf(another));

let a = Number("2")
console.log(a)

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory , ({type}) => type )
// This will group the objects based on the key value which we are passing
console.log(result)