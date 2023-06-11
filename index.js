const inquirer = require('inquirer');

const questions = [
  "Please select a shape",
  "Please enter your initials",
  "Please enter a hex code for your logo"
];

function init() {
  inquirer.promt([
    {
      type: 'list',
      message: questions[0],
      name: 'shape',
      choices: ['Square', 'Circle', 'Triangle']
    },
    {
      type: 'input',
      message: questions[1],
      name: 'initials',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'color',
    }
  ])
}

init();


