import React, { useState, useEffect } from 'react';

const Chatg = ({ response }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= response.length; i++) {
        setDisplayedText(response.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 20)); // Adjust the typing speed as needed
      }
    };

    typeText();
  }, [response]);

  return (
    <div>
      <p>Typing ...</p>
      <p>{displayedText}</p>
    </div>
  );
};

export default Chatg;



