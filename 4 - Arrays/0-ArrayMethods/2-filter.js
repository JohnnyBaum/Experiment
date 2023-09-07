let list = ["Thalison","Johnatan","Danilo","Gilbert","Luffy","Will","Windy"];

let inputValue = "Wi"

let found = list.filter( (value) => {
    return value.includes(inputValue);
})

console.log(found)