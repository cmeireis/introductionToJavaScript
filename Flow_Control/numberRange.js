function numberRange(number) {
    if (number >= 0 && number <= 50) {
      return console.log(`${number} is between 0 and 50`);
    } else if (number >= 51 && number <= 100) {
        return console.log(`${number} is between 51 and 100`);
    } else if (number > 100) {
        return console.log(`${number} is greater than 100`);
    } else {
        return console.log(`${number} is less than 0`);
    }
  }

  numberRange(-25);