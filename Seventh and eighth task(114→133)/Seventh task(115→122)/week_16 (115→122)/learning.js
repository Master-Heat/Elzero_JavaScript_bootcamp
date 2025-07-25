/*==================================
//* Destructuring Arrays
==================================*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Mysa"];

//? You can update the values or declare them in this way
[a, b, c, d] = myFriends;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log("------------------------------");

//? If we remove the `d` as in the following line, it will stay as 4 (in global scope)
//? but the others will update normally
// [a, b, c] = myFriends;

//? If we add a variable like in the following, it will be undefined
// [a, b, c, d, e] = myFriends;

//? You can also add default values, like for `a` and `e` here
// [a = "Osama", b, c, d, e = "Abbas"] = myFriends;

//? In the example below, we extract only specific elements
let [, y, , z] = myFriends;
console.log(y);
console.log(z);
console.log("------------------------------");

let myFriends2 = [
  "Ahmed",
  "Sayed",
  "Ali",
  ["shady", "Amr", ["Mohammed", "Gamal"]],
];

console.log(myFriends2[3][2][1]);
console.log("------------------------------");

//? In this nested destructuring example:
let [, , , [aa, , [, bb]]] = myFriends2;
console.log(aa); // shady
console.log(bb); // Gamal
console.log("------------------------------");

//? Old way to swap values
let book = "video";
let video = "book";

//? Save book value in stash
let stash = book; // video

//? Change book value
book = video; // book

//? Change video value
video = stash; // video

console.log(book, video);
console.log("------------------------------");

//? Using destructuring to swap
let bok = "video";
let vide = "book";
[bok, vide] = [vide, bok];
console.log(bok, vide);
console.log("------------------------------");

/*==================================
//* Destructuring Objects
==================================*/

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egype",
  theColor: "green",
  skills: {
    html: 90,
    css: 80,
  },
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.theTitle);
console.log(user.theCountry);
console.log("------------------------------");

//? If you declare them initially as in the example below, parentheses aren't needed
// let { theName, theAge, theTitle, theCountry } = user;

//? Otherwise, you must use parentheses for assignment
let theName = user.theName;
let theAge = user.theAge;
let theTitle = user.theTitle;
let theCountry = user.theCountry;
({ theName, theAge, theTitle, theCountry } = user);

console.log(theName);
console.log(theAge);
console.log(theTitle);
console.log(theCountry);
console.log("------------------------------");

//? Destructuring uses property identifiers, not index like arrays
//? This example excludes `theAge`
// ({ theName, theTitle, theCountry } = user);

//? You can rename variables and assign default values
let {
  theName: n,
  theAge: age,
  theCountry: cou,
  theColor: co = "Red",
  skills: { html: h },
} = user;
console.log(n);
console.log(age);
console.log(cou);
console.log(co);
console.log(`My HTML Skill progress Is ${h}`);
console.log("------------------------------");

//? Destructuring nested object
const { html: skillOne, css: skillTwo } = user.skills;

console.log(`My HTML Skill progress Is ${skillOne}`);
console.log(`My CSS Skill progress Is ${skillTwo}`);
console.log("------------------------------");

/*==================================
//* Destructuring Mixed Content
==================================*/

const theUser = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    egypt: "Cairo",
    KSA: "Riyad",
  },
};

//? Print name, age, last skill, and one address using destructuring
let {
  theName: name,
  theAge: ag,
  skills: [, , js],
  address: { egypt: egy },
} = theUser;

console.log(
  `Hello! Your name is ${name}, your age is ${ag}, your last skill ${js}, and you live in ${egy}.`
);
console.log("------------------------------");
