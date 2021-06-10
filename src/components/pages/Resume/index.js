import React from "react";
import { Document, Page } from 'react-pdf';

import pdf from "./img/Resume21.pdf";


// function Resume() {
//   return (
//     <Document file={pdf}>
//     <Page pageNumber={1} />
//   </Document>
//   );
// }

// export default Resume; 

export default function Resume() {
  return (
    <Document file={pdf}>
      <Page pageNumber={0} />
    </Document>
  );
}

// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';





// function Resume() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document
//         file="./img/Resume21.pdf"
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         <Page pageNumber={1} />
//       </Document>
//       <p>Page {1} of {1}</p>
//     </div>
//   );
// }
// export default  Resume;