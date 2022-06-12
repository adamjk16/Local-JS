function divideByThree(num) {
    return num / 3;
};

function averageOfTwo(num1, num2) {
    return (num1 + num2) / 2;
};

function averageOfFour(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4;
};

function doubler(nums) {
    return nums.map(function(num) {
      return num * 2;
    });
};

function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
};

function wordWithinArray(word, arr) {
  return arr.indexOf(word) !== -1;
    /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */
    // Your code here
};

function echo(str) {
  return str.toUpperCase() + ' ... ' + str + ' ... ' + str.toLowerCase();
};

function fizzBuzz(max) {
  let result = [];
  for (let i = 0; i < max; i++) {
    result.push(i);
  }

  return result.filter(function(num) {
    return (num % 3 === 0 && num % 5 !== 0) || (num % 3 !== 0 && num % 5 === 0);
  });
    /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
    // Your code here
};

function hello(name) {
  return 'Hello, ' + name;
    /* Takes in a string name and returns a string saying "Hello, " to that name. */
    // Your code here
};

function goodbye(name) {
  return 'Bye, ' + name;
    /* Takes in a string name and returns a string saying "Bye, " to that name. */
    // Your code here
};

function isFive(num) {
  return num === 5;
    /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
    // Your code here
};

function isOdd(num) {
  return num % 2 !== 0;
    /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
    // Your code here
};

function isSubString(searchString, subString) {
  let arr = searchString.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === subString.toLowerCase()) {
      return true;
    }
  }
  return false;
};

function aCounter(word) {
  let count = 0;
  let arr = word.split('');
  arr.forEach(function(char) {
    if (char.toLowerCase() === 'a') {
      count++;
    }
  });
  return count;
    /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

    /*
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */
    // Your code here
};

module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter
}