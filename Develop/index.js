// required node packages
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')


// array of questions prompted to the user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project/ repository?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a breif description of your project'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'gitHub',
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
        name: 'test',
        message: 'List any test cases or testing for this project/ repo.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List any contributors or contributions for this project/ repo.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What would you like to use for your license?',
        choices: [ 'Apache2.0', 'GPL3.0', 'MIT', 'None' ]
    },
];

const userQuestions = function() {
    return inquirer.prompt(questions)
}

// TODO: Create a function to write README file
function writeToFile() {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        
}


function init() {
    userQuestions().then(() => writeToFile())
}


init()
