'use strict';

/* Mirror

  This program accept string any size 

  Data In:
    any text


  Data Out:
    mirrored and original text separated by symbol "|" 


  Test Cases:

  '' -> ' | '
  'js' -> 'sj | js'
  'javascript' -> 'tpircsavaj | javascript'
  '12345' -> '54321 | 12345'

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
