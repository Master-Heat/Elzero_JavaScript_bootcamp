//*-------------------------*//
//* Module Export Examples
//*-------------------------*//

//? This module provides examples of named exports and a default export used by main_learn_p3.js

//* Named exports
//? Export a primitive value
export const a = 10;

//? Export a value named `Array` (not the global Array constructor) — caller can alias it locally if needed
export const Array = [1, 2, 3];

//? Export a named function
export function saySometing() {
  return "I am saying something";
}

//* Default export
//? Export a default function. Importers can name it whatever they want locally.
export default function sayHello() {
  return "Hello from default export";
}

//* Alternative export styles (examples, not executed):
//? You can export at the end using an object: export { a, Array, saySometing };
//? Or assign then export: const x = 1; export { x as a };

//* Notes (no chat/meta):
//? - Named exports must be imported with the exact exported name (unless aliased with `as`).
//? - Default export is imported without curly braces and can use any local name.
//? - Avoid exporting names that shadow built-ins (like `Array`) unless you intentionally want a module-local binding with that name.
