function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}
let factorial = times(1, 1);
let factorial2 = times(factorial, 2);
let factorial3 = times(factorial2, 3);
let factorial4 = times(factorial3, 4);
let factorial5 = times(factorial4, 5);
