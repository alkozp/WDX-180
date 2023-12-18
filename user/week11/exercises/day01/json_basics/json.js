/**
 * 30 Days of JavaScript: JSON exercise
 * 
 * Complete the challenges found below!
 *  */

const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];

let age = 250;

let isMarried = true;

const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;


/**
 * Challenges:
 * 1. Change skills array to JSON using JSON.stringify()
 * 2. Stringify the age variable
 * 3. Stringify the isMarried variable
 * 4. Stringify the student object
 * 5. Stringify the students object with only firstName, lastName and skills properties
 * 6. Parse the *txt* JSON to object.
 * 7. Find the user who has many skills from the variable stored in *txt*.
 */

// INSERT YOUR CODE BELOW

const skillsJson = JSON.stringify(skills);
const ageJson = JSON.stringify(age);
const isMarriedJson = JSON.stringify(isMarried);
const studentJson = JSON.stringify(student);
const studentJsonFilter = JSON.stringify(student,['firstName','lastName','skills']);
const txtObj = JSON.parse(txt);

let maxSkills = 0;
let studentMaxSkills ='';
for (let el in txtObj){
    if (txtObj[el].skills.length > maxSkills){
        maxSkills = txtObj[el].skills.length;
        studentMaxSkills = el;
    } 
}

console.log('***** Change skills array to JSON using JSON.stringify() ******');
console.log(skills, skillsJson);
console.log('***** Stringify the age variable ******');
console.log(age, ageJson);
console.log('***** Stringify the isMarried variable ******');
console.log(isMarried, isMarriedJson);
console.log('***** Stringify the student object ******');
console.log(student, studentJson);
console.log('***** Stringify the students object with only firstName, lastName and skills properties ******');
console.log(studentJsonFilter);
console.log('***** Parse the *txt* JSON to object. ******');
console.log(txt, txtObj);
console.log('***** Find the user who has many skills from the variable stored in *txt*. ******');
if (maxSkills) {
    console.log(`Student ${studentMaxSkills} have ${maxSkills} skills`);
} else {
    console.log ("Students don't have skills");
}
