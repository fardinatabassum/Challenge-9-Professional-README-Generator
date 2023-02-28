//Includes packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

//Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description about your project",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide some usage for this project",
  },
  {
    type: "input",
    name: "credits",
    message: "List your collaborators, if any.",
  },
  {
    type: "list",
    message: "Select a License",
    name: "license",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "Mozilla Public License 2.0",
      "ISC",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "How can developers contribute to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Write a test for your project",
  },
  {
    type: "input",
    name: "github",
    message: "Input your github username",
  },
  {
    type: "input",
    name: "email",
    message: "Where else can contributoras reach you? (eg. email)",
  },
];

//Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    err ? console.log(err) : console.log("README.md was generated!");
  });
}

//Function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile("./assets/README.md", generateMarkdown(data))
  });
}

// Function call to initialize app
init();
