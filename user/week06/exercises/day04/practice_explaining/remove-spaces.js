'use strict';

/* Remove Spaces
    This program remove all spaces from entered text

  Data In:
    Any text with any size


  Data Out:
    Show message with entered text without spaces

  Test Cases:
    '' -> ''
    '12345' -> '12345'
    '1 2 3 4 5' -> '12345'
    'Java Script' -> 'JavaScript'

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text, all the spaces will be removed');
  console.log(input);
}

/* --- create new data with no spaces --- */

let spaceless = '';
for (let character of input) {
  if (character !== ' ') {
    spaceless = spaceless + character;
    console.log(spaceless);
  }
}

/* --- create a final message --- */

let message = 'before: ' + input + '\nafter: ' + spaceless;
console.log(message);

/* --- display message to the user --- */

alert(message);
