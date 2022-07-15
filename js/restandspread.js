// // add number using rest operator

function addNumbers(a, b, c, ...others) {
    console.log(others);
    // return a + b + c;
    // result sumof(others)
}
const result = addNumbers(1, 2, 3, 4, 5);
console.log(result);
