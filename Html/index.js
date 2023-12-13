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


//2. Find the Maximum and Minimum Element

// function findMinMax(arr){
//     if(arr.length === 0){
//         return "Array is Empty"
//     }

//     let min = arr[0];
//     let max = arr[0];

//     for(let i=1; i < arr.length; i++){
//         if( arr[i] > max)
//         {
//             max = arr[i]
//         }else if(arr[i] < min)
//         {
//             min = arr[i]
//         }
//     }
//     return{
//         min,
//         max
//     }
// }
 

// const arr = [1,2,3,4,5,22,-1];

// const result = findMinMax(arr)

// console.log(result)



//////3.Find Sum of Array Elements
///3.1 using For Loop 

// function sumArray(arr){
//     let sum = 0;

//     for(let i=0; i<arr.length; i++){
//         sum += arr[i]
//     }

//     return sum;
// }

// let arr = [1,2,3,4,5]
// const result = sumArray(arr)
// console.log(result)

//3.2 Using the 'ForEach' Method.

// function sumArray(arr){
//     let sum = 0;
//     arr.forEach(function(num){
//         sum += num;
//     })

//     return sum;

// }

//  let arr = [1,2,3,4,5]
//  const result = sumArray(arr)
//  console.log(result)


//3.3 Using the "reduce" Method:
// function sumArray(arr){
//     const result = arr.reduce(function(acc,num){
//        return acc + num
//     },0)

//     return result;
// }

// let arr = [1,2,3,4,5]
// const result = sumArray(arr)

// console.log(result)


//3.4 Using the `eval` Function

// function sumArray(arr){
//     return eval(arr.join('+'))
// }

// let myArr = [1,2,3,4,5]
// console.log(sumArray(myArr))