const { Circle, Triangle, Square } = require('./shapes');

function renderLogo (shape, shapeColor, text, textColor) {
  let svg;
  switch (shape) {
    case "Circle":
      svg = new Circle(shapeColor);
      break;
    case "Triangle":
      svg = new Triangle(shapeColor);
      break;
    case "Square":
      svg = new Square(shapeColor);
      break;
  }
  return svg.render(text, textColor);
}