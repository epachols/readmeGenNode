const inq = require("inquirer");
const fs = require("fs");
const util = require("util");

// the below line references for calling the function located in generateMarkdown
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
        type: "input", // screen
        message: "filename of main intended screenshot? (keep it in the project parent folder):",
        name: "screen",
    },
    { 
        type: "list", //licenses 
        message: "What license do you choose?",
        choices: [
            // by including ALL the pertinent information in the selection, the strung text will be something akin to "license name, badge, link to it"
            "GNU ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg) [License Document](https://www.gnu.org/licenses/gpl-3.0)",
            "MIT ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) [License Document](https://opensource.org/licenses/MIT)",
            "CC0 ![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png) [License Document](https://creativecommons.org/publicdomain/zero/1.0/)",
        ],
        name: "license",
      },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => err)
}

// function to initialize program
async function init() {
    try {
        let answers = await inq.prompt(questions);
        // making sure the answers object shows up (it does)
        // console.log(answers);
        let generatedMd = await generateMarkdown(answers);
        writeToFile(`${answers.title}.md`, answers);
        console.log('**')
        console.log('Project Markdown Successfully Generated, thanks for using CodeCrow Services, inc.')
        console.log('**')
        
    } catch (error) {
        throw error;
    }
}

// function call to initialize program
init();