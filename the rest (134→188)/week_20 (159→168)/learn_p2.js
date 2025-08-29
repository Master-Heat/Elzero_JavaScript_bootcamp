//*--------------------------------*//
//* Generator function introduction
//*--------------------------------*//

//? Generator functions run their code lazily — code executes only when you call `.next()` on the generator object.
//? They return a special "generator object" that is iterable and provides `next()` which yields `{ value, done }`.
//? Generators are useful for implementing lazy sequences, async flows (pre-async/await), or controllable iterators.

function* generateNumbers() {
  //? First yield produces 1 and pauses the function at this point
  yield 1;

  //? This code executes only when the generator resumes after the first yield
  //   (e.g., when you call next() again). It's useful to show that code after yield runs later.
  console.log("Hello after yield 1");

  //? Subsequent yields
  yield 2;
  yield 3;
  yield 4;
}

//? Create a generator object from the generator function (it does NOT run the function body yet)
let generator = generateNumbers();

//? The generator object is an object and is iterable
console.log(typeof generator); //? Output: "object"
console.log(generator); //? Output: generator object (internal state)

//? Calling next() executes the generator until the next yield and returns { value, done }
console.log(generator.next()); //? Output: { value: 1, done: false }
//? value is the yielded value; done:false indicates there are more yields

//? You can access only the value directly: generator.next().value
// console.log(generator.next().value);
// console.log(generator.next().done);

//? Notice how the code after the first yield (the console.log above) runs when we called the second next()
console.log(generator.next()); //? Output: { value: 2, done: false } and logs "Hello after yield 1" before returning
console.log(generator.next()); //? Output: { value: 3, done: false }
console.log(generator.next()); //? Output: { value: 4, done: false }
console.log(generator.next()); //? Output: { value: undefined, done: true }  (generator is exhausted)

console.log("-".repeat(25));

//? Iterating a fresh generator with for..of yields all `value`s until done=true
for (let value of generateNumbers()) {
  console.log(value); //? Output sequence: 1, (logs from inside generator), 2, 3, 4
}

//? If you iterate the already-exhausted `generator` object, it produces no values because it's done
for (let value of generator) {
  console.log(value); //? No output: `generator` was already consumed above
}

//? To iterate again, create a new generator instance (generateNumbers()).
//? This is the key difference shown above: `generateNumbers()` creates a fresh iterator each call; the generator object `generator` is stateful and single-use.
