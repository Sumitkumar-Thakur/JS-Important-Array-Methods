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

Sort

The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

If compareFunction is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array.

Every

The every method executes the provided callbackFn function once for each element present in the array until it finds the one where callbackFn returns a falsy value. If such an element is found, the every method immediately returns false. Otherwise, if callbackFn returns a truthy value for all elements, every returns true.

Some

The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

The some() method executes the callbackFn function once for each element present in the array until it finds the one where callbackFn returns a truthy value (a value that becomes true when converted to a Boolean). If such an element is found, some() immediately returns true. Otherwise, some() returns false. callbackFn is invoked only for indexes of the array with assigned values. It is not invoked for indexes which have been deleted or which have never been assigned values.
