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
// let myString = "Hello, World!";

// let reversedString = myString.split('').
// reduceRight((acc,char) => acc + char, "")

// console.log(reversedString)


//2......check if string is a palindrome.
//2.1 using the reverse Method;
//first reverse a string and compare it to the 
//original string
// function isPalindrome(str){
//     const reversedStr = str.split("").reverse().join("")
//     return str === reversedStr
// }

// console.log(isPalindrome("madam"))

///////2.2 using a for loop iterate through the strings
//from both ends and compare them.


// function isPalindrome(str){
//     const len  = str.length;

//     for(let i=0; i< len/2; i++){
//         if(str[i] !== str[len - 1 -i]){
//             return false;
//         }
//     }
//     return true;
// }

// const str = "radar"
// const result = isPalindrome(str)

// console.log(result)


/////////2.3 Using Array Methods.
// function isPalindrome(str){
//     const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")
//     const reversedStr = cleanStr.split("").reverse().join("")
//     return cleanStr === reversedStr;
// }

// const result = isPalindrome("madam")

// console.log(result)


//////3.count vowels and Consonants

// function countVowelsAndConsonants(str){
//     let vowelCount = 0;
//     let consonantCount = 0;

//     const vowels = "aeiouAEIOU";

//     for(let i=0; i<str.length;i++){
//         const char =  str[i]
//         if(vowels.includes(char)){
//             vowelCount++;
//         }else if(/[a-zA-Z]/g.test(char)){
//             consonantCount++;
//         }
//     }

//     return {
//         vowelCount,consonantCount
//     }
// }

// let myString = "Hello, World!"

// const result = countVowelsAndConsonants(myString)
// console.log(result)

//////////3.2 Using Array Methods

// function countVowelsAndConsonants(str){
//     const vowelCount = str.split('').filter((char)=> 'aeiouAEIOU'.includes(char)).length
//     const consonantCount = str.split('').filter((char)=> /[a-zA-Z]/.test(char)).length
//     return{
//         vowelCount,
//         consonantCount
//     }
// }

// let str = "Hello, World!"
// const result = countVowelsAndConsonants(str)

// console.log(result)

