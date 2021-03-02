function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(arr.length - 1 / 2);

  if (arr[mid] === val) return mid;
  if (start >= end) return -1;

  if (arr[mid] > val) {
    arr.splice(mid, end);
    return binarySearch(arr, val);
  } else if (arr[mid] < val) {
    arr.splice(0, mid);
    return binarySearch(arr, val);
  }
}

console.log(binarySearch([2, 3, 4, 5, 10, 11, 14, 20], 20));
