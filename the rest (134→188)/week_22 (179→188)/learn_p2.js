//*-------------------*//
//*Async And Trainings
//*-------------------*//
//? Async Before function mean this function return a Promise
//? Async and await help in creating asynchronous promise behavior with cleaner style

//* small example to remember how promises work
//? you can remove or add users to test the promises/functions in users array
// function getDate() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users found");
//     } else {
//       rej("No user found");
//     }
//   });
// }
// getDate().then(
//   (resVals) => console.log(resVals),
//   (rejVals) => console.log("Rejected " + rejVals)
// );
//* another new way of dealing with promises
// function getDate() {
//   let users = [];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No user found");
//   }
// }

// getDate().then(
//   (resVals) => console.log(resVals),
//   (rejVals) => console.log("Rejected " + rejVals)
// );
//* just function exaple not promise
// async function getDate() {
//   let users = ["Abbas"];
//   if (users.length > 0) {
//     return "Users Found";
//   } else {
//     throw new Error( "No user found");
//   }
// }
// console.log(getDate());

//*async promise example
// async function getDate() {
//   let users = ["Abbas"];
//   if (users.length > 0) {
//     return "Users Found";
//   } else {
//     throw new Error("No user found");
//   }
// }
// console.log(getDate());

// getDate().then(
//   (resVals) => console.log(resVals),
//   (rejVals) => console.log("Rejected " + rejVals)
// );
//! the previous example do the behaviour of a promise not identical as a promise

//*-------------------*//
//*Await And Trainings
//*-------------------*//
//? Await works only inside Async function
//? Await make JavaScript wait for the promise result
//? Await is more elegant syntax of getting promise result

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I'm a good promise");
//   }, 3000);
// });
// function readDate() {
//   console.log("Before promise");
//   myPromise.then((resVals) => console.log(resVals));
//   console.log("After promise");
// }
// readDate();

//*the output
//?Before promise
//? After promise
//? I'm a good promise
//? whitch not what we want

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I'm a good promise");
//     //? you can test it with rejecte
//     // reject(Error("I'm the Bad promise"));
//   }, 3000);
// });
// async function readDate() {
//   console.log("Before promise");
//   //   myPromise.then((resVals) => console.log(resVals));
//   console.log(await myPromise);
//   //? you can test it with dealing with rejected values
//   // console.log(await myPromise.catch((err)=>err));

//   console.log("After promise");
// }
// readDate();
//*the output
//? Before promise
//? I'm a good promise
//? After promise
//? => this is what we want

//*------------------------------*//
//*Try, Catch, Finally With Fetch
//*------------------------------*//

async function fetchData() {
  console.log("Before Fetch");
  try {
    let myDate = await fetch(
      "https://api.github.com/users/elzerowebschool/repos"
    );
    console.log(await myDate.json());
  } catch (reason) {
    console.log("Reason: " + reason);
  } finally {
    console.log("After Fetch");
  }
}
fetchData();
