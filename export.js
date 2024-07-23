// You can export function by specifying script type as module in html
// You can just import all the exported item at the places where it is necessary to use the exported items
// After importing them into the js file we can use that as same as we are using them under same file
// We can use import map to use the files from script tag a document should have only one import map
// You can Export all the items like const var let and function and event classes
// But you can't use the export keyword inside a function
// Export will be done at the top level

export const name = "Square"

export function func() {
    console.log("func") // There are two ways of exporting one is specifying export keyword in front of the function and another is adding a global exports like
    // the below one
}

// export {name, func}  this is the second way of exporting