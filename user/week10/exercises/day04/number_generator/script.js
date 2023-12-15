// INSERT YOUR CODE HERE
const quantityDivs = 102;

/** A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers. */
const checkPrimeNumber = (num) => {
    let isPrime = true;
    if (num < 2) {
        isPrime = false;
    }
    for (let i = num-1; i > 1; i--) {
        if (num%i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}


//style body
document.body.style.width = '600px';
document.body.style.margin = '0 auto';
document.body.style.textAlign = 'center';
document.body.style.fontFamily = 'sans-serif';
//get wrapper div
const wrapperDiv = document.body.querySelector('.wrapper');
const divLength = 100/6;
wrapperDiv.style.marginBottom = '1rem';
wrapperDiv.style.display = 'grid';
wrapperDiv.style.gridTemplateColumns = `${divLength}% ${divLength}% ${divLength}% ${divLength}% ${divLength}% ${divLength}%`;
//wrapperDiv.style.gridTemplateColumns = 'auto auto auto auto auto auto';

//add inner divs
for (let i=0; i < quantityDivs; i++){
    let newDiv = document.createElement('div');
    newDiv.textContent = i;
    //add styles
    newDiv.style.border = '1px solid white';
    newDiv.style.color = 'white';
    newDiv.style.padding = '10px 0';
    newDiv.style.fontSize = '1.5rem';

    //check is odd even number
    if (i%2 === 0){
        newDiv.style.backgroundColor = 'green';
    } else {
        newDiv.style.backgroundColor = 'orange';
    }

    //check is prime number
    if (checkPrimeNumber(i)){
        newDiv.style.backgroundColor = 'red';
    }
    //append new node
    wrapperDiv.appendChild(newDiv);
}
