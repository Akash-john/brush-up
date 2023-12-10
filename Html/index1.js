//1.Using the split, reverse , join 
//converts string to an array using split method
//then joining it back ;

// let myString = "Hello, World!";
// let reversedString = myString.split('').reverse().join('');

// console.log(reversedString);

//2.Using a for loop iterating through the characters of the string 
// let myString1 = "Hello, World!";
// let reversedString1 = " "

// for (let i = myString1.length-1; i>=0;i-- ){
//     reversedString1 += myString1[i]
// }

// console.log(reversedString1);

//3.Using the 'split' and 'reduceRight'
let myString = "Hello, World!";

let reversedString = myString.split('').
reduceRight((acc,char) => acc + char, "")

console.log(reversedString)
