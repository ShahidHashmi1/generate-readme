// required node packages
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const util = require('util');
const { writeFile } = require('fs/promises');

// array of questions prompted to the user
const questions = [
    {
        type: 'input',
        name: 'repoName',
        message: 'What is the title of your project/ repository?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a breif description of your project'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What is the motivation for this project?'
    },
    {
        type: 'input',
        name: 'projectGoal',
        message: 'What is the goal for this project?'
    },
    {
        type: 'input',
        name: 'gitHubName',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'List any installations used or needed for this project/ repo.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'List the usage used or needed for this project/ repo.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'List any test cases or testing for this project/ repo.'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'List any contributors or contributions for this project/ repo.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please list your email address'

    },
    {
        type: 'list',
        name: 'license',
        message: 'What would you like to use for your license?',
        choices: ["Apache 2.0 License", "Boost Software License 1.0", "IBM Public License Version 1.0", "MIT", "Mozilla Public License 2.0", "The Perl License", "none"]
    },
];

const userQuestions = function() {
    return inquirer.prompt(questions)
}

function init() {
    userQuestions()
        .then((data) => writeFile('README.md', generateMarkdown(data),err => {
            if(err) {
                const err = new Error("Invalid information")
                return err
            }
        }))
        .then(() => console.log("You have successfully made a README.md file!")) 
        .catch((error) => console.error(error))
}

init()
