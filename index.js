// TODO: Include packages needed for this application

const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    { 
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project: (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a brief description for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain the installation process: (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please explain the installation instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use: (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please describe using your project');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project (Required)',
        choices: ['MIT', 'GNU', 'Apache', 'ISC', 'IBM', 'Mozilla', 'Open Source'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select a license');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Are there any contributors to your project?',
        default: false
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests you would like to write?',
        default: false
    },
    {
        type: 'input',
        name: 'userName',
        message: 'Enter your GitHub username: (Required)',
        validate: userNameInput => {
            if (userNameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'README generated!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(generateMarkdown => {
        console.log(generateMarkdown);
    })
    
};

// Function call to initialize app
init()
    
