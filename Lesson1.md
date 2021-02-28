###Algorithms and Data Structures.

##Lesson One:

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
3-
