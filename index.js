const inquirer = require("inquirer");
const shapes = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      name: "radius",
      message: "Enter the radius of the circle:",
    },
    {
      type: "input",
      name: "color",
      message: "Enter the color of the circle:",
    },
  ])
  .then((answers) => {
    const radius = answers.radius;
    const color = answers.color;

    const myCircle = new Circle(radius, color);
    const svgString = myCircle.render();
    console.log(svgString);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
