/*==================================
//* Window Location Object  =========
==================================*/

//? The `location` object provides information about the current URL and allows redirection/navigation.
console.log(location);

//? Returns the full URL of the current page as a string
console.log(location.href);

//? Un-commenting the next line will redirect the browser to Google's homepage
// location.href = "https://google.com";

//? Un-commenting the next line scrolls to the element with id="sec02" on the same page
//? ➤ This works if the element exists and has enough height to allow scrolling.
// location.href = "#sec02";

//? Un-commenting the next line redirects to a section on a different webpage
// location.href = "https://www.scaler.com/topics/javascript-window-location/#loading-new-documents";

//* Host and Hostname Info

//? `host` includes the domain + port (if any), e.g., "localhost:5500" or "example.com:8080"
console.log(location.host);

//? `hostname` is just the domain name without port, e.g., "localhost" or "example.com"
console.log(location.hostname);

//? Note:
//? Host and hostname are useful for checking or switching domains programmatically.

//* Protocol Info

//? Shows the protocol used to load the page, e.g., "http:" or "https:"
console.log(location.protocol);

//* Hash Fragment Info

//? Shows the fragment identifier (part of the URL after the `#`)
console.log(location.hash);

//? ➤ If you access the page with a `#` in the URL (like `example.com/page.html#sec02`),
//?    this will return `#sec02`. Otherwise, it returns an empty string.
//? ➤ It's used for scrolling to in-page anchors (like sections).

//* Location Methods

//? Reloads the current page from the server (like pressing F5 or Ctrl+R)
window.location.reload;

//? Redirects to a new URL **and removes** the current page from the session history
//? ➤ You can't go back to the current page using the browser back button
//window.location.replace();

//? Redirects to a new URL **and keeps** the current page in session history
//? ➤ The user can return to it with the back button
//window.location.assign();

/*==================================
//* Window Open And Close  =========
==================================*/

//* window.close()
//? Closes the current window — but only if it was opened via JavaScript using window.open().
//? Otherwise, modern browsers block the attempt as a security measure.
//? ❗ However, some browsers may still allow it under specific conditions (like when opened with browser dev tools, local files, or certain permission settings).

// window.close(); //? Uncomment this line to try closing the current window.

//* window.open()
//? Opens a new browser window or tab depending on browser settings and parameters.

//? Syntax:
//? window.open(URL, windowName, windowFeatures)

//? ➤ URL: (optional)
//?     - The page to load. Default is about:blank if omitted.
//? ➤ windowName: (optional)
//?     - A name or target attribute for the new window (_blank, _self, _parent, etc.).
//?     - _blank: always opens a new tab or window.
//? ➤ windowFeatures: (optional)
//?     - A comma-separated string of features (e.g., width, height, top, left, etc.).
//?     - Do **not** add 'px' to width/height values.

//? Example below opens Google in a popup after 2 seconds.
//? The popup must be allowed in your browser (some browsers block popups by default).

setTimeout(() => {
  window.open(
    "https://google.com", // URL
    "_blank", // Target (new tab/window)
    "width=500,height=600,left=200,top=100" // Features (size & position)
  );
}, 20000);
/*==================================
//* Window History Object  =========
==================================*/

//* Add link to another page to simulate navigation
//? I added a loop between pages (like learning_part1.html) just to populate the session history with entries for testing
document.body.innerHTML +=
  '<a href="learning_part1.html" title="Visit the links at the end of each website to build history"> visit</a>';

//* Log the full history object
//? Useful to inspect available methods and check the current session history state
console.log(history);

//* Get the number of entries in the history stack
//? Includes the current page and every page visited before/after it (in this tab only)
history.length;

//* Go back one page in the history (like pressing the browser’s "Back" button)
//? If there's no previous entry, this does nothing
// history.back(); // Uncomment to test

//* Go forward one page in the history
//? Opposite of back(); only works if you've gone back before

//* Use go() to jump to a specific offset in the history stack
//? I used this to test precise control of history navigation:
//? ➤ history.go(0)   → Reloads the current page
//? ➤ history.go(1)   → Goes forward one entry (if available)
//? ➤ history.go(-1)  → Goes back one entry (if available)

/*==================================
//* Scroll, ScrollTo, ScrollBy, Focus, Print, Stop  ====
==================================*/

//? Stop loading the current page
// window.stop();

//? Print the current page
// window.print();

//* Scrolling Methods

//? scrollTo(x, y)
//? Scrolls the window to an exact position from the top-left corner of the document.
window.scrollTo(50, 500);

//? scrollBy(x, y)
//? Scrolls relative to the current position (adds/subtracts from current scroll position)
window.scrollBy(500, -500);

//? scrollTo with behavior
//? Smoothly scrolls to a specific position using an object with options
//? ➤ Supported in Safari 15.4 and newer
window.scrollTo({ left: 500, top: 500, behavior: "smooth" });

//? scroll() is an alias for scrollTo()
//? ➤ Equivalent to scrollTo(x, y) or scrollTo(options)
//? ➤ Also supports smooth behavior (Safari 15.4+)
window.scroll(0, 500);

/*==================================
//* Scroll To Top Using ScrollY  ======
==================================*/

//? scrollX / pageXOffset and scrollY / pageYOffset
//? ➤ Both return the number of pixels the document is currently scrolled horizontally/vertically.
//? ➤ scrollX and scrollY are modern, pageXOffset and pageYOffset exist for older browser support.

//? Select the "Up" button that is used to scroll the page to the top
let btn = document.querySelector("button");

//? Monitor the scroll position using window.onscroll
//? ➤ When the vertical scroll (`scrollY`) passes 600px, we show the button.
//? ➤ Otherwise, we hide it.
//? This improves UX by only showing the button when needed.
window.onscroll = () =>
  window.scrollY >= 600
    ? (btn.style.display = "block")
    : (btn.style.display = "none");

//? When the button is clicked:
//? ➤ Scroll the page to the top-left corner (0,0) using smooth animation.
btn.onclick = () => window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
