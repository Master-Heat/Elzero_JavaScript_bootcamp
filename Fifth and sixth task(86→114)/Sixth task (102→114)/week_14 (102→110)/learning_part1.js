//document is part of window object mode
window.document.title = "not week 14 JK";
/*==================================
//*  alert, confirm, prompt  =======
==================================*/

//? These are built-in JavaScript methods used to interact with the user.

//? ➤ alert(message)
//?    - Displays a popup box with only an "OK" button.
//?    - Input: a string message.
//?    - Blocking: stops all interaction (even with the console) until dismissed.
//?    - Returns: nothing (undefined).

//? ➤ confirm(message)
//?    - Displays a popup box with "OK" and "Cancel" buttons.
//?    - Input: a string message.
//?    - Returns: Boolean (true if OK, false if Cancel).

//? ➤ prompt(message, default)
//?    - Displays a popup with a text input field.
//?    - Input:
//?         - message: the prompt to the user.
//?         - default: optional default input string.
//?    - Returns: the input as a string, or null if cancelled.

//? The following alert is commented out because it blocks interaction until dismissed.
//? It's considered bad for UX during development or in polished UI.
//? Better alternatives: custom alert libraries like SweetAlert2 (https://sweetalert2.github.io/)
// alert("test");

//? This would have logged "test" in the console after the alert is dismissed.
// console.log("test");

//? Using confirm() to ask the user if they’re sure about something.
//? It returns true if the user clicks OK, or false if they click Cancel.
// let confirmMst = confirm("Are you sure ?");

//? Logs the result (true/false) to the console.
// console.log(confirmMst);

//? If the user confirmed, we log "Item deleted".
//? Otherwise, we log "Item is not deleted".
// if (confirmMst == true) console.log("Item deleted");
// else console.log("Item is not deleted");

//? Prompt asks the user to enter a value (in this case, a short version of a day).
//? The second argument provides default text inside the prompt input field.
// let promptMsg = prompt("Suitable day", "write day with three characters ");

//? Logs the result of the prompt input — the entered string or null if cancelled.
// console.log(promptMsg);

/*==================================
//* setTimeout and clearTimeout  ====
==================================*/

//? setTimeout(callback, delay, ...args)
//? ➤ callback: function to run after a delay
//? ➤ delay: time in milliseconds
//? ➤ ...args: values passed to the function when it's executed

//? This function logs a basic message.
function SayMsg() {
  console.log("I am Message");
}

//? Runs SayMsg after 3 seconds.
setTimeout(SayMsg, 3000);

//? This function takes a name and logs it in a message.
function SayMsgfor(user) {
  console.log(`I am Message for ${user}`);
}

//? ❌ Bad example — the function is executed immediately, not delayed.
// setTimeout(SayMsgfor("Ahmed"), 3000);
//? Explanation:
//?    - SayMsgfor("Ahmed") runs *immediately* during code execution,
//?    - Its return value (undefined) is passed to setTimeout,
//?    - So nothing happens after 3 seconds — the delay is useless.

setTimeout(SayMsgfor, 3000, "Ahmed");
//? ✅ Correct — passes the function *reference*, along with the argument "Ahmed".
//? Output after 3 seconds: I am Message for Ahmed

//? This function takes a name and age and logs them.
function SayMsgforage(user, age) {
  console.log(`I am Message for ${user} Who's age is ${age}`);
}

setTimeout(SayMsgforage, 3000, "Ahmed", 20);
//? Output: I am Message for Ahmed Who's age is 20

//? Schedules SayMsg after 5 seconds and stores the timeout ID.
let counter = setTimeout(SayMsg, 5000);

//? Selects the <button>Stop</button> element.
let btn = document.querySelector("button");

//? Clicking the button cancels the scheduled SayMsg execution.
btn.onclick = function () {
  clearTimeout(counter);
};

/*==================================
//* setInterval and clearInterval  ====
==================================*/

//? setInterval is similar to setTimeout
//? ➤ Both take a callback function and a delay in milliseconds.
//? ➤ setTimeout runs the function once after the delay.
//? ➤ setInterval repeatedly runs the function every delay interval.
//? To stop setInterval, use clearInterval and pass it the interval ID.

//? Repeatedly log a message to the console every second
setInterval(function () {
  console.log("msg");
}, 1000);

//? Define a named function and pass it to setInterval
function saymsgI() {
  console.log("I am a message from another function");
}

//? This also repeats every 1 second
setInterval(saymsgI, 1000);

//? Select the first <div> element in the document
let div = document.querySelector("div");

//? Define a countdown function that decreases the content of the div
function countdown() {
  //? Subtract 1 from the div's current content (assumed to be a number)
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counteri);
  }
  //? When the content reaches "0", stop the interval
  //? This will stop the interval started on line 145
}

//? Start the countdown with 1-second interval and store its ID in counteri
//? This interval will repeatedly call countdown() every 1000 ms
let counteri = setInterval(countdown, 1000);
