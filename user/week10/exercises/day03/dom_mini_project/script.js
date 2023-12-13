//random color func
const getRandomColor = () => {
    const hexLetters = '0123456789ABCDEF'.split(''); //array with HEX letters
    let hexColor = '#' // started from #
    for (let i=0; i < 6; i++){
        hexColor = hexColor + hexLetters[Math.round(Math.random()*15)]
    }
    return hexColor; //#FFFFFF
}

//blinking year func
const blinkingYear = () => {
    const yearSpan = document.body.querySelector('#year');
    yearSpan.style.color = getRandomColor();
}

//blinking date & time bg func
const blinkingDateTimeBg = () => {
    const dateTime = document.body.querySelector('#datetime');
    dateTime.style.backgroundColor = getRandomColor();
}

//add style to wrapper div
const wrapper = document.body.querySelector('.wrapper');
wrapper.style.width = '800px';
wrapper.style.margin = '0 auto'; 
wrapper.style.fontFamily = 'Arial, serif';
wrapper.style.textAlign = 'center';
//add style to datetime
const dateTime = document.body.querySelector('#datetime');
dateTime.style.display = 'inline-block';
dateTime.style.padding = '5px 20px';
//add style to list
const taskList = document.body.querySelector('ul');
taskList.style.textAlign = 'left';
taskList.style.listStyle = 'none';
taskList.style.padding = '0';
//add styling to list items
const listItems = taskList.querySelectorAll('li');
listItems.forEach((li)=>{
    li.style.padding = '20px';
    li.style.marginBottom = '2px';
});
console.log(listItems.length);





//***The year color is changing every 1 second */
//extract year from h1
const resultH1 = document.body.querySelector('h1');
const year = resultH1.textContent.slice(resultH1.textContent.length-4)
//add span with year id
resultH1.innerHTML = resultH1.textContent.slice(0,resultH1.textContent.length-4) + '<span id="year">' + year + '</span>'
//style year span
const yearSpan = document.body.querySelector('#year');
yearSpan.style.fontSize = '4rem';
//set blinking year
setInterval(blinkingYear, 1000);

//***The date and time background color is changing every on seconds */
setInterval(blinkingDateTimeBg, 1000);

//****
// Done’ challenges has background green
// ‘Ongoing’ challenges has background yellow
// ‘Coming’ challenges have background red
listItems.forEach((li)=>{
    if (li.textContent.includes('Done')){
        li.style.backgroundColor = 'green';
    } else if (li.textContent.includes('Ongoing')) {
        li.style.backgroundColor = 'yellow';
    } else if (li.textContent.includes('Coming')) {
        li.style.backgroundColor = 'red';
    }
    
});