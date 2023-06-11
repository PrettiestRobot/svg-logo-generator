let text = "TWM";

class Circle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="40" fill="${color}" /></svg>`;
  }
}

class Triangle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><polygon points="50,10 90,90 10,90" fill="${color}" /></svg>`;
  }
}

class Square {
  constructor(width, color) {
    this.color = color;
  }

  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect x="10" y="10" width="80" height="80" fill="${color}" /></svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
