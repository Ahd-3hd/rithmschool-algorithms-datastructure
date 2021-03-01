/**
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all
 * productOfArray([1,2,3]) // 6
 * productOfArray([1,2,3,10]) // 60
 */

// function productOfArray(arr) {
//   if (arr.length === 0) return 1;
//   const last = arr[arr.length - 1];
//   arr.pop();
//   return last * productOfArray(arr);
// }

// console.log(productOfArray([1, 2, 3, 10]));

/**
 * Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
 *
 */

// var nestedObject = {
//   data: {
//     info: {
//       stuff: {
//         thing: {
//           moreStuff: {
//             magicNumber: 44,
//           },
//         },
//       },
//     },
//   },
// };

// there must be a better solution than this, but this functions alright i guess
// function contains(obj, val) {
//   const extracted = Object.values(obj)[0];
//   if (typeof extracted === "undefined") {
//     return false;
//   } else if (extracted === val) {
//     return true;
//   }
//   return contains(extracted, val);
// }

// console.log(contains(nestedObject, "hello"));

/**
 * 
 * @param {Challenge:

Given a multi-dimensional integer array, return the total number of integers, stored inside this array. You should not rely on the number of dimensions to solve this kata. If n is the number of dimensions, then: 1 <= n < +Infinity.

Example:

Given [[[5], 3], 0, 2, [], [4, [5, 6]]], your function should return a result of 7. This is because the array contains 7 integers.

Addendum:

Think of it as dimension-agnostic value counting. We want to know the total number of integers inside the array and we don't care for the dimensions.} arrays 
 */

// const arr = [[[5], 3], 0, 2, [], [4, [5, 6]]];

// function realSize(arrays) {
//   let count = 0;
//   arrays.forEach((item) => {
//     if (typeof item === "number") {
//       count++;
//     } else {
//       count += realSize(item);
//     }
//   });
//   return count;
// }
// console.log(realSize(arr));

/**
 * Write a function that sums squares of numbers in list that may contain more lists
 * var l = [10,[[10],10],[10]] // 400
 */

// const l = [1, [[3], 10, 5, [2, [3], [4], [5, [6]]]], [10]];

// function SumSquares(l) {
//   let total = 0;
//   l.forEach((el) => {
//     if (typeof el === "number") {
//       total += el * el;
//     } else {
//       total += SumSquares(el);
//     }
//   });

//   return total;
// }

// console.log(SumSquares(l));

/**
 * You need to design a recursive function called replicate which will receive arguments times and number.

The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

As tempting as it may seem, do not use loops to solve this problem.
 */

// function replicate(times, number) {
//   if (times <= 0) return [];
//   const arr = replicate(times - 1, number);
//   arr.push(number);
//   return arr;
// }
// console.log(replicate(3, 5));

//Write a function called search that finds a value in an array and returns the index where the value is at. If the value is not found, the function should return negative 1.

//this solution works backwards but it works xD
// function search(arr, val) {
//   if (arr.length <= 0) return -1;
//   const i = arr.length - 1;
//   if (val === arr[i]) {
//     return i;
//   } else {
//     arr.pop();
//     return search(arr, val);
//   }
// }

// console.log(search([1, 2, 3, 4, 5, 4, 1, 2, 3, 14, 14, 12, 2, 3, 5], 5)); // 4
