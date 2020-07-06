// function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `# ${data.title}

  |      Table of Contents:       |
  |-------------------------------|
  | [Installation](#installation) |
  |        [Usage](#usage)        |
  | [Contributing](#contributing) |
  |     [Tests](#tests)           |
  |    [Questions](#questions)    |
  |    [Credits](#credits)        |
  |     [License](#license)       |
  
  ## Description
  \n ${data.description}
  
  ## Installation
  \n ${data.installation}
  
  
  ## Usage 
  \n
  ${data.usage} \n
  - ![Preview](${data.screen})
  
  
  ## Contributing:
   \n Guidelines for contribution (if any): \n
   ${data.contribution}  
  
  
  ## Tests:
  Command for running tests for this app:
  \n ${data.tests}
  
  
  ## Questions:
  [${data.github}'s Github](https://github.com/${data.github}/)
  
  
  ## Credits:
   Collaborating Credits:
  \n ${data.credits}
  
  ## License information:
  \n 
  ${data.license}
  
  [https://choosealicense.com/](https://choosealicense.com/)
  
  ---
  
  |Thank you!         |
  --------------------
  |🏆${data.github}🏆|
  `
  // console.log(markdown);
  return markdown;
}

module.exports = generateMarkdown;
