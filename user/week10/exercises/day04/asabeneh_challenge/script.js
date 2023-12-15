const dataInfo = {
  description: "Asabeneh Yetayeh challenges",
  challengeTitle: "Asabeneh Yetayeh challenges",
  challengeSubtitle: "30DaysOfJavaScript Challenge",
  challengeYear: 2020,
  keywords: [
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "JS",
    "JavaScript",
    "ES6",
    "Promise",
    "async await",
    "Database",
    "React",
    "React Hooks",
    "Context API",
    "React Router",
    "Web Storage",
    "localStorage",
    "sessionStorage",
    "Redux",
    "Node",
    "MongoDB",
    "SQL",
    "API",
    "DOM",
    "data science",
    "MERN",
    "Python",
    "Flask",
    "Statistics",
    "Linear Algebra",
    "Numpy",
    "Pandas",
    "Scipy",
    "Scikit-learn",
    "Visualization",
    "D3.js",
  ],
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    titles: [
      ["🌱", "Educator"],
      ["💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
    ],
    qualifications: [
      "MSc. Computer Science Ongoing",
      "BSc. Information and Communication Eng.",
      "MSc. Food Technology",
      "BSc.Food Technology",
    ],
    socialLinks: [
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/in/asabeneh/",
        fontawesomeIcon: '<i class="fab fa-linkedin">',
      },
      {
        social: "Twitter",
        url: "https://twitter.com/Asabeneh",
        fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
      },
      {
        social: "Github",
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: "https://github.com/Asabeneh",
      },
      {
        social: "DEV.to",
        fontawesomeIcon: "",
        url: "https://dev.to/asabeneh",
      },
    ],
    skills: [
      "Web Development",
      "Data Analysis",
      "Data Visualization",
      "Programming",
      "Databases",
      "Developing API",
    ],
    bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
  },
  challenges: [
    {
      name: "30 Days Of Python",
      topics: [
        "Python",
        "Flask",
        "Numpy",
        "Pandas",
        "Statistics",
        "API",
        "MongoDB",
      ],
      days: 30,
      status: "Done",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
    },
    {
      name: "30 Days Of JavaScript",
      topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
      days: 30,
      status: "Ongoing",
      questions: "Above 500",
      projects: "About 30",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
    },
    {
      name: "30 Days Of HTML & CSS",
      topics: ["CSS", "Flex", "Grid", "CSS Animation"],
      days: 30,
      status: "Coming",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of React",
      topics: [
        "React",
        "React Router",
        "Redux",
        "Context API",
        "React Hooks",
        "MERN",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of ReactNative",
      topics: ["ReactNative", "Redux"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Fullstack",
      topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Data Analysis",
      topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Machine Learning",
      topics: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Scipy",
        "Linear Algebra",
        "Statistics",
        "Visualization",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
  ],
};

console.log(dataInfo);
// INSERT YOUR CODE HERE

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

const updateDateTime = () => {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  document.querySelector('#datetime').textContent = currentDateTime;
}


//find wrapper
const wrapper = document.body.querySelector('.wrapper');
//add style to wrapper div
wrapper.style.width = '800px';
wrapper.style.margin = '0 auto'; 
wrapper.style.fontFamily = 'Arial, serif';
wrapper.style.textAlign = 'center';

//create fragment of doc for insert new nodes
let fragmentDoc = new DocumentFragment();


const elH1 = document.createElement('h1');
elH1.insertAdjacentHTML ('afterbegin', dataInfo.challengeTitle + ' in <span id="year">' + dataInfo.challengeYear + '</span>');
fragmentDoc.append(elH1);
//style year span
const yearSpan = fragmentDoc.querySelector('#year');
yearSpan.style.fontSize = '6rem';
//set blinking year
setInterval(blinkingYear, 1000);

const chSubTitle = document.createElement('h2');
chSubTitle.textContent = dataInfo.challengeSubtitle;
chSubTitle.style.fontSize = '1.7rem';
chSubTitle.style.fontWeight = 'normal';
chSubTitle.style.textDecoration = 'underline';
fragmentDoc.append(chSubTitle);

const dateTime = document.createElement('h3');
dateTime.setAttribute('id','datetime');
dateTime.style.display = 'inline-block';
dateTime.style.fontWeight = 'normal';
dateTime.style.padding = '20px 30px';
fragmentDoc.append(dateTime);
setInterval(blinkingDateTimeBg, 1000);
setInterval(updateDateTime, 1000);

//create div grid
const gridDiv = document.createElement('div');
gridDiv.style.display = 'grid';
gridDiv.style.gridTemplateColumns = 'auto auto auto';
gridDiv.style.textAlign = 'left';

//table of challenges
dataInfo.challenges.forEach((challengeItem) => {
  //check challenge status
  let challengeBgColor;
  if (challengeItem.status.toLowerCase().includes('done')){
    challengeBgColor = 'green';
  } else if (challengeItem.status.toLowerCase().includes('ongoing')){
    challengeBgColor = 'orange';
  } else if (challengeItem.status.toLowerCase().includes('coming')){
    challengeBgColor = 'red';
  }

  const paddingStyle = '20px';
  const margBottom = '4px';

  //create name challenge div
  const innerDiv1 = document.createElement('div');
  innerDiv1.style.backgroundColor = challengeBgColor;
  innerDiv1.style.padding = paddingStyle;
  innerDiv1.style.display = 'inline-grid';
  innerDiv1.style.alignItems = 'center';
  innerDiv1.style.marginBottom = margBottom;
  const challengeName = document.createElement('a');
  if (!challengeItem.status.toLowerCase().includes('coming')) {
    challengeName.setAttribute('href', challengeItem.githubUrl);
  }
  challengeName.textContent = challengeItem.name;
  innerDiv1.appendChild(challengeName);
  gridDiv.appendChild(innerDiv1);

  //create topics div
  const innerDiv2 = document.createElement('div');
  innerDiv2.style.backgroundColor = challengeBgColor;
  innerDiv2.style.padding = paddingStyle;
  innerDiv2.style.marginBottom = margBottom;
  const topicList = document.createElement('details');
  challengeItem.topics.forEach((t,index) => {
    if (index === 0) {
      const sum = document.createElement('summary');
      sum.style.fontWeight = 'bold';
      sum.style.padding = '5px';
      sum.textContent = t;
      topicList.appendChild(sum);
    } else {
      const topEl = document.createElement('div');
      topEl.style.padding = '5px';
      topEl.textContent = t;
      topicList.appendChild(topEl);
    }
  })
  innerDiv2.appendChild(topicList);
  gridDiv.appendChild(innerDiv2);

  //create status div
  const innerDiv3 = document.createElement('div');
  innerDiv3.style.backgroundColor = challengeBgColor;
  innerDiv3.style.padding = paddingStyle;
  innerDiv3.style.textAlign = 'right';
  innerDiv3.style.display = 'inline-grid';
  innerDiv3.style.alignItems = 'center';
  innerDiv3.style.marginBottom = margBottom;
  innerDiv3.textContent = challengeItem.status;
  gridDiv.appendChild(innerDiv3);

});
fragmentDoc.append(gridDiv);

//add author
const author = document.createElement('h3');
author.style.fontSize = '1.7rem';
author.textContent = dataInfo.author.firstName + " " +dataInfo.author.lastName;
fragmentDoc.append(author);

//add  social links
const fontAwesomeCdn = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/css/fontawesome.min.css" integrity="sha384-BY+fdrpOd3gfeRvTSMT+VUZmA728cfF9Z2G42xpaRkUGu2i3DyzpTURDo5A6CaLK" crossorigin="anonymous">';
document.head.innerHTML = document.head.innerHTML + fontAwesomeCdn;

dataInfo.author.socialLinks.forEach((sl)=>{
  const anchor = document.createElement('a');
  anchor.setAttribute ('href','#');
  anchor.innerHTML = sl.fontawesomeIcon;
  fragmentDoc.append(anchor)
});

//add bio
const bio = document.createElement('p');
bio.textContent = dataInfo.author.bio;
fragmentDoc.append(bio);


//wrap row
const wrapRow = document.createElement('div');
wrapRow.style.textAlign = 'left';
wrapRow.style.display = 'flex';
wrapRow.style.justifyContent = 'space-between';

//add titles
let outDiv = document.createElement('div');
wrapRow.appendChild(outDiv);
outDiv.style.display = 'inline-block';
let titleH4 = document.createElement('h4');
titleH4.textContent = 'Titles';
outDiv.appendChild(titleH4);
//list
let ul1 = document.createElement('ul');
ul1.style.listStyleType = '✅ ';
outDiv.appendChild(ul1);
dataInfo.author.titles.forEach((title)=>{
  const listTitles = document.createElement('li');
  listTitles.textContent = title[1];
  ul1.appendChild(listTitles);
});
//fragmentDoc.append(outDiv);

//add skills
outDiv = document.createElement('div');
wrapRow.appendChild(outDiv);
outDiv.style.display = 'inline-block';
titleH4 = document.createElement('h4');
titleH4.textContent = 'Skills';
outDiv.appendChild(titleH4);
//list
ul1 = document.createElement('ul');
ul1.style.listStyleType = '✅ ';
outDiv.appendChild(ul1);
dataInfo.author.skills.forEach((title)=>{
  const listTitles = document.createElement('li');
  listTitles.textContent = title;
  ul1.appendChild(listTitles);
});
//fragmentDoc.append(outDiv);

//add qualifications
outDiv = document.createElement('div');
wrapRow.appendChild(outDiv);
outDiv.style.display = 'inline-block';
titleH4 = document.createElement('h4');
titleH4.textContent = 'Qualifications';
outDiv.appendChild(titleH4);
//list
ul1 = document.createElement('ul');
ul1.style.listStyleType = '✅ ';
outDiv.appendChild(ul1);
dataInfo.author.qualifications.forEach((title)=>{
  const listTitles = document.createElement('li');
  listTitles.textContent = title;
  ul1.appendChild(listTitles);
});
//fragmentDoc.append(outDiv);

fragmentDoc.append(wrapRow);

const keyHeader = document.createElement('h4');
keyHeader.textContent = 'Keywords';
keyHeader.style.textAlign = 'left';
fragmentDoc.append(keyHeader);

//add keywords
const keyWrapper = document.createElement('div');
keyWrapper.style.display = 'flex';
keyWrapper.style.flexWrap = 'wrap';
keyWrapper.style.justifyContent = 'space-around';
dataInfo.keywords.forEach((word)=>{
  const wordDiv = document.createElement('div');
  wordDiv.style.backgroundColor = getRandomColor();
  wordDiv.style.display = 'inline-block';
  wordDiv.style.padding = '5px 20px 5px 5px';
  wordDiv.style.margin = '5px 5px';
  wordDiv.style.fontWeight = 'bold';
  wordDiv.style.fontStyle = 'italic';
  wordDiv.style.borderRadius = '20px'; 
  wordDiv.textContent = '# ' + word;
  keyWrapper.appendChild(wordDiv);
});
fragmentDoc.append(keyWrapper);

// insert fragment of doc
wrapper.append(fragmentDoc);

