//Classic function syntax 
function add(num1, num2){
    return num1 + num2;
}

//ES6 Syntax - Arrow Functions
//EcmaScript 6

//Multable function
let subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 + num2;
}

//Functions can return data, which can be assigned to a variable.
let result1 = multiply(5,10);
let result2 = subtract(60,3);
let result3 = add(56,49);
console.log(result1, result2, result3)