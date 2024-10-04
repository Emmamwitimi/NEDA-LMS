import React, { useState } from 'react';

const HtmlComponent = () => {
  // Array of subtopics
  const subtopics = [
    {
      title: 'Environment Setup',
      content: (
        <div>
          <p>
            Before we start with HTML, ensure your environment is set up correctly. Watch the following video to check your setup:
          </p>
          {/* YouTube video */}
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/LOAbYZmRc9I" 
            title="Environment Setup Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>If your environment is not set up, follow this <a href="https://github.com/Emmamwitimi/Neda-software-engineering/blob/main/README.md" target="_blank" rel="noopener noreferrer">tutorial</a> to set it up.</p>
        </div>
      ),
    },
    {
      title: 'Introduction to HTML',
      content: (
        <div>
          <img src='html image.png'></img>
          <p>
            HTML stands for Hypertext Markup Language and is used to create the structure of web pages. It consists of various elements called tags that define different parts of a webpage. Tags usually come in pairs, with an opening tag (e.g., <code>&lt;h1&gt;</code>) and a closing tag (e.g., <code>&lt;/h1&gt;</code>).
          </p>
          <p>
            Common tags include:
            <ul>
              <li><code>&lt;h1&gt;</code> - Defines the largest heading.</li>
              <li><code>&lt;p&gt;</code> - Defines a paragraph.</li>
              <li><code>&lt;a&gt;</code> - Creates a hyperlink.</li>
              <li><code>&lt;img&gt;</code> - Embeds an image.</li>
              <li><code>&lt;div&gt;</code> - Defines a section or container in a webpage.</li>
            </ul>
          </p>
          <p>
            To learn more about HTML tags and how they are used, watch the video below:
          </p>
          {/* YouTube video */}
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/Jc0HIoTLxe4?si=tl2hIfQDxyJz8xTu" 
            title="HTML Tags Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
    
          {/* Adding Resources Section */}
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML" target="_blank" rel="noopener noreferrer">
                MDN: Introduction to HTML
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noopener noreferrer">
                W3Schools: HTML Tutorial
              </a>
            </li>
          </ul>
        </div>
      ),
    },    
    {
      title: 'Ordered and Unordered Lists',
      content: (
        <div>
          <p>Lists can be ordered (with numbers) or unordered (with bullet points) using the <code>&lt;ol&gt;</code> and <code>&lt;ul&gt;</code> tags.</p>
          <h3>Learning Goals:</h3>
          <ul>
            <li>Create an ordered HTML list to display sequential content.</li>
            <li>Create an unordered HTML list for non-sequential content.</li>
          </ul>
          <h3>Step-by-Step Guide:</h3>
          <h4>1. Starting Off:</h4>
          <p>Create a text file (e.g., <code>my_list.txt</code>) with a collection of items. Convert this into an HTML list by marking up each item using the appropriate HTML tags.</p>
          <h4>2. Creating Ordered Lists:</h4>
          <p>Use <code>&lt;ol&gt;&lt;/ol&gt;</code> to create an ordered list. Each item should be wrapped in <code>&lt;li&gt;</code> tags. The browser will automatically number the items.</p>
          <h4>3. Creating Unordered Lists:</h4>
          <p>To display items as bullet points, replace the <code>&lt;ol&gt;</code> tags with <code>&lt;ul&gt;</code>.</p>
          <h4>4. Adding Titles and Descriptions:</h4>
          <p>Enhance the list with a title (<code>&lt;h1&gt;</code>) and a description (<code>&lt;p&gt;</code>).</p>
          
          <pre>
&lt;h1&gt;My Favorite Plants&lt;/h1&gt;
&lt;p&gt;Here’s a list of plants I love:&lt;/p&gt;
&lt;ul&gt;
  &lt;li&gt;Monstera Deliciosa&lt;/li&gt;
  &lt;li&gt;Fiddle Leaf Fig&lt;/li&gt;
  &lt;li&gt;Pilea&lt;/li&gt;
  &lt;li&gt;Golden Pothos&lt;/li&gt;
  &lt;li&gt;Peace Lily&lt;/li&gt;
&lt;/ul&gt;
          </pre>
          <h4>5. Testing:</h4>
          <p>After creating your HTML file, run <code>npm test</code> to ensure everything is correct. Run <code>npm install</code> if needed, and push your code once all tests pass.</p>
          {/* YouTube video */}
          <iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/-kXZvKxs9oA" 
  title="Lists"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

        </div>
      ),
    },
    {
      title: 'Images in HTML',
      content: (
        <div>
          <p>
            Images are absolutely critical to making appealing and engaging websites. The <code>&lt;img&gt;</code> tag is used to display images in a webpage. It is self-closing and requires a <code>src</code> attribute that specifies the source of the image.
          </p>
          <p>
            Here’s an example of an tag:
            {"<img src='https://example.com/image.jpg' alt='Description of the image' />"}
          </p>
          <pre>
              <img src="img1.jpg" alt="Description of the image" />
          </pre>
          <p>
            The <code>alt</code> attribute provides alternative text that describes the image. This text is displayed if the image fails to load and is read by screen readers, improving accessibility. 
          </p>
          <p>
            You can also include a <code>title</code> attribute, which shows additional information when you hover over the image:
            <br></br>
            {"<img src='../images/my_company_logo.png' alt='my company name' title='We're here to help you!'/>"}
          </p>
          <pre>
              <img src="img2.jpg" alt="Description of the image" title="Additional information" />
          </pre>
        </div>
      ),
    },
    {
      title: 'HTML Validation',
        content: (
          <div>
            <p>
              It is important to validate HTML to ensure there are no syntax errors that could affect rendering. 
              This ensures consistency across different browsers. You can validate your HTML using the W3C Validator. Here's a brief overview:
            </p>
            <h3>What is HTML Validation?</h3>
            <p>
              HTML validation checks your code for errors such as missing tags, incorrect nesting, or invalid attributes. Browsers can sometimes correct these errors, but it's best to ensure your code meets W3C standards.
            </p>
            <h3>How to Validate HTML:</h3>
            <ol>
              <li>Navigate to the <a href="https://validator.w3.org/#validate_by_input" target="_blank" rel="noopener noreferrer">W3C Validator</a> website.</li>
              <li>Paste your HTML code into the validator.</li>
              <li>Click "Check" to identify errors.</li>
              <li>Review error descriptions and locations to fix them in your code.</li>
            </ol>
            <h3>Why Validate?</h3>
            <p>Validating your HTML improves accessibility, ensures cross-browser compatibility, and enhances user experience.</p>
          </div>
        ),
      },
      {
        title: 'Final HTML Project',
        content: (
          <div>
            <h3>HTML Mini-Project</h3>
            <p>Create a simple personal portfolio webpage that includes the following elements:</p>
            <ul>
              <li>An <code>&lt;h1&gt;</code>title</li>
              <li>A brief <code>&lt;p&gt;</code> paragraph introduction about yourself</li>
            <li>An image using the <code>&lt;img&gt;</code> tag</li>
              <li>A list of your hobbies, either as an ordered or unordered list</li>
              <li>Links to your social media using the <code>&lt;a&gt;</code> tag</li>
            </ul>
            <p>Once complete, validate your HTML using the <a href="https://validator.w3.org/#validate_by_input" target="_blank" rel="noopener noreferrer">W3C Validator</a> to ensure it is error-free.</p>
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

export default HtmlComponent;
