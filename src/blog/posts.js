// posts.js
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const posts = [
    {
      id: 1,
      title: 'Introduction to HTML and CSS',
      description: 'In this post, we will explore the basics of HTML and CSS.',
      content: `<p><strong>HTML (Hypertext Markup Language)</strong> and <strong>CSS (Cascading Style Sheets)</strong> are fundamental technologies used in web development. HTML provides the structure of a webpage, defining elements such as headings, paragraphs, and lists. CSS, on the other hand, is responsible for styling the visual presentation of the HTML elements, including aspects like layout, colors, and fonts.</p>
      <div class="justify-text">
      
      <p>In this tutorial, we'll cover the basics of HTML and CSS, including how to create a simple webpage, add content using HTML elements, and style it using CSS rules. By the end of this post, you'll have a solid understanding of how HTML and CSS work together to create beautiful and functional webpages.</p>

      <h3>HTML Basics</h3>
      <p>HTML is the standard markup language used to create webpages. It consists of a series of elements, each with its own meaning and purpose. Some common HTML elements include:</p>
      <ul class="margin-left">
        <li><strong>Headings:</strong> <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, etc.</li>
        <li><strong>Paragraphs:</strong> <code>&lt;p&gt;</code></li>
        <li><strong>Lists:</strong> <code>&lt;ul&gt;</code> (unordered list) and <code>&lt;ol&gt;</code> (ordered list)</li>
        <li><strong>Links:</strong> <code>&lt;a&gt;</code></li>
        <li><strong>Images:</strong> <code>&lt;img&gt;</code></li>
      </ul>
<br>
<div class="copy-button"></div>
<pre>
  <code class="language-html">
    &lt;!DOCTYPE html&gt;
    &lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;UTF-8&quot;&gt;
        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
        &lt;title&gt;Simple Webpage&lt;/title&gt;
        &lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot;&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;header&gt;
            &lt;h1&gt;this is an h1&lt;/h1&gt;
            &lt;h2&gt;this is an h2&lt;/h2&gt;
            &lt;h3&gt;this is an h3&lt;/h3&gt;
            &lt;h4&gt;this is an h4&lt;/h4&gt;
            &lt;h5&gt;this is an h5&lt;/h5&gt;
        &lt;/header&gt;
        &lt;nav&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;About&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Services&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Contact&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
        &lt;section&gt;
            &lt;h2&gt;About Us&lt;/h2&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget commodo dolor.&lt;/p&gt;
            &lt;img src="https://i.redd.it/we166ibli9sb1.jpg"/&gt;
        &lt;/section&gt;
        &lt;footer&gt;
            &lt;p&gt;2024 My Website. All rights reserved.&lt;/p&gt;
        &lt;/footer&gt;
    &lt;/body&gt;
    &lt;/html&gt;
  </code>
</pre>    
<br>

      <h3>CSS Basics</h3>
      <p>CSS is used to style the HTML elements, controlling things like layout, colors, and fonts. CSS can be applied to HTML elements using various selectors, such as element selectors, class selectors, and ID selectors. Here are some common CSS properties:</p>
      <ul class="margin-left">
        <li><strong>Color:</strong> Sets the color of text</li>
        <li><strong>Font-size:</strong> Sets the size of the font</li>
        <li><strong>Margin:</strong> Sets the margin around an element</li>
        <li><strong>Padding:</strong> Sets the padding inside an element</li>
        <li><strong>Border:</strong> Sets the border around an element</li>
      </ul>
<br>
<div class="copy-button"></div>
<pre>
  <code class="language-css">  
    /* global Styles */
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    header, nav, section, footer {
        padding: 20px;
    }

    /* header styles */
    header {
        background-color: #333;
        color: #fff;
        text-align: center;
    }

    /* navbar styles */
    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    nav li {
        display: inline;
        margin-right: 20px;
    }

    nav a {
        color: #333;
        text-decoration: none;
    }

    nav a:hover {
        color: #000;
    }

    /* principal section styles */
    section {
        background-color: #f4f4f4;
        padding: 20px;
    }

    /* footer styles */
    footer {
        background-color: #333;
        color: #fff;
        text-align: center;
    }
  </code>
</pre>    
<br>
</div>
      `,
    },
    {
      id: 2,
      title: 'Mastering JavaScript: A Comprehensive Guide',
      description: 'Explore the world of JavaScript with this comprehensive guide.',
      content: `<p><strong>JavaScript</strong> is a versatile and powerful programming language that is widely used in web development. It allows developers to add interactivity and dynamic behavior to webpages, making them more engaging and responsive. In this post, we'll dive deep into JavaScript, covering everything from basic syntax to advanced concepts.</p>

      <p>Topics covered in this guide include:</p>
      
      <ul class="margin-left">
        <li><strong>Variables and data types:</strong> JavaScript variables can hold data of different types, such as numbers, strings, and booleans.</li>
        <li><strong>Control flow and loops:</strong> JavaScript provides various statements for controlling the flow of a program, such as if...else statements and for loops.</li>
        <li><strong>Functions and scope:</strong> Functions are reusable blocks of code that perform a specific task. JavaScript has function scope and block scope.</li>
        <li><strong>Objects and arrays:</strong> JavaScript objects are collections of key-value pairs, while arrays are ordered lists of values.</li>
        <li><strong>DOM manipulation:</strong> The Document Object Model (DOM) is a programming interface that represents the structure of HTML documents. JavaScript can be used to manipulate the DOM, adding or removing elements, changing styles, and handling events.</li>
        <li><strong>Event handling:</strong> JavaScript can respond to user actions, such as clicks and key presses, by attaching event handlers to HTML elements.</li>
        <li><strong>Asynchronous programming:</strong> JavaScript supports asynchronous programming, allowing tasks to be executed concurrently without blocking the main thread.</li>
      </ul>
<br>
<div class="copy-button"></div>
<pre>
  <code class="language-javascript">
    // Variables and data types
    let greeting = 'Hello, World!';
    let number = 42;
    let isTrue = true;

    // Control flow and loops
    if (number > 0) {
      console.log('The number is positive');
    } else {
      console.log('The number is negative');
    }

    for (let i = 0; i < 5; i++) {
      console.log('Iteration', i);
    }

    // Functions and scope
    function sayHello(name) {
      let message = 'Hello, ' + name + '!';
      console.log(message);
    }

    sayHello('Alice');

    // Objects and arrays
    let person = {
      name: 'John',
      age: 30,
      profession: 'Developer'
    };

    let numbers = [1, 2, 3, 4, 5];

    // DOM manipulation
    let heading = document.createElement('h1');
    heading.textContent = 'Welcome to my website';
    document.body.appendChild(heading);

    // Event handling
    document.addEventListener('click', function(event) {
      console.log('Clicked!');
    });

    // Asynchronous programming
    function fetchData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Data fetched successfully');
        }, 2000);
      });
    }

    async function getData() {
      const data = await fetchData();
      console.log(data);
    }

    getData();
  </code>
</pre>
<br>
      
      <p>Whether you're new to JavaScript or looking to expand your skills, this guide has something for everyone. By the end, you'll be well on your way to mastering JavaScript and building dynamic, interactive web applications.</p>`,
    },  {
      id: 3,
      title: 'Getting Started with React',
      description: 'A beginner-friendly guide to building web applications with React.',
      content: `<p><strong>React</strong> is a popular JavaScript library for building user interfaces, particularly for single-page applications. It allows you to build reusable UI components and makes maintaining changes in your data's state effortless by abstracting the DOM.</p>
  
      <h3>Why React?</h3>
      <p>React has a number of benefits that make it worth learning:</p>
      <ul class="margin-left">
        <li><strong>Efficiency:</strong> React creates a virtual DOM and only updates parts of the actual DOM that have changed, rather than updating the entire DOM every time a change is made. This makes it highly efficient.</li>
        <li><strong>Component-Based:</strong> With React, you build encapsulated components that manage their own state, then compose them to make complex UIs.</li>
        <li><strong>Unidirectional data flow:</strong> React follows a unidirectional data flow (or one-way data binding), meaning that it's easy to trace how data changes and where it comes from.</li>
      </ul>
      <p>By the end of this post, you'll have a solid understanding of the basics of React and how to get started building your own React applications.</p>`,
    },
    {
      id: 4,
      title: 'Understanding Async/Await in JavaScript',
      description: 'A deep dive into asynchronous programming in JavaScript using async/await.',
      content: `<p><strong>Async/await</strong> is a modern way of handling asynchronous operations in JavaScript. It is just syntactic sugar over JavaScript Promises. It makes asynchronous code look and behave a little more like synchronous code, which makes it easier to read and understand.</p>
  
      <h3>Async Functions</h3>
      <p>An async function is a function declared with the async keyword. Async functions are instances of the AsyncFunction constructor, and the await keyword is permitted within them.</p>
  
      <h3>Await</h3>
      <p>The await operator is used to wait for a Promise. It can only be used inside an async function.</p>
  
      <p>By the end of this post, you'll understand how to use async/await to write cleaner, more readable asynchronous code.</p>
      
<br>
<div class="copy-button"></div>
<pre>
  <code class="language-js">
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  </code>
</pre>
<br>`,
    },  
    {
      id: 5,
      title: 'Exploring Node.js: A Beginners Guide',
      description: 'A comprehensive guide to understanding and using Node.js for server-side development.',
      content: `<p><strong>Node.js</strong> is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on your server, making it a popular choice for building web servers and server-side applications.</p>
  
      <h3>Why Node.js?</h3>
      <p>Node.js has several features that make it a great choice for server-side development:</p>
      <ul class="margin-left">
        <li><strong>Non-blocking I/O:</strong> Node.js uses a non-blocking, event-driven architecture. This means it can handle many connections concurrently, making it highly scalable.</li>
        <li><strong>NPM:</strong> Node.js comes with npm, a package manager that makes it easy to share and reuse code.</li>
        <li><strong>JavaScript:</strong> Because Node.js uses JavaScript, you can use the same language for both the front-end and back-end of your application.</li>
      </ul>
  
      <h3>Getting Started with Node.js</h3>
      <p>To get started with Node.js, you'll first need to install it on your computer. Once you've done that, you can create a simple server using the http module:</p>
      <br>
      <p>Some examples of how npm command works:</p>

<pre>
  <code class="language-javascript">
    npm init
    npm install "package-name"
    npm init react-app "app-name"
  </code>
</pre>
<br>

<p>This code sets up a basic HTTP server using Node.js</p>
<div class="copy-button1"></div>
<pre>
  <code class="language-javascript">
    const http = require('http');

    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello, World!');
    });

    server.listen(3000, '127.0.0.1', () => {
      console.log('Server running at http://127.0.0.1:3000/');
    });
  </code>
</pre>
      <br>
      <p>By the end of this post, you'll have a solid understanding of Node.js and how to use it for server-side development.</p>`,
    }
  ];
