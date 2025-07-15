/*==================================
//* class list object and methods  ===
==================================*/

//? Get the element with id "my-div"
let element = document.getElementById("my-div");

//? Logs the DOMTokenList of classes assigned to the element
console.log(element.classList);

//? Logs the type of classList — it's an object
console.log(typeof element.classList);

//? Check if class "osama" exists — false
console.log(element.classList.contains("osama"));

//? Check if class "show" exists — true
console.log(element.classList.contains("show"));

//? Get class at index 0 — returns "one"
console.log(element.classList.item("0"));

//? Get class at index 3 — returns "text"
console.log(element.classList.item("3"));

//? On click, manipulate classList of the element
element.onclick = function () {
  //? Add classes to the element
  element.classList.add("add-one", "add-two");

  //? Remove classes from the element ("three" doesn't exist)
  element.classList.remove("one", "two", "three");

  //? Toggle class "osama"
  element.classList.toggle("osama");
};

/*==================================
//* CSS styling  ====================
==================================*/

let element1 = document.getElementById("my-div-1");

//? Apply inline style directly
element1.style.color = "red";

//? Override styles using cssText
element1.style.cssText = "font-weight:bold; color: green; opacity:0.9";

//? Remove inline color style
element1.style.removeProperty("color");

//? Add inline font-size with !important flag
element1.style.setProperty("font-size", "40px", "important");

//? Access and modify CSS rules in stylesheet
console.log(document.styleSheets[0].rules[0]);

document.styleSheets[0].rules[0].style.removeProperty("line-height");
document.styleSheets[0].rules[0].style.setProperty(
  "background-color",
  "red",
  "important"
);

/*==================================
//* DOM Deal With elements  =========
==================================*/

let element2 = document.getElementById("my-div-2");
let createdp = document.createElement("p");

//? Insert plain text before the element
element2.before("Hello from js");

//? Insert a newly created <p> element after the element
element2.after(createdp);

//? Append plain text to the end of the element
element2.append("Hello from this js");

//? Move the <p> element inside element2 (not duplicated)
element2.append(createdp);

//? Add text to the beginning of element2
element2.prepend("Hello from this JavaScript");

//? Uncomment to remove element from DOM
// element2.remove();

/*==================================
//* DOM Traversal Section  ===========
==================================*/

let span = document.querySelector(".two2");

//? Log next sibling node (text/comment)
console.log(span.nextSibling);

//? Log next sibling element\console.log(span.nextElementSibling);

//? Remove next element sibling
span.nextElementSibling.remove();

//? Log previous sibling node (text/comment)
console.log(span.previousSibling);

//? Log previous sibling element
console.log(span.previousElementSibling);

//? Log parent element
console.log(span.parentElement);

/*==================================
//* DOM cloning  ====================
==================================*/

//? Clone element with ID #my-p (deep clone)
let myp = document.querySelector("#my-p").cloneNode(true);

//? Select container element to receive the clone
let mydiv = document.querySelector("#divv");

//? Change the ID of the clone to avoid duplication
myp.id = `${myp.id}-clone`;

//? Append cloned element to container
mydiv.appendChild(myp);

/*==================================
//* addEventListener and event handling
==================================*/

let mypp = document.querySelector("#my-pp");

//? Only 'two' will be triggered (replaces 'one')
mypp.onclick = one;
mypp.onclick = two;

function one() {
  console.log("message from onclick 1");
}

function two() {
  console.log("message from onclick 2");
}

//? Invalid: assigning a string does nothing
window.onload = "osama";

//? addEventListener allows multiple listeners
mypp.addEventListener("click", one);
mypp.addEventListener("click", two);

//? Invalid — handler must be function, not string
// mypp.addEventListener("click", "string");

let myppp = document.querySelector("#my-ppp");

//? Clone paragraph and add to body on click
myppp.onclick = function () {
  let newp = myp.cloneNode(true);
  newp.className = "clone";
  document.body.appendChild(newp);
};

//? Use event delegation to handle dynamically created elements
document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("I am Cloned");
  }
});
