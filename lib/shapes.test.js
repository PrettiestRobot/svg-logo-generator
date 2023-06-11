const { Circle, Triangle, Square } = require('./shapes');
const { JSDOM } = require('jsdom');

test("Circle render method should return the correct SVG markup", () => {
  const circle = new Circle(50, "red");
  const expectedOutput =
    '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><circle cx="50" cy="50" r="50" fill="red" /></svg>';
  expect(circle.render()).toBe(expectedOutput);
});

test("Triangle render method should return the correct SVG markup", () => {
  const triangle = new Triangle(100, 150, "blue");
  const expectedOutput =
    '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><polygon points="0,0 100,0 0,150" fill="blue" /></svg>';
  expect(triangle.render()).toBe(expectedOutput);
});

test("Square render method should return the correct SVG markup", () => {
  const square = new Square(75, "green");
  const expectedOutput =
    '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><rect width="75" height="75" fill="green" /></svg>';
  expect(square.render()).toBe(expectedOutput);
});