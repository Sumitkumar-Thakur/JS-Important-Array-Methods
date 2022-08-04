# JS-Important-Array-Methods
Sharing some important array methods one must know, with a basic example followed by its syntax.


Description

MAP

Map calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results. callbackFn is invoked only for indexes of the array which have assigned values (including undefined).

Map does not mutate the array on which it is called (although callbackFn, if invoked, may do so).

REDUCE

The reduce() method takes two arguments: a callback function and an optional initial value. If an initial value is provided, reduce() calls the "reducer" callback function on each element in the array, in order. If no initial value is provided, reduce() calls the callback function on each element in the array after the first element.

reduce() returns the value that is returned from the callback function on the final iteration of the array.

Recursive functions like reduce() can be powerful but sometimes difficult to understand, especially for less experienced JavaScript developers.

FILTER

filter() calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a value that coerces to true. callbackFn is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the callbackFn test are skipped, and are not included in the new array.

filter() does not mutate the array on which it is called.

