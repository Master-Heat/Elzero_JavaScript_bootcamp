/*====================*/
// *Regular Expressions (RegExp) — Overview
/*====================*/

//* What & Why
//? Regular expressions are patterns for searching/matching text.
//? They replace many nested conditionals when validating or extracting things like:
//? - IP addresses
//? - Phone numbers
//? - URLs
//? - Emails

//* Sample Data
let str1 = "10 20 100 1000 5000";
let str2 = "OS1 OS12 OS123 OS123os os1231Os123";
let invalidEmail = "Osama@@@gmail....commm";
let validEmail = "name@hamo.ali";
let ip = "102.168.1.1"; //? Example IPv4
let url = "elzero.org";
let myString = "Hello Elzero Web School I love elzero";

//* Modifiers (Flags)
//? i => Case-insensitive search
//? g => Global search (return all matches)
//? m => Multiline mode (^ and $ match per line)
//! With 'g', String.match() returns an array of matches only (no groups info).

//* Basic Patterns
let regex = /Elzero/; //? Case-sensitive; finds the first "Elzero" only
let insenstiveRegex = /Elzero/i; //? 'i' => case-insensitive
let globalRegex = /Elzero/g; //? 'g' => find all matches (not just the first)
let MultilinesRegex = /Elzero/m; //? 'm' => ^ and $ work per line (multiline anchors)

//* Matching Examples
console.log(myString.match(regex));
//? Without 'g': returns an array-like result for the first match or null
//* Combining Flags
//? Flags can be combined by appending them together (order doesn’t matter)
let insenstiveGlobalRegex = /Elzero/gi;

console.log(myString.match(insenstiveGlobalRegex));
console.log("-".repeat(25));
//? Same as earlier; demonstrates repeated matching call
//! Notes & Gotchas
//! Variable name typos kept to match original code (e.g., "insenstiveRegex").
//! The 'm' flag does not make '.' match newlines; for that you need the 's' (dotAll) flag in modern JS.

/*====================*/
// *Regular Expressions (RegExp) — Character Ranges
/*====================*/

//* Ranges with OR (Grouping)
let tld = "com net org info code io";
let tldre = /(info|org|io)/g;
//? Matches "info", "org", or "io" explicitly
console.log(tld.match(tldre));
// Output: ["org", "info", "io"]

//* Simple Ranges
let nums = "12345678910";
let numsRe = /[0-2]/g;
//? Matches numbers 0, 1, or 2 anywhere in the string
console.log(nums.match(numsRe));
// Output: ["1", "2"]

//* Negated Ranges (^)
let NotNums = "12345678910";
let NotNumsRe = /[^0-2]/g;
//? Matches all characters EXCEPT 0, 1, and 2
console.log(NotNums.match(NotNumsRe));
// Output: ["3", "4", "5", "6", "7", "8", "9", "1", "0"]

//* Practice: Extract Special Characters
let specialNums = "1!2@3#4$5%6^78910";
let specialNumsRe = /[^0-9]/g;
//? Matches all characters that are NOT digits (special characters only)
console.log(specialNums.match(specialNumsRe));
// Output: ["!", "@", "#", "$", "%", "^"]

//* Practice: Specific Pattern
let practice = "Os1 Os1Os Os2 Os8 OS8Os";
//? Goal: Find words starting with "Os", followed by a number 5–9, and ending with "Os"

// // let practiceRe = /os[5-9]os/gi;
//? (Hint: If you're struggling, here's a deleted answer above 👆)

//! Define the correct `practiceRe` here, then uncomment the line below to test:
// console.log(practice.match(practiceRe));

let hisString = "AaBbcdefG123!234%^&*";

//? return the lowercase letters from a to z
let atozLowerCase = /[a-z]/g;
console.log(hisString.match(atozLowerCase));
//? Output: ["a", "b", "c", "d", "e", "f"]

//? return the NOT-lowercase letters from a to z
let notatozLowerCase = /[^a-z]/g;
console.log(hisString.match(notatozLowerCase));
//? Output: ["A", "B", "G", "1", "2", "3", "!", "2", "3", "4", "%", "^", "&", "*"]

//? (same two examples with UPPERCASE)
let AtoZUpperCase = /[A-Z]/g;
console.log(hisString.match(AtoZUpperCase));
//? Output: ["A", "B", "G"]

