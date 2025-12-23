// find length of string
let string = "HELLO WORLD";
console.log(string.length);

// find character at specific index position
string = "test";
console.log(string.charAt(1)); // this should print "e"

// find character code(UTF-16) of index position
console.log(string.charCodeAt(1)); // character code for "e" will be shown

// find 4th letter in the string using newer at method
let name = "yash";
console.log(name.at(0));

// extract particular text with slice
name = "Yash Patel"; 
console.log(name.slice(0, 4)); // it will print first name
console.log(name.slice(5, 10)); // it wil print last name
console.log(name.slice(-5)); // again last name

// convert string to uppercase
let uppr = name.toUpperCase();
console.log(uppr);

// convert string to lowercase
let lowr = name.toLowerCase();
console.log(lowr);

// remove whitespaces from a string
let whiteSpaces = "   Hello World!   ";
console.log(whiteSpaces.trim());

// remove whitespaces from starting only
console.log(whiteSpaces.trimStart());

// remove whitespaces from ending only
console.log(whiteSpaces.trimEnd());

// padding method works only on string. to pad a number, convert it to string first
// example
let testNum = 1;
let strNum = testNum.toString();

// add padding at start
let pad = "97";
console.log(pad.padStart(5,"0")); // it will add zeroes before 97 and make string length 5

// add padding at start but with x
console.log(pad.padStart(5, "x")); // it will add x before 97 and make string length 5


// padEnd is similiar to padStart, just adds padding after string
console.log(pad.padEnd(5, "0"));
console.log(pad.padEnd(5, "x"));

// repeating a string
console.log(pad.repeat(5)); // 97 will be repeated 5 times

// replacing string with another string
// this method only works on first match
let wrongStr = "I am batman";
let wrongStrNew = wrongStr.replace("batman", "ironman"); // this method is case sensitive
console.log(wrongStrNew);

// replace with case insensitivity flag ( /i )
let wrongStrIns = wrongStr.replace(/BATMAN/i, "ironman");
console.log(wrongStrIns);
// replacing all matches
// use the global match flag ( /g )
let str1 = "This is Sparta, This is Sparta";
let str2 = str1.replace(/Sparta/g, "Z City");
console.log(str2);

// replace all method replaces all instaces
str1 = "I love pizza pizza pizza";
str2 = str1.replaceAll("pizza", "sandiwch");
console.log(str2);

// converting string to array
// str.split(",") splits with commas
// str.split(" ") splits with spaces
// str.split("|") splits with pipes
let splitComma = str1.split(",");
console.log(splitComma);

let splitSpace = str1.split(" ");
console.log(splitSpace);

let splitPipe = str1.split("|");
console.log(splitPipe);

let splitBasic = str1.split(""); // splits everything in individual letters
console.log(splitBasic);
