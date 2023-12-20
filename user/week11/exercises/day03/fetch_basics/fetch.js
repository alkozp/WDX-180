/**
 * 30 Days of JavaScript: Promises and Fetch API exercise
 * 
 * Complete the challenges found below!
 *  
 * */

//const { error } = require("console");

const countriesAPI = 'https://restcountries.com/v3.1/all?fields=name,capital,languages,population,area';
//const areaCountries ='https://restcountries.com/v3.1/all?fields=name,area';
//const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

/**
 * Challenges
 * 1. Read the countries API using fetch & promises and: 
 *  - print the name of country, capital, languages, population and area.
 *  - find out the 10 largest countries
 *  - count total number of languages in the world used as officials.
 * 2. Read the cats API using fetch & promises and: 
 *  - print out all the cat names in to catNames variable.
 *  - find the average weight of cat in metric unit.
 */

// INSERT YOUR CODE BELOW


function showCountry(element) {
    let langUsed = '';
    for (let el in element.languages) {
        langUsed += element.languages[el] + ", ";
    }
    const message = `Country ${element.name.common} has capital ${element.capital} used lang: ${langUsed.slice(0, langUsed.length-2)} with population: ${element.population}  and area is ${element.area}`;
    return message;
}

function sortByLargestArea(data) {
    //return data.sort((a1, a2) => (a1.area < a2.area) ? 1 : (a1.area > a2.area) ? -1 : 0);
    return data.sort((a1, a2) => (a2.area - a1.area));
}

function countLanguages(data){
    let arrayLang=[];
    let length;
    data.forEach(country => {
        for (let lang in country.languages){
            if (arrayLang.filter(el => el === lang).length === 0) {
                length = arrayLang.push(lang);
            }
        }
    })
    //console.log(arrayLang.sort());
    return length;
}

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        //**** 1. print the name of country, capital, languages, population and area.
        data.forEach(element => {
            console.log(showCountry(element));
        });

        //**** 2. find out the 10 largest countries
        const countriesSort = sortByLargestArea(data);
        const maxCountries = 10;
        console.log('**** find out the 10 largest countries ****');
        for (let i = 0; i < maxCountries; i++) {
            console.log(`${i + 1}. ${countriesSort[i].name.common} with area ${countriesSort[i].area}`);
        }

        //**** 3. count total number of languages in the world used as officials
        console.log('**** count total number of languages in the world used as officials ****');
        const totalLanguages = countLanguages(data);
        console.log(`total number of languages in the world: ${totalLanguages}`)


        //console.log(data);
    })
    .catch(err => console.error(err));


function averageCatWeight(data){
    let averageWeight = [];
    data.forEach(el => {
        averageWeight.push(el.weight.metric) ;
    });
    //console.log(averageWeight);
    let totalAverage = averageWeight
                                .map( el => el.split(' - '))
                                .map(el => (Number(el[0])+Number(el[1]))/2)
                                .reduce((acc, val) => acc+val)/averageWeight.length;

    return totalAverage.toFixed(3);
}

fetch(catsAPI)
    .then(response => response.json())
    .then(data => {

        // print out all the cat names in to catNames variable.
        let catNames ='';
        data.forEach(el => catNames += el.name + ", ");
        console.log(catNames.slice(0,catNames.length-2));
        
        // find the average weight of cat in metric unit.
        console.log(`average weight of cat: ${averageCatWeight(data)} kg`);

        //console.log(data);
    })
    .catch(err => console.error(err));