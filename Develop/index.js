// TODO: Include packages needed for this application

const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain the installation process:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project',
        choices: ['MIT', 'GNU', 'Apache', 'ISC', 'IBM', 'Mozilla', 'Open']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Are there any contributors to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests you would like to write?'
    },
    {
        type: 'input',
        name: 'userName',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
