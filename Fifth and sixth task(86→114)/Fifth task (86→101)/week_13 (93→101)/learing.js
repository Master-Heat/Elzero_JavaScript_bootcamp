//* class list object and methods

// Get the element with id "my-div"
let element = document.getElementById("my-div");

// Log the list of classes applied to the element (classList is a DOMTokenList object)
console.log(element.classList);

// Log the type of element.classList (it should return "object" because classList is a DOMTokenList)
console.log(typeof element.classList);

// Check if the element contains the class "osama" and log the result (false because it's not present)
console.log(element.classList.contains("osama"));

// Check if the element contains the class "show" and log the result (true because it's present)
console.log(element.classList.contains("show"));

// Get the class at index 0 in the class list (should return "one")
console.log(element.classList.item("0"));

// Get the class at index 3 in the class list (should return "text")
console.log(element.classList.item("3"));

// Add an onclick event handler to the element
element.onclick = function () {
  // Add the classes "add-one" and "add-two" to the element
  element.classList.add("add-one", "add-two");

  // Remove the classes "one", "two", and "three" from the element
  // "one" and "two" will be removed, but "three" doesn't exist so it has no effect
  element.classList.remove("one", "two", "three");

  // Toggle the class "osama" on the element
  // If "osama" is already present, it will be removed; if it's not present, it will be added
  element.classList.toggle("osama");
};

//* CSS styling

// Select the element with id "my-div-1"
let element1 = document.getElementById("my-div-1");

// Set the inline text color to red (overrides any CSS color)
element1.style.color = "red";

// Override all previous inline styles with new ones using cssText
// This sets font-weight to bold, color to green, and opacity to 0.9
element1.style.cssText = "font-weight:bold; color: green; opacity:0.9";

// Remove the 'color' property from the element's inline style
// This removes the green color set previously via cssText
element1.style.removeProperty("color");

// Add a new inline style for font-size with value "40px"
// The "important" flag ensures it overrides any other font-size declarations
element1.style.setProperty("font-size", "40px", "important");

// Log the first CSS rule in the first stylesheet (e.g., the rule for "div")
console.log(document.styleSheets[0].rules[0]);

// Remove the "line-height" property from the first CSS rule
document.styleSheets[0].rules[0].style.removeProperty("line-height");

// Add or override the "background-color" in the same rule and mark it as important
document.styleSheets[0].rules[0].style.setProperty(
  "background-color",
  "red",
  "important"
);

//* DOM Deal With elements Before, After, Prepend, Append, Remove
// Select the element with id "my-div-2"
let element2 = document.getElementById("my-div-2");

// Create a new <p> element using createElement
let createdp = document.createElement("p");

// Insert the text "Hello from js" directly before element2 in the DOM
element2.before("Hello from js");

// Insert the created <p> element after element2 in the DOM
element2.after(createdp);

// Append the text "Hello from this js" to the end of element2
// This appears after any existing content inside the div
element2.append("Hello from this js");

// Append the same <p> element again to element2 (it will move here)
// A DOM node can't exist in two places, so it moves instead of duplicating
element2.append(createdp);

// Prepend the text "Hello from this JavaScript" to the beginning of element2
// This appears before any other content inside the div
element2.prepend("Hello from this JavaScript");

// To completely remove element2 from the page, you can uncomment the line below
// element2.remove();

//* ---- DOM Traversal Section ----

// Select the span element with class "two2"
let span = document.querySelector(".two2");

// Log the next sibling node (could be an element, comment, or text node)
// In this case, it's likely a comment or text node (the one after "two")
console.log(span.nextSibling);

// Log the next sibling element (skips comments and text nodes)
// This should be the <span class="three3"> element
console.log(span.nextElementSibling);

// Remove the next element sibling (which is <span class="three3">)
span.nextElementSibling.remove();

// Log the previous sibling node (could be comment or whitespace)
console.log(span.previousSibling);

// Log the previous sibling element (should be <span class="one1">)
console.log(span.previousElementSibling);

// Log the parent element of the current span (should be the div with id="my-div-3")
console.log(span.parentElement);

//* DOM clonin

// Clone the paragraph element with id "my-p"
// Passing `true` means perform a *deep clone*, copying the element AND all its children (like <span>)
let myp = document.querySelector("#my-p").cloneNode(true);

// 🔸 Note:
// cloneNode() accepts one optional boolean argument:
// - true  => deep clone (copy the element AND all nested content)
// - false => shallow clone (copy ONLY the element itself, WITHOUT any children)
// The default value is false, so: element.cloneNode() === element.cloneNode(false)

// Select the <div> with id "divv"
let mydiv = document.querySelector("#divv");

// Change the ID of the cloned paragraph to avoid having duplicate IDs in the DOM
myp.id = `${myp.id}-clone`; // e.g., "my-p-clone"

// Append the cloned paragraph (with content, because we used deep clone) to the <div>
mydiv.appendChild(myp);

// *add event listener

// Select the paragraph with id "my-pp"
let mypp = document.querySelector("#my-pp");

// Attach an onclick event using a named function
mypp.onclick = one;

// This line OVERRIDES the previous onclick assignment
// Only the 'two' function will run on click — not both
mypp.onclick = two;

// Define the two functions for testing
function one() {
  console.log("message from onclick 1");
}
function two() {
  console.log("message from onclick 2");
}

// Assigning a string to window.onload is not an error,
// but it does nothing useful. Valid values should be a function.
// This will be silently ignored by the browser.
window.onload = "osama";

// Using addEventListener allows multiple handlers for the same event
// Both 'one' and 'two' will be executed when clicking on #my-pp
mypp.addEventListener("click", one);
mypp.addEventListener("click", two);

// ❌ This would throw an error — event handler must be a function, not a string
// mypp.addEventListener("click", "string");

// Select another paragraph with id "my-ppp"
let myppp = document.querySelector("#my-ppp");

// On click, this clones #my-p (from earlier example), adds a class, and appends it to the body
myppp.onclick = function () {
  let newp = myp.cloneNode(true); // deep clone of #my-p
  newp.className = "clone"; // assign a class for identification
  document.body.appendChild(newp);
};

// ❌ This won't work:
// At this point, the ".clone" element does not yet exist in the DOM
// so `document.querySelector(".clone")` returns null
// Trying to assign a property (like onclick) to `null` would throw an error
// let cloned = document.querySelector(".clone");
// cloned.onclick = function () {
//   console.log("I am Cloned");
// };

// Use event delegation instead:
// This listens to all clicks on the document and filters for elements with class "clone"
document.addEventListener("Click ", function (e) {
  // This won't work either — event name has a space: "Click " instead of "click"
  // Also, 'e' is not defined in this function
  if (e.target.className === "clone") {
    console.log("I am Cloned");
  }
});
