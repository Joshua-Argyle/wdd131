const myApples = 4;
const friendApples = 2;
let total = myApples + friendApples;

document.getElementById("myAppleElement").textContent = myApples;
document.getElementById("friendAppleElement").textContent = friendApples;
document.getElementById("totalApplesElement").textContent = total;

const one = 1;
const two = "2"; 

let result = one * two; //JS will help interpret my string 2 to a number and multiply them.//
//let result = one + two would concatenate these two numbers, making 12, not 3//
//let result = one + number(two) would convert the string 2 to a number 2, giving 3 as the answer.//
console.log(result);