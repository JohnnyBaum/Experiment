let list = require("./0-list")

function add(person){
    let lastIndex = list.length;
    list[lastIndex] = person;
}

add("Yusupov")
add("Karpov")

console.log(list)

//Built in Array Method
list.push("Alekhine")
list.push("Kasparov")

console.log(list)