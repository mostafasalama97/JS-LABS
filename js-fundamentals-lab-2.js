/*
  1. Calculate the average age of the formatted users of the previous lab only for users who
     are less than 40 years old.
     Use the reduce function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/
var average = formattedUsers.reduce(reducerFunc, 0) / formattedUsers.length;
console.log(average);


// Write the implementation of reducerFunc.
//reduce method implementation

Array.prototype.ownReduce = function (callback, intialValue) {
  if (!this.length && intialValue === undefined) {
    throw new TypeError("empty array with no itial value");
  }
  let accumulator = intialValue;
  let index = 0;
  if (intialValue === undefined) {
    accumulator = this[0];
    index = 1;
  }
  for (; index < this.length; index++) {
    accumulator = callback.call(this, accumulator, this[index], index, this);
  }
  return accumulator;
};

var average = formattedUsers.reduce(reducerFunc);

/*
  2. Calculate the number of occurrences of all characters including numbers and white 
     spaces in a string. The string may contain: numbers, upper and lower-case letters and 
     white spaces. 
     Ignore the character case, for example, 'aA' should be counted as 2 occurrences
     of the a character.
*/

// Example input
var input = 'abbflmffchocC19 ieqvh';

/* Output should be exactly like this in the console.
    1 ocurred once
    9 ocurred once
    a ocurred once
    b ocurred twice
    f ocurred 3 times
    l ocurred once
    m ocurred once
    c ocurred 3 times
    h ocurred twice
    o ocurred once
    White space ocurred once
    i ocurred once
    e ocurred once
    q ocurred once
    v ocurred once
*/


//count occurence of character only
// function getCount(string) {
//   const c = {};
//   for (let i in string) {
//     c[string[i]] = (c[string[i]] || 0) + 1
//     return c;
//   }
// }

// console.log(getCount("hello world"));


// let getCount = str => {
//   let arr = [];
//   for (const i = 0; i < str.length; i++) {
//     if (arr[str[i]] === undefined) {
//       arr[str[i]] = 1;
//     } else {
//       arr[str[i]]++;
//     }
//     for (const j in arr) {
//       if (key === " ") {
//         console.log("white space ocurred ", arr[key], " time");
//       }
//       else
//         console.log(key, " ocurred ", arr[key], " time");
//     }
//   }
// }
function countOcc(string) {
  var charCount = {};
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    char = char.toLowerCase();
    //if (!isNaN(char) || char === ' ') 
    if (char === ' ') {
      char = 'White space'
      //char = isNaN(char) ? 'White space' : 'Number';
      if (char in charCount) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    } else {
      if (char in charCount) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  }
  //console.log(charCount[char]); 
  for (var char in charCount) {
    if (charCount[char] === 1) {
      console.log(char + ' occurred ' + charCount[char] + ' onec');
    }
    if (charCount[char] === 2) {
      console.log(char + ' occurred ' + charCount[char] + ' twice');
    }
    if (charCount[char] >= 3) {
      console.log(char + ' occurred ' + charCount[char] + ' times');
    }
  }
}
countOcc('abbflmffchocC19 ieqvh');