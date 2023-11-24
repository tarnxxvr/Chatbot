import React, { useEffect, useState } from 'react';

const HtmlText = () => {
  const [htmlContent, setHtmlContent] = useState('');

//   useEffect(() => {
//     // Replace this with your API call
//     // For demonstration purposes, using a static HTML string
//     const fetchDataFromAPI = async () => {
//       try {
//         const response = await fetch('your-api-endpoint');
//         const data = await response.text();
//         setHtmlContent(data);
//       } catch (error) {
//         console.error('Error fetching data from API:', error);
//       }
//     };

//     fetchDataFromAPI();
//   }, []);
setHtmlContent(<b>Hello this is bold</b>)
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default HtmlText;
