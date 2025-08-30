//*-------------*//
//*What Is JSON
//*-------------*//
//? Java Script Object Notation
//? Fromate for sharing data between server and client
//? JSON Derived from JS
//? File Extension is .json

//* Why JSON
//? easy to use and Read
//? Used by most programming languages and its framework
//? you can cover JSON object to JS object and vice versa

//* JSON VS XML
//?=================================================
//?= Text base format       = markup language      =
//?= lightweight            = Heavier              =
//?= Does not use tag       = Using tags           =
//?= Shorter                = Not short            =
//?= Can Use array          = Can't use arrays     =
//?= Not Support comments   = support comments     =
//?=================================================

//*--------------------------------------*//
//*JSON Syntax And Compare With JS Object
//*--------------------------------------*//
//* JSON Syntax

//?Data Added Inside Curly Braces {}
//?--Data Added With Key: Value
//?-Key Should Be String Wrapped In Double Quotes
//?-Data Separated By Comma
//?--Square Brackets [] For Arrays
//?-Curly Braces {} For Objects
//*Available Data Types
//?----String
//?Number
//?Object
//?Array
//?Boolean Values
//?null
//? there are similar to how we create js object but to real example look at learn.json

//*------------*//
//*What Is API
//*------------*//
//? Application Program Interface
//? API overview
//? tools to test API
//? Preview github API
//? you can have a look in your github API by visiting api.github.com/users/(yourname)
//? EX my github API api.github.com/users/Master-Heat

//*-------------------*//
//*Parse And Stringify
//*-------------------*//
//? JSON.parse => convert text data to JS object
//? JSON.stringify => convert JS data to JSON
const myJsonObjectFromServer = '{"Username":"Osama","age":39}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);
console.log("-".repeat(25));

const myJsObject = JSON.parse(myJsonObjectFromServer);

console.log(typeof myJsObject);
console.log(myJsObject);
console.log("-".repeat(25));
//? testing editing the date as object
myJsObject["Username"] = "Elzero";
myJsObject["age"] = 41;
//? return the date into text (in our example we suppose it comes like that from the server)
const myJsObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsObjectToServer);
console.log(myJsObjectToServer);

//*---------------------------------------*//
//*Asynchronous vs Synchronous Programming
//*---------------------------------------*//
//?To Understand Ajax, Fetch, Promises

//*Asynchronous vs Synchronous Programming

//*Synchronous
//?Operations Runs in Sequence
//?Each Operation Must Wait For The Previous One To Complete
//?- Story From Real Life

//*Asynchronous
//?Operations Runs In Parallel
//?This Means That An Operation Can Occur while Another One Is Still Being Processed
//?Story From Real Life
//?Facebook As Example
//?Simulation

//*Search
//?JavaScript Is A Single-Threaded
//?Multi-Threaded Languages

//? synchronous example
// console.log("1");
// console.log("2");
//? notice how printing three waited untile end of the alert
// alert("Operation");
// console.log("3");
//? asynchronous example
// console.log("1");
// console.log("2");
//? notice how the log three code didn't waith untile the timeout method
// setTimeout(() => {
//   console.log("Operation");
// }, 3000);
// console.log("3");

//*----------------------*//
//*Call Stack And Web API
//*----------------------*//
//?To Understand Ajax, Fetch, Promises

//*Call Stack || Stack Trace
//?JavaScript Engine Uses A Call Stack To Manage Execution Contexts
//?Mechanism To Make The Interpreter Track Your Call
//?When Function Called It Added To The Stack
//?When Function Executed It Removed From The Stack
//?After Function Is Finished Executing The Interpreter Continue From The Last Point
//?---Work Using LIFO Principle => Last In First Out
//?---Code Execution Is Synchronous.
//?Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

//*Web API
//?---Methods Available From The Environment => Browser

//? notice how even this web API didn't wait it printed last one
// setTimeout(() => {
//   console.log("Web API");
// }, 0);
// function one() {
//   console.log("one");
// }
// function two() {
//   one();
//   console.log("two");
// }
// function three() {
//   two();
//   console.log("three");
// }
//* suppose this is a stack
//?=================================================
//   console.log("one");
//? last in
//?=================================================
// function one() {
//   console.log("one");
// }
//? third in
//?=================================================
// function two() {
//   one();
//   console.log("two");
// }
//? second in
//?=================================================
// function three() {
//   two();
//   console.log("three");
// }
//? first in
//?=================================================
//? se the LIFO stack should be like this
console.log("-".repeat(25));

