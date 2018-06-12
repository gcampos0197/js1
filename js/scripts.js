
// On your takehome-day5 branch write a program that uses functions to:

// 1. Take a number and return the square of that number (power of 2).
// 2. If a non-number argument is passed into the function, alert NaN and prompt for another response

let answer = squareNumber(parseInt(prompt('what do you want to square?')));

function squareNumber(number) {
  if(!isNaN(number)) {
    return number * number;
  } else {
    let answer = squareNumber(parseInt(prompt('That wasnt a number, give me a number to square?')));
    alert(answer);
  }
};

alert(answer);


// 3. In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period

function parseString(string){
  let parsedLetter = string.charAt(0).toUpperCase();
  let stringArr = string.split('');
  stringArr.splice(0, 1, parsedLetter);
  stringArr.join(''); //joins array back into a string
  string = stringArr.join(''); //replaces first letter with the new uppercase letters
  if(string.charAt(string.length - 1) !== '.') string = string + '.'; //if the character that is at the last index of this string does not have a "." + '.'
  return string; //returns transformed string
}

let answer = parseString(prompt('Type in a word.', 'chips'));
alert(answer);


// function capitalCase(string) {
//   let words = string.split(' '); //Creates an array of the words in the string.
//   let returnArr = [];
//   words.forEach(word => { //loop over the words in the array
//     let letters = word.split(''); //split the word into its letters
//     let capped = letters[0].toUpperCase(); //capitalize the first letter of the word.
//     letters.splice(0, 1, capped); //Replace the old lower cased letter with the new uppercased one.
//     returnArr.push(letters.join('')); //Push our new word into the array to be returned.
//   });
//   if (userString.endsWith('.')){
//     return returnArr.join(''); //Return the newly created string.
//   } else{
//       returnArr.push('.');
//       return returnArr.join(' '); //Return the newly created string.
//     }
// };
//
// let userString = prompt('Give me a word.', 'car')
// let newString = capitalCase(userString);
//
// alert(newString);


// 4. Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.

function reverseHalves(string) {
  let halfIndex = string.length / 2;
  let firstHalf = string.substring(0, halfIndex); //divides string in half
  let secondHalf = string.substring(halfIndex, string.length);
  alert(`${secondHalf}${firstHalf}`);
}

reverseHalves(prompt("Give me a sentence.", "Hello World!"))


// / 5. BONUS: If you are bored by all that, write a function that checks if a given string is a palindrome.

function isPalindrome(string) {
  let reversed = string.split('').reverse().join('') //have to turn strig into an array in order to reverse it then rejoin it. This is chaining methods. In order to chain methods the previousn method must return an outcome that the next chain can accept, example: reverse only owrks on arrays so you have to split the string to turn it into an array.
  return string === reversed ? true: false; //if true functions stops immediatly after the return statement
}
