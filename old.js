// command-line input for user - inquiry and fs for file writing
var inquirer = require("inquirer");
var fs = require("fs");

// TODO:make a begin message here with console.log

inquirer
.prompt ([
    //here are the question objects, including:
    // name, description, table of msContentScript, installation (instructions), usage(information), license, contributing(contribution guidelines), tests, and questions 
    {
        type: "input",
        message: "What is the project name?",
        name: "name"
    },
    {
        type: "input",
        message: "A brief discription of the project, please:",
        name: "description"
    },
])
// TODO: parse out here the grabbing of the response within the object. see previous exercise.
// will be calling things project throughout this return 

.then(function(project) {
    
    // console logging the response to check TODO: take out 
    console.log(project);
    // reusing the variable for the project name 
    var proj = `${project.name.toLowerCase()}.md`;

    // TODO:maybe we want to export the object here first so we can handle the asynch collected data?
    // look into catch and await for asynch

    //   writing to a file called "projectname.md" with a first line of " # projectname"
    fs.appendFile( proj, ` - Description: ${project.description}`, function(err) {
        if (err) throw err;
          console.log("Great-jobski");
    //   can throw err (return and console log combined)
      });
        fs.appendFile( proj, `\n # ${project.name}`, function(err) {
            if (err) throw err;
              console.log("Great-jobski");
        //   can throw err (return and console log combined)
          });


    });