console.log("one");
console.log("two");
console.log("three");
console.log("-".repeat(25));

//*-----------------------------*//
//*Event Loop And Callback Queue
//*-----------------------------*//

//*Story

//? JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
//? Call Stack Track All Calls
//? Every Function Is Done Its Poped Out
//? A When You Call Asynchronous Function It Sent To Browser API
//? Asynchronous Function Like Settimeout Start Its Own Thread
//? Browser API Act As A Second Thread
//? API Finish Waiting And Send Back The Function For Processing
//? Browser API Add The Callback To Callback Queue
//? Event Loop Wait For Call Stack To Be Empty
//? Event Loop Get Callback From Callback Queue And Add It To Call Stack
//? Callback Queue Follow FIFO "First In First Out" Rule
// console.log("one");
//? notice how Callback Queue Follow FIFO (excuted three then four)
// setTimeout(() => {
//   console.log("three");
// }, 0);
// setTimeout(() => {
//   console.log("Four");
//   console.log("two");
// }, 0);
//? notice how there are no error learn.js:208 Uncaught ReferenceError: Cannot access 'myvar' before initialization
//? the inicialzation is inside the call stack and it excute normally,
//? but the log inside set timeout is sent from call stack to call back queue before excution and then it sent again to can stack to be excuted,
//? so in this amount of time the declaration is done
// setTimeout(() => {
//   console.log(myvar);
// }, 0);
// let myvar = 100;
// myvar += 100;
//? notice how call stack (syncrous) finished before callback Queue (asyncrous)
// console.log(myvar);

//*-------------------------------------*//
//*What Is AJAX And Network Informations
//*-------------------------------------*//
//*AJAX
//? Asynchronous JavaScript And XML
//? Approach To Use Many Technologies Together [HTML, CSS, JS, DOM]
//? It Use "XMLHttpRequest" Object To Interact With The Server
//? You Can Fetch Data Or Send Data Without Page Refresh

//* Examples
//? Youtube Studio
//? Google Drive
//? Upload Article Photo
//? Form Check Name

//* Test new XMLHttpRequest();
//? Request And Response
//? Status Code

let req = new XMLHttpRequest();
console.log(req);
console.log("-".repeat(25));

//*----------------------------------*//
//*Request and Response From Real API
//*----------------------------------*//

//*Ready State => Status Of The Reques
//? [0] Request Not Initialized
//? [1] Server Connection Established
//? [2] Request Received
//? [3] Processing Request
//? [4] Request Is Finished And Response Is Ready

//*Status
//? [200] Response Is Successful
//? [404] Not Found
//? we always search about readyState: 4 and status: 200 this is the mean the request done corrctly

let myRequest = new XMLHttpRequest();
//?  open(method: string, url: string | URL, async: boolean, username?: string | null, password?: string | null): void
myRequest.open("GET", "https://api.github.com/users/Master-Heat");

