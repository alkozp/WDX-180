/**
 * 30 Days Of JavaScript: Document Object Model(DOM) Exercise
 * 
 * Complete the challenges found below:
 * 
 * 1. Get the first paragraph by using **_document.querySelector(tagname)_**
 * 2. Get each of the the paragraph using **_document.querySelector('#id')_**
 * 3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_**
 * 4. Set id and class attribute for all the paragraphs using different attribute setting methods
 */

// INSERT YOUR CODE HERE

let result = document.querySelector('p');
console.log('1. Get the first paragraph by using **_document.querySelector(tagname)_**');
console.log(result);

console.log('2. Get each of the the paragraph using **_document.querySelector(#id)_**');
for (let i=1; i<5; i++) {
    const resultEach = document.querySelector('#paragraph'+i);
    console.log(resultEach);
}

const resultAll = document.querySelectorAll('p');
console.log ('3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_**');
console.log(resultAll);
resultAll.forEach((p) => console.log(p));

console.log ('4. Set id and class attribute for all the paragraphs using different attribute setting methods');
resultAll.forEach((p, index) => {
    p.setAttribute('id', 'new-id-'+index);
    p.setAttribute('class', 'best-view')
    //p.class = 'best-view';
    //p.classList.add('class', 'best-view');
});
resultAll.forEach((p) => console.log(p));

