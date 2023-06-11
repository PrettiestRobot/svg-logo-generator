const inquirer = require("inquirer");
const fs = require('fs');
const { Circle, Triangle, Square, Logo } = require("./lib/render");

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "shape",
        message: "What shape would you like to create?",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter a hex value for your shape color.",
        validate: function (input) {
          const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
          if (hexPattern.test(input)) {
            return true;
          }
          return "Please enter a valid hex value.";
        },
      },
      {
        type: "input",
        name: "text",
        message: "Enter text for your logo (limit 3 characters).",
        validate: function (input) {
          if (input.length <= 3) {
            return true;
          }
          return "Text should not exceed 3 characters.";
        },
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter a hex value for your text color.",
        validate: function (input) {
          const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
          if (hexPattern.test(input)) {
            return true;
          }
          return "Please enter a valid hex value.";
        }
      },
    ])
    .then((answers) => {
      let text;
      if (answers.shape === "Circle") {
        text = `<text x="50" y="55" text-anchor="middle" fill="${answers.textColor}" font-size="16" font-family="Arial">${answers.text}</text>`;
      } else if (answers.shape === "Square") {
        text = `<text x="50" y="60" text-anchor="middle" fill="${answers.textColor}" font-size="25" font-family="Arial">${answers.text}</text>`;
      } else {
        text = `<text x="50" y="60" text-anchor="middle" fill="${answers.textColor}" font-size="16" font-family="Arial">${answers.text}</text>`;
      }
      logo = new Logo(text, answers.shapeColor, answers.shape);
      const svgText = logo.construct();
      const filename = `./examples/${answers.text}_logo.svg`;

      fs.writeFileSync(filename, svgText);
    });
}

init();
