
function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    return console.log('Error: This number is not an integer');
  }
if (number % 2 == 0) {
  console.log('Your number is even.');
} else {
  console.log('Your number is odd');
}};

evenOrOdd(2.5);