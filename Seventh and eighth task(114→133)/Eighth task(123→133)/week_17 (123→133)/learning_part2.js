/*==================================
//* array from Methods
==================================*/

//* Array.from — create arrays from iterables or array‑like objects
//? Takes an iterable (string, Set, etc.) and returns a new Array.
//? Optional mapFn allows transformation of each element.
console.log(Array.from("Osama")); // ["O","s","a","m","a"]

//? Using mapFn to double each numeric character
console.log(Array.from("12345", (n) => +n + +n)); // [2,4,6,8,10]

//* Unique array via Set + Array.from
let myArray = [1, 1, 1, 2, 3, 4];
let mySet2 = new Set(myArray);
console.log(Array.from(mySet2)); // [1,2,3,4]

//* Alternative modern syntax using spread
console.log([...new Set(myArray)]); // [1,2,3,4]
console.log("-".repeat(25));

//* Converting arguments object to Array
function af() {
  return Array.from(arguments);
}
console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));
console.log("-".repeat(25));
// ["Osama","Ahmed","sayed",1,2,3]

/*==================================
//* Array.copyWithin
==================================*/

//? copyWithin(target, start = 0, end = this.length)
//? - target: index at which to copy values to
//? - start: index at which to start copying (default 0)
//? - end: index before which to end copying (exclusive; defaults to array length)
//? Omitting `end` means copy until the end of the array.
//? Negative indices count from the end.

let myArray2 = [10, 20, 30, 40, 50, "A", "B"];

//? copyWithin(3) is shorthand for copyWithin(3, 0, myArray2.length)
myArray2.copyWithin(3);
console.log(myArray2);
console.log("-".repeat(25));

// [10, 20, 30, 10, 20, 30, 40]

//* Reset to original
myArray2 = [10, 20, 30, 40, 50, "A", "B"];

//? copyWithin(4, 6, 7)
//? - target = 4, start = 6, end = 7 (exclusive)
//! note we don't have to type the seven because the b is the last value
//? Copies element at index 6 ("B") to index 4
myArray2.copyWithin(4, 6, 7);
console.log(myArray2);
console.log("-".repeat(25));
// [10, 20, 30, 40, "B", "A", "B"]

//* Reset to original
myArray2 = [10, 20, 30, 40, 50, "A", "B"];

//? copyWithin(-3, -1)
//? - target = length - 3 = 4
//? - start = length - 1 = 6
//? Copies element at index 6 ("B") to index 4
myArray2.copyWithin(-3, -1);
console.log(myArray2);
// [10, 20, 30, 40, "B", "A", "B"]

console.log(myArray2);
//*Array.some Method
// it return true if one of the element has the condition
