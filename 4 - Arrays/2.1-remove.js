let list = require("./0-list")

//If we have the index of the element we need to remove..
//We can use array.splice(index, 1) to remove it from the original array
let chars = ['a','b','c','d','e','f','g','h','a'];
// console.log(chars.splice(3,1))
// console.log(chars)

// console.log(chars.indexOf('a')) //Returns the index of the first value found
// console.log(chars.indexOf('z')) //If the value doesn't exists, it returns -1

function remove(person){
    let indexToRemove = list.indexOf(person)
    indexToRemove != -1 ? list.splice(indexToRemove, 1) : false
}

remove("Thalison")
remove("Danilo")
remove("Aaron")
console.log(list)