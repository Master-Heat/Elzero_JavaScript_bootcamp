/*====================*/
// *OOP: Constructor Functions and Classes
/*====================*/

//* Object Literals (single objects)
//? Object literals are fine for one-off objects and are explicit.
const userOneLiteral = {
  id: 100,
  username: "Elzero",
  salary: 5000,
};

//* Constructor Function (classic pattern)
//? A function that acts as a blueprint. When called with `new` it creates instances.
function user(id, username, salary) {
  //? Instance properties
  this.id = id;
  this.username = username;
  //? Add a fixed raise when constructing (example business logic)
  this.salary = salary + 1000;
  //? Instance method defined inside constructor — recreated per instance
  this.msg = function () {
    return `Hello ${this.username} your salary is ${this.salary}`;
  };
}

let userOne = new user(100, "Elzero", 5000);
let userTwo = new user(69, "Hamada", 6969);
let userThree = new user(102, "Bo7sen", 6000);

//* Outputs for constructor function instances
console.log(userOne.id); //? Output: 100
console.log(userOne.username); //? Output: "Elzero"
console.log(userOne.salary); //? Output: 6000

console.log("-".repeat(25));

console.log(userTwo.id); //? Output: 69
console.log(userTwo.username); //? Output: "Hamada"
console.log(userTwo.salary); //? Output: 7969

console.log("-".repeat(25));

console.log(userThree.id); //? Output: 102
console.log(userThree.username); //? Output: "Bo7sen"
console.log(userThree.salary); //? Output: 7000

//! Note: By convention constructor functions use PascalCase (User). The example uses lowercase `user` to match your original code.

//* ES6 Class Syntax (modern)
//? `class` is syntactic sugar over the prototype system — cleaner and more structured.
class User {
  constructor(id, username, salary) {
    //? Properties
    this.id = id;
    //? Provide a default username if falsy
    this.username = username || "unknown";
    //? Conditional salary adjustment
    this.salary = salary < 6000 ? salary + 500 : salary;
    //? Instance method defined per-instance (not recommended for big functions)
    this.msg = function () {
      return `Hello ${this.username} your salary is ${this.salary}`;
    };
  }
  //? Prototype method (shared by all instances) — memory efficient
  writeMsg() {
    return `Hello ${this.username} your salary is ${this.salary}`;
  }
}

let userFour = new User(103, "Showkey", 5000);
let userFive = new User(104, "3am Sameer", 9000);

//* Instance checks (constructor function example)
console.log(userOne instanceof user); //? Output: true
console.log(userOne.constructor === user); //? Output: true

console.log("-".repeat(25));

//* Outputs for class instances
console.log(userFour.id); //? Output: 103
console.log(userFour.username); //? Output: "Showkey"
console.log(userFour.salary); //? Output: 5500
console.log(userFour.msg()); //? Output: "Hello Showkey your salary is 5500"
console.log(userFour.writeMsg()); //? Output: "Hello Showkey your salary is 5500"

console.log("-".repeat(25));

console.log(userFive.id); //? Output: 104
console.log(userFive.username); //? Output: "3am Sameer"
console.log(userFive.salary); //? Output: 9000
//? Logging the method property (no call) prints the function reference or native code string
console.log(userFive.msg); //? Output: function () { ... }
console.log(userFour.writeMsg); //? Output: [Function: writeMsg] (reference)
console.log("-".repeat(25));

//* Methods: instance vs prototype
//? Instance methods (this.msg = ...) are recreated for each object — use when method needs private per-instance closure.
//? Prototype/class methods (writeMsg) are shared on the prototype — more memory efficient and recommended for common behavior.
//! Tip: Prefer prototype methods for behavior shared across instances; keep constructor for initializing instance-specific state.

//* Built-in Constructors (Strings)

//? Demonstrates difference between primitive values and wrapper objects created with built-in constructors.

let strOne = "Elzero"; //? Primitive string literal
let strTwo = new String("Elzero"); //? String object created with constructor

//* typeof differences
console.log(typeof strOne);
//? Output: "string"  (primitive)

console.log(typeof strTwo);
//? Output: "object"  (wrapper object)

//* instanceof checks
console.log(strOne instanceof String);
//? Output: false
//? Explanation: strOne is a primitive. `instanceof` checks the prototype chain of objects — primitives have no prototype chain, so they are NOT instances of String.

