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
