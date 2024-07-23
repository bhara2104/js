let sstring = "I am String used for Practice am           "
console.log(sstring.at(3))
// This will print the element at index which we are specifying

console.log(sstring.indexOf("Practice"))
// This index of method will return index where the given string matches

console.log(sstring.split(" "))
// Split will split the given string into a array with the matched separator

console.log(sstring.split(" ", 3))
// The Split with limit will split the string into the mentioned limit

console.log(sstring.slice(1))

// This Slice function is used to get the substring from the given index

console.log(sstring.slice(1, 4))

// When we specify both start and end index while using splice it will return substring with that range

console.log(sstring.toLowerCase())

console.log(sstring)

console.log(sstring.length)
sstring = sstring.trim()
// Trim will remove the spaces after the last character
console.log(sstring.length)

sstring = sstring.replace("am", "AM")
console.log(sstring)
sstring = sstring.replaceAll("am", "AM")

console.log(sstring)