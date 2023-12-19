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



//////////////////////////////////////////////
////////4.Remove Duplicates from an Array of Elements...
///4.1 Using `set` object in javascript 
// it removes duplicate value automatically..
//array.from()

// function removeDuplicates(arr){
//     return Array.from(new Set(arr));
// }

// let arrayWithDuplicates = [1,2,3,4,1,2,5];
// let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates)

// console.log(arrayWithoutDuplicates)

////4.2 Using filter and IndexOf

// function removeDuplicates(arr){
//     return arr.filter((value,idx, self)=>{
//         return self.indexOf(value) === idx
//     })
// }

// let arrayWithDuplicates = [1,2,3,4,1,2,5];
// let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates)

// console.log(arrayWithoutDuplicates)



////4.3 Using Reduce Method....

//     function removeDuplicates(array){
//         const removeDuplicate = array.reduce((uniqueArray, currentItem)=>{
//             if(!uniqueArray.includes(currentItem)){
//                 uniqueArray.push(currentItem)
//             }
//             return uniqueArray;
//         },[])
        
//         return removeDuplicate;
//     }

//     let arrayWithDuplicates = [1,2,3,4,1,2,5];
// let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates)

// console.log(arrayWithoutDuplicates)

///4.4 Using For Loop we can remove the Duplicates from an Array...


// function removeDuplicates(arr){
//     let uniqueArray = [];

//     for(let i=0; i< arr.length; i++){
//         const element = arr[i]
//         if(!uniqueArray.includes(element)){
//             uniqueArray.push(element)
//         }
//     }

//     return uniqueArray;
// }

//     let arrayWithDuplicates = [1,2,3,4,1,2,5];
// let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates)

// console.log(arrayWithoutDuplicates)


///5.Find the Missing Number in a Given Integer array

//5.1 using XOR method and for loop
// function findMissingNo(arr){
//     let n = arr.length + 1 //since one number is missing
//     let xor1 = arr[0] //first element
//     let xor2 = 1

//     //XOR all array elements 

//     for(let i = 1; i < arr.length ;i++){
//         xor1 ^= arr[i]
//     }


//     //Xor all numbers from 1 to n 

//     for(let i=2; i<=n; i++){
//         xor2 ^= i
//     }
    
//     //xoring and Xor1 and xor2 will give the missing number

//     return xor1 ^ xor2;
// }

// let arr = [1,2,4,5,6,7]

// const result = findMissingNo(arr)

// console.log(result)



//////6.Find a peak element which is not smaller than its neighbors

// function findPeakElement(nums){
//     //assigning two pointers in the both end.
//     let left = 0;
//     let right = nums.length-1;

//     while(left < right){
//         let mid = Math.floor((left+right)/2)

//         if(nums[mid] > nums[mid+1]){
//             right = mid;
//         }else{
//             left = mid + 1;
//         }
//     }

//     return left;
// }

// let arr = [1,2,5,6,3]

// const result = findPeakElement(arr)

// console.log(`${arr[result]} is the Peak Element : and it's PeakIndex ${result}`)