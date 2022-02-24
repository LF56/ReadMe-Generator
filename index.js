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
    name: 'projectDescription',
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
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please explain application use.');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license would you like to use for your project?',
    choices: ['MIT', 'GPL', 'Apache', 'N/A']
  },
  {
    type: 'confirm',
    name: 'confirmAddContribution',
    message: 'Would you like to add a contribution to this project?',
    default: false
  },
  {
    type: 'input',
    name: 'projectTest',
    message: 'Would you like to add a test? (Required)',
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log('Please explain test.');
        return false;
      }
    }
  },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>{
    if (err) throw err;
    console.log('This file has been saved.')
  }) 
}

// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions).then(answers => {
    console.log(answers)
  const template = generateMarkdown(answers)
  writeToFile('./dist/README.md', template)
  }).catch(error => {
    console.log(error)
  })
};
// Function call to initialize app
init();


