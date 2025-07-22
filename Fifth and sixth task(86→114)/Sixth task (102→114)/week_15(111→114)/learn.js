/*==================================
//* Local Storage  ==================
==================================*/

//? localStorage is a property of the `window` object
//? ➤ It allows us to store key-value pairs in the browser **persistently** (until cleared).
console.log(window.localStorage);
console.log(typeof window.localStorage); // "object"

//* Setting values in localStorage

//? Method 1: Using setItem(key, value)
window.localStorage.setItem("color", "#aaa");

//? Method 2: Using dot notation (acts like properties)
window.localStorage.fontWeight = "bold";

//? Method 3: Using bracket notation (like arrays)
window.localStorage["fontSize"] = "20px";

//* Getting values from localStorage

//? Method 1: Using getItem(key)
console.log(window.localStorage.getItem("color"));

//? Method 2: Using dot notation
console.log(window.localStorage.color);

//? Method 3: Using bracket notation
console.log(window.localStorage["color"]);

//* Removing values from localStorage

//? Remove a specific item by key
// window.localStorage.removeItem("color");

//? Clear all items in localStorage
// window.localStorage.clear();

//* Get key by index
//? Useful for looping through stored items
console.log(window.localStorage.key(0));

//! Notes:
//? - localStorage does **not** work in private/incognito tabs in some browsers.
//? - Stored data is isolated per **protocol** (http vs https), and **domain**.

/*==================================
//* Local Storage Color App Practice
==================================*/

//? Select the colored box container
let experiment = document.querySelector(".experiment");

//? Select all color choice items
let list = document.querySelectorAll("ul li");

//? If there's a saved color in localStorage, we apply it to the box
//? and update the UI to show the selected color as "active"

if (window.localStorage.getItem("Thecolor")) {
  experiment.style.backgroundColor = window.localStorage.getItem("Thecolor");

  //? Remove 'active' class from all <li> items before applying it to the saved one
  list.forEach((li) => {
    li.classList.remove("active");
  });

  //? Find the <li> that matches the saved color and mark it active
  document
    .querySelector(`[data-color="${window.localStorage.getItem("Thecolor")}"]`)
    .classList.add("active");
}
list.forEach((item) => {
  item.addEventListener("click", (e) => {
    //? Remove 'active' from all options
    list.forEach((li) => {
      li.classList.remove("active");
    });

    //? Mark the clicked one as active
    e.currentTarget.classList.add("active");

    //? Save the chosen color to localStorage
    window.localStorage.setItem("Thecolor", e.currentTarget.dataset.color);

    //? Update the box background with the selected color
    experiment.style.backgroundColor = e.currentTarget.dataset.color;
  });
});

//*my way
/*

 if (window.localStorage.Thecolor) {
        experiment.style.backgroundColor = window.localStorage.Thecolor;
        list.forEach((item) => {
            item.classList.remove("active");
            if (item.getAttribute("data-color") == window.localStorage.Thecolor) {
                item.classList.add("active");
            }
        });
    } else {
        list.forEach((item) => {
    if (item.classList.contains("active")) {
        experiment.style.backgroundColor = item.getAttribute("data-color");
    }
    });
    }
    list.forEach((item) => {
        item.addEventListener("click", function () {
            list.forEach((li) => {
                li.classList.remove("active");
            });
            this.classList.add("active");
            window.localStorage.Thecolor = this.getAttribute("data-color");
            experiment.style.backgroundColor = window.localStorage.Thecolor;
        });
    });
*/

/*==================================
//* Session Storage And Use Cases
==================================*/

//? Stores data only for the session — not permanently like localStorage

// window.localStorage.setItem("ccolor", "red");
// window.sessionStorage.setItem("ccolor", "blue");

//? They're separate — sessionStorage and localStorage do not share data

//? A new tab (unless manually duplicated) starts a new session
//? sessionStorage persists across page refresh, but is cleared when the tab is closed
//? Uses the same methods as localStorage: getItem, setItem, removeItem

document.querySelector(".name").onblur = function () {
  window.localStorage.setItem("Input name", this.value);

  //? In this case, sessionStorage would be more appropriate —
  //? users might feel uncomfortable if their input is still saved after closing the tab.
};