console.log(strTwo instanceof String);
//? Output: true
//? Explanation: strTwo is an object created by `new String(...)`. Its prototype chain includes `String.prototype`, so `instanceof String` is true.

//* constructor comparisons
console.log(strOne.constructor === String);
//? Output: true
//? Explanation: Accessing a property on a primitive temporarily boxes (wraps) it in its corresponding object (String). During that internal boxing the `constructor` property comes from the wrapper and equals the String function.

console.log(strTwo.constructor === String);
//? Output: true
//? Explanation: strTwo is constructed by String, so its `constructor` naturally equals the String function.

//* Static properties & methods
class TheUser {
  //? Instance property (belongs to each instance)
  count = 0;

  //? Static property (belongs to the class itself, not instances)
  static sCount = 0;

  constructor(id, username, salary) {
    this.id = id;
    this.username = username;
    this.salary = salary;

    // update the static counter every time we create a new instance
    TheUser.sCount++;
    //? Explanation: We use the class name (TheUser) because `sCount` is a static property.
    //? - `this` refers to the current instance (e.g., theUserOne). `this.sCount` would look for an instance property named `sCount`.
    //? - Static properties live on the constructor function (TheUser.sCount). To change the shared class value we must reference the class itself.
  }

  //? Static method — callable on the class, NOT on instances
  static sayHello() {
    return `Hello From the class`;
  }

  //? Static method that accesses the class-level static property via `this` (inside static methods `this` === the class)
  static countMembers() {
    return `${this.sCount} Members created`;
  }
  SayHello() {
    return `Hello ${this.username} your salary is ${this.salary}`;
  }
}

let theUserOne = new TheUser(100, "Hamada", 6969);
console.log(theUserOne.username);
//? Output: "Hamada"

//non-static property (instance)
console.log(theUserOne.count);
//? Output: 0

// Accessing a non-existing static property on the class returns undefined
console.log(TheUser.count);
//? Output: undefined

console.log("-".repeat(25));

// Accessing static via instance does NOT find the class static (no automatic lookup)
console.log(theUserOne.sCount);
//? Output: undefined

// Proper way to access static property — from the class itself
console.log(TheUser.sCount);
//? Output: 1

// This will throw if uncommented because instances cannot call static methods
// console.log(theUserOne.sayHello()); // Error

console.log(TheUser.sayHello());
//? Output: "Hello From the class"

console.log(TheUser.countMembers());
//? Output: "1 Members created"

console.log("-".repeat(25));

//* Inheritance Example (instance behavior)
class Admin extends User {
  constructor(id, username, salary, permissions) {
    super(id, username, salary);
    this.permission = permissions;
  }
}

let adminOne = new Admin(110, "7ammo", 2005, 1);
console.log(adminOne.username);
//? Output: "7ammo"
console.log(adminOne.id);
//? Output: 110
console.log(adminOne.permission);
//? Output: 1

//? `msg()` is inherited from `User` (prototype) so it is available on Admin instances
console.log(adminOne.msg());
//? Output: "Hello 7ammo your salary is 2505" (depends on User implementation)

//* Extra notes
//? - Static properties/methods are shared among all instances and are accessed via the class.
//? - Inside static methods `this` refers to the class (so `this.sCount` works there).
//? - `instance.constructor` points to the class that constructed the instance, so `theUserOne.constructor.sCount` will also return the static value.

//* Prototype
//? Prototypes are the mechanism by which JavaScript objects inherit features from other objects.
//? - Functions have a `.prototype` property used when they are constructors (new Function()).
//? - Objects have an internal prototype (often accessed via `Object.getPrototypeOf(obj)` or `obj.__proto__`).
//? - When you access a property on an object, JS walks the prototype chain to find it.

console.log("-".repeat(25));
//? Separator to make console output readable

//? Log the prototype object for the `TheUser` class from earlier examples.
//? This shows properties and methods available to instances via inheritance (e.g. writeMsg if defined on prototype).
console.log(TheUser.prototype);
//? Output: The prototype object for TheUser (contains shared methods and properties defined on the class/constructor)

let strONE = "Hamada";
//? Primitive string values still inherit behavior from String.prototype via internal boxing when accessed.
console.log(String.prototype);
//? Output: String.prototype object — contains built-in string methods such as slice, indexOf, toUpperCase, trim, etc.
console.log("-".repeat(25));

