const inquirer = require("inquirer");
// const { Logo } = require("./lib/logo");
const { Circle, Triangle, Square, Logo } = require("./lib/render");

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "shape",
        message: "What shape would you like to create?",
        choices: ["Circle", "Triangle", "Square"]
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter a hex value for your shape color."
      },
      {
        type: "input",
        name: "text",
        message: "Enter text for your logo (limit 3 characters)."
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter a hex value for your text color."
      },
    ])
    .then((answers) => {
      let text;
      if (answers.shape === "Circle") {
        text = `<text x="50" y="55" text-anchor="middle" fill="${answers.textColor}" font-size="16" font-family="Arial">${answers.text}</text>`;
      } else {
        text = `<text x="50" y="60" text-anchor="middle" fill="${answers.textColor}" font-size="16" font-family="Arial">${answers.text}</text>`;
      }
      logo = new Logo(text, answers.shapeColor, answers.shape);
      console.log(logo.construct());
    });
}

init();
