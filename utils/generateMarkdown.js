// function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `# ${data.title}

  |      Table of Contents:       |
  |-------------------------------|
  | [Installation](#installation) |
  |        [Usage](#usage)        |
  |     [Credits](#credits)       |
  |    [Questions](#questions)    |
  |     [License](#license)       |
  
  ## Description:
   - ${data.description}
  
  ## Installation:
   - ${data.installation}
  
  
  ## Usage: 
   instructions and examples for use. Include screenshots as needed. 
   - ${data.usage}
  - ![Preview](${data.screen})
  
  
  ## Contributing:
   Guidelines for contribution (if any):
   - ${data.contribution}  
  
  
  ## Tests:
  Command for running tests for this app:
  - ${data.tests}
  
  
  ## Questions:
  [${data.github}'s Github](https://github.com/${data.github}/)
  
  
  ## Credits:
   Collaborating Credits:
   - ${data.credits}
  
  ## License:
  ${data.license}
  
  If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)
  
  ---
  
  |Thank you!         |
  --------------------
  |🏆${data.github}🏆|
  `
  // console.log(markdown);
  return markdown;
}

module.exports = generateMarkdown;