let notAtoZUpperCase = /[^A-Z]/g;
console.log(hisString.match(notAtoZUpperCase));
//? Output: ["a", "b", "c", "d", "e", "f", "1", "2", "3", "!", "2", "3", "4", "%", "^", "&", "*"]

//? return just the letters a, c, e
let aceRE = /[ace]/g;
console.log(hisString.match(aceRE));
//? Output: ["a", "c", "e"]

//? return all letters (capital or small)
let letters = /[a-z]/gi;
console.log(hisString.match(letters));
//? Output: ["A", "a", "B", "b", "c", "d", "e", "f", "G"]

//? return just special characters (not letters or digits)
let specials = /[^a-z0-9]/gi;
//? logically this answer is wrong:
// // let specials = /[^a-z^0-9]/gi;
//? Explanation: Inside a character class [...] the leading ^ negates the set.
//? In /[^a-z^0-9]/, the second ^ is treated as a literal caret character.
//? That means the class is “letters a–z, the caret ^, and digits 0–9”, then negated.
//? Result: the caret ^ would NOT be matched, which is incorrect for “specials”.
console.log(hisString.match(specials));
//? Output: ["!", "%", "^", "&", "*"]

//? You can combine multiple ranges/pieces inside one character class as shown above.
console.log("-".repeat(25));
/*====================*/
// *Character Classes in Regular Expressions
/*====================*/

//* What They Do
//? .   => Matches any character except line breaks
//? \w  => Matches any "word" character (letters, digits, underscore) [A-Za-z0-9_]
//? \W  => Matches any non-word character [^A-Za-z0-9_]
//? \d  => Matches any digit [0-9]
//? \D  => Matches any non-digit [^0-9]
//? \s  => Matches any whitespace (spaces, tabs, newlines)
//? \S  => Matches any non-whitespace
//? \b  => Matches at the start OR end of a word boundary
//? \B  => Matches NOT at a word boundary

//* Test Data
let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com O@s.org 1@1.com";

//* Example: Match every single character (except newlines)
let dot = /./g;
console.log(email.match(dot));
//? Output: Returns each character (except newlines) as elements in an array

//* Example: Match only word characters
let word = /\w/g;
console.log(email.match(word));
//? Output: Matches all alphanumeric characters and underscores

//* Example: Match non-word characters
let notWord = /\W/g;
console.log(email.match(notWord));
//? Output: Matches spaces, punctuation, and symbols

//* Example: Validate basic .com or .net emails
let valid = /\w@\w\.(com|net)/g;
console.log(email.match(valid));
//? Output: ["O@g.com", "O@g.net", "1@1.com"]

console.log("-".repeat(25)); //? Separator for console output

//* Word Boundary Example
let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/gi;

console.log(names.match(re));
//? Output: ["Spam", "Spam", "Spam", "Spam", "Spam"]

//* Testing with .test()
console.log(re.test(names));
//? Output: true (pattern found at least once)

console.log(/(\bspam|spam\b)/gi.test("Osama"));
//? Output: false
console.log(/(\bspam|spam\b)/gi.test("1Spam"));
//? Output: true
console.log("-".repeat(25));

/*====================*/
// *Quantifiers in Regular Expressions
/*====================*/

//* Quantifier Basics
//? n+  => One or more of "n"
//? n*  => Zero or more of "n"
//? n?  => Zero or one of "n"

//* Example Data
let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails

//* Example: Match valid emails ending in .com or .net
let mailsRE = /\w+@\w+\.(com|net)/gi;
console.log(mails.match(mailsRE));
//? Output: ["osama@gmail.com", "elzero@gmail.net"]

//* Example: Match all emails (any TLD)
let allMailsRE = /\w+@\w+\.\w+/gi;
console.log(mails.match(allMailsRE));
//? Output: ["o@nn.sa", "osama@gmail.com", "elzero@gmail.net", "osama@mail.ru"]

//* Numbers Example
let numbers = "0110 10 150 05120 0560 350-00"; // Mix of numbers

//* Match numbers starting and ending with 0
let numsRE = /0\d*0/gi;
console.log(numbers.match(numsRE));
//? Output: ["0110", "05120", "0560"]

