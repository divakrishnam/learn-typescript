"use strict";
// function basic
function getName() {
    return "My name is, Diva";
}
function getAge() {
    return 35;
}
function printName() {
    console.log("Print Name");
}
printName();
// arguments types
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(3, 4));
const Add = (val1, val2) => {
    return val1 * val2;
};
// default parameter
const fullName = (first, last = "Krishna") => {
    return first + " " + last;
};
console.log(fullName("Diva"));
console.log(fullName("Diva", "Murti"));
// optional parameter
const getUmur = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(getUmur("a", "b"));
console.log(getUmur("a"));
