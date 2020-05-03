function greeting(prompt) {
  let rlsync = require('readline-sync');
  let name = rlsync.question(prompt);
  return name;
};

let firstName = greeting('What is your first name?');
let lastName = greeting('What is your last name?');
console.log(`Hello, ${firstName} ${lastName}`);

