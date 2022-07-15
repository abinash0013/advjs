// // // add number using rest operator

// function addNumbers(a, b, c, ...others) {
//     console.log(others);
//     // return a + b + c;
//     // result sumof(others)
// }
// const result = addNumbers(1, 2, 3, 4, 5);
// console.log(result);

// spread operator
var names = ["Abinash", "kartik", "Alok", "Sanjay"];
function getNames(n1, n2, n3, n4) {
    console.log(n1, n2, n3, n4);
}
getNames(names[0], names[1], names[2]);
getNames(...names);
