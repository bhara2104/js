let a = "/This is some url"
console.log(encodeURI(a))
console.log(encodeURIComponent(a))
a = encodeURI(a)

console.log(decodeURI(a))