const inq = require("inquirer");
const fs = require("fs");
const util = require("util");
// const writeFileAsync = util.promisify(fs.writeFile);
// the below line may or may not successfully call the function hiding in generateMarkdown, do this after template is built 
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [ 
    {
        // Questions
        type: "input",
        message: "What is your github username?",
        name: "github",
    },
    {
        // Questions
        type: "input",
        message: "Any Collaborators?",
        name: "credits",
    },
    {
        // title
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        // Description, 
        type: "input",
        message: "brief description of the project:",
        name: "description",
    },
    {
        // Installation,  
        type: "input", 
        message: "Installation Guidelines:",
        name: "installation",
    },
    {
        // Installation,  
        type: "input", 
        message: "Contribution instructions:",
        name: "contribution",
    },
    {
        type: "input", // Tests, 
        message: "What is your project's test command?",
        name: "tests",
    },
    {
        type: "input", // usage
        message: "How does this app work? (usage instructions):",
        name: "usage",
    },
    { 
        type: "list", //licenses 
        message: "What license do you choose?",
        choices: [
            // by including ALL the pertinent information in the selection, the strung text will be something akin to "license name, badge, link to it"
            "GNU GPLv3  - [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)  - [License doc](https://choosealicense.com/licenses/gpl-3.0/)",
            "MIT  - [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  - [License doc](https://choosealicense.com/licenses/mit/)",
            "CC0  - [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]  - [license doc](https://creativecommons.org/publicdomain/zero/1.0/)",
        ],
        name: "license",
      },
];

// function to write README file **not yet**
function writeToFile(fileName, data) {
    // fs.writeFile("readme.md", gM)
    fs.writeFile(fileName, generateMarkdown(data), (err) => err)
}



// function to initialize program
async function init() {
    try {
        let answers = await inq.prompt(questions);
        // making sure the answers object shows up (it does)
        // console.log(answers);
        let generatedMd = await generateMarkdown(answers);
        writeToFile(`${answers.title}.md`, answers)
        
    } catch (error) {
        throw error;
    }
}

// function call to initialize program
init();
