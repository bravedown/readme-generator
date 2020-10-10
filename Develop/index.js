// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const questions = [
    {
        message: "What is the title of your project?",
        name: "title",
        type: "text"
    },
    {
        message: "Please describe your project.",
        name: "bio",
        type: "text"
    },
    {
        message: "Please give instructions for installation.",
        name: "install",
        input: "text",
        default: "none"
    },
    {
        message: "Please give instructions on how to use your project.",
        name: "usage",
        input: "text",
    },
    {
        message: "What is your GitHub username?",
        name: "gitUser",
        type: "text"
    },
    {
        message: "What is your email address?",
        name: "email",
        type: "text"
    },
    {
        message: "Please give some guidelines for contributors.",
        name: "contribution",
        type: "text"
    },
    {
        message: "Please give instructions for how to test your project.",
        name: "test",
        type: "text"
    },
    {
        message: "Please select a license.",
        name: "license",
        type: "list",
        choices: ['MIT', 'GPL', 'LGPL']
    },
];

// function to write README file
function writeToFile(data) {
    const README = `# ${data.title}
    ${data.description}

    ## Table of Contents
    ${table}

    ## Installation
    ${data.install}

    ## Usage 
    ${data.usage}

    ## License
    ${data.license}
    
    ## Contributing
    ${data.contribution}

    ## Tests
    ${data.test}

    ## Questions
    
    `
}

// function to initialize program
async function init() {
    let data = await inquirer.prompt(questions);
    console.log(data);
}

// function call to initialize program
init();
