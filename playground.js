// function factorial(num) {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// }

// console.log(factorial(4));

function allRecursive(array, condition) {
  var copy = array.slice();
  function allRecursiveHelper(arr, cb) {
    if (arr.length === 0) return true;
    if (condition(arr[0])) {
      arr.shift();
      return allRecursive(arr, condition);
    } else {
      return false;
    }
  }
  return allRecursiveHelper(copy, condition);
}

var numbersArray = [1, 2, 3, 4, 5];
allRecursive(numbersArray, function (v) {
  return v > 0;
});
