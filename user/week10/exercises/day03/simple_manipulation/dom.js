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

const result = document.body.querySelectorAll('p');

result.forEach((res, index) => {

    //******Set a text content to paragraph the fourth paragraph,Fourth Paragraph */
    if (index === 3)  {
        res.textContent = 'Fourth Paragraph';
    }

    //*********Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family) */
    switch (index) {
        case 0:
            res.style.color = 'blue';
            res.style.background = 'gray';
            res.style.border = '1px solid black'
            res.style.fontSize = '2rem';
            res.style.fontFamily = 'serif'
            break;
        case 1:
            res.style.color = 'white';
            res.style.background = 'black';
            res.style.border = '3px dotted yellow'
            res.style.fontSize = '3rem';
            res.style.fontFamily = 'monospace'
            break;
        case 2:
            res.style.color = 'green';
            res.style.background = 'yellow';
            res.style.border = '4px dashed red'
            res.style.fontSize = '1.5rem';
            res.style.fontFamily = 'sans-serif'
            break;
        case 3:
            res.style.color = 'white';
            res.style.background = 'orange';
            res.style.border = '5px double violet'
            res.style.fontSize = '2.5rem';
            res.style.fontFamily = 'Arial Narrow Bold';
            break;
    }

    //****Select all paragraphs and loop through each element and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color */
    if (index%2 === 0) {
        res.style.color = 'green';
    } else {
        res.style.color = 'red';
    }

    //****Set text content, id and class to each paragraph */
    res.textContent = 'lorem ipsum ' + index;
    res.setAttribute ('id', 'textblock-'+index);
    res.setAttribute ('class', 'best-view');


    //*********Loop through the nodeList and get the text content of each paragraph */
    console.log(res.textContent);
});