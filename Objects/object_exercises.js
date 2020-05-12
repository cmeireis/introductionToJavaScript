// exercise 1
/*let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

console.log(person.name);*/

// exercise 3

/*let myArray = {
  0: 'apple',
  1: 'orange',
  2: 'banana',
  length: 3
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
};*/

// exercise 4

/*let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newArrays = Object.keys(obj).map((keys) => keys.toUpperCase());
console.log(newArrays);
console.log(obj);*/

// exercise 5
/*let myProtoObj = {
  foo: 1,
  bar: 2,
  qux: 3, // added this for exercise 6 was added by using myProtoObj.qux = 3;
};
let newObj = Object.create(myProtoObj);*/

// exercise 6
// The two code snippets produce the same results which is the keys from the object.  They both iterate through the objects keys.

// exercise 7
/*function copyObj (objCopy, keyArray) {
  let destObj = {};
  if (keyArray) {
    keyArray.forEach(function(keyArray){
      destObj[keyArray] = objCopy[keyArray];
      
    });
    return destObj;
  } else {
    return Object.assign(destObj, objCopy);
  }
}*/

// exercise 8
// Foo is an object which is mutable, and logs out 'hi'.  Qux is not changed as it is not mutable.  Qux logs out value of 'hello'.  Strings and other primitives are not mutable.


