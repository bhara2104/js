function myFun(){
    return 10;
}

function newFunction(){
    console.log("Another Function")
}
// Function can have returnables and void functions like other languages

console.log(myFun());
newFunction()
console.log(typeof myFun);

// What are event listeners in js ->
// These are used to bind some function to an event when that particular event happens
// Event Types : onclick , ondrag , hover , dblclick , keydown -> when any key is pressed , keyup -> when key is released, focus , blur


// Event Bubbling
// Whenever you have a event listener on a parent element and some children is wrapped in it
// Clicking the child will trigger will fire the listener in parent too
// How to handle that
// event.stopPropagation() will prevent the propagation to child


// Event capture which is similar to event bubbling but
// Event capture will trigger the event from outermost element

// function with default parameter is possible
function defParam(val =1 ){
    console.log(val)
}

defParam()
defParam(34)
