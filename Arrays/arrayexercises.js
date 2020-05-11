/*let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

myArray.forEach(function(numbers) {
  if (numbers % 2 === 0) {
    console.log(numbers);
  }
});*/

// exercise 3
/*let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.map(function(numbers) {
  return numbers.map(function(number) {
    if (number % 2 === 0) {
      console.log(number);
    }
  })
});*/

// exercise 4

/*let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
let newArray = myArray.map(function(number) {
  if (number % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});
console.log(newArray);*/

// exercise 5
/*let array = [1, 'a', '1', 3, NaN, 3.145, -4, null, false];

function notIntegers(arrays) {
  return array.filter(integer => Number.isInteger(integer));
}
console.log(notIntegers(array));*/

// exercise 6

/*let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function someLengths(arr) {
  let filteredArray = arr.map((letters) => {
    return letters.length;
  }).filter((numbers) => {
    return numbers % 2 === 1;
  });
  return filteredArray
};

console.log(someLengths(arr));*/

// exercise 7
/*let numbers = [3,5,7];
function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  });
}
console.log(sumOfSquares(numbers));
// If the zero is removed, there is no initial value.  When this happens with reduce method, it will skip the first index.*/

// exercise 8
/*let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddlengths(arr) {
  return arr.reduce((filterNumberArray, letter) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filterNumberArray.push(length);
    }
    return filterNumberArray;
  }, [])
}*/

// exercise 9
/*let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

numbers1.includes(3);
numbers2.includes(3);
numbers3.includes(3);*/

// exercise 10
let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

console.log(arr[1][2]);