/*====================*/
// *Add to prototype chain and Property Descriptors
/*====================*/

//* Prototype: Extending behavior
//? Extend built-in constructors or custom constructors by adding properties/methods on their prototype.
//? Be careful: modifying global prototypes (especially Object.prototype) is risky and can break libraries.

//? This example assumes `theUserOne` and `TheUser` exist from previous code. If they don't, accessing `theUserOne` will throw a ReferenceError.
console.log(theUserOne); //? Output: prints the `theUserOne` instance if defined, otherwise ReferenceError

//? Add a shared method to all instances created by TheUser (preferred way to add instance behaviour)
TheUser.prototype.SayWelcome = function () {
  return `Welcome ${this.username}`;
};
//? Effect: any instance `obj` created by `new TheUser(...)` can call `obj.SayWelcome()` after this line.

//? Adding a property directly to Object.prototype affects *every* object (dangerous).
Object.prototype.learn = `Elzero Web School`;
//! Warning: This pollutes all objects. It will show in `for...in` loops and can conflict with other code/libraries.
//! Safer alternative: use Object.defineProperty(Object.prototype, 'learn', { value: '...', enumerable: false });

//? Extend built-in String prototype — primitive strings will be able to use this method via internal boxing
String.prototype.addDotBeforeandAfter = function (val) {
  return `.${this}.`;
};

let myString = "Hamada";
console.log(myString.addDotBeforeandAfter());
//? Output: ".Hamada."

console.log("-".repeat(25));
//? Output: a line of 25 dashes as a separator

//* Object metadata and Property Descriptors
//? Property descriptors control how properties behave: writability, enumerability, configurability.
const myObject = {
  a: 1,
  b: 2,
};

//? Define property `c` with specific descriptors
Object.defineProperty(myObject, "c", {
  writable: true,
  enumerable: false,
  configurable: true,
  value: 3,
});

//? NOTE: When you create properties using object literals (e.g. { a:1 }), their descriptor defaults are:
//?   writable: true
//?   enumerable: true
//?   configurable: true
//? However, when you use Object.defineProperty / Object.defineProperties and you DO NOT specify a descriptor flag,
//? the omitted flags default to `false`.
//?   -> writable: false (if not given)
//?   -> enumerable: false (if not given)
//?   -> configurable: false (if not given)

//? writable: true  => you can change the property's value (assignment works)
myObject.c = 100;
console.log(myObject);
//? Output: depending on the environment, console displays own properties (a:1, b:2, c:100)

//? enumerable: false => property will NOT show up in `for...in` enumeration
for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}
//? Typical Output:
//? a 1
//? b 2
//? learn Elzero Web School
//? Explanation: `c` is not listed because enumerable:false. `learn` appears because it was added to Object.prototype as an enumerable property.

//! Reminder: assigning to Object.prototype (Object.prototype.learn = ...) created an *enumerable* inherited property, which is why `learn` is shown above. That's another reason to avoid direct assignment to Object.prototype.

//? configurable: true => property can be deleted or reconfigured
console.log(delete myObject.c);
//? Output: true  (deletion succeeded because configurable: true)
//? If configurable were false, delete would return false and the property would remain.

//* Define multiple properties at once
Object.defineProperties(myObject, {
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
  f: {
    configurable: true,
    value: 6,
  },
});

console.log(myObject);
//? Output: { a:1, b:2, d:4, e:5, f:6 }  — note: d/e/f were added but are not enumerable by default (since enumerable wasn't specified)

//? Inspect descriptor for property 'd'
console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
//? Output: { value: 4, writable: false, enumerable: false, configurable: true }

console.log("-".repeat(25));
console.log(Object.getOwnPropertyDescriptors(myObject));
//? Output: an object listing descriptors for all own properties of myObject (shows writable/enumerable/configurable/value)

//* Practical guidance
//? - Use object literals or property assignment for simple properties (they are writable/enumerable/configurable).
//? - Use Object.defineProperty/defineProperties when you need precise control (non-enumerable helpers, read-only fields, etc.).
//? - Avoid modifying Object.prototype. If you must, prefer non-enumerable additions via defineProperty to prevent for-in pollution and library conflicts.
//? - Remember: defineProperty defaults are strict (flags default to false); always set flags explicitly if you rely on them.
