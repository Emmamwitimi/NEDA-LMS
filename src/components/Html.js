import React from 'react';
import './styles/Html.css';

const Html = () => {
  return (
    <div className="html-course-container">
      <nav className="html-course-nav">
        <h2>HTML Refresher Course</h2>
        <ul>
          <li><a href="#semantic-html">Introduction to  HTML</a></li>
          <li><a href="#forms">Forms</a></li>
          <li><a href="#multimedia">Multimedia</a></li>
          <li><a href="#accessibility">Accessibility</a></li>
          <li><a href="#advanced-attributes">Advanced Attributes</a></li>
          <li><a href="#templates">HTML Templates</a></li>
        </ul>
      </nav>

      <div className="html-course-content">
        <section id="semantic-html">
          <h3>Introduction to HTML</h3>
          <p> <li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"> Introduction to HTML</a></li> </p>
          <pre>{`
<article>
  <header>
    <h1>Semantic HTML Example</h1>
  </header>
  <p>...content...</p>
</article>
          `}</pre>
        </section>

        <section id="forms">
          <h3>Forms</h3>
          <p>HTML5 introduced several new input types like email, url, and date. Here’s an example of a form...</p>
          <pre>{`
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <button type="submit">Submit</button>
</form>
          `}</pre>
        </section>

        <section id="multimedia">
          <h3>Multimedia</h3>
          <p>HTML supports embedding multimedia like audio and video with built-in controls...</p>
          <pre>{`
<video controls>
  <source src="video.mp4" type="video/mp4">
</video>
          `}</pre>
        </section>

        <section id="accessibility">
          <h3>Accessibility</h3>
          <p>Making your website accessible ensures it can be used by everyone, including users with disabilities...</p>
          <pre>{`
<button aria-expanded="false" aria-controls="info">Show Info</button>
<div id="info" hidden>More Information...</div>
          `}</pre>
        </section>

        <section id="advanced-attributes">
          <h3>Advanced HTML Attributes</h3>
          <p>The data-* attribute allows you to store custom data on HTML elements...</p>
          <pre>{`
<div data-product-id="1234" data-category="books">Product Info</div>
          `}</pre>
        </section>

        <section id="templates">
          <h3>HTML Templates</h3>
          <p>HTML templates allow you to define reusable chunks of HTML...</p>
          <pre>{`
<template id="card-template">
  <div class="card">
    <h2>Title</h2>
    <p>Content</p>
  </div>
</template>
          `}</pre>
        </section>
        <section>
            
        </section>
        <div className='btns'>
            <button className='prev-btn'>
                <i className="fa-solid fa-arrow-left"></i>
                Prev
            </button>
            <button className='next-btn'>
                <i className="fa-solid fa-arrow-right"></i>
                Next
            </button>
        </div>
      </div>
    </div>
  );
};

export default Html;
