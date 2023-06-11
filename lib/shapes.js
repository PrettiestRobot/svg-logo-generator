

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />
            </svg>`;
    }
}

class Triangle {
  constructor(base, height, color) {
    this.base = base;
    this.height = height;
    this.color = color;
  }

  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <polygon points="0,0 ${this.base},0 0,${this.height}" fill="${this.color}" />
            </svg>`;
  }
}

class Square {
  constructor(sideLength, color) {
    this.sideLength = sideLength;
    this.color = color;
  }

  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
            </svg>`;
  }
}

module.exports = { Circle, Triangle, Square };