//* URLs Example
let urls = "https://google.com http://www.website.net web.com"; // Various URLs

//* Explanation of URL pattern:
//? (https?:\/\/)?  => Matches "http://" or "https://" (optional)
//? (www\.)?        => Matches "www." (optional)
//? \w+             => Matches the domain name
//? \.              => Matches a literal dot
//? \w+             => Matches the top-level domain
let UrlsRE = /(https?:\/\/)?(www\.)?\w+\.\w+/gi;
console.log(urls.match(UrlsRE));
//? Output: ["https://google.com", "http://www.website.net", "web.com"]
console.log("-".repeat(25));

//* Serial Matching Examples
let serials = "S100S S3000S S5000S S950000S";

//* Quantifier Range Explanation
//? {n}       => Match exactly n repetitions of the preceding token.
//? {n,m}     => Match between n and m repetitions.
//? {n,}      => Match n or more repetitions (no upper limit).
//? {,m}      => Match 0 up to m repetitions.

//* Match "S" followed by exactly 3 digits, then "S"
//? Expected 1 match: "S100S"
console.log(serials.match(/S\d{3}S/g));
//? Output: ["S100S"]

//* Match "S" followed by 4 or 5 digits, then "S"
//? Expected 2 matches: "S3000S", "S5000S"
console.log(serials.match(/S\d{4,5}S/g));
//? Output: ["S3000S", "S5000S"]

//* Match "S" followed by at least 4 digits, then "S"
//? Expected 3 matches: "S3000S", "S5000S", "S950000S"
console.log(serials.match(/S\d{4,}S/g));
//? Output: ["S3000S", "S5000S", "S950000S"]

console.log("-".repeat(25));

//* Quantifier & Anchor Reference
//? ^  => Matches start of string.
//? $  => Matches end of string.
//? ?= => Positive lookahead (followed by something).
//? ?! => Negative lookahead (not followed by something).

let thisString = "We Love Programming";
let somenames = "10samaZ 2AhmedZ 3Mohammed 4MoustafaZ 5Gamalz";

//* Test if string ends with "ing"
console.log(/ing$/gi.test(thisString));
//? Output: true

//* Test if string starts with "we"
console.log(/^we/gi.test(thisString));
//? Output: true

//* Test if string ends with "lz"
console.log(/lz$/g.test(somenames));
//? Output: false

//* Test if string starts with "2"
console.log(/^2/g.test(somenames));
//? Output: false

//* Test if string starts with a digit
console.log(/^\d/g.test(somenames));
//? Output: true

//* Test if string starts with whitespace
console.log(/^\s/g.test(somenames));
//? Output: false

//* Match numbers followed by 5 word chars, followed by "z"
//? Expected 2 matches: "2Ahmed", "4Moust"
console.log(somenames.match(/\d\w{5}(?=z)/gi));
//? Output: ["2Ahmed", "4Moust"]

//* Match numbers followed by 8 word chars, NOT followed by "z"
//? Expected 1 match: "3Mohammed"
console.log(somenames.match(/\d\w{8}(?!z)/gi));
//? Output: ["3Mohammed"]
console.log("-".repeat(25));
//* Replace vs ReplaceAll Examples
let txt = "We love programming and @ because @ is amazing";

//* Replace only the first match
console.log(txt.replace("@", "JS"));
//? Output: "We love programming and JS because @ is amazing"

//* Replace all matches (string pattern)
console.log(txt.replaceAll("@", "JS"));
//? Output: "We love programming and JS because JS is amazing"

//* Replace all matches (RegExp pattern)
let regularE = /@/gi;
console.log(txt.replaceAll(regularE, "JS"));
//? Output: "We love programming and JS because JS is amazing"

console.log("-".repeat(25));

//* Form Validation Example
//? This code prevents form submission if the phone number does not match the pattern.
//? Pattern: (dddd) ddd-dddd (4 digits in parentheses, space, 3 digits, hyphen, 4 digits)

/* Example valid phone format:
   (1234) 567-8910
*/

document.getElementById("register").onsubmit = function () {
  let PhoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // Matches the required phone format
  let validationResult = phoneRe.test(PhoneInput);

  if (validationResult === false) {
    //? Prevents form submission if validation fails
    return false;
  }
};
