import React, { useState, useEffect } from 'react';

const TestReact = ({ htmlText }) => {
  const [typingContent, setTypingContent] = useState([]);
  const [author, setAuthor] = useState('');

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Function to display typing effect with random colors
  const displayTypingEffect = (words, index) => {
    const partialContent = words.slice(0, index).join(' ');

    // Wrap each word with a span and apply a random color
    const coloredContent = partialContent.split(' ').map((word, i) => (
      <span key={i} style={{ color: getRandomColor() }}>
        {word}&nbsp;
      </span>
    ));

    setTypingContent(coloredContent);

    if (index < words.length) {
      // Continue typing
      setTimeout(() => displayTypingEffect(words, index + 1), 250);
    } else {
      // Animation complete, display author information
      displayAuthorInfo();
    }
  };

  // Function to display author information
  const displayAuthorInfo = () => {
    setAuthor('— Albert Einstein');
  };

  useEffect(() => {
    // Use the provided HTML text or default to a sample HTML
    const apiResponse = htmlText || '<h1>Hello</h1><p>This is a sample message with <strong>HTML tags</strong>.</p>';

    // Convert the HTML response to DOM elements
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = apiResponse;

    // Extract and clean the text content
    const textContent = tempDiv.textContent || tempDiv.innerText;

    // Split the cleaned text into an array of words
    const words = textContent.split(/\s+/);

    // Start the typing effect
    displayTypingEffect(words, 0);
  }, [htmlText]);

  return (
    <div className="container">
      <div className="typing-effect">{typingContent}</div>
      <p className="author">{author}</p>
    </div>
  );
};

export default TestReact;
