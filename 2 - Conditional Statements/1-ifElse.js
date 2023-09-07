let condition = true;

// if(condition){
//     console.log("Condition was set to true")
// }else{
//     console.log("Condition was set to false")
// }

let number = 'a'
console.log(typeof(number))

// if(number > 0){
//     console.log("Number is positive\n")
// }else{
//     console.log("The number isn't positive, is it negative?\n")
//     if(number < 0){
//         console.log("Yes, the number is negative\n")
//     }else{
//         console.log("No, neither a positive or negative, it must be zero\n")
//     }
// }

//Refactoring our logic
if(isNaN(number)){
    console.log("Not a number")
}else{
    console.log("It's a number")
}

