// posts.js
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const posts = [
    {
      id: 1,
      title: 'Introduction to HTML and CSS',
      description: 'In this post, we will explore the basics of HTML and CSS.',
      content: `<p><strong>HTML (Hypertext Markup Language)</strong> and <strong>CSS (Cascading Style Sheets)</strong> are fundamental technologies used in web development. HTML provides the structure of a webpage, defining elements such as headings, paragraphs, and lists. CSS, on the other hand, is responsible for styling the visual presentation of the HTML elements, including aspects like layout, colors, and fonts.</p>
    
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

      <h3>CSS Basics</h3>
      <p>CSS is used to style the HTML elements, controlling things like layout, colors, and fonts. CSS can be applied to HTML elements using various selectors, such as element selectors, class selectors, and ID selectors. Here are some common CSS properties:</p>
      <ul class="margin-left">
        <li><strong>Color:</strong> Sets the color of text</li>
        <li><strong>Font-size:</strong> Sets the size of the font</li>
        <li><strong>Margin:</strong> Sets the margin around an element</li>
        <li><strong>Padding:</strong> Sets the padding inside an element</li>
        <li><strong>Border:</strong> Sets the border around an element</li>
      </ul>`,
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
  
      <p>By the end of this post, you'll understand how to use async/await to write cleaner, more readable asynchronous code.</p>`,
    },  
    {
      id: 5,
      title: 'Exploring Node.js: A Beginner’s Guide',
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
