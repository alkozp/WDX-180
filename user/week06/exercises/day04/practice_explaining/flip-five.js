'use strict';

/* Flip Five
    This program accept text with 5 characters and show it mirrored

  Data In:
    Any text with length 5 symbols


  Data Out:
    Show message with mirrored text string


  Test Cases:

  '' -> 'nope, try again.'
  '12345' -> '54321'
  'JavaS' -> 'SavaJ'
  'JavaScript' -> 'nope, try again.'


*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = '';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);
