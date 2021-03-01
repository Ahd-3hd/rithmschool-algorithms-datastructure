### Recursion

a recursive function is a function that calls itself.

example:
sumRange calls itself, base case is checking whether the input is equal to 1 or not.
if it is return 1.

```
function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}
```

Your Turn
Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
Otherwise, return the result of the base multiplied by the power function to the exponent - 1. You can think of it in terms of this example:

```
2^4 = 2 * 2^3;
2^3 = 2 * 2^2;
2^2 = 2 * 2^1;
2^1 = 2 * 2^0; // once our exponent is 0 we KNOW that the value is always 1!
```

solution:

```
function power(base,exp){
  if(exp === 0) return 1;
  return base * power(base,exp - 1 )
}
```