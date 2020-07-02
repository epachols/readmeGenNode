const inq = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// the below line may or may not successfully call the function hiding in generateMarkdown, do this after template is built 
const gM = require("./utils/generateMarkdown.js");


// array of questions for user
const questions = [ 
    {
        // Questions
        type: "input",
        message: "What is your github username?",
        name: "name",
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
        type: "input", //github
        message: "Your Github Url for questions:",
        name: "github",
    },
    {
        type: "input", //email
        message: "Your email for questions:",
        name: "email",
    },
    { 
        type: "list", //licenses (may need to change later)
        message: "What license do you choose?",
        choices: [
            "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
            "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
            "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
            "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
        ],
        name: "license",
      },
];

// function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile("readme.md", gM)
}

// function to initialize program
async function init() {
    let answers = await inq.prompt(questions);
    // making sure the answers object shows up (it does)
    // console.log(answers);
    let generatedMd = await gM;
    writeToFile()
}

// function call to initialize program
init();
