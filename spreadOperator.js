const c = [1,3,4]

console.log([...c])
// when the contents of my iterables needs to passed to another function or array we can use spread operator to do that
console.log(c)

let a = [1, 3, 4, 56, 7, 6]

let b = [...a]

a.push(10)
b.forEach((a) => {
    return a * 2 ;
})

b.forEach((a) => {
    console.log(a)
})

let some = [[1,2,3], [2,3,5]]

let other = [...some]

other.push(10)
other.forEach((a) => {
    console.log(a)
})
some.forEach((a) => {
    console.log(a)
})

const classroom = {
    students: [
        { name: "Naveen", score: 60 },
        { name: "Sam", score: 49 },
        { name: "John", score: 89 },
        { name: "Ram", score: 70}
    ]
}

const getResults = (originalClassroom) => {
    const copiedClassroom = { ...originalClassroom }

    copiedClassroom.students.map(student=>{
        if(student.status>=60){
            student.status = "Pass"
        }else{
            student.status = "Fail"
        }
    })

    return copiedClassroom
}


console.log("Results: ", getResults(classroom))
console.log("OriginalClassroom: ", classroom) // You can see that spread operator creates a shallow copy for the objects

// How to handle this issue by using json.parse

const newClassroom = JSON.parse(JSON.stringify(classroom))

newClassroom.value = 10

// And we can also use structured clone to create a deep copy for an object

console.log(newClassroom)
console.log(classroom) // Here the original classroom won't be changed since it creates an deep copy for the object