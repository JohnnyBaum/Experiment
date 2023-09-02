//Ternary are a way to 'simplify' if else
let num = 0;
console.log(num > 0 ? true : false)

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

!isNaN(num) ? console.log("0. Num is not number") : 
    console.log("0. Num is number")
    num > 0 ? console.log("1. Num is positive") : 
        console.log("1. Num isn't positive, is it negative?")
        num < 0 ? console.log("2. Num is negative") :
            console.log("2. Num isn't positive or negative")