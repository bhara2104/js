const someJsObject = {
    value: "someValue",
    anotherValue: "someValue",
    count: 4,
    "another-value": "someValue",
    thisNotation: function () {
        console.log(this.value) // This is used to get the object from which it is called
    }
}

console.log(someJsObject)
console.log(someJsObject.count); // This is dot notation which is used to get values associated with that object
// bracket notation is another which is used get the value associated with object it is same as dot but whenever you are fetching
// some keys like coun-t we can't use dot notation
console.log(someJsObject["another-value"])
someJsObject.thisNotation()

function constructr(value){
    this.value = value
    this.sayMyname = function(){
        console.log(this.value)
    }
}


const object = new constructr("value")
console.log(object.value)
object.sayMyname()