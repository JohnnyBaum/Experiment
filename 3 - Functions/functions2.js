function reverse(text){
    //Function Logic
    let reversedName = '';                  //Initialize empty string
    let size = text.length;                 //Amount of characters
    for(let count = size; count >= 0; count--){
         reversedName += text[count];       //String concatenation
    }

    return reversedName                     //it can be assigned to a variable
}

let string = "I'll have to go, but we can finish it";
let reversedText = reverse(string);

//Functions with if..else statement
function isEven(number){
    let remainder = number % 2;
    if(remainder){
        return false
    }else{
        return true
    }
}
// console.log(isEven(4))


function isLowerCase(string){
    if(string.toLowerCase() == string){
        return true;
    }
    //Default
    return false;
}

function isUpperCase(string){
    if(string.toUpperCase() == string){
        return true;
    }
    //Default
    return false;
}

//Function that uses abstraction
function isMixedCase(string){
    if(isUpperCase(string)){
        return false;
    }
    if(isLowerCase(string)){
        return false;
    }
    //Default
    return true;
}

function countLowerCase(string){
    let lowerCaseChars = 0;
    for(let count = 0; count < string.length; count++){
        if(isLowerCase(string[count])){
            lowerCaseChars++;
        }
    }
    return lowerCaseChars;
}

function countUpperCase(string){
    let upperCaseChars = 0;
    for(let char of string){
        isUpperCase(char) ? upperCaseChars++ : false
    }
    return upperCaseChars;
}
let randomString = "FkldfjlçasDLSJAFSk"

console.log(randomString+" has "+countUpperCase(randomString)+" upper-case chars and "+countLowerCase(randomString)+" lower-case chars")
