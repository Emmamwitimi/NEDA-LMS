import React, { useState } from 'react';

const Css = () => {
  // Array of subtopics
  const subtopics = [
    {
      title: 'Introduction to CSS',
      content: (
        <div>
          <img src='CSSimg.webp' style={{ width: '500px' }}/>
          <h2>Introduction</h2>
          <p>
            In this lesson, we'll build on the basics we've learned. We'll learn to select elements based on HTML attributes, apply colors, and comment our CSS.
          </p>
          <h3>Identify CSS Syntax</h3>
          <p>
            CSS (Cascading Style Sheets) is a stylesheet language used to style and layout web pages. We create a CSS rule by defining the selector, which matches the HTML element we want to style. Inside the curly braces, we declare the properties we want to change and, after the colon, we set the value we want to change that property to. Each property is written in the following form: property name, colon, value for that property, and a semicolon.
          </p>
          <p>
            In the example below, we are selecting the <code>p</code> element and displaying its color as blue.
          </p>
          <pre>
{`p {
  color: blue;
}`}
          </pre>
          <h3>Identify CSS Use Formats</h3>
          <p>
            CSS can be applied to an HTML page in three formats: inline, internal, and external.
          </p>
          <h4>Inline CSS</h4>
          <p>
            Inline styles are included directly in the HTML element with the <code>style</code> attribute:
          </p>
          <pre>
{`<p style="color: blue;">This is a paragraph.</p>`}
          </pre>
          <p>
            While this approach can be useful, it’s not best practice due to its inefficiency and difficulty in maintaining consistent styles.
          </p>
          <h4>Internal CSS</h4>
          <p>
            Internal CSS is placed inside <code>&lt;style&gt;</code> tags in the HTML document's <code>&lt;head&gt;</code> section:
          </p>
          <pre>
{`<!DOCTYPE html>
<html>
  <head>
    <style>
      p {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p>This is a paragraph.</p>
  </body>
</html>`}
          </pre>
          <p>
            This method applies styles to all paragraphs in the document, but does not affect other pages.
          </p>
          <h4>External CSS</h4>
          <p>
            For styles to apply across multiple pages, use an external stylesheet linked in the HTML document's <code>&lt;head&gt;</code> section:
          </p>
          <pre>
{`<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <p>This is a paragraph.</p>
  </body>
</html>`}
          </pre>
          <h3>Implement Various Types of CSS Selectors</h3>
          <p>
            CSS provides a variety of selectors to target elements:
          </p>
          <h4>ID and Class Selectors</h4>
          <p>
            ID selectors target elements with a specific ID attribute. An ID selector is specified with a hash symbol followed by the ID value:
          </p>
          <pre>
{`p#introduction {
  color: blue;
}`}
          </pre>
          <p>
            Class selectors target elements with a specific class attribute. A class selector is specified with a period followed by the class name:
          </p>
          <pre>
{`p.alert {
  color: red;
}`}
          </pre>
          <h4>Compound Selectors</h4>
          <p>
            Compound selectors apply the same CSS rules to multiple elements at once:
          </p>
          <pre>
{`h2,
h3 {
  color: green;
}`}
          </pre>
          <h4>Descendant Selectors</h4>
          <p>
            Descendant selectors target elements that are descendants of the matching selector name, indicated by a space:
          </p>
          <pre>
{`div p {
  color: gray;
}`}
          </pre>
          <p>To learn more, watch the video below:</p>
          {/* YouTube video */}
          <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/0W6qz0-aDaM" 
              title="CSS Selectors Video"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
          </iframe>

        </div>
      ),
    },
    {
      title: 'CSS Selectors',
      content: (
        <div>
          <p>
            CSS selectors are used to select the HTML elements you want to style. There are various types of selectors:
          </p>
          <ul>
            <li><code>element</code> - Selects all elements of a specific type (e.g., <code>p</code>).</li>
            <li><code>.class</code> - Selects all elements with a specified class (e.g., <code>.my-class</code>).</li>
            <li><code>#id</code> - Selects a single element with a specific id (e.g., <code>#my-id</code>).</li>
            <li><code>*</code> - Selects all elements on the page.</li>
          </ul>
          <p>To learn more, watch the video below:</p>
          {/* YouTube video */}
          <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/<video-id>" 
              title="CSS Selectors Video"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
          </iframe>

        </div>
      ),
    },
    {
      title: 'Box Model',
      content: (
        <div>
          <p>
            The CSS box model is a crucial concept in CSS that describes the rectangular boxes generated for elements in the document tree. It consists of:
          </p>
          <ul>
            <li><strong>Content:</strong> The actual content of the box, where text and images appear.</li>
            <li><strong>Padding:</strong> The space between the content and the border.</li>
            <li><strong>Border:</strong> A border that goes around the padding (if any) and content.</li>
            <li><strong>Margin:</strong> The space outside the border, separating the element from other elements.</li>
          </ul>
          <p>Here's an example of CSS for the box model:</p>
          <pre>
{`div {
  margin: 10px;
  border: 1px solid black;
  padding: 15px;
}`}
          </pre>
        </div>
      ),
    },
    {
      title: 'CSS Flexbox',
      content: (
        <div>
          <p>
            Flexbox is a layout model that provides an easier way to design a flexible responsive layout structure. With Flexbox, you can align items vertically and horizontally with ease.
          </p>
          <h3>Learning Goals:</h3>
          <ul>
            <li>Understand the main axis and cross axis.</li>
            <li>Use properties like <code>display: flex</code>, <code>justify-content</code>, and <code>align-items</code>.</li>
          </ul>
          <p>Here’s an example of using Flexbox:</p>
          <pre>
{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`}
          </pre>
        </div>
      ),
    },
    {
      title: 'CSS Grid',
      content: (
        <div>
          <p>
            CSS Grid is a powerful layout system that allows you to create complex web layouts easily. It enables you to define rows and columns, and place items within this grid.
          </p>
          <h3>Example:</h3>
          <pre>
{`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}`}
          </pre>
        </div>
      ),
    },
    {
      title: 'Final CSS Project',
      content: (
        <div>
          <h3>CSS Mini-Project</h3>
          <p>Create a simple webpage that includes the following elements:</p>
          <ul>
            <li>A navigation bar styled with Flexbox.</li>
            <li>Content area with grid layout.</li>
            <li>Footer with a distinct style.</li>
          </ul>
          <p>Once complete, validate your CSS using the <a href="https://jigsaw.w3.org/css-validator/" target="_blank" rel="noopener noreferrer">W3C CSS Validator</a> to ensure it is error-free.</p>
          <p>Submit your code by pushing it to GitHub and running the validation tests.</p>
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

export default Css;
