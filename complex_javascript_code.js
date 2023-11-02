// Filename: complex_javascript_code.js
// Description: A complex and sophisticated JavaScript code demonstrating various programming concepts and techniques

// Define a class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  increaseAge() {
    this.age++;
  }
}

// Create instances of the Person class
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

// Define a function to calculate the average age of an array of Person instances
function calculateAverageAge(people) {
  if (!Array.isArray(people) || people.length === 0) {
    throw new Error("Invalid input. Expected an array of Person instances.");
  }

  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  return totalAge / people.length;
}

// Create an array of Person instances
const people = [person1, person2];

// Call the calculateAverageAge function and display the result
const averageAge = calculateAverageAge(people);
console.log("Average Age:", averageAge);

// Define a class representing a Rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Create an instance of the Rectangle class
const rectangle = new Rectangle(5, 10);

// Calculate and display the area and perimeter of the rectangle
console.log("Rectangle Area:", rectangle.calculateArea());
console.log("Rectangle Perimeter:", rectangle.calculatePerimeter());

// Define a function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Call the isPrime function for some numbers and display the result
console.log("Is 17 Prime?", isPrime(17));
console.log("Is 25 Prime?", isPrime(25));
console.log("Is 31 Prime?", isPrime(31));

// ... continue with more code ...