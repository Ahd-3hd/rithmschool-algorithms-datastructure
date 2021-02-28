### Algorithms and Data Structures.

## Lesson One:

Big O Notation:

- Is an approximate upper bound on the runtime of your algorithm based on the data set
  The algorithm will use.
  -classify algorithms according to how their run time or space requirements grow as the input
  Size grows.

##Big O Notation Rules:

1- Constants are ignored
2- Smaller components are ignored:
O(500 * n) --> O(n)
O(99999999999) --> O(1)
O(10*n2 + 5n + 20) --> O(n2)
O(n * n) --> O(n2)
O(n*log(n) + 30000 _ n) --> O(n _ log(n))

### O(1)

functions that are constant time, because the algorithm is not dependant on a variable size; regardless of the input size the runtime
will not grow beyond the constant time.

examles:

constant time or O(1) because the expression inside the function will only execute once.

```
function add(num1, num2, num3) {
   return num1 + num2 + num3;
}
```

constant time or O(1) because the for loop will execute 100 times regardless of the inputs.

```
function sayHello() {
    for (var i = 0; i < 100; i++) {
       console.log("Hello");
    }
}
```

constant time or O(1) because the for loop will execute 10 times regardless of the inputs.

```
function logMultiples(num) {
    for (var i = 0; i < 10; i++) {
        console.log(i * num);
    }
}
```

### O(n) : linear time.

linear time when the data set is iterated over approximately one time.

the runtime of the function should be roughly proportional to the size of numberOfTimes.

n -> 1 => iterations 1 time.
n -> 2 => iterations 2 times.
n -> 3 => iterations 3 times.

```
function sayHello(numberOfTimes) {
    for (var i = 0; i < numberOfTimes; i++) {
        console.log("Hello");
    }
}
```

we're iterating over the dataset (numbers) n times twice.
therefore it is O(n+n) => O(2n)
since constants are ignored it can be described as O(n)

```
function doubleThenTriple(numbers) {
    var doubled = numbers.map(function(num) {
        return num * 2;
    });

    return doubled.map(function(num) {
        return num * 3;
    });
}
```

### O(n^2)

iterating over each element in each iteration. ( nested iterations )

allPairs function iterates over an array of elements, and in each iteration a nested iteration happens.

```
function allPairs(arr) {
    var pairs = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            pairs.push([arr[i], arr[j]]);
        }
    }

    return pairs;
}
```

bubbleSort loops through the given array, and in each iteration another nested loop happens that iterate over the array again.

```
function bubbleSort(arr) {
  var len = arr.length;
  var lastSwap;
  var temp
  while (len != 0) {
    lastSwap = 0;
    for (var i = 1; i < len; i++) {
      if (arr[i - 1] > arr[i]) {
        // Swap the two elements
        temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
        lastSwap = i;
      }
    }
    len = lastSwap;
  }
}

other implementation:

function bubbleSort(arr) {

  for(let i=0;i<arr.length;i++){

    for(let j=1;j<arr.length;j++){
      if(arr[j] < arr[j-1]){
        const temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }

    }

  }
}

```

when n = 1 it logs 1 multiples, n = 2 => 4 multiples, n = 3 => 9 multiples, n = 4 => 16 multiples

```
function logMultiples(n) {
    for (var num1 = 1; num1 <= n; num1++) {
        for (var num2 = 1; num2 <= n; num2++) {
            console.log(num1 * num2);
        }
    }
}
```

rule of thumb: nested loops "generally" are O(n^level of nesting).

it's not always the case tho. eg:

this is a nested loop, bit because of the condition Math.min(n,10) the code inside the loop will execute at max 10 times.

the outer loop is o(n) => because number of iteration depends on input n.
nested loop is o(1) => condition is run at max 10 time.
1 is ignored, and the function runtime is o(n)

```
function logSomeMultiples(n) {
    for (var num1 = 1; num1 <= n; num1++) {
        for (var num2 = 1; num2 <= Math.min(n, 10); num2++) {
            console.log(num1 * num2);
        }
    }
}
```

### space complexity:

describes how much memory our program requires.

fn total is time complexity is o(n) since the execution increase proportional with the input size.
but space complexity is o(1) since total will only store/return one unit regardless of the input size.

```
function total(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
```

double time complexity is o(n) linear => increase proprtional with input size
space complexity is o(n) new array size increases proprtional with input size.

```
function double(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(2 * array[i]);
    }
    return newArray;
}
```
