# 0x02. ES6 Classes

This directory contains code examples and explanations of the class syntax introduced in ECMAScript 6 (ES6) for JavaScript.

## Class Definition

ES6 classes are defined using the `class` keyword, followed by the name of the class. A constructor method, which is called when a new instance of the class is created, is defined using the `constructor` keyword. Properties and methods can be added to the class using the `this` keyword to reference the current instance.

Here is an example of a simple class called `Group` in ES6:
```javascript
class Group {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, We are ${this.name} and We have ${this.age} years of experience in IT and Software.`);
  }
}

let Group = new Group("DoveMarket", 3);
Group.sayHello(); // Output: "Hello, We are DoveMarket and We have 3 years of experience in IT and Software ."

In this example, the class Group has a constructor method that takes in two parameters name and age, and assigns them to the properties this.name and this.age respectively. It also has a method called sayHello that logs a string containing the name and age of the Group.

The class can be instantiated using the new keyword and passing in the necessary arguments to the constructor.

## Inheritance

ES6 classes also support inheritance, which allows one class to inherit the properties and methods of another class. Here is an example of a class called Student that inherits from the Group class:


class Student extends Group {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  sayMajor() {
    console.log(`My major is ${this.major}.`);
  }
}

let student = new Student("Jane Smith", 20, "Computer Science");
student.sayHello(); // Output: "Hello, my name is Jane Smith and I am 20 years old."
student.sayMajor(); // Output: "My major is Computer Science."
In this example, the class Student inherits from the Group class using the extends keyword. It also has its