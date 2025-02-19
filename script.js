var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9(){
    return "abcdef"
};
var test10 = null;
var test11 = undefined;
var test12 = 0;
console.log("THE MAIN SQUEEZE: ",test10, " ", test11, " ", test12, "NULL IS USUALLY FOR OBJECTS, AND UNDEFINED FOR VARIABLES");
console.log("=====SPACER=====")

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);
console.log("=====SPACER=====")

// Expected output: string, number, boolean, object, object(array), undefined, object, object(array), function
console.log(test9());
console.log(test4, test5, test7,test8);

var header = document.getElementById("header");
if (header == null) {
    console.log("Element not found");
} else { console.log(typeof header, ": This is the header id test");
}

function init() {
    var initElements = document.getElementById("header");
    initElements.innerHTML = "Alert! Alert! Alert! This has been changed to a 'footer' class, and is no longer a 'test' class!";
    initElements.setAttribute("class", "footer");
}
window.onload = init;

// note: null represents and object that is not there. (object)

let x = 0;
let y = 0;
let z = x / y;
console.log(z);

let a = 10;
let b = "cat";
let c = a * b;
console.log(c); // expected output: NaN (not a number)

let d = Math.sqrt(-9);
console.log(d); // expected output: NaN (not a number)

// let e = (z === c); // expected output: false (because z and c are not equal)
// console.log(e); // expected output: false (because z and c are not equal)

// if (z === c) {
// console.log("z is equal to c");
// }

// if (z !== c) {
//     console.log("z is not equal to c");
// }

let e = (z === c); // expected output: false (because z and c are not equal)
    console.log(e); // expected output: false (because z and c are not equal)
if (z === c) {
    console.log("z is equal to c");
} else {
    console.log("z is NOT equal to c (as expected)"); // Added else statement
} 

if (z !== c) {
    console.log("z is not equal to c");
} else {
    console.log("z IS equal to c (unexpected result)"); // Added else statement
}

console.log("<----SPACER---->");

console.log(z, typeof z);

if (isNaN(z)) {
z = 0;
}

console.log(z, typeof z);

let x1 = -10/0;

console.log(x1, typeof x1);

let x2 = null;

console.log(x2, typeof x2);

console.log("<----SPACER---->");

if (99 == "99") { //this is where the magic happens. ==, or ===
    console.log("A number equals a string!");
} else {
    console.log("A number does NOT equal a string!");
    }