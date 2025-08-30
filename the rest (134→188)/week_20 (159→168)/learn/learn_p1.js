//*--------------*//
//* date and time
//*--------------*//

//* date constructor
//* static methods
//* Date.now()

//? To track time you need a starting point (the Unix epoch: 1970-01-01T00:00:00Z). See: https://en.wikipedia.org/wiki/Unix_time
//? Year 2038 problem: On systems that store Unix time as a signed 32-bit integer (seconds) the value overflows on 2038-01-19; legacy/embedded systems are most affected.

//? Create a Date object for the current moment (local time)
let dateNow = new Date();

//? Log the Date object (human-readable representation)
console.log(dateNow);

//? Date.now() => current timestamp in milliseconds since the Unix epoch
console.log(Date.now()); //? the time from January 1, 1970 up to now in milliseconds

console.log("-".repeat(25));

//*------------------*//
//* Get Date And Time
//*------------------*//

//? Create a Date instance from a date string
let birthdayOfJiff = new Date("January 12, 1964");

//? Subtracting two Date objects returns the difference in milliseconds (number)
let dateDiff = dateNow - birthdayOfJiff;

//? Log raw millisecond difference
console.log(dateDiff);

//? Convert milliseconds to approximate years: ms / 1000 / 60 / 60 / 24 / 365
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log("-".repeat(25));

//? getTime() => time value in milliseconds for this Date instance
console.log(dateNow.getTime());

//? getDate() => day of the month (1..31)
console.log(dateNow.getDate());

//? getFullYear() => four-digit year (e.g., 2025)
console.log(dateNow.getFullYear());

//? getMonth() => month index (0 = January, 11 = December)
//? BE CAREFUL: months are zero-based when using getMonth()/setMonth().
console.log(dateNow.getMonth());

//? getDay() => weekday index (0 = Sunday .. 6 = Saturday)
//? BE CAREFUL: weekday index starts at 0 (Sunday).
console.log(dateNow.getDay());

//? getHours() => hour of day (0..23)
//? BE CAREFUL: hours start at 0 (midnight) up to 23.
console.log(dateNow.getHours());

//? getMinutes() => minutes (0..59)
//? BE CAREFUL: minutes start at 0.
console.log(dateNow.getMinutes());

//? getSeconds() => seconds (0..59)
//? BE CAREFUL: seconds start at 0.
console.log(dateNow.getSeconds());

console.log("-".repeat(25));

//*------------------*//
//* Set Date And Time
//*------------------*//

//? Create a Date instance to modify
let aDate = new Date();

//? Log the freshly created Date
console.log(aDate);

console.log("-".repeat(25));

//? setTime(ms) => set the Date to the given milliseconds since epoch (ms can be negative for dates before 1970)
aDate.setTime(0);
console.log(aDate);

console.log("-".repeat(25));

//? setTime(10000) => set Date to epoch + 10 seconds (10000 ms)
aDate.setTime(10000);
console.log(aDate);

console.log("-".repeat(25));

//? setDate(day) => set day of the month; accepts out-of-range values and auto-rolls months/years
//? Example: setDate(10) sets the day-of-month to 10
dateNow.setDate(10);
console.log(dateNow);

console.log("-".repeat(25));

//! Note: setDate(0) sets the date to the last day of the previous month (zero/negative roll-back behavior)
dateNow.setDate(0);
console.log(dateNow);

console.log("-".repeat(25));

//? setFullYear(year, monthOptional[0-11], dayOptional[1-31])
//? Defaults when optional args are omitted: the Date object's existing month and day are preserved.
//? BE CAREFUL: months are zero-based when passed as the second argument.
//? Example below sets year to 2018, month index 5 => June, day 6
dateNow.setFullYear(2018, 5, 6);
console.log(dateNow);

console.log("-".repeat(25));

//? setMonth(monthIndex[0-11], dayOptional[1-31]) => months are zero-based and out-of-range values roll the date
//? BE CAREFUL: months are zero-based.
let ex = new Date("2020-01-31");
//? Example initial: 2020-01-31
ex.setMonth(1); //? Attempt to set to February (1). February 2020 has 29 days so day 31 -> rolls to March 2
console.log(ex);

console.log("-".repeat(25));

//? setHours(hours[0-23], minutesOptional[0-59], secondsOptional[0-59], msOptional[0-999])
//? BE CAREFUL: hours start at 0 (midnight)
ex.setHours(5, 10, 30, 250);
console.log(ex);

console.log("-".repeat(25));

//? setMinutes(minutes[0-59], secondsOptional[0-59], msOptional[0-999])
//? BE CAREFUL: minutes start at 0
ex.setMinutes(59, 59, 999);
console.log(ex);

console.log("-".repeat(25));

//? setSeconds(seconds[0-59], msOptional[0-999])
//? BE CAREFUL: seconds start at 0
ex.setSeconds(30, 0);
console.log(ex);

console.log("-".repeat(25));

//*-------------------------*//
//* Formatting Date And Time
//*-------------------------*//

//? Date.parse("String") => parse a date string and return a timestamp (ms since Unix epoch)
console.log(Date.parse("Oct 25,1982"));

