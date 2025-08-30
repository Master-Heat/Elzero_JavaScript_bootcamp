//*--------------------------------*//
//* Generator function int  roduction
//*--------------------------------*//

//? Generator functions run their code lazily — the function body executes only when you call `.next()` on the generator object.
//? They return a special generator object that implements the iterator protocol and yields `{ value, done }` records.
//? Generators are useful for lazy sequences, controllable iterators, and certain async patterns.

function* generateNumbers() {
  //? First yield produces 1 and pauses the function here
  yield 1;

  //? This code runs only when the generator resumes after the first yield (i.e., on the next `next()` call)
  console.log("Hello after yield 1");

  //? Subsequent yields produce values 2, 3, 4 in order
  yield 2;
  yield 3;
  yield 4;
}

//? Create a generator object from the generator function (no body executed yet)
let generator = generateNumbers();

//? The generator is an object and is iterable
console.log(typeof generator); //? Output: "object"
console.log(generator); //? Output: generator object (internal state)

//? Calling next() runs until the next `yield` and returns { value, done }
console.log(generator.next()); //? Output: { value: 1, done: false }
//? value = yielded value, done=false means the generator isn't finished

//? You can get just the yielded value with `.value` e.g. generator.next().value
// console.log(generator.next().value);

//? Calling next() again resumes function: it runs the console.log line, then reaches the next yield
console.log(generator.next()); //? Output: { value: 2, done: false }  (and logs "Hello after yield 1" to console)
console.log(generator.next()); //? Output: { value: 3, done: false }
console.log(generator.next()); //? Output: { value: 4, done: false }
console.log(generator.next()); //? Output: { value: undefined, done: true }  (generator exhausted)

console.log("-".repeat(25));

//? Iterating a fresh generator with for..of yields each yielded `value` until done === true
for (let value of generateNumbers()) {
  console.log(value); //? Output sequence: 1, (logs inside generator), 2, 3, 4
}

//? Iterating the already-exhausted `generator` object produces nothing because it is done
for (let value of generator) {
  console.log(value); //? No output — `generator` was consumed earlier
}

console.log("-".repeat(25));

//? To iterate again create a new generator instance by calling the generator function again: generateNumbers()

//*----------------------------*//
//* Delegate Generator Function
//*----------------------------*//

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}
function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}
function* generateAll() {
  //? `yield generateNums()` would yield the generator object itself (not its yielded values)
  //? Use `yield*` to delegate to another iterable: it yields each value from that iterable
  yield* generateNums(); //? yields 1,2,3
  yield* generateLetters(); //? yields "A","B","C"
  //? `yield* [4,5,6]` also iterates the array and yields 4,5,6
  yield* [4, 5, 6];
}

let generator1 = generateAll();
console.log(generator1.next()); //? Output: { value: 1, done: false }
console.log(generator1.next()); //? Output: { value: 2, done: false }
console.log(generator1.next()); //? Output: { value: 3, done: false }
console.log(generator1.next()); //? Output: { value: "A", done: false }
console.log(generator1.next()); //? Output: { value: "B", done: false }
console.log("-".repeat(25));

//? generator.return(value) forces the generator to finish and returns { value, done: true }
//? If the generator had a `return` statement inside, that `return` value is used when finished normally, but `.return()` lets you force a completion with a provided value
console.log(generator1.return("value from the return")); //? Output: { value: "value from the return", done: true }

//? After return() the generator is done and subsequent next() calls yield { value: undefined, done: true }
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());

console.log("-".repeat(25));

//*--------------------------*//
//* Generate With Early Return
//*--------------------------*//
function* generateSomeNumbers() {
  yield 1;
  yield 2;
  //? A `return` inside a generator finishes it immediately; the returned value becomes the `value` of the final {value, done:true} when the generator completes normally.
  return "Value from the return";
  //? Code below `return` is unreachable and will never be executed
  yield 3;
  yield 4;
}
let AGenerator = generateSomeNumbers();
console.log(AGenerator.next()); //? { value: 1, done: false }
console.log(AGenerator.next()); //? { value: 2, done: false }
console.log(AGenerator.next()); //? { value: "Value from the return", done: true } (generator finished)
console.log(AGenerator.next()); //? { value: undefined, done: true }

console.log("-".repeat(25));

//*--------------------------*//
//* Generate Infinite Numbers
//*--------------------------*//
//? Generators can produce infinite sequences because they yield lazily and pause between values
function* generateInfiniteNums() {
  let index = 0;
  while (true) {
    yield index++;
  }
}
let generatorOfInfiniteNums = generateInfiniteNums();
//? Each next() call advances the generator and returns the next number
console.log(generatorOfInfiniteNums.next()); //? { value: 0, done: false }
console.log(generatorOfInfiniteNums.next()); //? { value: 1, done: false }
console.log(generatorOfInfiniteNums.next()); //? { value: 2, done: false }
console.log(generatorOfInfiniteNums.next()); //? { value: 3, done: false }
console.log(generatorOfInfiniteNums.next()); //? { value: 4, done: false }
