
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


