/*==================================
//* Set Data Type And Methods
==================================*/

let myData = [1, 1, 1, 2, 3];

//? Set automatically removes duplicate values
let myUniqueData = new Set(myData);
console.log(myUniqueData); // Set(3) {1, 2, 3}
console.log(myUniqueData.size); // 3
console.log("-".repeat(25));

//? Sets do not support index-based access like arrays
// console.log(myUniqueData[0]); // undefined

//* Common Set Methods: add(), delete(), has(), clear()
myUniqueData.add(6).add("A"); // chainable
console.log(myUniqueData.delete(6)); // true (value removed)
console.log(myUniqueData.has("A")); // true (value exists)
myUniqueData.clear(); // removes all elements
console.log(myUniqueData); // Set(0) {}
console.log("-".repeat(25));

/*==================================
//* Set vs WeakSet & Garbage Collection
==================================*/

let mySet = new Set([1, 2, "A", 3]);

//? Set supports iteration
mySet.forEach((el) => console.log(el));
console.log("-".repeat(25));

//? WeakSet accepts only object references
let myws = new WeakSet([{ A: 1, B: 2 }]);

//* WeakSet Characteristics:
//? - Only accepts object-type values (not primitives)
//? - Cannot get size or iterate over values
//? - Primarily used for memory-sensitive tracking

let user = { name: "Osama" };
let weakUsers = new WeakSet();
weakUsers.add(user);

//? Setting object to null → makes it eligible for garbage collection
user = null; // GC can clean it when needed (no strong reference)

/*==================================
//* WeakSet Use Cases
==================================*/

//* Use Case 1: Track visited DOM nodes
const visitedNodes = new WeakSet();
function trackNode(node) {
  if (!visitedNodes.has(node)) {
    visitedNodes.add(node);
  }
}

//* Use Case 2: Emulate private state in classes
const _privateData = new WeakSet();
class Example {
  constructor(obj) {
    _privateData.add(obj); // mark as private
  }
  hasAccess(obj) {
    return _privateData.has(obj); // check access
  }
}

/*==================================
//* Map Data Type vs Object
==================================*/

let myObject = {}; // plain object
let myMap = new Map(); // new Map
let myEmptyObject = Object.create(null); // no prototype
console.log(myEmptyObject); // truly empty object with no inherited props

//* Difference: Key coercion
let myNewObject = {
  10: "string", // treated as "10"
};
console.log(myNewObject[10]); // string

//* Map preserves key types — number !== string
let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1 }, "Object");
myNewMap.set(() => {}, "Function");

console.log(myNewMap.get(10)); // "Number"
console.log(myNewMap.get("10")); // "String"
console.log(myNewMap.size); // 5
console.log("-".repeat(25));

/*==================================
//* Map Methods
==================================*/

myNewMap.set(15, "Number");
console.log(myNewMap.get(15)); // "Number"

//* Create Map from array of key-value pairs
let mynap = new Map([
  [6, "Number"],
  ["name", "String"],
  [false, "boolean"],
]);

console.log(mynap.has(false)); // true
mynap.delete("name"); // removes entry
mynap.clear(); // removes all entries
console.log(mynap.size); // 0

/*==================================
//* Map vs WeakMap
==================================*/

//* Key Differences:
//? Map:
//?   - Accepts any key type (primitives, objects, functions)
//?   - Supports size, keys(), values(), forEach(), etc.
//?   - Keys are strongly referenced (won’t be garbage collected)

//? WeakMap:
//?   - Only accepts objects as keys
//?   - No size or iteration (for security + GC)
//?   - Keys are weakly held (eligible for GC if no other references)

let mapUser = { theName: "Elzero" };
let Mymap3 = new Map();
Mymap3.set(mapUser, "Object Value");
mapUser = null;

//? Map still holds reference — not eligible for GC
console.log(Mymap3); // key is still retained
console.log("-".repeat(25));

let uMapUser = { theName: "Elzero" };
let myWeakMap = new WeakMap();
myWeakMap.set(uMapUser, "Object Value");
uMapUser = null;

//? WeakMap key is now eligible for garbage collection
console.log(myWeakMap); // key may disappear silently over time
