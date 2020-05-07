/*function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}
let factorial = times(1, 1);
let factorial2 = times(factorial, 2);
let factorial3 = times(factorial2, 3);
let factorial4 = times(factorial3, 4);
let factorial5 = times(factorial4, 5);

for (fact = 0;fact <= 5; fact += 1) {
  console.log(`Factorial of ${fact} is ${times(1, fact)}`)
}*/

function times(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }
  return result;
}
console.log(times(0)); 
console.log(times(1));    
console.log(times(2));    
console.log(times(3));     
console.log(times(4));     
console.log(times(5));     
console.log(times(6));     
console.log(times(7));     
console.log(times(8));