//? new Date(timestamp) => create a Date from milliseconds since epoch
let date1 = new Date(0);
console.log(date1);
console.log("-".repeat(25));

//? The number printed above (Date.parse) is the ms value for the given date; new Date(ms) converts it to a Date object
//* new Date(timestamp)
let date2 = new Date(909266400000);
console.log(date2);
console.log("-".repeat(25));

//* new Date(Date String)
//? NOTE: Prefer ISO 8601 ("YYYY-MM-DD" or full "YYYY-MM-DDTHH:mm:ss.sssZ") for reliable cross-platform parsing.

//? Slash format (MM/DD/YYYY) — commonly used in US; may be interpreted differently in other locales/engines.
let date3v1 = new Date("10/25/1982");
console.log(date3v1);

//? Dash format (MM-DD-YYYY) — often accepted but ambiguous; ISO uses YYYY-MM-DD (recommended).
let date3v2 = new Date("10-25-1982");
console.log(date3v2);

//? Space-separated format — implementation-dependent parsing; avoid when possible.
let date3v3 = new Date("10 25 1982");
console.log(date3v3);

//? Custom separators (e.g., "10#25#1982") might parse in some engines but are non-standard and unreliable.
let date3v4 = new Date("10#25#1982");
console.log(date3v4);
console.log("-".repeat(25));

//? "YYYY-MM-DD" => ISO International Standard — strongly recommended for cross-browser consistency
let date4 = new Date("1982-10-25");
console.log(date4);
console.log("-".repeat(25));

//? You can omit lower-order fields in some string parsers, but behavior is engine-dependent
let date5 = new Date("1982-10");
console.log(date5);
console.log("-".repeat(25));

let date6 = new Date("1982");
console.log(date6);
console.log("-".repeat(25));

//? Two-digit year strings (e.g., "82") are ambiguous and rely on engine heuristics — avoid them
let date7 = new Date("82");
console.log(date7);
console.log("-".repeat(25));

//? NOTE: Two different behaviors to be aware of:
//? 1) Numeric Date constructor (new Date(y, m, d, ...)) follows the specification: year values 0..99 map to 1900..1999.
//?    Example: new Date(82, 9, 25) => year 1982.
//? 2) Parsing two-digit years from *date strings* is implementation-dependent. Many engines (e.g., Chromium) treat two-digit years
//?    in non-ISO strings as: 0..49 => 2000..2049 and 50..99 => 1950..1999. Because of these inconsistencies, always prefer ISO strings or full 4-digit years.

//* new Date(Numeric Values)
//? new Date(year, monthIndex, day, hours, minutes, seconds)
//? BE CAREFUL: monthIndex is zero-based: 0 = January, 9 = October.
let date8 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date8);
console.log("-".repeat(25));

//? You can omit time components when constructing with numeric args; missing values default to 1 for day and 0 for time fields
let date9 = new Date(1982, 9, 25);
console.log(date9);
console.log("-".repeat(25));

//? ISO date-time with timezone: "YYYY-MM-DDTHH:mm:ssZ" (T separator, Z = UTC)
//? When you include a timezone (Z or ±hh:mm), the printed result will reflect local timezone conversion
let date10 = new Date("1982-10-25T06:10:00Z");
console.log(date10);
console.log("-".repeat(25));

//*-------------------------*//
//* Tracking Operations Time
//*-------------------------*//

//? This demonstrates two ways to measure how long an operation takes.
//? Method A: Using Date (millisecond precision, simple)
//? Method B: Using Performance API (high-resolution, preferred in browsers)

//? start Time (Date-based)
let start = new Date();

//? operation (uncomment one of the examples below to test in a browser environment)
// for (let i = 0; i < 100000; i++) {
//   document.write(`<div>${i}</div>`);
//   //? alternative DOM creation (equivalent behavior but different performance characteristics)
// let div = document.createElement("div");
// div.append(document.createTextNode(i));
// document.body.appendChild(div);
// }

//? time End (Date-based)
let end = new Date();

//? operation duration in milliseconds (Date-based)
let duration = end - start; //? Output: number of milliseconds elapsed (integer)
console.log(duration);

//? High-resolution timing (recommended in browsers)
//? performance.now() returns a DOMHighResTimeStamp in milliseconds with sub-millisecond precision (floating point)
if (typeof performance !== "undefined" && performance.now) {
  //? start high-res
  let pStart = performance.now();

  //? example operation to measure (synchronous CPU task)
  for (let i = 0; i < 100000; i++) {
    // tiny work
    Math.sqrt(i);
  }

  //? end high-res
  let pEnd = performance.now();
  //? duration with sub-millisecond precision
  console.log(pEnd - pStart); //? Output: e.g. 5.123 (milliseconds)

  //? performance.mark() and performance.measure() allow named marks and measures
  performance.clearMarks();
  performance.clearMeasures();
  performance.mark("my-start");

  //? do measured work
  for (let i = 0; i < 50000; i++) Math.sqrt(i);

  performance.mark("my-end");
  performance.measure("my-measure", "my-start", "my-end");

  //? read the measure entry
  const measures = performance.getEntriesByName("my-measure");
  console.log(measures); //? Output: Array of PerformanceMeasure objects containing duration
}
