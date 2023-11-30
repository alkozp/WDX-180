
const weekDays = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
//get copy array weekDays exclude weekend days
const selectedDays = weekDays.slice(1, 6);

document.write(`<ul>`);

const date = new Date();
//get current day number
const currentDay = date.getDay();

//get days in loop from selectedDays
for (const day of selectedDays) {
    //check current day number is from 2 to 5
    if (currentDay > 1 && currentDay < 6) {
        //show day with strong
        if (weekDays[currentDay] === day) {
            document.write(`<li><strong>${day}</strong></li>`); 
            continue;
        }
    }
    //show days without strong
    document.write(`<li>${day}</li>`);
}

document.write(`</ul>`);