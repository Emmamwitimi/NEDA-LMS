import React, { useState } from 'react';

const JavaScript = () => {
  // Array of JavaScript subtopics
  const subtopics = [
    {
      title: 'Introduction to JavaScript',
      content: (
        <div>
          <h2>Introduction</h2>
          <p>
            JavaScript is a programming language used to create dynamic and interactive web content. It runs in the browser and enables features like animations, form validation, and interactive maps.
          </p>
          <h3>Basic Syntax</h3>
          <p>
            JavaScript uses statements to perform actions, which are separated by semicolons:
          </p>
          <pre>
{`console.log("Hello, World!");`}
          </pre>
          <p>
            Variables can be declared using <code>let</code>, <code>const</code>, or <code>var</code>:
          </p>
          <pre>
{`let x = 10;
const y = 20;
var z = 30;`}
          </pre>
          <p>Watch the following video to learn more:</p>
          <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/W6NZfCO5SIk" 
              title="JavaScript Basics"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
          </iframe>
        </div>
      ),
    },
    {
      title: 'Data Types & Variables',
      content: (
        <div>
          <h2>Data Types & Variables</h2>
          <p>
            JavaScript has various data types, such as strings, numbers, booleans, arrays, and objects.
          </p>
          <pre>
{`let name = "Emma"; // String
let age = 25; // Number
let isStudent = true; // Boolean`}
          </pre>
          <h3>Arrays and Objects</h3>
          <p>
            Arrays are used to store multiple values in a single variable:
          </p>
          <pre>
{`let fruits = ["Apple", "Banana", "Cherry"];`}
          </pre>
          <p>
            Objects are collections of key-value pairs:
          </p>
          <pre>
{`let person = {
  name: "Emma",
  age: 25,
  isStudent: true
};`}
          </pre>
        </div>
      ),
    },
    {
      title: 'Functions',
      content: (
        <div>
          <h2>Functions</h2>
          <p>
            Functions are blocks of code designed to perform a particular task. They are executed when "called" or "invoked."
          </p>
          <pre>
{`function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Emma"));`}
          </pre>
          <h3>Arrow Functions</h3>
          <p>
            ES6 introduced arrow functions as a shorthand for defining functions:
          </p>
          <pre>
{`const greet = (name) => "Hello, " + name + "!";`}
          </pre>
        </div>
      ),
    },
    {
      title: 'DOM Manipulation',
      content: (
        <div>
          <h2>DOM Manipulation</h2>
          <p>
            The Document Object Model (DOM) represents the HTML structure of a webpage. JavaScript can be used to interact with the DOM to update content dynamically.
          </p>
          <pre>
{`// Selecting an element
let heading = document.querySelector("h1");

// Changing text content
heading.textContent = "Welcome to JavaScript!";`}
          </pre>
          <p>Watch the following video for a demonstration:</p>
          <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/0ik6X4DJKCc" 
              title="DOM Manipulation"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
          </iframe>
        </div>
      ),
    },
    {
      title: 'Event Handling',
      content: (
        <div>
          <h2>Event Handling</h2>
          <p>
            JavaScript allows you to make your website interactive by responding to events such as clicks, form submissions, and key presses.
          </p>
          <pre>
{`// Adding a click event listener to a button
let button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("Button clicked!");
});`}
          </pre>
        </div>
      ),
    },
    {
      title: 'Final Project',
      content: (
        <div>
          <h2>JavaScript Mini-Project</h2>
          <p>Create a simple to-do list application where users can add, delete, and mark tasks as completed.</p>
          <ul>
            <li>Create an input field for entering tasks.</li>
            <li>Add buttons to remove or mark tasks as done.</li>
            <li>Use localStorage to save the tasks between sessions.</li>
          </ul>
        </div>
      ),
    },
  ];

  // State to track the current subtopic index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for next button
  const handleNext = () => {
    if (currentIndex < subtopics.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handler for previous button
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', marginTop: '50px' }}>
      <h1>{subtopics[currentIndex].title}</h1>
      <div>{subtopics[currentIndex].content}</div>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0} // Disable when on the first subtopic
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === subtopics.length - 1} // Disable when on the last subtopic
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JavaScript;
