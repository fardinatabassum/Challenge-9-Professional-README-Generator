// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    err ? console.log(err) : console.log("README.md was generated!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile("README.md", generateMarkdown(data))
  });
}

// Function call to initialize app
init();
