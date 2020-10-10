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
        message: "Please select an open-source license for your project.",
        name: "license",
        type: "list",
        choices: ['MIT', 'Apache-2.0', 'GPL v3', 'GPL v2', 'BSD 3-Clause', 'BSD 2-Clause', 'LGPL v3']
    },
];

// function to write README file
function writeToFile(data) {
    let badge = "";
    let licenseLink = "";
    switch(data.license) {
        case "MIT":
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            licenseLink = "https://opensource.org/licenses/MIT";
            break;
        case "Apache-2.0":
            badge = "[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            licenseLink = "https://opensource.org/licenses/Apache-2.0";
            break;
        case "GPL v3":
            badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            licenseLink = "https://opensource.org/licenses/GPL-3.0";
            break;
        case "GPL v2":
            badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
            licenseLink = "https://opensource.org/licenses/GPL-2.0";
            break;
        case "BSD 3-Clause":
            badge = "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
            break;
        case "BSD 2-Clause":
            badge = "[![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
            licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
            break;
        case "LGPL v3":
            badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
            licenseLink = "https://opensource.org/licenses/LGPL-3.0";
            break;
    }
    const README = `# ${data.title.trim()}
${badge}

## Description
${data.bio}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}

## Usage 
${data.usage}

## License
This project is distributed under the ${data.license} open-source license which you can view [here](${licenseLink}).

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
For questions about ${data.title.trim()}, you can contact me via [email](mailto:${data.email}) or on [GitHub](https://github.com/${data.gitUser}).
Email: ${data.email}
GitHub: https://github.com/${data.gitUser}
`
    let fileName = data.title.trim().split(" ").join("-").toLowerCase() + "README.md";
    fs.writeFile(fileName, README, () => {});
}

// function to initialize program
async function init() {
    let data = await inquirer.prompt(questions);
    writeToFile(data);
}

// function call to initialize program
init();
