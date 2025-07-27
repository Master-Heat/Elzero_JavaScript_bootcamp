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
console.log("-".repeat(25));

/*==================================
//* Array.some Method
==================================*/

//* Array.some(callbackFn, thisArg?)
//? Tests whether *at least one* element in the array satisfies the provided condition.
//? Returns `true` immediately once the condition is met, otherwise returns `false`.
//? Stops on the first match (doesn't check the rest).

let nums = [1, 2, 3, 4, 5, 6, 7];
let myNumber = 5;

//* Example 1: Check if any value > 6
let chek = nums.some(function (e) {
  return e > 6;
});
console.log(chek); // true
console.log("-".repeat(25));

//? Loop stops when it reaches 7 (which is > 6), returns true

//* Example 2: Using `thisArg` to compare each element with `myNumber`
let check = nums.some(function (e) {
  console.log(this); // logs myNumber (5) on each call
  return e > this;
}, myNumber);
console.log(check); // true
console.log("-".repeat(25));

//? `this` inside callback refers to `myNumber`
//? Loop continues until it finds a number > 5 → found 6 → returns true

//* Example 3: Custom function to check if a specific value exists in the array
function checkVlaues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkVlaues(nums, 20)); // false (20 not in array)
console.log(checkVlaues(nums, 5)); // true (5 exists)
console.log("-".repeat(25));

//? Reusable utility to check existence using `some` instead of `includes`

//* Example 4: Check if any number in the array falls within a given range
let range = {
  min: 10,
  max: 20,
};

let checkRange = nums.some(function (e) {
  return e >= this.min && e <= this.max;
}, range);

console.log(checkRange); // false
console.log("-".repeat(25));

//? No number in nums (1-7) falls between 10 and 20 → returns false
//? `this` refers to the `range` object

/*==================================
//* Array.every Method
==================================*/

//* Array.every(callbackFn, thisArg?)
//? Tests whether *all* elements in the array pass the provided condition.
//? Returns `true` only if every element satisfies the condition.
//? Stops immediately if one element fails the condition.

//* Sample data: object with numeric keys
const locations = {
  20: "Place 1",
  30: "Place 2",
  40: "Place 3",
  10: "Place 4",
};

let mainLocatin = 15;

//* Step 1: Extract object keys (which are strings by default)
let locationsarray = Object.keys(locations);
console.log(locationsarray); // ["10", "20", "30", "40"]

//* Step 2: Convert string keys to numbers
let locationsArrayNums = locationsarray.map((n) => +n);
console.log(locationsArrayNums); // [10, 20, 30, 40]

//* Step 3: Check if all location values are greater than `mainLocatin`
let checks = locationsArrayNums.every(function (e) {
  return e > this;
}, mainLocatin);
console.log(checks); // false

//? Only 20, 30, and 40 are > 15
//? But 10 is not > 15 → condition fails → returns false

console.log("-".repeat(25));

//* Valid Example: All elements satisfy the condition
let ages = [25, 30, 35, 40];
let minAge = 20;

let allAdults = ages.every(function (age) {
  return age > this;
}, minAge);
console.log(allAdults); // true
console.log("-".repeat(25));

//? All values (25, 30, 35, 40) are greater than 20 → returns true

/*==================================
//* Spread Syntax And Use Cases
==================================*/

//* Spread Syntax: ...Iterable
//? Allows unpacking elements from iterables (arrays, strings, etc.) or properties from objects.

//* Basic usage with strings
console.log("Hamada"); // "Hamada"
console.log(..."Hamada"); // H a m a d a → spread individual characters
console.log([..."Hamada"]); // ["H", "a", "m", "a", "d", "a"]
console.log("-".repeat(25));

//* Concatenate Arrays using Spread
let myArray3 = [1, 2, 3];
let myArray4 = [4, 5, 6];

let allArrays = [...myArray3, ...myArray4];
console.log(allArrays); // [1, 2, 3, 4, 5, 6]
console.log("-".repeat(25));

//* Copy Array (shallow copy)
let copiedArray = [...myArray3];
console.log(copiedArray); // [1, 2, 3]
console.log("-".repeat(25));

//* Push multiple values into an array
let allFriends = ["Osama ", "Ahmed", "Sayed ", "Abbas", "Bora3y"];
let thisYearFriend = ["Bo7sen", "Bahlol"];

console.log(allFriends); // Original array

//? If we used `allFriends.push(thisYearFriend)`, it would push the whole array as a single item:
//? ["Osama", ..., "Bora3y", ["Bo7sen", "Bahlol"]] ← this is NOT what we want
// allFriends.push(thisYearFriend);

allFriends.push(...thisYearFriend); // Spreads the elements one by one
console.log(allFriends); // ["Osama", ..., "Bahlol"]
console.log("-".repeat(25));

//* Use with Math Object
let myNums = [10, 20, -100, 100, 1000, 50];

//? Math.max expects individual numbers, not an array
// console.log(Math.max(myNums)); → NaN

console.log(Math.max(...myNums)); // 1000 → works correctly with spread
console.log("-".repeat(25));

//* Merge Objects
let ObjOne = {
  a: 1,
  b: 2,
};

let ObjTwo = {
  c: 3,
  d: 4,
};

//? Spread allows combining object properties into a new object
//? Later values overwrite earlier ones if keys conflict
console.log({ ...ObjOne, ...ObjTwo, e: 5 });
// { a: 1, b: 2, c: 3, d: 4, e: 5 }
