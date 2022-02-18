// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is your project name? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your project name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is your project description (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter your description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'projectInstall',
    message: 'How do you install your project? (Required)',
    validate: installInput => {
      if (installInput) {
        return true;
      } else {
        console.log('Please explain how to install.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'projectUsage',
    message: 'How do you use your project? (Required)',
    validate: installInput => {
      if (installInput) {
        return true;
      } else {
        console.log('Please explain application use.');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'What license would you like to use for your project?',
    choices: ['MIT LIcense', 'GPL License', 'Apache License', 'N/A']
  },
  {
    type: 'confirm',
    name: 'confirmAddContributer',
    message: 'Would you like to add a contributer to this project?',
    default: false
  },

];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions).then(answers => {
    console.log(answers)
  }).catch(error => {
    console.log(error)
  })
};
// Function call to initialize app
init();

// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


