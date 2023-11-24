import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const TestSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating some delay (e.g., fetching data)
    setTimeout(() => {
      setLoading(false); // Set loading to false when the content is ready
    }, 2000);
  }, []);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #36D7B7;
  `;

  return (
    <div className="container">
      {loading ? (
        <ClipLoader color="#36D7B7" loading={loading} css={override} size={50} />
        
      ) : (
        <p>Your content goes here...</p>
      ) 
      } 
       <ClipLoader color="#36D7B7" loading={loading} css={override} size={150} />
    </div>
  );
};

export default TestSpinner;
