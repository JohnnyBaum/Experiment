let list = require("./0-list")

function remove(person){
    for (let i = 0; i < list.length; i++) {
        if(list[i] == person){
            list[i] = null;
        }
    }
}
// remove("Johnatan")
console.log(list)

function remove2(person){
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        if(list[i] != person){
            let size = newList.length;
            newList[size] = list[i];
        }
    }
    return newList;
}
console.log(remove2("Johnatan"));

