//1.How to reverse an array
//1.1 reverse an array (reverse) modified
//the original Array with out create new Array

// let arr = [1,2,3,4,5]
// arr.reverse();
// console.log(arr)
 //creates new Array 
// let originalArray = [11,22,33,44,55]
// let newArray = originalArray.slice().reverse();
// console.log(originalArray, newArray)

//1.2 Using the spread operator(`...`) it creates shallow
//copy 

// let myArr = [1,2,3,4,5]
// let reversedArray = [...myArr].reverse();//same memory addrs is copied
// console.log(myArr)
// console.log(reversedArray)


//1.3 Using the "reduce" method.prepending each element to 
//an initally empty array.//returns new Array 

// let myArr1 = [1,6,3,4,5];
// let reversedArray1 = myArr1.reduce((acc,current ) => [current,...acc],[])
// console.log(myArr1);
// console.log(reversedArray1)