myRequest.send();
console.log(myRequest);
/* //?output
?XMLHttpRequest {onreadystatechange: null, readyState: 1, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
?onabort: null
?onerror: null
?onload: null
?onloadend: null
?onloadstart: null
?onprogress: null
?onreadystatechange: null
?ontimeout: null
?readyState: 4
?response: "{\n  \"login\": \"Master-Heat\",\n  \"id\": 177257691,\n  \"node_id\": \"U_kgDOCpC82w\",\n  \"avatar_url\": \"https://avatars.githubusercontent.com/u/177257691?v=4\",\n  \"gravatar_id\": \"\",\n  \"url\": \"https://api.github.com/users/Master-Heat\",\n  \"html_url\": \"https://github.com/Master-Heat\",\n  \"followers_url\": \"https://api.github.com/users/Master-Heat/followers\",\n  \"following_url\": \"https://api.github.com/users/Master-Heat/following{/other_user}\",\n  \"gists_url\": \"https://api.github.com/users/Master-Heat/gists{/gist_id}\",\n  \"starred_url\": \"https://api.github.com/users/Master-Heat/starred{/owner}{/repo}\",\n  \"subscriptions_url\": \"https://api.github.com/users/Master-Heat/subscriptions\",\n  \"organizations_url\": \"https://api.github.com/users/Master-Heat/orgs\",\n  \"repos_url\": \"https://api.github.com/users/Master-Heat/repos\",\n  \"events_url\": \"https://api.github.com/users/Master-Heat/events{/privacy}\",\n  \"received_events_url\": \"https://api.github.com/users/Master-Heat/received_events\",\n  \"type\": \"User\",\n  \"user_view_type\": \"public\",\n  \"site_admin\": false,\n  \"name\": null,\n  \"company\": null,\n  \"blog\": \"\",\n  \"location\": null,\n  \"email\": null,\n  \"hireable\": null,\n  \"bio\": null,\n  \"twitter_username\": null,\n  \"public_repos\": 14,\n  \"public_gists\": 0,\n  \"followers\": 0,\n  \"following\": 0,\n  \"created_at\": \"2024-08-01T17:47:37Z\",\n  \"updated_at\": \"2025-08-30T11:54:12Z\"\n}\n"
?responseText: "{\n  \"login\": \"Master-Heat\",\n  \"id\": 177257691,\n  \"node_id\": \"U_kgDOCpC82w\",\n  \"avatar_url\": \"https://avatars.githubusercontent.com/u/177257691?v=4\",\n  \"gravatar_id\": \"\",\n  \"url\": \"https://api.github.com/users/Master-Heat\",\n  \"html_url\": \"https://github.com/Master-Heat\",\n  \"followers_url\": \"https://api.github.com/users/Master-Heat/followers\",\n  \"following_url\": \"https://api.github.com/users/Master-Heat/following{/other_user}\",\n  \"gists_url\": \"https://api.github.com/users/Master-Heat/gists{/gist_id}\",\n  \"starred_url\": \"https://api.github.com/users/Master-Heat/starred{/owner}{/repo}\",\n  \"subscriptions_url\": \"https://api.github.com/users/Master-Heat/subscriptions\",\n  \"organizations_url\": \"https://api.github.com/users/Master-Heat/orgs\",\n  \"repos_url\": \"https://api.github.com/users/Master-Heat/repos\",\n  \"events_url\": \"https://api.github.com/users/Master-Heat/events{/privacy}\",\n  \"received_events_url\": \"https://api.github.com/users/Master-Heat/received_events\",\n  \"type\": \"User\",\n  \"user_view_type\": \"public\",\n  \"site_admin\": false,\n  \"name\": null,\n  \"company\": null,\n  \"blog\": \"\",\n  \"location\": null,\n  \"email\": null,\n  \"hireable\": null,\n  \"bio\": null,\n  \"twitter_username\": null,\n  \"public_repos\": 14,\n  \"public_gists\": 0,\n  \"followers\": 0,\n  \"following\": 0,\n  \"created_at\": \"2024-08-01T17:47:37Z\",\n  \"updated_at\": \"2025-08-30T11:54:12Z\"\n}\n"
?responseType: ""
?responseURL: "https://api.github.com/users/Master-Heat"
?responseXML: null
?status: 200
?statusText: ""
?timeout: 0
?upload: XMLHttpRequestUpload {onloadstart: null, onprogress: null, onabort: null, onerror: null, onload: null, …}
?withCredentials: false
?[[Prototype]]: XMLHttpRequest
*/

myRequest.onreadystatechange = function () {
  console.log(myRequest.readyState);
  console.log(myRequest.status);
};
/* //? output
? 2
? 200
? 3
? 200 
? 4 
? 200
*/

myRequest.onreadystatechange = function () {
  console.log(myRequest.readyState);
  console.log(myRequest.status);
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
  console.log("-".repeat(25));
};
//? this will return the API requested (my github API)

//*-------------*//
//*Loop On Data
//*-------------*//

//* Search
//? Cross origin API [CORS]
//? API Authentication
let myReq = new XMLHttpRequest();
myReq.open("GET", "https://api.github.com/users/Master-Heat/repos");
myReq.send();
myReq.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(jsData.length);
    // console.log(this.responseText);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};
