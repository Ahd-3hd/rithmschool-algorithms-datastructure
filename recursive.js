/**
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all
 * productOfArray([1,2,3]) // 6
 * productOfArray([1,2,3,10]) // 60
 */

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  const last = arr[arr.length - 1];
  arr.pop();
  return last * productOfArray(arr);
}

// console.log(productOfArray([1, 2, 3, 10]));

/**
 * Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
 *
 */

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
          },
        },
      },
    },
  },
};

// there must be a better solution than this, but this functions alright i guess
function contains(obj, val) {
  const extracted = Object.values(obj)[0];
  if (typeof extracted === "undefined") {
    return false;
  } else if (extracted === val) {
    return true;
  }
  return contains(extracted, val);
}

console.log(contains(nestedObject, "hello"));
