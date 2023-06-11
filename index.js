const inquirer = require("inquirer");
const shapes = require("./lib/shapes");

function init() {
  inquirer.prompt([
    {
      type: "list",
      name: "shape",
      message: "What shape would you like to create?",
      choices: ["Circle", "Triangle", "Square"]
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a hex value for your shape color.",
    },
    {
      type: "input",
      name: "text",
      message: "Enter text for your logo (limit 3 characters).",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a hex value for your text color.",
    }
  ]).then(answers => {

  })
}