const PI = 3.14;
let radius = 3;

console.log("PI:", PI);
console.log("radius:", radius);

const one = 1;
const two = '2';

console.log("one:", one);
console.log("two:", two);
console.log("one + two:", one + two); 
console.log("typeof one:", typeof one);
console.log("typeof two:", typeof two);

let course = "CSE131";
if (true) {
    let student = "John";
    console.log("Inside block - course:", course);  
    console.log("Inside block - student:", student); 
}
console.log("Outside block - course:",course); 

const selectElem = document.getElementById('webdevlist');
const output = document.getElementById('output');

selectElem.addEventListener('change', function () {
    const codeValue = selectElem.value;

    if (codeValue === 'html') {
        output.textContent = 'HTML defines the structure and content of a web page.';
    } else if (codeValue === 'css') {
        output.textContent = 'CSS controls the layout, colors, and visual design of a page.';
    } else if (codeValue === 'js') {
        output.textContent = 'JavaScript adds interactivity and dynamic behavior.';
    } else {
        output.textContent = '';
    }
});

