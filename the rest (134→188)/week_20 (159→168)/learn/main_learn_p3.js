//*-------------------------*//
//* Module Import And Export
//*-------------------------*//

//? This file is loaded in the browser as a module from an HTML page using:
//? <script src="main_learn_p3.js" type="module"></script>
//? Modules run in strict mode, have their own scope, and are deferred by default.

//* Named imports with aliasing
//? Import named exports from a module. You can rename imports using `as` (alias).
import { a, Array as arr, saySometing } from "./related_to_learn_p3.js";
//? `a` is the named export `a` from the related module.
//? `Array as arr` imports the named export `Array` but binds it locally as `arr` to avoid name conflicts with the global Array.
//? `saySometing` is a named function export.
console.log(a);
console.log(arr);
console.log(saySometing());
console.log("-".repeat(25));

//* Default export rules
//? Default export is a single value declared with `export default` in the module.
//? Default exports cannot be imported inside the curly braces with other named imports.
//? Wrong: import { defaultExport, named } from './module.js'
//? Right: import defaultExport from './module.js'; import { named } from './module.js'

//? Import default export (can be named anything locally)
import sayHello from "./related_to_learn_p3.js";
console.log(sayHello());

//? Default export may be imported with any local identifier (name)
import HamadaBeysaba7 from "./related_to_learn_p3.js";
console.log(HamadaBeysaba7());

//* Import namespace (import everything)
//? `import * as all` creates a namespace object containing all exported bindings (named + default available under `default`).
import * as all from "./related_to_learn_p3.js";
console.log(all);
//? Use exported values via the namespace object
console.log(all.Array);

//* Additional notes (no chat meta in file):
//? - Import bindings are live read-only views of the exported value. If the exporting module changes an exported variable, the importer sees the updated value.
//? - Browser module imports require exact path (include `./` or `/`), and typically must include the `.js` extension in native module loading.
//? - Circular imports are allowed but may return partially initialized bindings during module initialization. Handle with care.
