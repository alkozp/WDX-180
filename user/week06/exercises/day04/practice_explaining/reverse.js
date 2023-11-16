'use strict';

/* Reverse
    This program show text in reverse order

  Data In:
    Any text with any length


  Data Out:
    Show message with original and reversed text


  Test Cases:
    
  '' -> ''
  '12345' -> '54321'
  'Java Script' -> 'tpircS avaJ'


*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to reverse');
  console.log(input);
}

/* --- reverse the input text --- */

let reversed = '';
for (let character of input) {
  reversed = character + reversed;
  console.log(reversed);
}

/* --- create a final message --- */

let message = input + ' -> ' + reversed;
console.log(message);

/* --- display message to the user --- */

alert(message);
