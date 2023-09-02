console.log(name1) //Returns undefined
var name1 = "Thalison";

console.log(name2) //Reference Error
let name2 = "Thalison";    
name2 = "John";  //Multable variable

console.log(name3);
const name3 = "John";
name3 = "Thalison"; //Error: Assignment to Constant variable