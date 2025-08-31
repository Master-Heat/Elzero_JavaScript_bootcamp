//*---------------------------------*//
//*Callback Hell Or Pyramid Of Doom
//*---------------------------------*//
//* What Is Callback
//? A-Function That Is Passed Into Another One As An Argument To Be Executed Later
//? Example Function To Handle Photos
//? [1] Download Photo From URL
//? [2] Resize Photo
//? [3] Add Logo To The Photo
//? [4] Show The Photo In-Website

function makeItRed(e) {
  e.target.style.color = "red";
}
let p = document.querySelector(".test");
//? this is how we used call back function in eventlistener
p.addEventListener("click", makeItRed);
//? another example with setTimeout
// setTimeout(function iamACallback() {
//   console.log("I'm a Call back Function");
// }, 2000);
//? another example with setTimeout this small snip from call back hell
// setTimeout(() => {
//   console.log("Download Photo From URL");
//   setTimeout(() => {
//     console.log("Resize Photo");
//     setTimeout(() => {
//       console.log("Add Logo to The Photo");
//       setTimeout(() => {
//         console.log("Show The Photo In-Website");
//         console.log("-".repeat(25));
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

//*-------------------------*//
//*Promise Intro And Syntax
//*-------------------------*//
//? Promise In JavaScript Is Like Promise In Real Life
//? Promise Is Something That Will Happen In The Future
//? Promise Avoid Callback Hell
//? Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

//* Promise Status
//? Pending: Initial State
//? --- Fulfilled: Completed Successfully
//? --- Rejected: Failed

//* Story
//? Once A Promise Has Been Called, It Will Start In A Pending State
//? The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
//? Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

//? Then
//? ----Takes 2 Optional Arguments [Callback For Success Or Failure]
//? promist = new promise (executor(resolve: (value: any) => void, reject: (reason?: any) => void): void)

//? in this example the state will be always pending because the promise is async
// const myPromise = new Promise(function (resolveFuction, RejectFuction) {
//   let connect = true;
//   if (connect) {
//     resolveFuction("Connection Established");
//   } else {
//     RejectFuction(Error("Connection falid"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`bad ${rejectValue}`)
// );
// console.log(myPromise);

//? now we can see the state
const thePromise = new Promise(function (resolveFuction, RejectFuction) {
  let connect = true;
  if (connect) {
    resolveFuction("Connection Established");
  } else {
    RejectFuction(Error("Connection falid"));
  }
});
console.log(thePromise);

thePromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`bad ${rejectValue}`)
);
//? you can use more than one then
//*---------------------------------*//
//*Promise – Then, Catch And Finally
//*---------------------------------*//
//? Promise Training
//? We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
//? .then(We Will Choose Two People)
//? .then(We Will Test Them Then Get One Of Them)
//? .catch(No One Came)

//? Then => Promise Is Successfull Use The Resolved Data
//? Catch => Promise Is Failed, Catch The Error
//? Finally => Promise Successfull Or Failed Finally Do Something
const aPromise = new Promise(function (resolveFuction, RejectFuction) {
  let employees = ["Osama", "Ahmed", "Ali", "Mahmoud"];
  //let employees = [];
  //   if (employees.length === 4) {
  //     resolveFuction(employees);
  //   } else RejectFuction(Error("Numbres of employes is not 4"));
  // });
  // aPromise.then((resolveValue) => {
  //   resolveValue.length = 2;
  //   return resolveValue;
  // });
  // aPromise.then((resolveValue) => {
  //   resolveValue.length = 1;
  //   return resolveValue;
  // });
  // aPromise.then((resolveValue) => {
  //   console.log(`The choosen employee is ${resolveValue}`);
  // });
  //? if them are chained it will be one error but in the previous example there will be more than one error(as many then not resulved)
  if (employees.length === 4) {
    resolveFuction(employees);
  } else RejectFuction(Error("Numbres of employes is not 4"));
})
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`The choosen employee is ${resolveValue}`);
  })
  .catch((rejectedReason) => console.log(rejectedReason))
  //? finally The callback to execute when the Promise is settled (fulfilled or rejected).
  .finally(console.log("The operation is done"));

//*---------------*//
//*Promise And XHR
//*---------------*//
const getDate = function (apiLink) {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data found"));
      }
    };
    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};
getDate("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej));
// let jsData = JSON.parse(this.responseText);
// for (let i = 0; i < jsData.length; i++) {
//   let div = document.createElement("div");
//   let repoName = document.createTextNode(jsData[i].name);
//   div.appendChild(repoName);
//   document.body.appendChild(div);
// }

//*----------*//
//*Fetch API
//*----------*//
//? this is the same example of the previous Promise and XHR exaple but using fetch API
fetch("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    //? the entire respose
    // console.log(result);
    //? the promise that contain the date

    let myDate = result.json();
    // console.log(myDate);
    return myDate;

    //? you can change the name for each then
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((myDate) => {
    console.log(myDate[0].name);
  });

// const getDate = function (apiLink) {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data found"));
//       }
//     };
//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };
// getDate("https://api.github.com/users/elzerowebschool/repos")
// .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result[0].name))
//   .catch((rej) => console.log(rej));

//*------------------------------------*//
//*Promise – All, All Settled And Race
//*------------------------------------*//
const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("I'm the first promise");
  }, 5000);
});
const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("I'm the second promise");
  }, 1000);
});
const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("I'm the third promise");
  }, 2000);
});
const myFourthPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("I'm the fourth promise");
    //? here you can change the time
  }, 2000);
});
//? all(values: readonly unknown[] | []): Promise<[] | unknown[]>
//? it get array of promises and return the resolved value of the promises inside it
Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedVales) => console.log(resolvedVales)
);

//? if only them rejected it returen just firs reject  it found
Promise.all([
  myFirstPromise,
  mySecondPromise,
  myThirdPromise,
  myFourthPromise,
]).then(
  (resolvedVales) => console.log(resolvedVales),
  (rejectedValues) => console.log(`Rejected: ${rejectedValues}`)
);
//? All Settled it return all promises even rejected ones
Promise.allSettled([
  myFirstPromise,
  mySecondPromise,
  myThirdPromise,
  myFourthPromise,
]).then(
  (resolvedVales) => console.log(resolvedVales),
  (rejectedValues) => console.log(`Rejected: ${rejectedValues}`)
);
//? race it return first one appear Whether it resolved or  rejected
Promise.race([
  myFirstPromise,
  mySecondPromise,
  myThirdPromise,
  myFourthPromise,
]).then(
  (resolvedVales) => console.log(resolvedVales),
  (rejectedValues) => console.log(`Rejected: ${rejectedValues}`)
);
//? you can reduce the time needed in the fourth promise to test rejected race
