function reverse(text){
    //The logic of the function
    let reversedName = '';  //empty string
    let size = text.length; //Amount of characters
    for(let count = size; count >= 0; count--){
         reversedName += text[count];
    }

    return reversedName //it can be assigned to a variable
}
let string = "I'll have to go, but we can finish it";
let reversedText = reverse(string);
console.log(reversedText)