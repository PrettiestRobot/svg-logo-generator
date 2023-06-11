const { Circle, Triangle, Square } = require('./render');

describe("Circle", () => {
  test("render() should return the correct SVG string", () => {
    const circle = new Circle("#FF0000");
    const svgString = circle.render();
    expect(svgString).toBe('<circle cx="50" cy="50" r="40" fill="#FF0000" />');
  });
});

describe("Triangle", () => {
  test("render() should return the correct SVG string", () => {
    const triangle = new Triangle("#00FF00");
    const svgString = triangle.render();
    expect(svgString).toBe(
      '<polygon points="50,10 90,90 10,90" fill="#00FF00" />'
    );
  });
});

describe("Square", () => {
  test("render() should return the correct SVG string", () => {
    const square = new Square("#0000FF");
    const svgString = square.render();
    expect(svgString).toBe(
      '<rect x="10" y="10" width="80" height="80" fill="#0000FF" />'
    );
  });
});
