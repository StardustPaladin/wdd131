// Constants and Variables
const PI = 3.14;
let radius = 3;

console.log("PI:", PI);
console.log("radius:", radius);

// Type Coercion
const one = 1;
const two = '2';

console.log("one:", one);
console.log("two:", two);
console.log("one + two:", one + two); // demonstrates type coercion
console.log("typeof one:", typeof one);
console.log("typeof two:", typeof two);

// Global and Block Scope
let course = "CSE131"; // global scope
if (true) {
    let student = "John";
    console.log("Inside block - course:", course);  // works just fine, course is global
    console.log("Inside block - student:", student); // works just fine, it's being accessed within the block
}
console.log("Outside block - course:", course); // works fine, course is global
// console.log("Outside block - student:", student); // does not work, can't access a block variable outside the block
