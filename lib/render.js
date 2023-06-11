// const { Logo } = require("./logo");

class Circle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
  }
}

class Triangle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="50,10 90,90 10,90" fill="${this.color}" />`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`;
  }
}

class Logo {
  constructor(text, color, shape) {
    this.text = text;
    this.color = color;
    this.shape = shape;
  }

  construct() {
    let constructShape;
    switch (this.shape) {
      case "Circle":
        constructShape = new Circle(this.color);
        break;
      case "Triangle":
        constructShape = new Triangle(this.color);
        break;
      case "Square":
        constructShape = new Square(this.color);
        break;
      default:
        throw new Error("Invalid shape specified");
    }
    const logoShape = constructShape.render(this.color);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">${logoShape} ${this.text}</svg>`;
  }
}

module.exports = { Circle, Triangle, Square, Logo };
