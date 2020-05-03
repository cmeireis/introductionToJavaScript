function multi(num1, num2) {
    return num1 * num2;
};

function getnum(prompt) {
  let rlsync = require('readline-sync');
  return parseFloat(rlsync.question(prompt));
}

let num1 = getnum('Enter first number: ');
let num2 = getnum('Enter second number: ');
console.log(`${num1} times ${num2} equals ${multi(num1, num2)}`);